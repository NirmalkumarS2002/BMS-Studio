import { useState } from "react";
import "./CookieConsent.css";

const cookieName = "bms-cookie-consent";
const emptyChoices = { analytics: false, marketing: false };

function readConsent() {
  try {
    const cookie = document.cookie.split("; ").find((item) => item.startsWith(`${cookieName}=`));
    if (!cookie) return null;
    const value = JSON.parse(decodeURIComponent(cookie.slice(cookieName.length + 1)));
    if (value?.version !== 1 || typeof value.analytics !== "boolean" || typeof value.marketing !== "boolean") return null;
    return { analytics: value.analytics, marketing: value.marketing };
  } catch {
    return null;
  }
}

function writeConsent(choices) {
  const value = encodeURIComponent(JSON.stringify({ version: 1, ...choices }));
  const secure = window.location.protocol === "https:" ? "; Secure" : "";
  document.cookie = `${cookieName}=${value}; Path=/; Max-Age=15552000; SameSite=Lax${secure}`;
}

export default function CookieConsent() {
  const [consent, setConsent] = useState(readConsent);
  const [managing, setManaging] = useState(false);
  const [choices, setChoices] = useState(() => readConsent() ?? emptyChoices);

  const save = (nextChoices) => {
    writeConsent(nextChoices);
    setConsent(nextChoices);
    setManaging(false);
  };

  if (consent) return null;

  return (
    <aside className="cookie-consent" aria-label="Cookie preferences">
      <div className="cookie-consent__panel">
        <div className="cookie-consent__heading">
          <h2>Cookie preferences</h2>
        </div>
        <p>We use a cookie to remember your choices. Optional analytics and marketing are off by default; no analytics or marketing trackers are currently active on this site.</p>
        {managing && (
          <div className="cookie-consent__options">
            <label>
              <input type="checkbox" checked={choices.analytics} onChange={(event) => setChoices((current) => ({ ...current, analytics: event.target.checked }))} />
              Analytics
            </label>
            <label>
              <input type="checkbox" checked={choices.marketing} onChange={(event) => setChoices((current) => ({ ...current, marketing: event.target.checked }))} />
              Marketing
            </label>
          </div>
        )}
        <div className="cookie-consent__actions">
          {managing ? (
            <>
              <button type="button" onClick={() => save(choices)}>Save choices</button>
              <button type="button" onClick={() => save(emptyChoices)}>Reject optional</button>
            </>
          ) : (
            <>
              <button type="button" onClick={() => save(emptyChoices)}>Reject optional</button>
              <button type="button" onClick={() => setManaging(true)}>Manage</button>
              <button type="button" onClick={() => save({ analytics: true, marketing: true })}>Accept all</button>
            </>
          )}
        </div>
      </div>
    </aside>
  );
}