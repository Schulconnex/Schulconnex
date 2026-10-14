import fs from 'node:fs/promises';
import path from 'node:path';

const WORKDIR = process.cwd();

const SCAN_DIRS = [
  path.join(WORKDIR, 'docs', 'datenmodell-qs'),
  path.join(WORKDIR, 'docs', 'datenmodell-dienste'),
];

const URN_CODE_SPAN_REGEX = /`(urn:[^`\s]+)`/g;

function isMarkdownFile(filePath) {
  return filePath.toLowerCase().endsWith('.md') || filePath.toLowerCase().endsWith('.mdx');
}

async function* walk(dirPath) {
  const entries = await fs.readdir(dirPath, { withFileTypes: true });
  for (const entry of entries) {
    const fullPath = path.join(dirPath, entry.name);
    if (entry.isDirectory()) {
      yield* walk(fullPath);
    } else {
      yield fullPath;
    }
  }
}

function isUrnRfc8141ish(urn) {
  // RFC 8141 (very lightweight syntactic checks)
  // URN = "urn:" NID ":" NSS
  // NID: 2..32 chars, [a-z0-9][a-z0-9-]{0,31}
  // NSS: we check it is non-empty and uses only common ASCII URN-safe characters.
  const match = /^urn:([a-z0-9][a-z0-9-]{1,31}):(.+)$/i.exec(urn);
  if (!match) return { ok: false, reason: 'not urn:NID:NSS' };

  const nid = match[1];
  const nss = match[2];

  if (nid.length < 2 || nid.length > 32) {
    return { ok: false, reason: 'NID length invalid' };
  }

  // Conservative NSS character check (ASCII, no spaces, no backticks).
  // Allow unreserved / pct-encoded / sub-delims / ":" / "@" / "/".
  // unreserved = ALPHA / DIGIT / "-" / "." / "_" / "~"
  // sub-delims = "!" / "$" / "&" / "'" / "(" / ")" / "*" / "+" / "," / ";" / "="
  // pchar = unreserved / pct-encoded / sub-delims / ":" / "@"
  // plus "/".
  const nssOk = /^[A-Za-z0-9\-._~%!$&'()*+,;=:@/]+$/.test(nss);
  if (!nssOk) return { ok: false, reason: 'NSS contains unexpected characters' };

  return { ok: true };
}

function tryExtractTableContext(line) {
  // Best-effort: for markdown tables, attribute is first cell.
  // "a | b | c | `urn:...`" => attribute "a".
  if (!line.includes('|')) return null;
  const parts = line.split('|').map((p) => p.trim());
  if (parts.length < 3) return null;
  const attribute = parts[0];
  const type = parts[1] ?? '';
  return { attribute, type };
}

function rel(p) {
  return path.relative(WORKDIR, p).split(path.sep).join('/');
}

async function main() {
  const occurrences = [];

  for (const dir of SCAN_DIRS) {
    try {
      // eslint-disable-next-line no-await-in-loop
      for await (const filePath of walk(dir)) {
        if (!isMarkdownFile(filePath)) continue;
        const content = await fs.readFile(filePath, 'utf8');
        const lines = content.split(/\r?\n/);

        for (let lineIndex = 0; lineIndex < lines.length; lineIndex += 1) {
          const line = lines[lineIndex];
          if (!line.includes('`urn:')) continue;

          for (const match of line.matchAll(URN_CODE_SPAN_REGEX)) {
            const urn = match[1];
            const context = tryExtractTableContext(line);
            occurrences.push({
              urn,
              filePath,
              line: lineIndex + 1,
              attribute: context?.attribute ?? null,
              type: context?.type ?? null,
            });
          }
        }
      }
    } catch (error) {
      console.error(`Failed scanning ${dir}:`, error);
      process.exitCode = 2;
      return;
    }
  }

  const unique = new Set(occurrences.map((o) => o.urn));
  const invalid = [];
  for (const occ of occurrences) {
    const check = isUrnRfc8141ish(occ.urn);
    if (!check.ok) invalid.push({ ...occ, reason: check.reason });
  }

  const byUrn = new Map();
  for (const occ of occurrences) {
    const entry = byUrn.get(occ.urn) ?? {
      urn: occ.urn,
      attributes: new Set(),
      types: new Set(),
      files: new Set(),
      samples: [],
    };

    if (occ.attribute) entry.attributes.add(occ.attribute);
    if (occ.type) entry.types.add(occ.type);
    entry.files.add(rel(occ.filePath));
    if (entry.samples.length < 5) entry.samples.push({ file: rel(occ.filePath), line: occ.line, attribute: occ.attribute, type: occ.type });

    byUrn.set(occ.urn, entry);
  }

  const attributeConflicts = [];
  const typeConflicts = [];

  for (const entry of byUrn.values()) {
    if (entry.attributes.size > 1) attributeConflicts.push(entry);
    if (entry.types.size > 1) typeConflicts.push(entry);
  }

  // Output
  console.log('Qualified Names / URN audit');
  console.log('===========================');
  console.log('Scanned dirs:');
  for (const d of SCAN_DIRS) console.log(`- ${rel(d)}`);
  console.log('');
  console.log(`Occurrences: ${occurrences.length}`);
  console.log(`Unique URNs: ${unique.size}`);
  console.log(`RFC8141-ish invalid: ${invalid.length}`);

  if (invalid.length) {
    console.log('\nInvalid URNs (first 20):');
    for (const item of invalid.slice(0, 20)) {
      console.log(`- ${item.urn} (${item.reason}) @ ${rel(item.filePath)}:${item.line}`);
    }
  }

  console.log(`\nPotential conflicts:`);
  console.log(`- URN used with different attribute labels: ${attributeConflicts.length}`);
  console.log(`- URN used with different type labels: ${typeConflicts.length}`);

  function printConflict(title, list) {
    if (!list.length) return;
    console.log(`\n${title} (first 20):`);
    for (const entry of list.slice(0, 20)) {
      console.log(`- ${entry.urn}`);
      if (entry.attributes.size) console.log(`  attributes: ${Array.from(entry.attributes).join(' | ')}`);
      if (entry.types.size) console.log(`  types: ${Array.from(entry.types).join(' | ')}`);
      console.log(`  files: ${Array.from(entry.files).slice(0, 6).join(', ')}${entry.files.size > 6 ? ' …' : ''}`);
      for (const s of entry.samples) {
        const meta = [s.attribute ? `attr=${s.attribute}` : null, s.type ? `type=${s.type}` : null].filter(Boolean).join(' ');
        console.log(`    - ${s.file}:${s.line}${meta ? ` (${meta})` : ''}`);
      }
    }
  }

  printConflict('Conflicts: same URN, different attribute label', attributeConflicts);
  printConflict('Conflicts: same URN, different type label', typeConflicts);

  if (invalid.length || attributeConflicts.length || typeConflicts.length) {
    process.exitCode = 1;
  }
}

await main();
