import { globalStyles } from "../styles";
import { Footer } from "./Footer";
import { Nav } from "./Nav";

export function renderPage(): string {
  return `<!DOCTYPE html>
<html lang="en">
<head>
  <meta charset="UTF-8"/>
  <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
  <title>Franco Grion — Backend Software Engineer</title>
  <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700&family=JetBrains+Mono:wght@400;500&display=swap" rel="stylesheet">
  <style>${globalStyles}</style>
</head>
<body>
  ${Nav()}
  ${Footer()}
</body>
</html>`;
}