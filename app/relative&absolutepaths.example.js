import path from "path";
import { fileURLToPath } from "url";

//Relative and Absolute paths

const __dirname = fileURLToPath(import.meta.url);

console.log("dirname: ", __dirname);

const file = path.join(__dirname, "./app.js");

console.log("File: ", file);
