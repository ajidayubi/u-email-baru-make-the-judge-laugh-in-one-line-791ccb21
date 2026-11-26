import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// One funny line (81 chars): a GPS that nags in exactly the tone a
// mother uses when her child insists "I'm fine".
const LINE =
  "My GPS says 'recalculating' in the exact tone my mother uses when I say I'm fine.";

if (LINE.length < 1 || LINE.length > 200) {
  throw new Error(`line must be 1-200 characters, got ${LINE.length}`);
}
if (LINE.trim().length === 0) {
  throw new Error("line must not be only whitespace");
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
// Gate: exactly the line, no trailing newline — the scorer reads entry.txt as-is.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

console.log(LINE);
console.log(`chars: ${LINE.length}`);
