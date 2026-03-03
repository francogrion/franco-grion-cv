import { globalStyles } from "../styles";
import { Nav }        from "./Nav";
import { Hero }       from "./Hero";
import { Stack }      from "./Stack";
import { Experience } from "./Experience";
import { Extras }     from "./Extras";
import { Contact }    from "./Contact";
import { Footer }     from "./Footer";

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
  ${Hero()}
  ${Stack()}
  ${Experience()}
  ${Extras()}
  ${Contact()}
  ${Footer()}
</body>
</html>`;
}