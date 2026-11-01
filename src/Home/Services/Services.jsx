import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "../ui/Icons";
import { services, studioDetail } from "../../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading index="03" label="Photography Services" title="For your people, occasions and business">
          <p>{studioDetail}</p>
          <Button href="#contact" variant="outline">Ask about a shoot</Button>
        </SectionHeading>

        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={(i % 3) * 120}>
              <a href="#contact" className="service">
                <img className="service__img" src={s.img} alt="" loading="lazy" />
                
                <div className="service__tint" />
                <span className="arrow-circle service__arrow"><ArrowUpRight width={20} height={20} /></span>
                <div className="service__body">
                  <h3 className="service__title">{s.title}</h3>
                  <p>{s.text}</p>
                </div>
              </a>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
