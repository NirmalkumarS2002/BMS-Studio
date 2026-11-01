import Reveal from "../ui/Reveal";
import SectionHeading from "../ui/SectionHeading";
import { studioExperience } from "../../data/content";
import "./Testimonials.css";

export default function Testimonials() {
  return (
    <section id="testimonials" className="section testimonials-section">
      <div className="container">
        <SectionHeading index="05" label="Your Session" title="A considered experience at every step">
          <p>From the first message to the finished images, BMS Studio keeps the process personal, clear and centred on what matters to you.</p>
        </SectionHeading>

        <div className="testimonials">
          {studioExperience.map((stage, i) => (
            <Reveal key={stage.name} variant="up" delay={i * 140}>
              <figure className="quote">
                <blockquote>{stage.text}</blockquote>
                <figcaption className="quote__author">
                  <div>
                    <strong>{stage.name}</strong>
                    <span>{stage.role}</span>
                  </div>
                </figcaption>
              </figure>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
