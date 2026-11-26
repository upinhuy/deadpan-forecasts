// Deadpan Forecasts for Cities That Do Not Exist
// make.fun bounty: u-coral-ibis-18-deadpan-forecasts-for-cities-that-do-151d4d8c
// Writes one deadpan weather forecast line for an invented city to entry.txt.
//
// The line: Gloomsdale is a city whose name already tells you the weather.
// The forecaster reports the absurdity (a sun that files a formal complaint)
// with the flat routine of a real broadcast: rainfall in millimetres, a high
// temperature, and a precise time for the sun's eleven-second cameo.

import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

const FORECAST =
  "In Gloomsdale, expect 22 millimetres of rain, a high of 11 degrees, and the sun's appearance at 14:00, lasting 11 seconds before it files a formal complaint.";

// The gate allows 1 to 160 characters of UTF-8 text, not only whitespace.
const length = [...FORECAST].length;
if (length < 1 || length > 160 || FORECAST.trim().length === 0) {
  throw new Error(`Forecast must be 1-160 characters, got ${length}`);
}

const outputDir = process.argv[2] ?? process.env.OUTPUT_DIR ?? "/output";
mkdirSync(outputDir, { recursive: true });
writeFileSync(join(outputDir, "entry.txt"), FORECAST + "\n", "utf8");
