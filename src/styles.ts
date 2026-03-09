export const globalStyles = `
  *, *::before, *::after { box-sizing: border-box; margin: 0; padding: 0; }

  :root {
    --bg: #0d0f14;
    --bg2: #13161e;
    --bg3: #1a1e2a;
    --border: #232736;
    --accent: #7c6af7;
    --accent2: #e85d75;
    --rust: #e07b39;
    --text: #e2e4ef;
    --muted: #7a7f96;
    --tag-bg: #1e2232;
  }

  html { scroll-behavior: smooth; }

  body {
    background: var(--bg);
    color: var(--text);
    font-family: 'Inter', sans-serif;
    font-size: 15px;
    line-height: 1.6;
  }

  /* ── NAV ── */
  .site-nav {
    position: fixed; top: 0; left: 0; right: 0; z-index: 100;
    background: rgba(13,15,20,0.85);
    backdrop-filter: blur(12px);
    border-bottom: 1px solid var(--border);
    padding: 0 2rem;
    display: flex; align-items: center; justify-content: space-between;
    height: 58px;
    /* removed flex-wrap */
  }
  .nav-logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 14px; color: var(--accent); font-weight: 500;
    text-decoration: none;
  }
  .nav-links { display: flex; gap: 1.8rem; }
  .nav-links a {
    text-decoration: none; color: var(--muted); font-size: 13px;
    font-weight: 500; letter-spacing: .04em; text-transform: uppercase;
    transition: color .2s;
  }
  .nav-links a:hover { color: var(--text); }

  /* ── NAV TOGGLE (mobile only) ── */
  .nav-toggle {
    display: none;
    background: none; border: none;
    color: var(--muted); font-size: 1.3rem;
    cursor: pointer; transition: color .2s;
  }
  .nav-toggle:hover { color: var(--text); }

  @media (max-width: 640px) {
    .nav-toggle {
      display: block;
    }

    .nav-links {
      display: none;
      flex-direction: column;
      position: fixed;
      top: 58px; left: 0; right: 0;
      background: rgba(13,15,20,0.97);
      backdrop-filter: blur(12px);
      border-bottom: 1px solid var(--border);
      padding: 0.5rem 2rem 1rem;
      gap: 0;
    }

    .nav-links a {
      padding: 0.75rem 0;
      border-bottom: 1px solid var(--border);
    }

    .site-nav.open .nav-links {
      display: flex;
    }
  }

  /* ── HERO ── */
  .hero {
    min-height: 100vh;
    display: flex; align-items: center; justify-content: center;
    padding: 6rem 2rem 4rem;
    position: relative; overflow: hidden;
  }
  .hero::before {
    content: '';
    position: absolute; top: -120px; right: -80px;
    width: 520px; height: 520px;
    background: radial-gradient(circle, rgba(124,106,247,.18) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero::after {
    content: '';
    position: absolute; bottom: -60px; left: -100px;
    width: 400px; height: 400px;
    background: radial-gradient(circle, rgba(232,93,117,.10) 0%, transparent 70%);
    pointer-events: none;
  }
  .hero-inner { max-width: 780px; width: 100%; }
  .hero-badge {
    display: inline-flex; align-items: center; gap: .5rem;
    background: var(--tag-bg); border: 1px solid var(--border);
    border-radius: 99px; padding: .3rem .9rem;
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px; color: var(--muted); margin-bottom: 1.8rem;
  }
  .hero-badge span { color: var(--accent); }
  h1 {
    font-size: clamp(2.4rem, 5vw, 3.6rem);
    font-weight: 700; line-height: 1.1;
    letter-spacing: -.02em; margin-bottom: 1rem;
  }
  h1 em { font-style: normal; color: var(--accent); }
  .hero-sub {
    font-size: 1.05rem; color: var(--muted); max-width: 560px;
    margin-bottom: 2.2rem; line-height: 1.7;
  }
  .hero-actions { display: flex; gap: 1rem; flex-wrap: wrap; }
  .btn {
    display: inline-flex; align-items: center; gap: .5rem;
    padding: .65rem 1.4rem; border-radius: 8px;
    font-size: 14px; font-weight: 600; text-decoration: none;
    transition: all .2s; cursor: pointer; border: none;
  }
  .btn-primary { background: var(--accent); color: #fff; }
  .btn-primary:hover { background: #6a58e0; transform: translateY(-1px); }
  .btn-outline {
    background: transparent; color: var(--text);
    border: 1px solid var(--border);
  }
  .btn-outline:hover { border-color: var(--accent); color: var(--accent); }
  .hero-location {
    margin-top: 2.5rem; font-size: 13px; color: var(--muted);
    display: flex; align-items: center; gap: .4rem;
  }

  /* ── SECTIONS ── */
  section { padding: 5rem 2rem; }
  .container { max-width: 860px; margin: 0 auto; }
  .section-label {
    font-family: 'JetBrains Mono', monospace;
    font-size: 11px; color: var(--accent); letter-spacing: .12em;
    text-transform: uppercase; margin-bottom: .6rem;
  }
  .section-title {
    font-size: 1.8rem; font-weight: 700; margin-bottom: 2.5rem;
    letter-spacing: -.02em;
  }

  /* ── STACK ── */
  #stack { background: var(--bg2); border-top: 1px solid var(--border); border-bottom: 1px solid var(--border); }
  .stack-grid {
    display: grid;
    grid-template-columns: repeat(auto-fill, minmax(200px, 1fr));
    gap: 1rem;
  }
  .stack-card {
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: 10px; padding: 1.2rem 1.3rem;
    transition: border-color .2s;
  }
  .stack-card:hover { border-color: var(--accent); }
  .stack-card-title {
    font-size: 11px; color: var(--muted);
    text-transform: uppercase; letter-spacing: .08em;
    margin-bottom: .7rem; font-weight: 600;
  }
  .tags { display: flex; flex-wrap: wrap; gap: .4rem; }
  .tag {
    background: var(--tag-bg); color: var(--text);
    font-size: 12px; padding: .2rem .6rem; border-radius: 5px;
    font-family: 'JetBrains Mono', monospace;
  }
  .tag.rust { color: var(--rust); border: 1px solid rgba(224,123,57,.25); }

  /* ── TIMELINE ── */
  .timeline { position: relative; padding-left: 1.5rem; }
  .timeline::before {
    content: ''; position: absolute; left: 0; top: 6px; bottom: 0;
    width: 2px; background: var(--border);
  }
  .tl-item { position: relative; margin-bottom: 2.8rem; }
  .tl-item::before {
    content: ''; position: absolute; left: -1.5rem; top: 6px;
    width: 10px; height: 10px; border-radius: 50%;
    background: var(--accent); border: 2px solid var(--bg);
    transform: translateX(-4px);
  }
  .tl-item:last-child { margin-bottom: 0; }
  .tl-header { display: flex; flex-wrap: wrap; align-items: baseline; gap: .5rem .8rem; margin-bottom: .3rem; }
  .tl-role { font-size: 1rem; font-weight: 700; }
  .tl-company { font-size: .88rem; color: var(--accent); font-weight: 600; }
  .tl-period {
    font-size: .78rem; color: var(--muted);
    font-family: 'JetBrains Mono', monospace;
    margin-left: auto;
  }
  .tl-sub { font-size: .82rem; color: var(--muted); margin-bottom: .8rem; font-style: italic; }
  .tl-bullets { list-style: none; margin-bottom: 1rem; }
  .tl-bullets li {
    font-size: .88rem; color: #b8bcd0; padding: .25rem 0;
    padding-left: 1rem; position: relative;
  }
  .tl-bullets li::before { content: '▸'; position: absolute; left: 0; color: var(--accent); }
  .tl-tech { display: flex; flex-wrap: wrap; gap: .35rem; }
  .tl-tech .tag { font-size: 11px; }

  /* ── STATS ── */
  .stat-row { display: flex; gap: 2.5rem; margin-bottom: 2.5rem; flex-wrap: wrap; }
  .stat-num { font-size: 2rem; font-weight: 700; color: var(--accent); line-height: 1; }
  .stat-label { font-size: 12px; color: var(--muted); margin-top: .2rem; }

  /* ── CARDS ── */
  .cards-row { display: grid; grid-template-columns: 1fr 1fr; gap: 1.2rem; }
  @media(max-width:600px) { .cards-row { grid-template-columns: 1fr; } }
  .card {
    background: var(--bg2); border: 1px solid var(--border);
    border-radius: 12px; padding: 1.4rem 1.5rem;
    transition: border-color .2s;
  }
  .card:hover { border-color: var(--accent); }
  .card-icon { font-size: 1.5rem; margin-bottom: .7rem; }
  .card-title { font-weight: 700; margin-bottom: .5rem; }
  .card-body { font-size: .88rem; color: var(--muted); line-height: 1.65; }
  .card.rust-card { border-color: rgba(224,123,57,.3); }
  .card.rust-card:hover { border-color: var(--rust); }
  .card.rust-card .card-icon { color: var(--rust); }

  /* ── CONTACT ── */
  #contact { background: var(--bg); border-top: 1px solid var(--border); }
  .contact-grid { display: grid; grid-template-columns: 1fr 1fr; gap: 1rem; }
  @media(max-width:600px) { .contact-grid { grid-template-columns: 1fr; } }
  .contact-card {
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: 10px; padding: 1.1rem 1.3rem;
    display: flex; align-items: center; gap: .9rem;
    text-decoration: none; color: var(--text);
    transition: border-color .2s, transform .15s;
  }
  .contact-card:hover { border-color: var(--accent); transform: translateY(-2px); }
  .contact-icon { font-size: 1.2rem; }
  .contact-label { font-size: 11px; color: var(--muted); text-transform: uppercase; letter-spacing: .06em; }
  .contact-value { font-size: .9rem; font-weight: 600; }

  /* ── FOOTER ── */
  footer { background: var(--bg2); border-top: 1px solid var(--border); padding: 3rem 2rem 2rem; }
  .footer-inner { max-width: 860px; margin: 0 auto; }
  .footer-top {
    display: flex; justify-content: space-between;
    align-items: flex-start; gap: 2rem; flex-wrap: wrap;
    margin-bottom: 2rem;
  }
  .footer-logo {
    font-family: 'JetBrains Mono', monospace;
    font-size: 1.15rem; font-weight: 600;
    color: var(--accent); margin-bottom: .4rem;
  }
  .footer-tagline { font-size: .85rem; color: var(--muted); }
  .footer-nav { display: flex; flex-direction: column; gap: .55rem; }
  .footer-nav a {
    text-decoration: none; color: var(--muted); font-size: 13px;
    font-weight: 500; text-transform: uppercase;
    letter-spacing: .05em; transition: color .2s;
  }
  .footer-nav a:hover { color: var(--accent); }
  .footer-divider { height: 1px; background: var(--border); margin-bottom: 1.5rem; }
  .footer-bottom {
    display: flex; align-items: center;
    justify-content: space-between; flex-wrap: wrap; gap: 1rem;
  }
  .footer-copy {
    font-family: 'JetBrains Mono', monospace;
    font-size: 12px; color: var(--muted);
  }
  .footer-social { display: flex; gap: .7rem; }
  .footer-social-link {
    width: 36px; height: 36px;
    background: var(--bg3); border: 1px solid var(--border);
    border-radius: 8px; display: flex; align-items: center;
    justify-content: center; text-decoration: none; font-size: 1rem;
    transition: border-color .2s, transform .15s;
  }
  .footer-social-link:hover { border-color: var(--accent); transform: translateY(-2px); }

  /* ── RESPONSIVE ── */
  @media(max-width:640px) {
    .nav-links { display: none; }
    h1 { font-size: 2.1rem; }
    .footer-top { flex-direction: column; }
    .footer-nav { flex-direction: row; flex-wrap: wrap; gap: .8rem; }
  }
`;