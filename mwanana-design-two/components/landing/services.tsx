import type { ReactNode } from "react";

const services: {
  title: string;
  description: string;
  icon: ReactNode;
  bento: "wide" | "narrow";
}[] = [
  {
    title: "Content Creation",
    description:
      "Campaign narratives, digital storytelling, and production that amplifies your message with consistency and flair.",
    bento: "wide",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M19.428 15.428a2 2 0 00-1.022-.547l-2.387-.477a6 6 0 00-3.86.517l-.318.158a6 6 0 01-3.86.517L6.05 15.21a2 2 0 00-1.806.547M8 4h8l-1 1v5.172a2 2 0 00.586 1.414l5 5c1.26 1.26.367 3.414-1.415 3.414H4.828c-1.782 0-2.674-2.154-1.414-3.414l5-5A2 2 0 009 10.172V5L8 4z"
        />
      </svg>
    ),
  },
  {
    title: "Design & Visuals",
    description:
      "Identity systems, art direction, and visual languages that feel bold yet refined across every touchpoint.",
    bento: "wide",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M4 16l4.586-4.586a2 2 0 012.828 0L16 16m-2-2l1.586-1.586a2 2 0 012.828 0L20 14m-6-6h.01M6 20h12a2 2 0 002-2V6a2 2 0 00-2-2H6a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
  {
    title: "Branding",
    description:
      "Positioning, naming, and brand architecture built to travel — grounded in local insight and global standards.",
    bento: "narrow",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M7 21a4 4 0 01-4-4V5a2 2 0 012-2h4a2 2 0 012 2v12a4 4 0 01-4 4zm0 0h12a2 2 0 002-2v-4a2 2 0 00-2-2h-2.343M11 7.343l1.657-1.657a2 2 0 012.828 0l2.829 2.829a2 2 0 010 2.828l-8.486 8.485M7 17h.01"
        />
      </svg>
    ),
  },
  {
    title: "Media Planning & Buying",
    description:
      "Channel strategy, negotiation, and optimization — so your budget works harder on the platforms that matter.",
    bento: "narrow",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 19v-6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2a2 2 0 002-2zm0 0V9a2 2 0 012-2h2a2 2 0 012 2v10m-6 0a2 2 0 002 2h2a2 2 0 002-2m0 0V5a2 2 0 012-2h2a2 2 0 012 2v14a2 2 0 01-2 2h-2a2 2 0 01-2-2z"
        />
      </svg>
    ),
  },
  {
    title: "Marketing Communications",
    description:
      "Full-funnel campaigns across digital, experiential, and traditional — orchestrated for growth and recall.",
    bento: "narrow",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M11 5.882V19.24a1.76 1.76 0 01-3.417.592l-2.147-6.15M18 13a3 3 0 100-6M5.436 13.683A4.006 4.006 0 017 6h1.832c0 1.603.629 3.122 1.772 4.253M18 13a4 4 0 00-3.128-3.952 4.003 4.003 0 00-3.555.832M5.436 13.683A4.001 4.001 0 014 15h0"
        />
      </svg>
    ),
  },
  {
    title: "Public Relations",
    description:
      "Stakeholder engagement, media relations, and issues management that protect and elevate reputation.",
    bento: "wide",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 12h.01M12 12h.01M16 12h.01M21 12c0 4.418-4.03 8-9 8a9.863 9.863 0 01-4.255-.949L3 20l1.395-3.72C3.512 15.042 3 13.574 3 12c0-4.418 4.03-8 9-8s9 3.582 9 8z"
        />
      </svg>
    ),
  },
  {
    title: "Event Management",
    description:
      "Launch moments, conferences, and activations — concept to logistics, with polish and precision.",
    bento: "wide",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={1.75} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export function Services() {
  return (
    <section className="mw-section mw-section--light" id="services">
      <div className="mw-container">
        <header className="mw-section__head mw-section__head--split" data-animate>
          <span className="mw-idx" aria-hidden>
            01
          </span>
          <div>
            <p className="mw-eyebrow">What we do</p>
            <h2>Our Services</h2>
            <p>
              Integrated communications across creative, media, and reputation — delivered with
              clarity, craft, and measurable impact.
            </p>
          </div>
        </header>
        <div className="mw-services-grid">
          {services.map((s) => (
            <article
              key={s.title}
              className={`mw-service${s.bento === "narrow" ? " mw-service--span2" : ""}`}
              data-animate
            >
              <div className="mw-service__icon">{s.icon}</div>
              <h3>{s.title}</h3>
              <p>{s.description}</p>
              <a className="mw-service__more" href="#contact">
                Learn More <span aria-hidden="true">→</span>
              </a>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
