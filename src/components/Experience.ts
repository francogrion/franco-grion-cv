interface Job {
  role: string;
  company: string;
  period: string;
  sub?: string;
  bullets: string[];
  tech: string[];
  muted?: boolean;
}

const jobs: Job[] = [
  {
    role: "Senior Java Engineer",
    company: "Amadeus",
    period: "May 2022 - Sep 2025 · Remote",
    sub: "Expense Management Platform",
    bullets: [
      "Built and maintained microservices powering high-volume financial workflows.",
      "Upgraded core services from Java 17 to 21, improving performance and memory efficiency.",
      "Implemented async processing with RabbitMQ, cutting processing time by 35%.",
      "Improved observability with Grafana dashboards and custom metrics.",
      "Contributed to CI/CD pipelines and Kubernetes deployments.",
    ],
    tech: ["Java 17-21", "Spring Boot", "Oracle DB", "RabbitMQ", "Kubernetes", "Grafana", "Jenkins"],
  },
  {
    role: "Java Developer",
    company: "AlAhli NCB (via Crealogix)",
    period: "Dec 2020 - May 2022 · Remote",
    bullets: [
      "Maintained and modernized the main banking portal for Saudi Arabia's largest bank.",
      "Developed new microservices to replace legacy monolithic components.",
    ],
    tech: ["Java 7", "Spring", "Oracle DB", "SOAP", "GitLab", "Jira"],
  },
  {
    role: "Java Developer",
    company: "Alpha Fintech (via Qubits SRL)",
    period: "Dec 2016 - Jun 2018 · Remote",
    sub: "Payment Processor Integration Hub",
    bullets: [
      "Built two REST APIs from scratch for secure payment processor integrations.",
      "Refactored legacy systems to improve stability and performance.",
      "Developed microservices using Java 8, Spring Boot and PostgreSQL.",
    ],
    tech: ["Java 8", "Spring Boot", "PostgreSQL", "REST", "SOAP", "Maven", "Jenkins"],
  },
  {
    role: "Full-Stack Developer",
    company: "Southwest Airlines (via Globant)",
    period: "Oct 2015 - Nov 2016 · Argentina",
    bullets: [
      "Enhanced the Southwest.com portal using jQuery and Backbone.",
      "Contributed to migration toward microservices architecture.",
      "Built automated test suites with JBehave.",
    ],
    tech: ["jQuery", "Backbone", "REST", "JBehave", "Java"],
  },
  {
    role: "Working Holiday",
    company: "New Zealand",
    period: "Jul 2018 - Nov 2020",
    bullets: ["Adaptability, communication and multicultural teamwork across an international environment."],
    tech: [],
    muted: true,
  },
];

function renderJob(job: Job): string {
  const bullets = job.bullets.map((b) => `<li>${b}</li>`).join("");
  const tech = job.tech.map((t) => `<span class="tag">${t}</span>`).join("");
  return `
    <div class="tl-item">
      <div class="tl-header">
        <div class="tl-role"${job.muted ? ' style="color:var(--muted)"' : ""}>${job.role}</div>
        <div class="tl-company"${job.muted ? ' style="color:var(--muted)"' : ""}>${job.company}</div>
        <div class="tl-period">${job.period}</div>
      </div>
      ${job.sub ? `<div class="tl-sub">${job.sub}</div>` : ""}
      <ul class="tl-bullets">${bullets}</ul>
      ${tech ? `<div class="tl-tech tags">${tech}</div>` : ""}
    </div>`;
}

export function Experience(): string {
  return `
    <section id="experience">
      <div class="container">
        <div class="section-label">Career</div>
        <div class="section-title">Work Experience</div>
        <div class="stat-row">
          <div class="stat"><div class="stat-num">8+</div><div class="stat-label">Years experience</div></div>
          <div class="stat"><div class="stat-num">35%</div><div class="stat-label">Async processing speedup @ Amadeus</div></div>
          <div class="stat"><div class="stat-num">4</div><div class="stat-label">Industries served</div></div>
        </div>
        <div class="timeline">
          ${jobs.map(renderJob).join("")}
        </div>
      </div>
    </section>`;
}