import React, { useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import "@fontsource-variable/newsreader";
import { SiteMachine } from "./SiteMachine";
import "./styles.css";

const modes = {
  essential: {
    index: "01",
    label: "Essential",
    title: "Clear enough to trust. Distinct enough to remember.",
    copy: "For businesses that need calls, bookings, visits or qualified enquiries—not a design award detour.",
  },
  editorial: {
    index: "02",
    label: "Editorial",
    title: "A sharper story, paced like a publication.",
    copy: "For studios, hospitality, portfolios and brands whose character needs more room than a template allows.",
  },
  immersive: {
    index: "03",
    label: "Immersive",
    title: "One impossible-to-ignore idea, made usable.",
    copy: "For launches and material-led brands where 3D, motion or generative systems can make the subject felt.",
  },
};

function Arrow() {
  return <span aria-hidden="true">↗</span>;
}

function App() {
  const [mode, setMode] = useState("immersive");
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    document.documentElement.dataset.mode = mode;
  }, [mode]);

  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    const observer = new IntersectionObserver(
      (entries) => entries.forEach((entry) => entry.isIntersecting && entry.target.classList.add("is-visible")),
      { threshold: 0.15 },
    );
    nodes.forEach((node) => observer.observe(node));
    return () => observer.disconnect();
  }, []);

  return (
    <>
      <header className="site-header">
        <a className="brand" href="#top" aria-label="OneSimpleSite home">
          <span className="brand-mark">1</span>
          <span>OneSimpleSite</span>
        </a>
        <button className="menu-button" type="button" aria-expanded={menuOpen} aria-controls="site-nav" onClick={() => setMenuOpen((open) => !open)}>
          {menuOpen ? "Close" : "Menu"}
        </button>
        <nav id="site-nav" className={menuOpen ? "site-nav is-open" : "site-nav"} aria-label="Main navigation">
          <a href="#work" onClick={() => setMenuOpen(false)}>Work</a>
          <a href="#approach" onClick={() => setMenuOpen(false)}>Approach</a>
          <a href="#contact" className="nav-cta" onClick={() => setMenuOpen(false)}>Start a site <Arrow /></a>
        </nav>
      </header>

      <main id="main">
        <section className="hero" id="top">
          <div className="hero-copy">
            <p className="status"><span /> Independent web studio · UK</p>
            <h1>Useful websites<br /><em>with a pulse.</em></h1>
            <p className="hero-intro">Strategy, design and code for small businesses and ambitious brands—without the template aftertaste.</p>
            <div className="hero-actions">
              <a className="button button-primary" href="#contact">Start a project <Arrow /></a>
              <a className="text-link" href="#work">See the range <span aria-hidden="true">↓</span></a>
            </div>
            <div className="mode-switcher" aria-label="Choose a creative gear">
              {Object.entries(modes).map(([key, item]) => (
                <button key={key} className={mode === key ? "is-active" : ""} type="button" onClick={() => setMode(key)}>
                  <span>{item.index}</span>{item.label}
                </button>
              ))}
            </div>
          </div>
          <SiteMachine mode={mode} />
        </section>

        <section className="mode-statement" aria-live="polite">
          <p>{modes[mode].label} mode</p>
          <h2>{modes[mode].title}</h2>
          <p>{modes[mode].copy}</p>
        </section>

        <div className="ticker" aria-hidden="true">
          <div>Web strategy — Art direction — Conversion — Typography — 3D & motion — Frontend build — Accessibility — Launch — Web strategy — Art direction — Conversion —</div>
        </div>

        <section className="work" id="work">
          <div className="section-heading" data-reveal>
            <p>Selected experiments</p>
            <h2>Different businesses.<br />Different visual physics.</h2>
            <p>These are demonstration concepts, not fabricated client claims. Each one tests a different gear of the system.</p>
          </div>

          <article className="case case-lime" data-reveal>
            <div className="case-meta">
              <span>Immersive / Materials</span>
              <span>Three.js · Vite</span>
            </div>
            <div className="lime-visual" aria-label="Rook and Lime architectural finish concept artwork">
              <div className="lime-word">ROOK</div>
              <div className="lime-stone" />
              <div className="lime-word lime-bottom">&amp; LIME</div>
              <span className="lime-caption">Surface / light / matter</span>
            </div>
            <div className="case-copy">
              <div>
                <p>Rook &amp; Lime</p>
                <h3>Architectural finishes made tactile on screen.</h3>
              </div>
              <p>A material-led 3D study where light, layers and a responsive scene do the storytelling without hiding the commercial offer.</p>
              <a href="https://github.com/AbuFitz/rook-and-lime-demo">View the build <Arrow /></a>
            </div>
          </article>

          <article className="case case-morrow" data-reveal>
            <div className="case-meta">
              <span>Essential / Local service</span>
              <span>Responsive frontend</span>
            </div>
            <div className="morrow-visual" aria-label="Morrow barber website concept artwork">
              <div className="morrow-lines" />
              <p>Good cuts.<br /><em>No theatre.</em></p>
              <span>London · Since whenever the real client confirms it</span>
            </div>
            <div className="case-copy">
              <div>
                <p>Morrow</p>
                <h3>A neighbourhood barber with a sharper point of view.</h3>
              </div>
              <p>A restrained customer site that makes services, atmosphere, location and booking obvious—then spends its creative budget on type and rhythm.</p>
              <a href="#approach">See how we work <Arrow /></a>
            </div>
          </article>
        </section>

        <section className="range" id="approach">
          <div className="range-intro" data-reveal>
            <p>The range</p>
            <h2>Not one house style.<br />One standard of thought.</h2>
          </div>
          <div className="range-grid">
            {Object.entries(modes).map(([key, item]) => (
              <article key={key} className={`range-card range-${key}`} data-reveal>
                <div><span>{item.index}</span><span>{item.label}</span></div>
                <h3>{item.title}</h3>
                <p>{item.copy}</p>
                <button type="button" onClick={() => { setMode(key); document.querySelector("#top")?.scrollIntoView({ behavior: "smooth" }); }}>
                  Load this mode <span aria-hidden="true">↑</span>
                </button>
              </article>
            ))}
          </div>
        </section>

        <section className="method">
          <div className="method-title" data-reveal>
            <p>How it gets made</p>
            <h2>Research before decoration.<br />A browser before bravado.</h2>
          </div>
          <ol className="steps">
            <li data-reveal><span>01</span><div><h3>Find the truth</h3><p>We separate verified facts from assumptions, map the buyer decision, and identify the proof the site actually needs.</p></div></li>
            <li data-reveal><span>02</span><div><h3>Choose a thesis</h3><p>One creative idea ties type, imagery, geometry and motion back to the business—not to this month's design trend.</p></div></li>
            <li data-reveal><span>03</span><div><h3>Build the whole route</h3><p>Desktop, mobile, states, metadata, fallbacks and real conversion paths. Not a beautiful hero abandoned above generic sections.</p></div></li>
            <li data-reveal><span>04</span><div><h3>Prove it in the browser</h3><p>We inspect production builds, exercise critical journeys and fix what screenshots, keyboards and slow devices reveal.</p></div></li>
          </ol>
        </section>

        <section className="type-lab" data-reveal>
          <div className="type-note">
            <p>Type is infrastructure</p>
            <span>Licensed families. Real fallbacks. No same-font-every-time syndrome.</span>
          </div>
          <div className="type-specimen">
            <p className="type-display">Make it<br />unmistakable.</p>
            <p className="type-serif">Then make it easy to use.</p>
            <p className="type-body">The system includes a curated open-font catalogue and a pairing tool, but the subject—not the catalogue—makes the final decision.</p>
          </div>
        </section>

        <section className="contact" id="contact">
          <p>Have a real business and a blank browser?</p>
          <h2>Let's make the site<br /><em>only you could own.</em></h2>
          <a className="button button-dark" href="mailto:hello@onesimplesite.example">Start a conversation <Arrow /></a>
          <p className="contact-note">Demonstration address — replace with the approved OneSimpleSite contact before launch.</p>
        </section>
      </main>

      <footer>
        <a className="brand" href="#top"><span className="brand-mark">1</span><span>OneSimpleSite</span></a>
        <p>Strategy / design / code / launch</p>
        <p>© {new Date().getFullYear()} OneSimpleSite</p>
      </footer>
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);

