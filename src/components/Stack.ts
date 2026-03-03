interface Tag {
  label: string;
  variant?: "rust";
}

interface StackCard {
  title: string;
  tags: Tag[];
}

const stackCards: StackCard[] = [
  {
    title: "Backend",
    tags: [{ label: "Java 8-21" }, { label: "Spring Boot" }, { label: "REST" }, { label: "Microservices" }],
  },
  {
    title: "Infra & DevOps",
    tags: [{ label: "Kubernetes" }, { label: "Jenkins" }, { label: "GitLab CI/CD" }, { label: "Grafana" }],
  },
  {
    title: "Messaging & Integrations",
    tags: [{ label: "RabbitMQ" }, { label: "SOAP" }, { label: "REST APIs" }],
  },
  {
    title: "Databases",
    tags: [{ label: "Oracle DB" }, { label: "PostgreSQL" }],
  },
  {
    title: "Tooling",
    tags: [{ label: "Git" }, { label: "Maven" }, { label: "Postman" }, { label: "Mockito" }, { label: "Jira" }],
  },
  {
    title: "Growing - Rust 🦀",
    tags: [
      { label: "Ownership", variant: "rust" },
      { label: "Lifetimes", variant: "rust" },
      { label: "async/await", variant: "rust" },
      { label: "Cargo", variant: "rust" },
      { label: "CLI tools", variant: "rust" },
    ],
  },
];

function renderCard(card: StackCard): string {
  const tags = card.tags
    .map((t) => `<span class="tag${t.variant ? ` ${t.variant}` : ""}">${t.label}</span>`)
    .join("");
  return `
    <div class="stack-card">
      <div class="stack-card-title">${card.title}</div>
      <div class="tags">${tags}</div>
    </div>`;
}

export function Stack(): string {
  return `
    <section id="stack">
      <div class="container">
        <div class="section-label">Tech Stack</div>
        <div class="section-title">What I work with</div>
        <div class="stack-grid">
          ${stackCards.map(renderCard).join("")}
        </div>
      </div>
    </section>`;
}