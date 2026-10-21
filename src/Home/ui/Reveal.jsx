import useInView from "../../hooks/useInView";
import "./Reveal.css";

/**
 * Scroll-triggered entrance animation.
 * variant: up | down | left | right | scale | fade
 * Don't put hover transforms on the same element – wrap it instead.
 */
export default function Reveal({
  as: Tag = "div",
  variant = "up",
  delay = 0,
  className = "",
  style,
  children,
  ...rest
}) {
  const [ref, inView] = useInView();
  return (
    <Tag
      ref={ref}
      className={`reveal reveal--${variant} ${inView ? "is-visible" : ""} ${className}`}
      style={{ "--reveal-delay": `${delay}ms`, ...style }}
      {...rest}
    >
      {children}
    </Tag>
  );
}
