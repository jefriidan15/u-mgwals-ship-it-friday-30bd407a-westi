import { mkdirSync, writeFileSync } from "node:fs";

const entry =
  "fix: it worked on my machine, so I shipped it to prod at 4:59 PM on a Friday — the rollback plan is just vibes and a prayer";
// One line, 1-159 chars UTF-8, written to /output/entry.txt.

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", entry, "utf8");
