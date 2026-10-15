import React, { useEffect, useRef, useState } from "react";
import { createRoot } from "react-dom/client";
import "@fontsource-variable/bricolage-grotesque";
import "@fontsource-variable/manrope";
import { PACKAGES, TRADES, PEOPLE, TEAM_QUOTE, PROJECTS, FAQ, EMAIL } from "./data";
import "./styles.css";

const reduced = () => window.matchMedia("(prefers-reduced-motion: reduce)").matches;
const useRoute = () => {
  const get = () => window.location.hash.replace(/^#/, "") || "/";
  const [route, setRoute] = useState(get);
  useEffect(() => {
    const on = () => setRoute(get());
    window.addEventListener("hashchange", on);
    return () => window.removeEventListener("hashchange", on);
  }, []);
  return route;
};

// Moves to another route; from a click, the new page opens as a circle growing out of the pointer.
const go = (to, e) => {
  const apply = () => { window.location.hash = to; window.scrollTo(0, 0); };
  if (e) e.preventDefault();
  if (!document.startViewTransition || reduced()) return apply();
  const x = e?.clientX ?? innerWidth / 2, y = e?.clientY ?? innerHeight / 2;
  const r = Math.hypot(Math.max(x, innerWidth - x), Math.max(y, innerHeight - y));
  const t = document.startViewTransition(() => new Promise((done) => { apply(); requestAnimationFrame(() => requestAnimationFrame(done)); }));
  t.ready.then(() => document.documentElement.animate(
    { clipPath: [`circle(0px at ${x}px ${y}px)`, `circle(${r}px at ${x}px ${y}px)`] },
    { duration: 650, easing: "cubic-bezier(.7,0,.2,1)", pseudoElement: "::view-transition-new(root)" },
  )).catch(() => {});
};
const toPackages = (e) => {
  if (e) e.preventDefault();
  const scroll = () => document.getElementById("packages")?.scrollIntoView({ behavior: reduced() ? "auto" : "smooth" });
  if ((window.location.hash.replace(/^#/, "") || "/") !== "/") { window.location.hash = "/"; setTimeout(scroll, 80); } else scroll();
};
const A = ({ to, children, ...p }) => <a href={`#${to}`} onClick={(e) => go(to, e)} {...p}>{children}</a>;

function useReveal(dep) {
  useEffect(() => {
    const nodes = document.querySelectorAll("[data-reveal]");
    if (reduced() || !("IntersectionObserver" in window)) { nodes.forEach((n) => n.classList.add("in")); return; }
    const io = new IntersectionObserver((es) => es.forEach((e) => { if (e.isIntersecting) { e.target.classList.add("in"); io.unobserve(e.target); } }), { rootMargin: "0px 0px -8% 0px" });
    nodes.forEach((n) => io.observe(n));
    const t = setTimeout(() => nodes.forEach((n) => n.classList.add("in")), 3500);
    return () => { io.disconnect(); clearTimeout(t); };
  }, [dep]);
}

// One continuous line from the hero to the close; it draws as the page scrolls.
function TheLine() {
  const path = useRef(null);
  useEffect(() => {
    const p = path.current; if (!p) return;
    if (reduced()) { p.style.strokeDashoffset = 0; return; }
    let raf = 0;
    const draw = () => { raf = 0; const max = document.documentElement.scrollHeight - innerHeight; p.style.strokeDashoffset = 1 - Math.min(1, Math.max(0, scrollY / (max || 1)) * 1.08); };
    const on = () => { if (!raf) raf = requestAnimationFrame(draw); };
    draw(); addEventListener("scroll", on, { passive: true }); addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); };
  }, []);
  return (
    <svg className="line" viewBox="0 0 100 1000" preserveAspectRatio="none" aria-hidden="true" focusable="false">
      <path ref={path} pathLength="1" d="M-2 40 C 30 20, 55 90, 40 150 S 5 230, 30 300 S 95 380, 80 460 S 8 540, 22 620 S 92 700, 70 780 S 30 860, 58 930 S 70 975, 50 998" />
    </svg>
  );
}

function Header({ route }) {
  const [open, setOpen] = useState(false);
  useEffect(() => { setOpen(false); }, [route]);
  useEffect(() => {
    const k = (e) => e.key === "Escape" && setOpen(false);
    addEventListener("keydown", k); return () => removeEventListener("keydown", k);
  }, []);
  const links = [["/", "Home"], ["/work", "Work"], ["/#packages", "Packages"], ["/about", "About"]];
  return (
    <header className={`hdr ${open ? "open" : ""}`}>
      <div className="hdr-pill">
        <A to="/" className="brand" aria-label="OneSimpleSite home"><span className="mark">1</span>OneSimpleSite</A>
        <nav id="nav" aria-label="Main" className="nav">
          {links.map(([to, label]) => to.includes("#") ? <a key={to} href="#/" onClick={(e) => { toPackages(e); setOpen(false); }}>{label}</a> : <A key={to} to={to} aria-current={route === to ? "page" : undefined}>{label}</A>)}
        </nav>
        <a className="btn btn-sm" href={`mailto:${EMAIL}?subject=Project%20brief`}>Start your brief</a>
        <button className="burger" type="button" aria-expanded={open} aria-controls="nav" onClick={() => setOpen(!open)}>{open ? "Close" : "Menu"}</button>
      </div>
    </header>
  );
}

function HeroArt() {
  return (
    <svg className="heroart" viewBox="0 0 600 520" role="img" aria-label="Layers of cut paper in green, cream and black, assembling into a page">
      <rect x="40" y="60" width="330" height="400" rx="6" fill="#11150e" transform="rotate(-4 200 260)" />
      <rect x="90" y="40" width="330" height="400" rx="6" fill="#1d5a3a" transform="rotate(3 250 240)" />
      <rect x="150" y="80" width="330" height="400" rx="6" fill="#efe9dc" stroke="#11150e" strokeWidth="3" />
      <rect x="180" y="116" width="170" height="26" fill="#11150e" /><rect x="180" y="156" width="250" height="10" fill="#b9b19c" /><rect x="180" y="176" width="220" height="10" fill="#b9b19c" />
      <rect x="180" y="214" width="120" height="150" fill="#1d5a3a" /><rect x="312" y="214" width="118" height="70" fill="#c4e36a" /><rect x="312" y="296" width="118" height="68" fill="#11150e" />
      <circle cx="450" cy="400" r="62" fill="#c4e36a" /><path d="M388 400 a62 62 0 0 1 124 0" fill="#1d5a3a" />
    </svg>
  );
}

function Hero() {
  return (
    <section className="hero" aria-labelledby="h1">
      <p className="kicker">Fixed-price websites for UK local businesses</p>
      <h1 id="h1">One simple site, <em>planned for your trade.</em></h1>
      <p className="lede">Built from layouts planned for your kind of business, with copywriting included. Packages from £199.</p>
      <div className="hero-actions"><a className="btn" href={`mailto:${EMAIL}?subject=Project%20brief`}>Start your brief</a><a className="textlink" href="#/" onClick={toPackages}>See prices</a></div>
      <HeroArt />
    </section>
  );
}

function TradeIndex() {
  const [id, setId] = useState(TRADES[0].id);
  const t = TRADES.find((x) => x.id === id);
  return (
    <section className="sec" aria-labelledby="trades-h">
      <div className="head" data-reveal><p className="kicker">What we build</p><h2 id="trades-h">Every trade has a different first question.</h2></div>
      <div className="trades">
        <ul className="tlist" role="tablist" aria-label="Trades">
          {TRADES.map((x) => (
            <li key={x.id} role="presentation"><button role="tab" id={`t-${x.id}`} aria-selected={x.id === id} aria-controls="tpanel" onClick={() => setId(x.id)}>{x.name}</button></li>
          ))}
        </ul>
        <div className="tpanel" id="tpanel" role="tabpanel" aria-labelledby={`t-${id}`} key={id}>
          <p className="tleads"><span>Leads with</span>{t.leads}</p>
          <ol className="tplan">{t.plan.map((s) => <li key={s}>{s}</li>)}</ol>
          <p className="fine">A typical page plan for this kind of business. Yours is adjusted to what you actually do.</p>
        </div>
      </div>
    </section>
  );
}

const RAW = [
  { id: "a", label: "Price list", w: 150, h: 190, x: -42, y: -34, r: -9 },
  { id: "b", label: "Logo", w: 120, h: 120, x: 42, y: -38, r: 7 },
  { id: "c", label: "Van photo", w: 160, h: 110, x: -46, y: 34, r: 6 },
  { id: "d", label: "Phone note", w: 110, h: 150, x: 46, y: 30, r: -6 },
];
function MaterialIn() {
  const ref = useRef(null);
  const [p, setP] = useState(reduced() ? 1 : 0);
  useEffect(() => {
    if (reduced()) return;
    let raf = 0;
    const calc = () => {
      raf = 0; const el = ref.current; if (!el) return;
      const r = el.getBoundingClientRect(); const total = r.height - innerHeight;
      setP(Math.min(1, Math.max(0, -r.top / (total || 1))));
    };
    const on = () => { if (!raf) raf = requestAnimationFrame(calc); };
    calc(); addEventListener("scroll", on, { passive: true }); addEventListener("resize", on);
    return () => { removeEventListener("scroll", on); removeEventListener("resize", on); };
  }, []);
  const gather = Math.min(1, p / 0.55), settle = Math.max(0, (p - 0.5) / 0.5);
  const caption = p < 0.3 ? "You send what you have." : p < 0.7 ? "We shape it around your trade." : "You review one finished page.";
  return (
    <section className="mat" ref={ref} aria-labelledby="mat-h">
      <div className="mat-stick">
        <div className="mat-copy"><p className="kicker">How it starts</p><h2 id="mat-h">No copy? No photos? Send what you have.</h2><p className="cap" aria-live="off">{caption}</p></div>
        <div className="mat-stage" aria-hidden="true">
          {RAW.map((c) => (
            <div key={c.id} className="rawcard" style={{ width: c.w, height: c.h, transform: `translate(calc(-50% + ${c.x * 0.55 * (1 - gather)}vmin), calc(-50% + ${c.y * 0.55 * (1 - gather)}vmin)) rotate(${c.r * (1 - gather)}deg) scale(${1 - 0.5 * gather})`, opacity: 1 - Math.min(1, settle * 3) }}>
              <span>{c.label}</span><i /><i /><i />
            </div>
          ))}
          <div className="sheet" style={{ opacity: Math.min(1, settle * 1.6), transform: `translate(-50%, -50%) scale(${0.85 + 0.15 * Math.min(1, settle * 1.6)})` }}>
            <b /><u /><u /><div className="g3"><s /><s /><s /></div>
          </div>
        </div>
        <ol className="mat-steps"><li>You send what you have</li><li>We shape it</li><li>You review it</li></ol>
      </div>
    </section>
  );
}

function Slot({ tone, label }) {
  return <div className="slot" style={{ "--tone": tone }} role="img" aria-label={label}><span>Image to come</span></div>;
}

function SelectedWork() {
  const [a, b] = PROJECTS;
  return (
    <section className="sec" aria-labelledby="work-h">
      <div className="head" data-reveal><p className="kicker">Selected work</p><h2 id="work-h">Two projects. The rest are on the work page.</h2></div>
      <div className="duo">
        <A to={`/work/${a.slug}`} className="proj big" data-reveal><Slot tone={a.tone} label={`${a.name} preview`} /><h3>{a.name}</h3><span className="textlink">Open case study</span></A>
        <A to={`/work/${b.slug}`} className="proj small" data-reveal><Slot tone={b.tone} label={`${b.name} preview`} /><h3>{b.name}</h3><span className="textlink">Open case study</span></A>
      </div>
    </section>
  );
}

function Portrait({ person, tall }) {
  return (
    <figure className={`person ${tall}`} data-reveal>
      <div className="slot portrait" style={{ "--tone": "#1d5a3a" }} role="img" aria-label={`Portrait of ${person.name}, to come`}><b>{person.initials}</b><span>Portrait to come</span></div>
      <figcaption><strong>{person.name}</strong><em>{person.role}</em><p>{person.remit}</p></figcaption>
    </figure>
  );
}
function Team({ heading = true }) {
  return (
    <section className="sec team" aria-labelledby="team-h">
      <div className="head" data-reveal><p className="kicker">The team</p>
        <h2 id="team-h" className="quote"><span aria-hidden="true">“</span>{TEAM_QUOTE}<span aria-hidden="true">”</span></h2>
        <p className="fine">The OneSimpleSite team</p></div>
      <div className="people"><Portrait person={PEOPLE[0]} tall="t1" /><Portrait person={PEOPLE[1]} tall="t2" /><Portrait person={PEOPLE[2]} tall="t3" /></div>
    </section>
  );
}

function Prices() {
  return (
    <section className="sec" id="packages" aria-labelledby="price-h">
      <div className="head" data-reveal><p className="kicker">Packages</p><h2 id="price-h">Fixed prices. Pick the one that fits.</h2></div>
      <div className="menu">
        {PACKAGES.map((p) => (
          <article key={p.id} className={`pkg ${p.recommended ? "rec" : ""}`} data-reveal>
            {p.recommended && <span className="badge">Most chosen</span>}
            <h3>{p.name}</h3><p className="tag">{p.tagline}</p>
            <p className="price"><span>£</span>{p.price}</p>
            <ul>{p.features.map((f) => <li key={f}>{f}</li>)}</ul>
            <p className="fine">For {p.ideal.toLowerCase()}. Delivered in {p.delivery}.</p>
            <a className={`btn ${p.recommended ? "" : "btn-ghost"}`} href={`mailto:${EMAIL}?subject=${encodeURIComponent(p.name)}`}>Start with {p.name}</a>
          </article>
        ))}
      </div>
    </section>
  );
}

function Faq() {
  return (
    <section className="sec faq" aria-labelledby="faq-h">
      <div className="head" data-reveal><p className="kicker">Before you ask</p><h2 id="faq-h">Straight answers.</h2></div>
      <div className="faqlist">{FAQ.map((f) => <details key={f.q} data-reveal><summary>{f.q}</summary><p>{f.a}</p></details>)}</div>
    </section>
  );
}

function Close() {
  return (
    <section className="close" aria-labelledby="close-h">
      <h2 id="close-h" data-reveal>Tell us about your business.</h2>
      <p data-reveal>Send a short brief with what you do, where you work and what you want customers to do. We reply by email to confirm scope.</p>
      <div className="hero-actions" data-reveal><a className="btn btn-light" href={`mailto:${EMAIL}?subject=Project%20brief`}>Start your brief</a><span className="mailtxt">{EMAIL}</span></div>
    </section>
  );
}

function Footer() {
  return (
    <footer className="foot"><span>OneSimpleSite. Fixed-price websites for UK businesses.</span><span><A to="/about">About</A> · <A to="/work">Work</A> · <a href={`mailto:${EMAIL}`}>{EMAIL}</a></span></footer>
  );
}

function Home() {
  useReveal("home");
  return (<><Hero /><TradeIndex /><MaterialIn /><SelectedWork /><Team /><Prices /><Faq /><Close /></>);
}

function About() {
  useReveal("about");
  return (
    <>
      <section className="hero about-hero"><p className="kicker">About</p><h1>Three people. One <em>simple</em> site.</h1>
        <p className="lede">Look right, feel right, work for the business. Each of us owns one of those, and you deal with all three.</p></section>
      <Team />
      <section className="sec" aria-labelledby="how-h">
        <div className="head" data-reveal><p className="kicker">How we work together</p><h2 id="how-h">Look right. Feel right. Work for the business.</h2></div>
        <div className="three">
          <article data-reveal><h3>Look right</h3><p>Design that suits the trade and the town, so a customer knows within seconds they are in the right place.</p></article>
          <article data-reveal><h3>Feel right</h3><p>Interaction and pacing that are easy on a phone, with nothing getting between a customer and the next step.</p></article>
          <article data-reveal><h3>Work for the business</h3><p>A brief that starts from what you want customers to do, plus someone to keep you informed until launch.</p></article>
        </div>
      </section>
      <Close />
    </>
  );
}

function WorkIndex() {
  useReveal("work");
  return (
    <>
      <section className="hero about-hero"><p className="kicker">Work</p><h1>Projects, <em>one at a time.</em></h1><p className="lede">Screenshots and write-ups are being added project by project.</p></section>
      <section className="sec"><div className="duo even">{PROJECTS.map((p) => <A key={p.slug} to={`/work/${p.slug}`} className="proj" data-reveal><Slot tone={p.tone} label={`${p.name} preview`} /><h3>{p.name}</h3><span className="textlink">Open case study</span></A>)}</div></section>
      <Close />
    </>
  );
}

function CaseStudy({ slug }) {
  useReveal(slug);
  const i = PROJECTS.findIndex((p) => p.slug === slug);
  if (i < 0) return <section className="hero about-hero"><h1>Project not found.</h1><A to="/work" className="textlink">Back to work</A></section>;
  const p = PROJECTS[i], next = PROJECTS[(i + 1) % PROJECTS.length];
  const rooms = [["The brief", "Who they are and what they needed. To be written with the team."], ["The decisions", "Layout, type and calls to action, each with a real crop. To be added with the project images."], ["The finished site", "A scrollable view of the live site. To be added."]];
  return (
    <article className="case" style={{ "--tone": p.tone }}>
      <section className="case-hero"><p className="kicker">Case study</p><h1>{p.name}</h1><A to="/work" className="textlink">All work</A></section>
      <section className="sec"><Slot tone={p.tone} label={`${p.name} hero image`} /></section>
      {rooms.map(([t, c]) => <section className="sec room" key={t}><div className="head" data-reveal><h2>{t}</h2><p className="lede">{c}</p></div></section>)}
      <A to={`/work/${next.slug}`} className="portal" style={{ "--next": next.tone }}><span className="kicker">Next</span><strong>{next.name}</strong><span className="textlink">Go there</span></A>
    </article>
  );
}

function App() {
  const route = useRoute();
  const [, seg, slug] = route.split("/");
  let page;
  if (seg === "about") page = <About />;
  else if (seg === "work" && slug) page = <CaseStudy slug={slug} />;
  else if (seg === "work") page = <WorkIndex />;
  else page = <Home />;
  useEffect(() => { document.title = seg === "about" ? "About | OneSimpleSite" : seg === "work" ? "Work | OneSimpleSite" : "OneSimpleSite | Fixed-Price Websites for UK Local Businesses"; }, [seg]);
  return (
    <>
      <Header route={route} />
      <TheLine />
      <main id="main" tabIndex="-1">{page}</main>
      <Footer />
    </>
  );
}

createRoot(document.getElementById("root")).render(<App />);
