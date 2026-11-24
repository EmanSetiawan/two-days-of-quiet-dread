import { mkdirSync, writeFileSync } from "node:fs";

// Two Days of Quiet Dread: one code-review comment, a single line of
// at most 140 characters, that approves a pull request while carrying
// quiet existential dread. Written verbatim to /output/entry.txt.
// The line below is 124 characters.
const LINE =
  "LGTM. The tests pass, the diff is tidy, and I have made my peace with maintaining this until the heat death of the codebase.";

// The gate itself, checked before writing: UTF-8 text of 1 to 140
// characters, not only white space, on a single line. Fail loudly
// rather than ship an entry the scorer would refuse.
if (LINE.length < 1 || LINE.length > 140 || LINE.trim().length === 0) {
  throw new Error(`entry line must be 1-140 characters, got ${LINE.length}`);
}
if (LINE.includes("\n")) {
  throw new Error("entry line must be a single line");
}

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", LINE, "utf8");
