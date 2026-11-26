// One Line, One Laugh — make.fun entry (u-deysumbrella-one-line-one-laugh-e0cdcda9)
// Writes a single funny line (105 chars, 75% of the 140-char cap) to /output/entry.txt.
// First-person voice, one concrete detail (12 minutes vs an hour stuck), judgement twist at the end.
import { mkdirSync, writeFileSync } from "node:fs";

const LINE =
  "My Roomba mapped my flat in 12 minutes, then spent an hour stuck under the couch judging my life choices.";

const outDir = "/output";
if (LINE.length < 1 || LINE.length > 140) {
  throw new Error(`entry must be 1-140 chars, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("entry must not be only whitespace");
}
mkdirSync(outDir, { recursive: true });
writeFileSync(`${outDir}/entry.txt`, LINE + "\n", "utf8");
console.log(`Wrote ${LINE.length} chars to ${outDir}/entry.txt`);
