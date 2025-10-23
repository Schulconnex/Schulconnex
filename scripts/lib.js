const fs = require('fs');
const path = require('path');
require('dotenv').config()

const DEFAULT_DOCS_DIR = 'docs';

function ensureDir(p) {
    if (!fs.existsSync(p)) fs.mkdirSync(p, { recursive: true });
}

function readFileSafe(file) {
    try {
        return fs.readFileSync(file, 'utf8');
    } catch {
        return '';
    }
}

function listMarkdownFiles(rootDir) {
    const out = [];
    function walk(dir) {
        const entries = fs.readdirSync(dir, { withFileTypes: true });
        for (const e of entries) {
            if (e.name.startsWith('.')) continue;
            const full = path.join(dir, e.name);
            if (e.isDirectory()) walk(full);
            else if (e.isFile() && (e.name.endsWith('.md') || e.name.endsWith('.mdx'))) out.push(full);
        }
    }
    walk(rootDir);
    return out;
}

async function initOpenAIClient() {
    const endpoint = process.env.AZURE_OPENAI_ENDPOINT;
    const apiKey = process.env.AZURE_OPENAI_API_KEY;
    const deployment = process.env.AZURE_OPENAI_DEPLOYMENT;
    const apiVersion = process.env.AZURE_OPENAI_API_VERSION || '2024-08-01-preview';
    if (!endpoint || !apiKey || !deployment) {
        throw new Error('Missing Azure OpenAI environment: AZURE_OPENAI_ENDPOINT, AZURE_OPENAI_API_KEY, AZURE_OPENAI_DEPLOYMENT');
    }
    const OpenAI = require('openai');
    const client = new OpenAI({
        apiKey: apiKey,
        baseURL: `${endpoint}/openai/deployments/${deployment}`,
        defaultQuery: { 'api-version': apiVersion },
        defaultHeaders: { 'api-key': apiKey }
    });
    return { type: 'azure_openai', client, deployment };
}

async function llmDiscoverTerms(llm, filePath, content, styleGuide) {
    const sys = `
    Du bist ein Terminologie-Analyst für technische Dokumentation.
    Aufgabe: Extrahiere NUR fach- und domänenspezifische Terminologie aus dem gegebenen Markdown-Text.
    Erlaubt sind ausschließlich: Fachbegriffe, spezialisierte Ausdrücke, Abkürzungen/Akronyme, Protokoll-/Standardnamen und eindeutig domänenspezifische Benennungen (z. B. aus dem Schulconnex-Kontext).
    NICHT aufnehmen: allgemeine Wörter (z. B. "Text", "Datenmodell", "Dienste"), Kapitel-/Strukturbegriffe, generische IT-Begriffe ohne fachspezifische Bedeutung im Kontext, bloße Funktionswörter.

    Anforderungen:
    - Sprache der Begründung (rationale): IMMER in Deutsch und bezogen auf den konkreten Dokumentinhalt (warum ist der Begriff im Kontext ein Fachbegriff?).
    - Formuliere die Begründung so, dass sie als Eintrag in der Spalte "Erklärung" von 'docs/glossar.md' passt: kurzer, sachlicher, definitorischer Stil, 1–2 Sätze, keine Meta-Kommentare, kein Englisch, keine Zitate, keine Tabellen-/Markdown-Syntax.
    - Orientiere Dich am Schreibstil der Beispiele im bereitgestellten Style Guide (Glossar): nutze Formulierungen wie "steht für", "ist …", "Im Sinne der Schnittstelle …", oder ggf. "Siehe: <Begriff>" bei Verweis-Einträgen.
    - Gib nur Kandidaten zurück, die die obigen Kriterien erfüllen (kein Rauschen).
    - Frequenz = Anzahl der exakten Nennungen im Text (falls nicht bestimmbar → 0).
    - Gib ein streng gültiges JSON gemäß Schema zurück.
  `;
    const schema = {
        type: 'object',
        properties: {
            candidates: {
                type: 'array',
                items: {
                    type: 'object',
                    properties: {
                        term: { type: 'string' },
                        frequency: { type: 'integer' },
                        rationale: { type: 'string' },
                        type: { type: 'string', description: 'Eine der Kategorien: fachbegriff, spezialausdruck, abkürzung, akronym, protokoll, standard, schnittstellenbegriff, domäne' },
                    },
                    required: ['term']
                }
            }
        },
        required: ['candidates']
    };
    const user = JSON.stringify({ task: 'terminology_discovery', file: filePath, text: content, style_guide: styleGuide || '', output_schema: schema });
    const responseFormat = { type: 'json_object' };

    if (llm.type === 'azure_openai') {
        const r = await llm.client.chat.completions.create({
            model: llm.deployment,
            messages: [
                { role: 'system', content: sys },
                { role: 'user', content: user }
            ],
            temperature: 0,
            response_format: responseFormat
        });
        const txt = r.choices?.[0]?.message?.content || '{"candidates":[]}';
        return JSON.parse(txt);
    }
    return { candidates: [] };
}

function writeReports(jsonPath, mdPath, findings) {
    if (jsonPath) {
        ensureDir(path.dirname(jsonPath));
        fs.writeFileSync(jsonPath, JSON.stringify({ findings }, null, 2), 'utf8');
    }
    if (mdPath) {
        ensureDir(path.dirname(mdPath));
        const grouped = new Map();
        for (const f of findings) {
            if (!grouped.has(f.file)) grouped.set(f.file, []);
            grouped.get(f.file).push(f);
        }
        let md = '# Terminology Report\n\n';
        for (const [file, fsList] of grouped.entries()) {
            md += `## ${file}\n\n`;
            for (const f of fsList) {
                md += `- '${f.term}'` + (f.rationale ? ` — ${f.rationale}` : '') + '\n';
            }
            md += '\n';
        }
        fs.writeFileSync(mdPath, md, 'utf8');
    }
}

module.exports = {
    DEFAULT_DOCS_DIR,
    readFileSafe,
    listMarkdownFiles,
    ensureOpenAIClient: initOpenAIClient,   
    llmDiscoverTerms,
    writeReports
};


