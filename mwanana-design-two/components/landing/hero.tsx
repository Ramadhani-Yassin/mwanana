import Image from "next/image";
import { HeroTypewriter } from "@/components/landing/hero-typewriter";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="mw-hero" aria-label="Hero">
      <div className="mw-hero__media">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="mw-hero__img"
        />
      </div>
      <div className="mw-hero__veil" />
      <div className="mw-hero__pattern" aria-hidden />
      <div className="mw-container mw-hero__inner">
        <div className="mw-hero__panel">
          <HeroTypewriter />
          <p className="mw-hero__lead">
            We help ambitious brands cut through noise with strategy-led creative, purposeful media,
            and stories that resonate from Stone Town to the world.
          </p>
          <div className="mw-hero__actions">
            <a className="mw-btn mw-btn--gold" href="#contact">
              Work With Us
              <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden>
                <path
                  d="M7 17L17 7M17 7H9M17 7V15"
                  stroke="currentColor"
                  strokeWidth={2}
                  strokeLinecap="round"
                  strokeLinejoin="round"
                />
              </svg>
            </a>
            <a className="mw-btn mw-btn--ghost" href="#work">
              View Our Work
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
