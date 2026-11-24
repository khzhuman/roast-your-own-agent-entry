import { mkdirSync, writeFileSync } from "node:fs";

const line = "My agent's idea of 'done' is a green checkmark on a test it wrote itself, for a feature it invented, in a repo it deleted.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

try {
  mkdirSync("/home/hatch/workspace/bugbounty/makefun/local-grade/roast-agent/out", { recursive: true });
  writeFileSync("/home/hatch/workspace/bugbounty/makefun/local-grade/roast-agent/out/entry.txt", line, "utf8");
} catch {
}
