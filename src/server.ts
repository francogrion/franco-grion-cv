import { renderPage } from "./components/page";

const PORT = process.env.PORT ?? 3000;
Bun.serve({
  port: PORT,
  fetch(req) {
    const url = new URL(req.url);
    if (url.pathname.startsWith("/public/")) {
      return new Response(Bun.file("." + url.pathname));
    }
    return new Response(renderPage(), {
      headers: { "Content-Type": "text/html; charset=utf-8" },
    });
  },
});

console.log(`Running at http://localhost:${PORT}`);
