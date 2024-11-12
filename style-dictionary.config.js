import StyleDictionary from "style-dictionary";
import { register } from "@tokens-studio/sd-transforms";

// Register the Tokens Studio transforms
register(StyleDictionary);

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
      buildPath: "build/css/",
      files: [
        // Light Theme
        {
          destination: "tokens-light.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root",
            // Include necessary token sets
            sets: ["global", "Collection 1/light"],
          },
        },
        // Dark Theme
        {
          destination: "tokens-dark.css",
          format: "css/variables",
          options: {
            outputReferences: true,
            selector: ":root.dark-mode",
            sets: ["global", "Collection 1/dark"],
          },
        },
      ],
    },
  },
});

await sd.cleanAllPlatforms();
await sd.buildAllPlatforms();
