import nextra from "nextra";
import { createHighlighter } from "shiki";
import fs from "fs/promises";
import path from "path";

const stageGrammars = JSON.parse(
  await fs.readFile(path.join(process.cwd(), "public/syntax/stage-world.tmLanguage.json"), "utf-8")
);

const withNextra = nextra({
  search: true,
  defaultShowCopyCode: true,
  mdxOptions: {
    rehypePrettyCodeOptions: {
      getHighlighter: (options) =>
        createHighlighter({
          ...options,
          langs: [...options.langs, stageGrammars],
          langAlias: {
            mylang: "stage",
          },
        }),
    },
  },
});

export default withNextra({
  // ... Other Next.js config options
  // output: 'export'
});
