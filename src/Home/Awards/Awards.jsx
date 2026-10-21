import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "../ui/Icons";
import { awards, LOREM_LONG } from "../../data/content";
import "./Awards.css";

export default function Awards() {
  return (
    <section id="awards" className="section awards-section">
      <div className="container">
        <SectionHeading index="06" label="Awards" title="Awards Celebrating Creative Achievement">
          <p>{LOREM_LONG}</p>
        </SectionHeading>

        <ul className="awards">
          {awards.map((a, i) => (
            <Reveal as="li" key={a.title} variant="up" delay={i * 80} className="award-wrap">
              <a href="#" className="award">
                <span className="award__no">{a.no}</span>

                <div className="award__content">
                  <p className="award__meta">
                    {a.category}<i className="dot" />{a.date}
                  </p>
                  <h3 className="award__title">{a.title}</h3>
                  <p className="award__text">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.
                  </p>
                </div>

                <div className="award__thumb">
                  <img src={a.img} alt="" loading="lazy" />
                  <span className="arrow-circle award__arrow"><ArrowUpRight width={20} height={20} /></span>
                </div>
              </a>
            </Reveal>
          ))}
        </ul>
      </div>
    </section>
  );
}
