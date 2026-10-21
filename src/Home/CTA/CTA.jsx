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
            <span className="eyebrow">Ready when you are</span>
            <h2>Let's Create Something Timeless Together</h2>
            <p>Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore.</p>
            <Button href="#contact">Book a Session</Button>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
