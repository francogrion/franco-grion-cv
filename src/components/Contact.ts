interface ContactItem {
  icon: string;
  label: string;
  value: string;
  href?: string;
  blank?: boolean;
}

const items: ContactItem[] = [
  { icon: "✉️", label: "Email",    value: "contact@francogrion.dev",       href: "mailto:contact@francogrion.dev" },
  { icon: "📞", label: "Phone",    value: "+34 677 940 475",               href: "tel:+34677940475" },
  { icon: "💼", label: "LinkedIn", value: "franco-emanuel-grion",          href: "https://linkedin.com/in/franco-emanuel-grion", blank: true },
  { icon: "📍", label: "Location", value: "Barcelona, Spain" },
];

function renderItem(item: ContactItem): string {
  const inner = `
    <div class="contact-icon">${item.icon}</div>
    <div>
      <div class="contact-label">${item.label}</div>
      <div class="contact-value">${item.value}</div>
    </div>`;

  return item.href
    ? `<a href="${item.href}"${item.blank ? ' target="_blank"' : ""} class="contact-card">${inner}</a>`
    : `<div class="contact-card" style="cursor:default;">${inner}</div>`;
}

export function Contact(): string {
  return `
    <section id="contact">
      <div class="container">
        <div class="section-label">Let's talk</div>
        <div class="section-title">Get in touch</div>
        <div class="contact-grid">
          ${items.map(renderItem).join("")}
        </div>
      </div>
    </section>`;
}