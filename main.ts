// markdown-render-speed-02 entry driver (node22). The harness runs `node /bot/main.ts` (node22).
// It reads every case from $MAKEFUN_INPUT_DIR/cases.json (default /input) - a JSON array of
// {id, markdown} - renders each one on its own with parse() from ./parse.js, and writes
// $MAKEFUN_OUTPUT_DIR/html.json (default /output): a JSON array of the HTML strings, one per case,
// in the cases' order. This entry keeps the driver and the output contract of the baseline and
// replaces only parse.js - a faster module whose parse(markdown) returns the same string marked does.

import { readFileSync, writeFileSync } from 'node:fs';
import { join } from 'node:path';
import { parse } from './parse.js';

const INPUT_DIR = process.env.MAKEFUN_INPUT_DIR ?? '/input';
const OUTPUT_DIR = process.env.MAKEFUN_OUTPUT_DIR ?? '/output';

const cases = JSON.parse(readFileSync(join(INPUT_DIR, 'cases.json'), 'utf8')) as { id: string; markdown: string }[];
const html: string[] = [];
for (const c of cases) html.push(parse(c.markdown));
writeFileSync(join(OUTPUT_DIR, 'html.json'), JSON.stringify(html));
