import { useEffect, useRef, useState } from "react";
import { Logo, Plus, Menu, Close, Sun, Moon } from "../ui/Icons";
import Button from "../ui/Button";
import { nav } from "../../data/content";
import "./Header.css";

export default function Header({ theme, onThemeChange }) {
  const [scrolled, setScrolled] = useState(false);
  const [mobileHidden, setMobileHidden] = useState(false);
  const [open, setOpen] = useState(false);
  const [sub, setSub] = useState(null);
  const [active, setActive] = useState("home");
  const lastScrollY = useRef(0);

  // Keep the mobile header available when scrolling back up.
  useEffect(() => {
    const onScroll = () => {
      const currentY = window.scrollY;
      const delta = currentY - lastScrollY.current;
      setScrolled(currentY > 24);

      if (window.innerWidth > 900 || currentY <= 24) {
        setMobileHidden(false);
      } else if (delta > 4 && currentY > 80) {
        setMobileHidden(true);
      } else if (delta < -4) {
        setMobileHidden(false);
      }

      lastScrollY.current = currentY;
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Lock page scroll while the mobile menu is open; close it when resizing to desktop
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    const onResize = () => window.innerWidth > 900 && setOpen(false);
    window.addEventListener("resize", onResize);
    return () => {
      document.body.style.overflow = "";
      window.removeEventListener("resize", onResize);
    };
  }, [open]);

  // Scroll-spy for the active pill
  useEffect(() => {
    const els = nav.map((n) => document.getElementById(n.id)).filter(Boolean);
    if (!els.length || typeof IntersectionObserver === "undefined") return;
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: "-45% 0px -50% 0px" }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, []);

  const close = () => {
    setOpen(false);
    setSub(null);
  };

  return (
    <header className={`header ${scrolled ? "is-scrolled" : ""} ${mobileHidden ? "is-hidden" : ""} ${open ? "is-open" : ""}`}>
      <div className="container header__bar">
        <a href="#home" className="header__logo" aria-label="BMS Studio home" onClick={close}>
          <Logo />
        </a>

        <nav className="header__nav" id="primary-nav" aria-label="Primary">
          <ul className="nav-pill">
            {nav.map((item, i) => (
              <li
                key={item.label}
                className={`nav-pill__item ${item.children ? "has-sub" : ""} ${sub === i ? "is-sub-open" : ""}`}
              >
                <a
                  href={item.href}
                  className={`nav-pill__link ${active === item.id ? "is-active" : ""}`}
                  onClick={(e) => {
                    if (item.children && window.innerWidth <= 900) {
                      e.preventDefault();
                      setSub(sub === i ? null : i);
                    } else close();
                  }}
                >
                  {item.label}
                  {item.children && <Plus className="nav-pill__plus" width={14} height={14} />}
                </a>
                {item.children && (
                  <ul className="nav-sub">
                    {item.children.map((c) => (
                      <li key={c.label}>
                        <a href={c.href} onClick={close}>{c.label}</a>
                      </li>
                    ))}
                  </ul>
                )}
              </li>
            ))}
            <li className="nav-pill__cta">
              <Button href="#contact" onClick={close}>Book a Shoot</Button>
            </li>
          </ul>
        </nav>

        <div className="header__actions">
          <Button href="#contact" className="header__cta">Book a Shoot</Button>
          <button
            type="button"
            className="theme-toggle"
            aria-label={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
            aria-pressed={theme === "light"}
            onClick={onThemeChange}
          >
            {theme === "dark" ? <Sun width={20} height={20} /> : <Moon width={20} height={20} />}
          </button>
          <button
            className="header__burger"
            aria-label={open ? "Close menu" : "Open menu"}
            aria-expanded={open}
            aria-controls="primary-nav"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <Close width={24} height={24} /> : <Menu width={24} height={24} />}
          </button>
        </div>
      </div>
    </header>
  );
}
