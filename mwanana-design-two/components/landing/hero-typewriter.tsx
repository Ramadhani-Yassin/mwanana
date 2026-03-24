"use client";

import { useEffect, useState } from "react";

/** Short headline — same intent, fewer words. */
export const HERO_HEADLINE_SHORT = "Creative media excellence in Zanzibar.";

export function HeroTypewriter() {
  const [shown, setShown] = useState("");
  const [complete, setComplete] = useState(false);

  useEffect(() => {
    const text = HERO_HEADLINE_SHORT;
    let i = 0;
    let timeoutId: ReturnType<typeof setTimeout>;
    let cancelled = false;

    const tick = () => {
      if (cancelled) return;
      if (i >= text.length) {
        setComplete(true);
        return;
      }
      i += 1;
      setShown(text.slice(0, i));
      if (i >= text.length) {
        setComplete(true);
        return;
      }
      const nextDelay = text[i] === " " ? 130 : 44;
      timeoutId = setTimeout(tick, nextDelay);
    };

    timeoutId = setTimeout(tick, 300);
    return () => {
      cancelled = true;
      clearTimeout(timeoutId);
    };
  }, []);

  return (
    <h1 className="mw-hero__title" aria-label={HERO_HEADLINE_SHORT}>
      <span className="mw-hero__typewrap" aria-hidden="true">
        <span className="mw-hero__type">{shown}</span>
        <span className={`mw-hero__cursor${complete ? " mw-hero__cursor--done" : ""}`}>|</span>
      </span>
    </h1>
  );
}
