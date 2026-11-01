import { useEffect, useState } from "react";

const socials = [
  { name: "Instagram", href: "https://instagram.com/yourpage", icon: "instagram" },
  { name: "WhatsApp", href: "https://wa.me/916383581909", icon: "whatsapp" },
  { name: "Call", href: "tel:+916383581909", icon: "phone" },
];

const Instagram = (props) => (
  <svg viewBox="0 0 24 24" {...props}>
    <defs>
      <linearGradient id="ig-gradient" x1="0" y1="1" x2="1" y2="0">
        <stop offset="0%" stopColor="#FEDA75" />
        <stop offset="25%" stopColor="#FA7E1E" />
        <stop offset="50%" stopColor="#D62976" />
        <stop offset="75%" stopColor="#962FBF" />
        <stop offset="100%" stopColor="#4F5BD5" />
      </linearGradient>
    </defs>
    <rect x="1" y="1" width="22" height="22" rx="6" fill="url(#ig-gradient)" />
    <rect x="5" y="5" width="14" height="14" rx="4" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="12" cy="12" r="3.3" fill="none" stroke="#fff" strokeWidth="1.8" />
    <circle cx="16.3" cy="7.7" r="1" fill="#fff" />
  </svg>
);

const Phone = (props) => (
  <svg viewBox="0 0 24 24" fill="#34A0F4" stroke="#34A0F4" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" {...props}>
    <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
  </svg>
);

const WhatsApp = (props) => (
  <svg viewBox="0 0 24 24" fill="#25D366" {...props}>
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const socialIcons = { instagram: Instagram, whatsapp: WhatsApp, phone: Phone };

const css = `
.social-icons {
  position: fixed;
  top: 50%;
  right: calc(16px + env(safe-area-inset-right, 0px));
  z-index: 80;
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 16px;
  background: transparent;
  transform: translate3d(0, -50%, 0);
  opacity: 1;
  visibility: visible;
  transition: transform 0.28s ease, opacity 0.18s ease, visibility 0s linear;
}
.social-icons.is-scrolling {
  transform: translate3d(18px, -50%, 0);
  opacity: 0;
  visibility: hidden;
  pointer-events: none;
  transition: transform 0.28s ease, opacity 0.18s ease, visibility 0s linear 0.18s;
}
.social-icons a {
  width: 44px;
  height: 44px;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 50%;
  border: 1px solid rgba(255, 255, 255, 0.35);
  background: transparent;
  color: #fff;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.social-icons a:hover {
  transform: scale(1.1);
  border-color: #fff;
}
@media (max-width: 600px) {
  .social-icons {
    right: calc(8px + env(safe-area-inset-right, 0px));
    gap: 10px;
  }
  .social-icons a {
    width: 38px;
    height: 38px;
  }
}
`;

export default function SocialIcons() {
  const [isScrolling, setIsScrolling] = useState(false);

  useEffect(() => {
    let idleTimer;
    const handleScroll = () => {
      setIsScrolling(true);
      window.clearTimeout(idleTimer);
      idleTimer = window.setTimeout(() => setIsScrolling(false), 250);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.clearTimeout(idleTimer);
    };
  }, []);

  return (
    <>
      <style>{css}</style>
      <nav className={`social-icons${isScrolling ? " is-scrolling" : ""}`} aria-label="Social links">
        {socials.map(({ name, href, icon }) => {
          const Icon = socialIcons[icon];
          if (!Icon) return null;

          return (
            <a
              key={name}
              href={href}
              aria-label={name}
              target={href.startsWith("http") ? "_blank" : undefined}
              rel={href.startsWith("http") ? "noopener noreferrer" : undefined}
            >
              <Icon width={25} height={25} />
            </a>
          );
        })}
      </nav>
    </>
  );
}