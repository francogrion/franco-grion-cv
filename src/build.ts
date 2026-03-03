import { mkdirSync, writeFileSync } from "fs";
import { renderPage } from "./components/page";

mkdirSync("dist", { recursive: true });
writeFileSync("dist/index.html", renderPage());

console.log("Built → dist/index.html");