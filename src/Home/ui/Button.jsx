import { ArrowUpRight } from "./Icons";
import "./Button.css";

/** variant: solid (white pill) | outline */
export default function Button({ href, variant = "solid", icon = true, className = "", children, type, ...rest }) {
  const Tag = href ? "a" : "button";
  return (
    <Tag
      className={`btn btn--${variant} ${className}`}
      href={href}
      type={href ? undefined : type || "button"}
      {...rest}
    >
      <span>{children}</span>
      {icon && <ArrowUpRight className="btn__icon" width={18} height={18} />}
    </Tag>
  );
}
