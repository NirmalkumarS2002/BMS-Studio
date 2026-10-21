import Reveal from "../ui/Reveal";
import { Logo, Youtube, Facebook, XLogo, Linkedin } from "../ui/Icons";
import { nav, socials } from "../../data/content";
import "./Footer.css";

const icons = { youtube: Youtube, facebook: Facebook, x: XLogo, linkedin: Linkedin };

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container">
        <Reveal className="footer__top">
          <div className="footer__brand">
            <a href="#home" aria-label="Photolio home"><Logo /></a>
            <p>Capturing life's extraordinary moments, one frame at a time.</p>
          </div>

          <ul className="footer__links">
            {nav.map((n) => (
              <li key={n.label}><a href={n.href}>{n.label}</a></li>
            ))}
          </ul>

          <ul className="footer__social">
            {socials.map((s) => {
              const Icon = icons[s.icon];
              return (
                <li key={s.name}>
                  <a href={s.href} aria-label={s.name}><Icon width={20} height={20} /></a>
                </li>
              );
            })}
          </ul>
        </Reveal>

        <div className="footer__bottom">
          <p>© {new Date().getFullYear()} Photolio. All rights reserved.</p>
          <a href="#home" className="footer__top-link">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
