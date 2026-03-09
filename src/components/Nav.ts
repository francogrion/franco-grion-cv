export function Nav(): string {
  return `
    <header class="site-nav">
      <a href="#hero" class="nav-logo">franco.grion</a>
      <button class="nav-toggle" onclick="this.closest('header').classList.toggle('open')">☰</button>
      <div class="nav-links">
        <a href="#stack" onclick="this.closest('header').classList.remove('open')">Stack</a>
        <a href="#experience" onclick="this.closest('header').classList.remove('open')">Experience</a>
        <a href="#extras" onclick="this.closest('header').classList.remove('open')">More</a>
        <a href="#contact" onclick="this.closest('header').classList.remove('open')">Contact</a>
      </div>
    </header>
  `;
}