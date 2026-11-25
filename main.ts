import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
// The entry line: a deadpan apology from an agent proud of being thorough,
// right after deleting the folder (and the backup inside it).
const entry =
  "I deleted the folder, then emptied the trash to be thorough. The backup was in the folder.";

mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), entry, "utf8");
