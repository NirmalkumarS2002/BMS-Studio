import { useEffect, useState } from "react";
import Reveal from "../ui/Reveal";
import { Play, Close } from "../ui/Icons";
import { images } from "../../data/images";
import { steps, LOREM_LONG } from "../../data/content";
import "./Process.css";

function VideoModal({ onClose }) {
  useEffect(() => {
    const onKey = (e) => e.key === "Escape" && onClose();
    document.addEventListener("keydown", onKey);
    document.body.style.overflow = "hidden";
    return () => {
      document.removeEventListener("keydown", onKey);
      document.body.style.overflow = "";
    };
  }, [onClose]);

  return (
    <div className="modal" role="dialog" aria-modal="true" aria-label="Process video" onClick={onClose}>
      <div className="modal__box" onClick={(e) => e.stopPropagation()}>
        <button className="modal__close" onClick={onClose} aria-label="Close video"><Close width={22} height={22} /></button>
        {images.processVideoSrc ? (
          <video src={images.processVideoSrc} controls autoPlay playsInline />
        ) : (
          <p className="modal__empty">Add your video URL in <code>src/data/images.js</code> (processVideoSrc).</p>
        )}
      </div>
    </div>
  );
}

export default function Process() {
  const [active, setActive] = useState(1);
  const [playing, setPlaying] = useState(false);

  return (
    <section id="process" className="section section--brown">
      <div className="container process">
        <div className="process__intro">
          <div>
            <Reveal as="span" className="eyebrow">[04] Creative Process</Reveal>
            <Reveal as="h2" delay={100} className="process__title">How We Create Unforgettable Images</Reveal>
          </div>

          <Reveal delay={200} className="process__video-wrap">
            <button className="video-thumb" onClick={() => setPlaying(true)} aria-label="Play process video">
              <img src={images.processVideo} alt="" loading="lazy" />
              <span className="video-thumb__play"><Play width={20} height={20} /></span>
            </button>
            <p>{LOREM_LONG}</p>
          </Reveal>
        </div>

        <div className="process__steps">
          {steps.map((s, i) => (
            <Reveal key={s.no} variant="up" delay={i * 120}>
              <article
                className={`step ${active === i ? "is-active" : ""}`}
                onMouseEnter={() => setActive(i)}
                onFocus={() => setActive(i)}
                onClick={() => setActive(i)}
                tabIndex={0}
              >
                <div>
                  <span className="step__no">{s.no}</span>
                  <h3 className="step__title">{s.title}</h3>
                </div>
                <p>{s.text}</p>
              </article>
            </Reveal>
          ))}
        </div>
      </div>

      {playing && <VideoModal onClose={() => setPlaying(false)} />}
    </section>
  );
}
