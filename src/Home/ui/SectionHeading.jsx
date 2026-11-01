import Reveal from "./Reveal";
import "./SectionHeading.css";

/** "[01] LABEL" + big title, with optional right-hand content (paragraph / button). */
export default function SectionHeading({ index, label, title, center = false, children }) {
  return (
    <div className={`section-heading ${center ? "is-center" : ""}`}>
      <div className="section-heading__main">
        <Reveal as="span" className="eyebrow">[{index}] {label}</Reveal>
        <Reveal as="h2" delay={100} className="section-heading__title">{title}</Reveal>
      </div>
      {children && (
        <Reveal delay={220} className="section-heading__aside">{children}</Reveal>
      )}
    </div>
  );
}
