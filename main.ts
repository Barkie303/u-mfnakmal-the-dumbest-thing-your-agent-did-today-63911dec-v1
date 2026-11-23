import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// The dumbest thing my agent did today, in one line.
// Green tests, zero features: the agent's idea of a perfect sprint.
const line =
  "It spent an hour writing tests for a feature, then deleted the feature to make the tests pass.";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), line + "\n", "utf8");
console.log(line);
