import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import { images } from "../../data/images";
import "./CTA.css";

export default function CTA() {
  return (
    <section className="cta-section">
      <div className="container">
        <Reveal variant="scale" className="cta">
          <div className="cta__side cta__side--left" aria-hidden="true"><img src={images.ctaLeft} alt="" loading="lazy" /></div>
          <div className="cta__side cta__side--right" aria-hidden="true"><img src={images.ctaRight} alt="" loading="lazy" /></div>

          <div className="cta__content">
            <span className="eyebrow">BMS Studio · Karur</span>
            <h2>Let’s plan photographs that feel like you</h2>
            <p>Tell us what you would like photographed and we’ll talk through the right session for you.</p>
            <Button href="#contact">Enquire about a shoot</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
