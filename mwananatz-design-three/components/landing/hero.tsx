import Image from "next/image";
import { heroImage } from "@/lib/site-assets";

export function Hero() {
  return (
    <section className="nc-hero" aria-label="Hero">
      <div className="nc-container">
        <div className="nc-hero__grid">
          <div className="nc-hero__content nc-neu">
            <h1>
              Your Gateway to Creative Solutions and Media Communication Excellence in Zanzibar
            </h1>
            <p className="nc-hero__lead">
              We help ambitious brands cut through noise with strategy-led creative, purposeful media,
              and stories that resonate from Stone Town to the world.
            </p>
            <div className="nc-hero__actions">
              <a className="nc-btn nc-btn--gold" href="#contact">
                Work With Us
                <svg width={17} height={17} viewBox="0 0 24 24" fill="none" aria-hidden>
                  <path
                    d="M7 17L17 7M17 7H9M17 7V15"
                    stroke="currentColor"
                    strokeWidth={2}
                    strokeLinecap="round"
                    strokeLinejoin="round"
                  />
                </svg>
              </a>
              <a className="nc-btn nc-btn--surface" href="#work">
                View Our Work
              </a>
            </div>
          </div>
          <div className="nc-hero__visual nc-neu">
            <div className="nc-hero__frame">
              <Image
                src={heroImage}
                alt=""
                fill
                priority
                sizes="(max-width: 900px) 100vw, 50vw"
                className="nc-hero__img object-cover"
              />
            </div>
          </div>
        </div>
        <a href="#services" className="nc-scroll-hint" aria-label="Scroll to services">
          <span className="nc-scroll-hint__icon" aria-hidden>
            <span className="nc-scroll-hint__chev" />
          </span>
          <span className="nc-scroll-hint__label">Scroll</span>
        </a>
      </div>
    </section>
  );
}
