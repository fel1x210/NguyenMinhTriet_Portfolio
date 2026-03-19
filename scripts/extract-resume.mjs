/**
 * Extract text from Resume.docx and print structured JSON.
 * Usage: node scripts/extract-resume.mjs [path-to-docx]
 *
 * The structured output in src/content/resume.js was hand-curated from
 * running this script once. Re-run if the docx changes and manually
 * update resume.js with the new content.
 */

import mammoth from "mammoth";
import { readFileSync } from "fs";
import { resolve } from "path";

const docxPath =
  process.argv[2] || "C:\\Users\\luung\\Desktop\\Resume.docx";

async function extract() {
  const result = await mammoth.extractRawText({ path: resolve(docxPath) });
  console.log("--- Extracted text ---\n");
  console.log(result.value);
  console.log("\n--- End ---");
}

extract().catch(console.error);
