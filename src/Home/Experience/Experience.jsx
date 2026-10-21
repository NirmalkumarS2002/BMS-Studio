import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";
import CountUp from "../ui/CountUp";
import useInView from "../../hooks/useInView";
import { images } from "../../data/images";
import { stats } from "../../data/content";
import "./Experience.css";

// Words animate in one by one; {pill:true} renders the inline photo.
const tokens = [
  "Extensive", "expertise", { pill: true }, "gained", "through", "numerous", "successful",
  "projects", "and", "recognised", "by", "industry", "leaders", "and", "clients", "worldwide.",
];

export default function Experience() {
  const slides = images.experience;
  const [current, setCurrent] = useState(0);
  const [paused, setPaused] = useState(false);
  const [headRef, headIn] = useInView({ threshold: 0.3 });

  useEffect(() => {
    if (paused) return;
    const t = setInterval(() => setCurrent((v) => (v + 1) % slides.length), 4500);
    return () => clearInterval(t);
  }, [paused, slides.length]);

  return (
    <section id="about" className="section section--brown">
      <div className="container">
        <div className="exp">
          <Reveal variant="left" className="exp__media">
            <div
              className="exp__slider"
              onMouseEnter={() => setPaused(true)}
              onMouseLeave={() => setPaused(false)}
            >
              {slides.map((src, i) => (
                <img key={src} src={src} alt="" loading="lazy" className={i === current ? "is-active" : ""} />
              ))}
            </div>
            <div className="exp__dots" role="tablist" aria-label="Choose slide">
              {slides.map((_, i) => (
                <button
                  key={i}
                  role="tab"
                  aria-selected={i === current}
                  aria-label={`Slide ${i + 1}`}
                  className={i === current ? "is-active" : ""}
                  onClick={() => setCurrent(i)}
                />
              ))}
            </div>
          </Reveal>

          <div className="exp__text">
            <Reveal as="span" className="eyebrow">[02] Our Experience</Reveal>
            <h2 ref={headRef} className={`exp__title ${headIn ? "is-visible" : ""}`}>
              {tokens.map((t, i) => (
                <span key={i}>
                  <span className={`word ${t.pill ? "word--pill" : ""}`} style={{ "--i": i }}>
                    {t.pill ? <img src={images.experiencePill} alt="" loading="lazy" /> : t}
                  </span>{" "}
                </span>
              ))}
            </h2>
          </div>
        </div>

        <ul className="stats">
          {stats.map((s, i) => (
            <Reveal as="li" key={s.label} delay={i * 120} className="stat">
              <strong className="stat__value"><CountUp value={s.value} suffix={s.suffix} /></strong>
              <span className="stat__label"><i className="dot" />{s.label}</span>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
