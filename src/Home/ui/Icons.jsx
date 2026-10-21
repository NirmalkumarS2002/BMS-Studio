const base = { width: 20, height: 20, viewBox: "0 0 24 24", "aria-hidden": true, focusable: false };
const stroke = { fill: "none", stroke: "currentColor", strokeWidth: 1.6, strokeLinecap: "round", strokeLinejoin: "round" };

export const ArrowUpRight = (p) => (
  <svg {...base} {...stroke} {...p}><path d="M7 17 17 7M8 7h9v9" /></svg>
);
export const Plus = (p) => (
  <svg {...base} {...stroke} {...p}><path d="M12 5v14M5 12h14" /></svg>
);
export const Menu = (p) => (
  <svg {...base} {...stroke} {...p}><path d="M4 7h16M4 12h16M4 17h16" /></svg>
);
export const Close = (p) => (
  <svg {...base} {...stroke} {...p}><path d="M6 6l12 12M18 6 6 18" /></svg>
);
export const Calendar = (p) => (
  <svg {...base} {...stroke} {...p}><rect x="3" y="4" width="18" height="18" rx="2" /><path d="M16 2v4M8 2v4M3 10h18" /></svg>
);
export const Folder = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M10 4H4a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h16a2 2 0 0 0 2-2V8a2 2 0 0 0-2-2h-8l-2-2z" /></svg>
);
export const Pin = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M12 2C8.1 2 5 5.1 5 9c0 5.2 7 13 7 13s7-7.8 7-13c0-3.9-3.1-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6.5a2.5 2.5 0 0 1 0 5z" /></svg>
);
export const Star = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M12 2l3.09 6.26L22 9.27l-5 4.87 1.18 6.88L12 17.77l-6.18 3.25L7 14.14 2 9.27l6.91-1.01L12 2z" /></svg>
);
export const Play = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M8 5v14l11-7z" /></svg>
);
export const Youtube = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M23.5 6.2a3 3 0 0 0-2.1-2.1C19.5 3.6 12 3.6 12 3.6s-7.5 0-9.4.5A3 3 0 0 0 .5 6.2C0 8.1 0 12 0 12s0 3.9.5 5.8a3 3 0 0 0 2.1 2.1c1.9.5 9.4.5 9.4.5s7.5 0 9.4-.5a3 3 0 0 0 2.1-2.1c.5-1.9.5-5.8.5-5.8s0-3.9-.5-5.8zM9.6 15.6V8.4l6.2 3.6-6.2 3.6z" /></svg>
);
export const Facebook = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M24 12.07C24 5.4 18.63 0 12 0S0 5.4 0 12.07C0 18.1 4.39 23.1 10.13 24v-8.44H7.08v-3.49h3.05V9.41c0-3.02 1.79-4.69 4.53-4.69 1.31 0 2.68.24 2.68.24v2.97h-1.51c-1.49 0-1.96.93-1.96 1.88v2.26h3.33l-.53 3.49h-2.8V24C19.61 23.1 24 18.1 24 12.07z" /></svg>
);
export const XLogo = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M18.244 2.25h3.308l-7.227 8.26 8.502 11.24H16.17l-5.214-6.817L4.99 21.75H1.68l7.73-8.835L1.254 2.25H8.08l4.713 6.231zm-1.161 17.52h1.833L7.084 4.126H5.117z" /></svg>
);
export const Linkedin = (p) => (
  <svg {...base} fill="currentColor" {...p}><path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 1 1 0-4.125 2.062 2.062 0 0 1 0 4.125zM7.119 20.452H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" /></svg>
);

export const Logo = () => (
  <span className="logo">
    <svg width="30" height="28" viewBox="0 0 30 28" aria-hidden="true" focusable="false">
      <g fill="var(--color-accent)">
        <rect x="1" y="2" width="4" height="24" rx="2" transform="skewX(-8)" />
        <rect x="8" y="0" width="4" height="26" rx="2" transform="skewX(-8)" />
        <rect x="15" y="2" width="4" height="24" rx="2" transform="skewX(-8)" />
        <rect x="22" y="4" width="4" height="20" rx="2" transform="skewX(-8)" />
      </g>
    </svg>
    Photolio
  </span>
);
