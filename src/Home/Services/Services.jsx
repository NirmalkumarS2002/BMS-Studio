import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { ArrowUpRight } from "../ui/Icons";
import { services } from "../../data/content";
import "./Services.css";

export default function Services() {
  return (
    <section id="services" className="section">
      <div className="container">
        <SectionHeading index="03" label="Services" title="Full-Service Photography Covering Requirements">
          <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore.</p>
          <Button href="#contact" variant="outline">Explore Service</Button>
        </SectionHeading>

        <div className="services">
          {services.map((s, i) => (
            <Reveal key={s.title} variant="up" delay={(i % 3) * 120}>
              <a href="#contact" className="service">
                <img className="service__img" src={s.img} alt="" loading="lazy" />
                <div className="service__shade" />
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
