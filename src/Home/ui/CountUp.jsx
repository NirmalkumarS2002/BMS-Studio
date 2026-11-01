import { useEffect, useState } from "react";
import useInView from "../../hooks/useInView";

/** Animates 0 → value when scrolled into view. */
export default function CountUp({ value, suffix = "", duration = 1600 }) {
  const [ref, inView] = useInView({ threshold: 0.5 });
  const [n, setN] = useState(0);

  useEffect(() => {
    if (!inView) return;
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setN(value);
      return;
    }
    let raf;
    let start;
    const tick = (t) => {
      start ??= t;
      const p = Math.min((t - start) / duration, 1);
      setN(Math.round(value * (1 - Math.pow(1 - p, 3)))); // easeOutCubic
      if (p < 1) raf = requestAnimationFrame(tick);
    };
    raf = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(raf);
  }, [inView, value, duration]);

  return (
    <span ref={ref} style={{ fontVariantNumeric: "tabular-nums" }}>
      {n}
      {suffix}
    </span>
  );
}
