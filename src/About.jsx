import React, { useEffect, useRef, useState } from "react";
import "./About.css";

/* ---------- helpers ---------- */
const img = (seed, w = 800, h = 600) =>
  `https://picsum.photos/seed/${seed}/${w}/${h}`;

/* Scroll-reveal wrapper: adds .is-visible when element enters viewport */
function Reveal({ children, delay = 0, className = "", as: Tag = "div" }) {
  const ref = useRef(null);
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const io = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setVisible(true);
          io.disconnect();
        }
      },
      { threshold: 0.15 }
    );
    io.observe(el);
    return () => io.disconnect();
  }, []);

  return (
    <Tag
      ref={ref}
      className={`reveal ${visible ? "is-visible" : ""} ${className}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </Tag>
  );
}

/* ---------- data ---------- */
const slides = [img("cliff1", 900, 800), img("cliff2", 900, 800), img("cliff3", 900, 800)];

const checklist = [
  "Authentic storytelling focus",
  "Technical excellence standard",
  "Client-centered collaboration",
];

const awards = [
  {
    no: "01",
    cat: "Professional Category",
    date: "Feb 2024",
    title: "International Photography Awards 2024",
    img: img("award1", 500, 560),
  },
  {
    no: "02",
    cat: "Annual Competition",
    date: "Jun 2023",
    title: "Professional Photographers of America",
    img: img("award2", 500, 560),
  },
  {
    no: "03",
    cat: "Regional Award",
    date: "Mar 2025",
    title: "Wedding Photographer of the Year",
    img: img("award3", 500, 560),
  },
  {
    no: "04",
    cat: "ASMP Excellence Award",
    date: "Mar 2026",
    title: "American Society of Media Photographers",
    img: img("award4", 500, 560),
  },
];

const values = [
  { icon: "fa-clipboard-check", title: "Authenticity Over Artificiality" },
  { icon: "fa-brain", title: "Continuous Learning Commitment" },
  { icon: "fa-thumbs-up", title: "Excellence Without Compromise" },
  { icon: "fa-chart-area", title: "Ethical Business Practices" },
  { icon: "fa-user-group", title: "Client Partnership Philosophy" },
  { icon: "fa-lightbulb", title: "Creative Innovation Spirit" },
];

const team = [
  { name: "Kristin Watson", role: "Lead Photographer & Founder", img: img("team1", 600, 560) },
  { name: "Jane Cooper", role: "Senior Commercial Photographer", img: img("team2", 600, 560) },
  { name: "Brooklyn Simmons", role: "Wedding & Event Lead", img: img("team3", 600, 560) },
  { name: "Cameron Williamson", role: "Post-Production Director", img: img("team4", 600, 560) },
  { name: "Bessie Cooper", role: "Creative Director", img: img("team5", 600, 560) },
  { name: "Esther Howard", role: "Studio Manager", img: img("team6", 600, 560) },
];

const faqs = [
  { q: "When should I book photography services?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { q: "What's in the photography packages?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { q: "How long does the editing process take?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
  { q: "Can we request specific shots or poses?", a: "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna." },
];

const marquee = ["m1", "m2", "m3", "m4", "m5", "m6", "m7", "m8"].map((s) => img(s, 400, 460));

const navLinks = ["Home", "About", "Service", "Blog", "Pages"];

/* ---------- small pieces ---------- */
const Arrow = () => <i className="fa-solid fa-arrow-up-right arrow-ic" aria-hidden="true" />;

const Chevron = () => <i className="fa-solid fa-chevron-down" aria-hidden="true" />;

const socials = [
  { icon: "fa-brands fa-tiktok", label: "TikTok" },
  { icon: "fa-brands fa-youtube", label: "YouTube" },
  { icon: "fa-brands fa-facebook", label: "Facebook" },
  { icon: "fa-brands fa-x-twitter", label: "X" },
];

const footerSocials = [
  { icon: "fa-brands fa-youtube", label: "YouTube" },
  { icon: "fa-brands fa-facebook", label: "Facebook" },
  { icon: "fa-brands fa-x-twitter", label: "X" },
  { icon: "fa-brands fa-linkedin", label: "LinkedIn" },
];

const Logo = () => (
  <a href="#" className="logo">
    <span className="logo-bars"><i /><i /><i /><i /></span>
    Photolio
  </a>
);

/* ---------- page ---------- */
export default function About() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [slide, setSlide] = useState(0);
  const [openFaq, setOpenFaq] = useState(0);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = menuOpen ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [menuOpen]);

  const next = () => setSlide((s) => (s + 1) % slides.length);
  const prev = () => setSlide((s) => (s - 1 + slides.length) % slides.length);

  return (
    <div className="pl">
      {/* ===== Header ===== */}
      <header className={`pl-header ${scrolled ? "is-scrolled" : ""}`}>
        <div className="pl-container header-inner">
          <Logo />

          <nav className="pill-nav" aria-label="Main">
            {navLinks.map((l) => (
              <a key={l} href="#" className={l === "About" ? "active" : ""}>
                {l}
                {(l === "Service" || l === "Pages") && <i className="fa-solid fa-plus plus" aria-hidden="true" />}
              </a>
            ))}
          </nav>

          <a href="#" className="btn btn-light header-cta">
            Get Started <Arrow />
          </a>

          <button
            className={`burger ${menuOpen ? "open" : ""}`}
            onClick={() => setMenuOpen((o) => !o)}
            aria-label="Toggle menu"
            aria-expanded={menuOpen}
          >
            <i className={`fa-solid ${menuOpen ? "fa-xmark" : "fa-bars"}`} aria-hidden="true" />
          </button>
        </div>

        {/* mobile drawer */}
        <div className={`drawer ${menuOpen ? "open" : ""}`}>
          {navLinks.map((l, i) => (
            <a
              key={l}
              href="#"
              onClick={() => setMenuOpen(false)}
              style={{ transitionDelay: menuOpen ? `${80 + i * 50}ms` : "0ms" }}
            >
              {l}
            </a>
          ))}
          <a href="#" className="btn btn-light" style={{ transitionDelay: "340ms" }}>
            Get Started <Arrow />
          </a>
        </div>
      </header>

      {/* ===== Hero ===== */}
      <section className="hero">
        <div className="hero-bg" style={{ backgroundImage: `url(${img("hero", 1920, 900)})` }} />
        <div className="hero-overlay" />
        <div className="hero-content">
          <div className="hero-cards" aria-hidden="true">
            <img className="hc hc-1" src={img("temple1", 400, 300)} alt="" />
            <img className="hc hc-2" src={img("temple2", 400, 300)} alt="" />
          </div>
          <h1 className="hero-title">About Photolio</h1>
          <p className="hero-sub">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>

      {/* ===== 01 About ===== */}
      <section className="section">
        <div className="pl-container about-grid">
          <Reveal className="about-label">
            <span className="eyebrow">[01] About</span>
          </Reveal>

          <Reveal className="about-heading" delay={100}>
            <h2 className="display">
              Photolio captures refined visual experiences through artistic vision,
              technical precision, and storytelling.
            </h2>
          </Reveal>

          <Reveal className="about-text" delay={150}>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
            </p>
          </Reveal>

          <Reveal className="about-media" delay={200}>
            <div className="slider">
              <div className="slider-track" style={{ transform: `translateX(-${slide * 100}%)` }}>
                {slides.map((s, i) => (
                  <div className="slide" key={i}>
                    <img src={s} alt={`Showcase ${i + 1}`} loading="lazy" />
                  </div>
                ))}
              </div>
              <button className="round-btn left" onClick={prev} aria-label="Previous">
                <i className="fa-solid fa-chevron-left" aria-hidden="true" />
              </button>
              <button className="round-btn right" onClick={next} aria-label="Next">
                <i className="fa-solid fa-chevron-right" aria-hidden="true" />
              </button>
            </div>

            <div className="about-side">
              <div className="thumb">
                <img src={img("thumb", 700, 450)} alt="" loading="lazy" />
              </div>
              <ul className="checklist">
                {checklist.map((c) => (
                  <li key={c}>{c}</li>
                ))}
              </ul>
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== 02 Awards ===== */}
      <section className="section">
        <div className="pl-container">
          <div className="split-head">
            <Reveal>
              <span className="eyebrow">[02] Awards</span>
              <h2 className="display md">Awards Celebrating Creative Achievement</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
            </Reveal>
          </div>

          <ul className="awards">
            {awards.map((a, i) => (
              <Reveal as="li" key={a.no} className="award" delay={i * 80}>
                <span className="award-no">{a.no}</span>
                <div className="award-body">
                  <div className="meta">
                    <span>{a.cat}</span>
                    <i className="dot" />
                    <span>{a.date}</span>
                  </div>
                  <h3>{a.title}</h3>
                  <p className="muted">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                    incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>
                <a href="#" className="award-img" aria-label={a.title}>
                  <img src={a.img} alt="" loading="lazy" />
                  <span className="round-btn small"><Arrow /></span>
                </a>
              </Reveal>
            ))}
          </ul>
        </div>
      </section>

      {/* ===== 03 Values ===== */}
      <section className="section values">
        <div className="pl-container">
          <div className="split-head">
            <Reveal>
              <span className="eyebrow">[03] Our Values</span>
              <h2 className="display md">What We Believe About Photography</h2>
            </Reveal>
            <Reveal delay={120}>
              <p className="muted">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud.
              </p>
            </Reveal>
          </div>

          <div className="cards-3">
            {values.map((v, i) => (
              <Reveal key={v.title} className="value-card" delay={(i % 3) * 100}>
                <div className="value-icon"><i className={`fa-regular ${v.icon}`} aria-hidden="true" /></div>
                <h3>{v.title}</h3>
                <p className="muted">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
                  incididunt ut labore et dolore magna.
                </p>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 04 Team ===== */}
      <section className="section team">
        <div className="pl-container">
          <Reveal className="center-head">
            <span className="eyebrow">[04] Our Team</span>
            <h2 className="display md">Our Photography Team Members</h2>
            <p className="muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>
          </Reveal>

          <div className="cards-3">
            {team.map((m, i) => (
              <Reveal key={m.name} className="team-card" delay={(i % 3) * 100}>
                <div className="team-photo">
                  <img src={m.img} alt={m.name} loading="lazy" />
                </div>
                <div className="team-info">
                  <h3>{m.name}</h3>
                  <p className="muted">{m.role}</p>
                  <div className="socials">
                    {socials.map((s) => (
                      <a key={s.label} href="#" aria-label={s.label}>
                        <i className={s.icon} aria-hidden="true" />
                      </a>
                    ))}
                  </div>
                </div>
              </Reveal>
            ))}
          </div>
        </div>
      </section>

      {/* ===== 05 FAQ ===== */}
      <section className="section">
        <div className="pl-container faq-grid">
          <Reveal className="faq-media">
            <img src={img("faq", 900, 1100)} alt="" loading="lazy" />
            <div className="quick-card">
              <h4><i className="fa-regular fa-comments" aria-hidden="true" /> Need Quick Answers?</h4>
              <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do.</p>
              <a href="#" className="btn btn-outline">Call Us Now <Arrow /></a>
            </div>
          </Reveal>

          <Reveal className="faq-content" delay={120}>
            <span className="eyebrow">[05] FAQs</span>
            <h2 className="display md">Your Photography Questions Answered</h2>
            <p className="muted">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
              incididunt ut labore et dolore magna aliqua.
            </p>

            <div className="accordion">
              {faqs.map((f, i) => (
                <div key={f.q} className={`acc-item ${openFaq === i ? "open" : ""}`}>
                  <button
                    className="acc-head"
                    onClick={() => setOpenFaq(openFaq === i ? -1 : i)}
                    aria-expanded={openFaq === i}
                  >
                    <span>{f.q}</span>
                    <Chevron />
                  </button>
                  <div className="acc-panel">
                    <div className="acc-inner">
                      <p>{f.a}</p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </Reveal>
        </div>
      </section>

      {/* ===== CTA + marquee ===== */}
      <section className="section cta-wrap">
        <div className="pl-container">
          <Reveal className="cta">
            <div className="cta-cards left" aria-hidden="true">
              <img src={img("c1", 300, 380)} alt="" />
              <img src={img("c2", 300, 380)} alt="" />
            </div>
            <div className="cta-body">
              <h2 className="display md">Let's Create Beautiful Photography Together</h2>
              <a href="#" className="btn btn-light">Schedule Consultation <Arrow /></a>
            </div>
            <div className="cta-cards right" aria-hidden="true">
              <img src={img("c3", 300, 380)} alt="" />
              <img src={img("c4", 300, 380)} alt="" />
            </div>
          </Reveal>
        </div>

        <div className="marquee" aria-hidden="true">
          <div className="marquee-track">
            {[...marquee, ...marquee].map((s, i) => (
              <img key={i} src={s} alt="" loading="lazy" />
            ))}
          </div>
        </div>
      </section>

      {/* ===== Footer ===== */}
      <footer className="footer">
        <div className="pl-container footer-grid">
          <div className="footer-brand">
            <Logo />
            <p>
              Award-winning photography studio specialising in portraits, commercial work and
              visual storytelling.
            </p>
            <div className="socials">
              {footerSocials.map((s) => (
                <a key={s.label} href="#" aria-label={s.label}>
                  <i className={s.icon} aria-hidden="true" />
                </a>
              ))}
            </div>
          </div>

          <div className="footer-col">
            <h5>Quick Links</h5>
            <ul>
              {["Home", "About Us", "Services", "Projects", "Blog", "Contact"].map((l) => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

          <div className="footer-col">
            <h5>Services</h5>
            <ul>
              {["Portrait Photography", "Wedding Photography", "Commercial Photography", "Event Coverage", "Product Photography", "Editorial & Fashion"].map((l, i, arr) => (
                <li key={l} className={i === arr.length - 1 ? "hl" : ""}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>
        </div>

        <div className="pl-container footer-bottom">
          <span>© 2026 Photolio. All rights reserved.</span>
          <div>
            <a href="#">Privacy Policy</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>
      </footer>
    </div>
  );
}