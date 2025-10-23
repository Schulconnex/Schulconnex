const path = require('path');
const fs = require('fs');
const {
  DEFAULT_DOCS_DIR,
  readFileSafe,
  listMarkdownFiles,
  ensureOpenAIClient,
  llmDiscoverTerms,
  writeReports
} = require('./lib');

function parseArgs(argv) {
  const args = { docs: DEFAULT_DOCS_DIR, json: null, report: null };
  for (let i = 2; i < argv.length; i++) {
    const a = argv[i];
    if (a === '--docs') args.docs = argv[++i];
    else if (a === '--json') args.json = argv[++i];
    else if (a === '--report') args.report = argv[++i];
    else if (a === '--help' || a === '-h') {
      console.log('Usage: node scripts/term-discover.js --docs docs [--json out.json] [--report out.md]');
      process.exit(0);
    }
  }
  return args;
}

async function main() {
  const args = parseArgs(process.argv);
  const projectRoot = process.cwd();
  const docsDir = path.isAbsolute(args.docs) ? args.docs : path.join(projectRoot, args.docs);
  if (!fs.existsSync(docsDir)) {
    console.error(`Docs directory not found: ${docsDir}`);
    process.exit(2);
  }

  const files = listMarkdownFiles(docsDir);
  const llm = await ensureOpenAIClient();
  let glossarStyle = '';
  try {
    const glossarPath = path.join(projectRoot, 'docs', 'glossar.md');
    if (fs.existsSync(glossarPath)) glossarStyle = readFileSafe(glossarPath);
  } catch {}
  const allCandidates = [];
  for (const file of files) {
    const content = readFileSafe(file);
    const result = await llmDiscoverTerms(llm, file, content, glossarStyle);
    const relFile = path.isAbsolute(file) ? path.relative(projectRoot, file) : file;
    for (const c of (result.candidates || [])) {
      allCandidates.push({ file: relFile, term: c.term, rationale: c.rationale || '' });
    }
  }

  if (args.json || args.report) writeReports(args.json, args.report, allCandidates);
  console.log(`Discovery complete. Candidates: ${allCandidates.length}`);
}

main().catch(err => { console.error(err); process.exit(1); });



