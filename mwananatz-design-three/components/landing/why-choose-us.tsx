import Image from "next/image";
import { stoneTownZanzibar } from "@/lib/site-assets";

const points = [
  {
    title: "Local Expertise, Global Vision",
    description:
      "Deep understanding of East African markets with frameworks used by leading global agencies.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M3.055 11H5a2 2 0 012 2v1a2 2 0 002 2 2 2 0 012 2v2.945M8 3.935V5.5A2.5 2.5 0 0010.5 8h.5a2 2 0 012 2 2 2 0 104 0 2 2 0 012-2h1.064M15 20.488V18a2 2 0 012-2h3.064M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
        />
      </svg>
    ),
  },
  {
    title: "Creative Excellence",
    description:
      "Art direction and copy that earn attention — crafted for quality, not clutter.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M5 3v4M3 5h4M6 17v4m-2-2h4m5-16l2.286 6.857L21 12l-5.714 2.143L13 21l-2.286-6.857L5 12l5.714-2.143L13 3z"
        />
      </svg>
    ),
  },
  {
    title: "Strategic Approach",
    description: "Insight-led plans, clear KPIs, and disciplined execution across every sprint.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9 20l-5.447-2.724A1 1 0 013 16.382V5.618a1 1 0 011.447-.894L9 7m0 13l6-3m-6 3V7m6 10l4.553 2.276A1 1 0 0021 18.382V7.618a1 1 0 00-.553-.894L15 4m0 13V4m0 0L9 7"
        />
      </svg>
    ),
  },
  {
    title: "Cutting-edge Technology",
    description:
      "Modern analytics, automation, and delivery stacks — without losing the human touch.",
    icon: (
      <svg fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2} aria-hidden>
        <path
          strokeLinecap="round"
          strokeLinejoin="round"
          d="M9.75 17L9 20l-1 1h8l-1-1-.75-3M3 13h18M5 17h14a2 2 0 002-2V5a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"
        />
      </svg>
    ),
  },
];

export function WhyChooseUs() {
  return (
    <section className="nc-section" id="about">
      <div className="nc-container">
        <div className="nc-why">
          <div className="nc-why__visual" data-animate>
            <div className="nc-why__frame">
              <Image
                src={stoneTownZanzibar}
                alt="Stone Town, Zanzibar — historic streets and architecture"
                width={stoneTownZanzibar.width}
                height={stoneTownZanzibar.height}
                sizes="(max-width: 900px) 100vw, 45vw"
                className="h-full w-full object-cover object-center"
              />
              <div className="nc-why__badge">
                <strong>Rooted in Zanzibar</strong>
                <span>Island perspective, international caliber.</span>
              </div>
            </div>
          </div>
          <div>
            <header data-animate>
              <p className="nc-eyebrow">Why choose us</p>
              <h2>Partners in clarity, craft, and momentum</h2>
              <p className="nc-muted">
                We combine strategic rigor with creative intuition — so your brand moves markets, not
                just metrics.
              </p>
            </header>
            <ul className="nc-why__list">
              {points.map((p) => (
                <li key={p.title} className="nc-why__item" data-animate>
                  <div className="nc-why__icon">{p.icon}</div>
                  <div>
                    <h3>{p.title}</h3>
                    <p>{p.description}</p>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
}
