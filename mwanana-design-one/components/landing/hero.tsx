import Image from "next/image";

const HERO_IMAGE =
  "https://images.unsplash.com/photo-1522071820081-009f0129c71c?auto=format&fit=crop&w=2000&q=80";

export function Hero() {
  return (
    <section className="hero" aria-label="Hero">
      <div className="hero-bg" role="presentation">
        <Image
          src={HERO_IMAGE}
          alt=""
          fill
          priority
          sizes="100vw"
          className="object-cover object-center"
        />
      </div>
      <div className="hero-overlay" role="presentation" />
      <div className="container hero-inner">
        <h1>
          Your Gateway to Creative Solutions and Media Communication Excellence in Zanzibar
        </h1>
        <p className="lead">
          We help ambitious brands cut through noise with strategy-led creative, purposeful media,
          and stories that resonate from Stone Town to the world.
        </p>
        <div className="hero-actions">
          <a className="btn btn-gold" href="#contact">
            Work With Us
            <svg width={18} height={18} viewBox="0 0 24 24" fill="none" aria-hidden="true">
              <path
                d="M7 17L17 7M17 7H9M17 7V15"
                stroke="currentColor"
                strokeWidth={2}
                strokeLinecap="round"
                strokeLinejoin="round"
              />
            </svg>
          </a>
          <a className="btn btn-outline" href="#work">
            View Our Work
          </a>
        </div>
      </div>
    </section>
  );
}
