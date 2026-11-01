import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { studioHighlights, studioIntro } from "../../data/content";
import "./Awards.css";

export default function Awards() {
  return (
    <section id="approach" className="section awards-section">
      <div className="container">
        <SectionHeading index="06" label="The BMS Approach" title="Thoughtful photography, from planning to delivery">
          <p>{studioIntro}</p>
        </SectionHeading>

        <ul className="awards">
          {studioHighlights.map((a, i) => (
            <Reveal as="li" key={a.title} variant="up" delay={i * 80} className="award-wrap">
              <article className="award">
                <span className="award__no">{a.no}</span>

                <div className="award__content">
                  <p className="award__meta">
                    {a.category}<i className="dot" />{a.location}
                  </p>
                  <h3 className="award__title">{a.title}</h3>
                  <p className="award__text">{a.text}</p>
                </div>

                <div className="award__thumb">
                  <img src={a.img} alt="" loading="lazy" />
                </div>
              </article>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
