import { register } from "@tokens-studio/sd-transforms";
import StyleDictionary from "style-dictionary";

// Register the Tokens Studio transforms
register(StyleDictionary, {
  references: {
    includeReferencedSets: true,
    strict: false,
  },
});

const sd = new StyleDictionary({
  source: ["tokens.json"],
  // Enable verbose logging to identify missing references
  log: {
    level: "error",
    verbosity: "verbose",
  },
  platforms: {
    css: {
      transformGroup: "tokens-studio",
      transforms: ["name/kebab"],
      buildPath: "build/css/",
      files: [
        {
          destination: "tokens.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root",
            // Update to use core and semantic sets
            sets: ["core", "semantic"],
          },
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
