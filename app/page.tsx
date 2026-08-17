"use client";

import { useEffect, useState } from "react";

const BRAND = "VARSHI";
const CONTACT_EMAIL = "hello@varshi.ai";
const Arrow = () => <span aria-hidden="true">↗</span>;

const useCases = [
  {
    title: "Personal assistant",
    text: "Help people speak, switch languages, schedule, search and get things done naturally.",
  },
  {
    title: "Customer support",
    text: "Power multilingual support experiences that understand people the first time.",
  },
  {
    title: "Team productivity",
    text: "Make workplace tools voice-friendly, multilingual and action-oriented.",
  },
  {
    title: "Global products",
    text: "Give apps a shared intelligence layer that works across languages and markets.",
  },
];

const systemTiles = [
  ["Speech", "Streaming input and voice-native interaction."],
  ["Reasoning", "Shared multilingual understanding and decision-making."],
  ["Tools", "Actions, workflows and external systems."],
  ["Memory", "Context that carries across turns and tasks."],
  ["Privacy", "Private deployment, observability and control."],
  ["Deployment", "Cloud, edge, VPC and enterprise-ready runtime."],
];

const investors = [
  ["Mass adoption", "Built for everyday usage, not just enterprise demos."],
  ["Multilingual wedge", "Language change should not mean capability loss."],
  ["Voice to action", "The product goes beyond answers and helps complete tasks."],
  ["Global surface area", "Consumer, product and enterprise applications can compound on one layer."],
];

export default function Home() {
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const nodes = document.querySelectorAll<HTMLElement>("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) entry.target.classList.add("is-visible");
        });
      },
      { threshold: 0.12 }
    );

    nodes.forEach((node, i) => {
      node.style.transitionDelay = `${Math.min(i * 40, 220)}ms`;
      observer.observe(node);
    });

    return () => observer.disconnect();
  }, []);

  return (
    <main>
      <div className="ambient ambient-a" aria-hidden="true" />
      <div className="ambient ambient-b" aria-hidden="true" />

      <header className="nav-wrap">
        <nav className="nav shell">
          <a href="#top" className="brand" aria-label={`${BRAND} home`}>
            <img src="/varshi-logo.png" alt={BRAND} />
          </a>

          <div className={`nav-links ${menuOpen ? "open" : ""}`}>
            <a href="#product" onClick={() => setMenuOpen(false)}>Product</a>
            <a href="#communication" onClick={() => setMenuOpen(false)}>Communication</a>
            <a href="#system" onClick={() => setMenuOpen(false)}>System</a>
            <a href="#use-cases" onClick={() => setMenuOpen(false)}>Use cases</a>
            <a href="#investors" onClick={() => setMenuOpen(false)}>Investors</a>
          </div>

          <a className="button button-dark nav-cta" href={`mailto:${CONTACT_EMAIL}?subject=${BRAND}%20Investor%20Conversation`}>
            Start a conversation <Arrow />
          </a>

          <button className="menu" onClick={() => setMenuOpen((v) => !v)} aria-label="Toggle menu">
            <span />
            <span />
          </button>
        </nav>
      </header>

      <section id="top" className="hero shell section-pad">
        <div className="hero-copy" data-reveal>
          <div className="eyebrow">MULTILINGUAL INTELLIGENCE · DESIGNED FOR GLOBAL ADOPTION</div>
          <h1>Speak naturally. Think globally. Get things done.</h1>
          <p className="hero-sub">
            {BRAND} is building a real-time multilingual intelligence layer for voice, reasoning and action — designed for people, products and software used across the world.
          </p>
          <div className="hero-actions">
            <a className="button button-dark" href="#investors">Investor brief <Arrow /></a>
            <a className="button button-light" href="#product">See the product <span>↓</span></a>
          </div>
          <div className="hero-proof">
            <span>Voice-native</span>
            <span>Multilingual by default</span>
            <span>Action-oriented</span>
            <span>Private-capable</span>
          </div>
        </div>

        <div className="hero-visual panel" data-reveal>
          <img src="/hero-loop-v2.svg" alt="Ivory product diagram showing multilingual input, understanding and action orchestration." />
        </div>
      </section>

      <section className="shell pill-strip" data-reveal>
        <div className="pill-card"><strong>For everyday people</strong><span>Simple enough for daily use.</span></div>
        <div className="pill-card"><strong>For global products</strong><span>One layer across markets and languages.</span></div>
        <div className="pill-card"><strong>For software that acts</strong><span>From speaking to understanding to action.</span></div>
      </section>

      <section id="product" className="feature section-pad">
        <div className="shell split split-image-left">
          <div className="media-card panel" data-reveal>
            <img src="/people-world-v2.svg" alt="Ivory illustrated panel showing everyday people, multilingual communication, daily usefulness and global reach." />
          </div>
          <div className="copy-block" data-reveal>
            <div className="eyebrow">PRODUCT DIRECTION</div>
            <h2>Not just AI for specialists. Intelligence for everyday life.</h2>
            <p>
              The product vision is mass adoption: something intuitive enough for daily use, useful across languages and powerful enough to sit inside the world’s most important digital products.
            </p>
            <div className="mini-grid">
              <article>
                <strong>People-first</strong>
                <span>Friendly, simple and usable in real moments.</span>
              </article>
              <article>
                <strong>Language-first</strong>
                <span>Native-script, mixed-language and multilingual behavior by default.</span>
              </article>
              <article>
                <strong>Global-first</strong>
                <span>Built to travel across products, markets and user journeys.</span>
              </article>
            </div>
          </div>
        </div>
      </section>

      <section id="communication" className="feature feature-dark section-pad">
        <div className="shell split">
          <div className="copy-block" data-reveal>
            <div className="eyebrow dark">COMMUNICATION</div>
            <h2>Understand people across languages, not just words on a screen.</h2>
            <p>
              Real communication is messy, human and global. {BRAND} is designed for the way people actually interact — across languages, voice, text and everyday contexts.
            </p>
            <ul className="point-list">
              <li>Real-time understanding across speech and text</li>
              <li>More natural multilingual conversations and switching</li>
              <li>Useful for travel, work, support, learning and daily coordination</li>
            </ul>
          </div>
          <div className="media-card panel dark-panel" data-reveal>
            <img src="/global-voices-v2.svg" alt="Ivory visual showing people around the world connected through multilingual speech and translation." />
          </div>
        </div>
      </section>

      <section id="system" className="feature section-pad">
        <div className="shell split split-image-left">
          <div className="media-card panel" data-reveal>
            <img src="/orchestration-v2.svg" alt="Ivory system diagram showing speech, reasoning, action, memory, tools, privacy and deployment orchestrated around a central runtime." />
          </div>
          <div className="copy-block" data-reveal>
            <div className="eyebrow">SYSTEM</div>
            <h2>One orchestration layer. Multiple surfaces. Clear product logic.</h2>
            <p>
              Instead of feeling like stitched APIs, the platform is organized as one coordinated system where speech, reasoning, tools, memory and deployment work together.
            </p>
            <div className="tile-grid">
              {systemTiles.map(([title, text]) => (
                <article key={title} className="tile">
                  <strong>{title}</strong>
                  <span>{text}</span>
                </article>
              ))}
            </div>
          </div>
        </div>
      </section>

      <section id="use-cases" className="use-case-band section-pad">
        <div className="shell">
          <div className="section-head" data-reveal>
            <div>
              <div className="eyebrow dark">USE CASES</div>
              <h2>Built for products people actually use.</h2>
            </div>
            <p>Start with high-frequency, high-friction workflows — then scale outward into a broader global intelligence layer.</p>
          </div>
          <div className="use-case-grid">
            {useCases.map((item, index) => (
              <article key={item.title} className="use-case-card" data-reveal>
                <small>0{index + 1}</small>
                <h3>{item.title}</h3>
                <p>{item.text}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section id="investors" className="investor section-pad">
        <div className="shell investor-grid">
          <div className="copy-block" data-reveal>
            <div className="eyebrow">INVESTOR BRIEF</div>
            <h2>A global interaction layer for multilingual computing.</h2>
            <p>
              {BRAND} is not just another model wrapper or text-only demo. The opportunity is to build a widely adopted layer that helps people communicate naturally, reason across languages and take action through software.
            </p>
            <a className="button button-dark" href={`mailto:${CONTACT_EMAIL}?subject=${BRAND}%20Deck%20Request`}>
              Request the deck <Arrow />
            </a>
          </div>
          <div className="investor-list panel" data-reveal>
            {investors.map(([title, text]) => (
              <article key={title}>
                <strong>{title}</strong>
                <span>{text}</span>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="shell closing section-pad-sm" id="contact">
        <div className="closing-card">
          <div>
            <div className="eyebrow dark">{BRAND}</div>
            <h2>Less friction between people and the software they use.</h2>
          </div>
          <div className="closing-action">
            <p>Born in multilingual markets. Designed for worldwide adoption.</p>
            <a className="button button-ivory" href={`mailto:${CONTACT_EMAIL}?subject=Build%20with%20${BRAND}`}>
              Build with us <Arrow />
            </a>
          </div>
        </div>
      </section>

      <footer>
        <div className="shell footer-grid">
          <div className="footer-brand">
            <img src="/varshi-logo.png" alt={BRAND} />
            <p>Real-time multilingual intelligence for voice, reasoning and action.</p>
          </div>
          <div>
            <small>EXPLORE</small>
            <a href="#product">Product</a>
            <a href="#communication">Communication</a>
            <a href="#system">System</a>
          </div>
          <div>
            <small>COMPANY</small>
            <a href="#use-cases">Use cases</a>
            <a href="#investors">Investors</a>
            <a href={`mailto:${CONTACT_EMAIL}`}>Contact</a>
          </div>
          <div>
            <small>SCOPE</small>
            <p>Global users</p>
            <p>Global products</p>
            <p>Global adoption</p>
          </div>
        </div>
        <div className="shell footer-bottom"><span>© 2026 {BRAND}</span><span>Built for the world</span></div>
      </footer>
    </main>
  );
}
