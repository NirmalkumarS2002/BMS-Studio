import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { Youtube, Facebook, XLogo, Linkedin } from "../ui/Icons";
import { images } from "../../data/images";
import { heroCards, socials } from "../../data/content";
import "./Hero.css";

const socialIcons = { youtube: Youtube, facebook: Facebook, x: XLogo, linkedin: Linkedin };
const heroSlides = [images.hero, images.projects.wedding, images.services.commercial, images.services.architectural];

export default function Hero() {
  const [activeSlide, setActiveSlide] = useState(0);

  useEffect(() => {
    const timer = window.setInterval(() => {
      setActiveSlide((current) => (current + 1) % heroSlides.length);
    }, 5000);

    return () => window.clearInterval(timer);
  }, []);

  return (
    <section id="home" className="hero">
      <div className="hero__bg" aria-hidden="true">
        {heroSlides.map((src, index) => (
          <img
            key={`${src}-${index}`}
            src={src}
            alt=""
            fetchpriority={index === 0 ? "high" : undefined}
            className={`hero__bg-image ${index === activeSlide ? "is-active" : ""}`}
          />
        ))}
        <div className="hero__shade" />
      </div>

      <div className="container hero__inner">
        <div className="hero__top">
          <h1 className="hero__title" aria-label="Photolio">
            {"PHOTOLIO".split("").map((c, i) => (
              <span key={i} className="hero__letter" style={{ "--i": i }} aria-hidden="true">{c}</span>
            ))}
          </h1>

          <Reveal as="p" delay={700} className="hero__tagline">
            <span>Capturing life's</span>
            <span>Extraordinary moments</span>
          </Reveal>

          <Reveal delay={850}>
            <Button href="#projects" variant="outline">View Portfolio</Button>
          </Reveal>
        </div>

        <div className="hero__bottom">
          <div className="hero__cards">
            {heroCards.map((c, i) => (
              <Reveal key={c.title} variant="left" delay={950 + i * 150}>
                <a href="#projects" className="hero-card">
                  <img src={c.img} alt="" loading="lazy" />
                  <div className="hero-card__body">
                    <h3>{c.title}</h3>
                    <span>{c.meta}</span>
                  </div>
                </a>
              </Reveal>
            ))}
          </div>

          <Reveal variant="right" delay={1100} className="hero__social">
            <p>Follow us on social media</p>
            <ul>
              {socials.map((s) => {
                const Icon = socialIcons[s.icon];
                return (
                  <li key={s.name}>
                    <a href={s.href} aria-label={s.name}><Icon width={24} height={24} /></a>
                  </li>
                );
              })}
            </ul>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
