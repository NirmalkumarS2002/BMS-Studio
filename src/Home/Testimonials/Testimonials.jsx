import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { Star } from "../ui/Icons";
import { testimonials, testimonialFeature as feature, LOREM_LONG } from "../../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <SectionHeading index="05" label="Testimonials" title="Client Stories Reflecting Quality Results">
          <p>{LOREM_LONG}</p>
        </SectionHeading>

        <div className="testimonials">
          {testimonials.map((t, i) => (
            <Reveal key={t.name} variant="up" delay={i * 140}>
              <figure className="quote">
                <div className="quote__stars" aria-label="5 out of 5 stars">
                  {[0, 1, 2, 3, 4].map((n) => (
                    <Star key={n} width={24} height={24} style={{ "--n": n }} />
                  ))}
                </div>
                <blockquote>{t.text}</blockquote>
                <figcaption className="quote__author">
                  <img src={t.avatar} alt="" loading="lazy" />
                  <div>
                    <strong>{t.name}</strong>
                    <span>{t.role}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}

          <Reveal variant="up" delay={280}>
            <figure className="quote quote--feature">
              <img className="quote__bg" src={feature.img} alt="" loading="lazy" />
              <div className="quote__shade" />
              <blockquote>{feature.text}</blockquote>
              <figcaption className="quote__feature-author">
                <strong><i className="dot" />{feature.name}</strong>
                <span>{feature.role}</span>
              </figcaption>
            </figure>
          </Reveal>
        </div>
      </div>
    </section>
  );
}
