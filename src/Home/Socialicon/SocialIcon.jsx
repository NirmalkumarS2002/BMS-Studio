import { Facebook, Linkedin, XLogo, Youtube } from "../ui/Icons";
import { socials } from "../../data/content";

const socialIcons = { youtube: Youtube, facebook: Facebook, x: XLogo, linkedin: Linkedin };

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
  transform: translateY(-50%);
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
  font-size: 18px;
  text-decoration: none;
  transition: transform 0.2s ease, border-color 0.2s ease, color 0.2s ease;
}
.social-icons a:hover {
  transform: scale(1.1);
  border-color: #fff;
  color: #f57e42;
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
  return (
    <>
      <style>{css}</style>
      <nav className="social-icons" aria-label="Social links">
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
            <Icon width={20} height={20} />
          </a>
          );
        })}
      </nav>
    </>
  );
}