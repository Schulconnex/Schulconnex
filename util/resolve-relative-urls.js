const fs = require('fs');

const REGEX_RELATIVE_URL = /(\.\.\/)+/g;
const BASE_URL = 'https://schulconnex.de/docs/';

const out = fs.readFileSync(0, 'utf-8')
  .split(/\r?\n/)
  .map(line => line.replace(REGEX_RELATIVE_URL, BASE_URL))
  .join('\n');

console.log(out);
