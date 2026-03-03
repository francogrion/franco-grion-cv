interface Card {
  icon: string;
  title: string;
  body: string;
  rust?: boolean;
}

const cards: Card[] = [
  {
    icon: "🦀",
    title: "Learning Rust",
    body: "Building CLI tools and small backend services as personal projects. Comfortable with ownership, lifetimes, traits, async/await and Cargo. Working through Rustlings, Exercism and OSS contributions.",
    rust: true,
  },
  {
    icon: "🏆",
    title: "Argentine Mathematical Olympiad",
    body: "Reached national level four times — a formative challenge that shaped my problem-solving mindset and love for rigorous, precise thinking.",
  },
  {
    icon: "📢",
    title: "Leadership",
    body: "Former Press Commission President at AVEIT, leading communications and team coordination. Strong background in public speaking and community engagement.",
  },
  {
    icon: "🌍",
    title: "Languages",
    body: "<strong>Spanish</strong> — Native<br><strong>English</strong> — Fluent<br><strong>Italian</strong> — Intermediate",
  },
];

function renderCard(card: Card): string {
  return `
    <div class="card${card.rust ? " rust-card" : ""}">
      <div class="card-icon">${card.icon}</div>
      <div class="card-title">${card.title}</div>
      <div class="card-body">${card.body}</div>
    </div>`;
}

export function Extras(): string {
  return `
    <section id="extras" style="background:var(--bg2);border-top:1px solid var(--border);border-bottom:1px solid var(--border);">
      <div class="container">
        <div class="section-label">Beyond Code</div>
        <div class="section-title">More about me</div>
        <div class="cards-row">
          ${cards.map(renderCard).join("")}
        </div>
      </div>
    </section>`;
}