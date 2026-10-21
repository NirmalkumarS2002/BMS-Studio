import Reveal from "../ui/Reveal";
import Button from "../ui/Button";
import SectionHeading from "../ui/SectionHeading";
import { pricingPlans } from "../../data/content";
import "./Pricing.css";

export default function Pricing() {
  return (
    <section id="pricing" className="section section--brown">
      <div className="container">
        <SectionHeading index="04" label="Pricing" title="Simple packages built around your story">
          <p>Choose a package that matches your project, timeline, and deliverables with flexible support at every stage.</p>
        </SectionHeading>

        <div className="pricing-grid">
          {pricingPlans.map((plan, index) => (
            <Reveal key={plan.name} variant="up" delay={index * 120} className="pricing-card-wrap">
              <article className={`pricing-card ${plan.featured ? "pricing-card--featured" : ""}`}>
                <div className="pricing-card__header">
                  <span className="pricing-card__tag">{plan.tag}</span>
                  <h3>{plan.name}</h3>
                  <div className="pricing-card__price">
                    <span>$</span>
                    {plan.price}
                  </div>
                  <p>{plan.description}</p>
                </div>

                <ul className="pricing-card__list">
                  {plan.features.map((feature) => (
                    <li key={feature}>{feature}</li>
                  ))}
                </ul>

                <Button href="#contact" variant={plan.featured ? "solid" : "outline"}>
                  Book {plan.name}
                </Button>
              </article>
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  );
}
