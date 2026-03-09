export function Footer(): string {
  return `
    <footer>
      <div class="footer-inner">
        <div class="footer-top">
          <div>
            <div class="footer-logo">franco.grion</div>
            <div class="footer-tagline">
              Backend Software Engineer · Java &amp; Rust<br>
              Open to new opportunities
            </div>
          </div>
          <nav class="footer-nav">
            <a href="#stack">Stack</a>
            <a href="#experience">Experience</a>
            <a href="#extras">More</a>
            <a href="#contact">Contact</a>
          </nav>
        </div>
        <div class="footer-divider"></div>
        <div class="footer-bottom">
          <div class="footer-copy">© 2026 Franco Emanuel Grion — All rights reserved</div>
          <div class="footer-social">
            <a href="mailto:contact@francogrion.dev" class="footer-social-link" title="Email">✉️</a>
            <a href="tel:+34677940475" class="footer-social-link" title="Phone">📞</a>
            <a href="https://linkedin.com/in/franco-emanuel-grion" target="_blank" class="footer-social-link" title="LinkedIn">💼</a>
          </div>
        </div>
      </div>
    </footer>
  `;
}