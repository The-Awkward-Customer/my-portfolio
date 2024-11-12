import axios from "axios";
import fs from "fs";

const FIGMA_TOKEN = process.env.FIGMA_TOKEN;
const FIGMA_FILE_ID = process.env.FIGMA_FILE_ID;

if (!FIGMA_TOKEN || !FIGMA_FILE_ID) {
  console.error(
    "FIGMA_TOKEN and FIGMA_FILE_ID must be set as environment variables."
  );
  process.exit(1);
}

async function fetchFigmaTokens() {
  try {
    const response = await axios.get(
      `https://api.figma.com/v1/files/${FIGMA_FILE_ID}`,
      {
        headers: {
          "X-Figma-Token": FIGMA_TOKEN,
        },
      }
    );

    const data = response.data;
    console.log("Figma API Response:", JSON.stringify(data, null, 2));

    // Extract tokens from the Figma API response
    const tokens = extractTokens(data);

    // Save tokens to a JSON file
    fs.writeFileSync("tokens.json", JSON.stringify(tokens, null, 2));
    console.log("Tokens successfully saved to tokens.json");
  } catch (error) {
    console.error("Error fetching tokens from Figma:", error);
    process.exit(1);
  }
}

function extractTokens(data) {
  const tokens = {};

  // Modify this function based on how your tokens are structured in Figma
  if (data && data.styles) {
    for (const [key, value] of Object.entries(data.styles)) {
      if (value.styleType === "FILL") {
        tokens[value.name] = value.description || key;
      }
    }
  } else {
    console.error("No styles found in the API response.");
  }

  return tokens;
}

fetchFigmaTokens();
