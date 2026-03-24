const items = [
  {
    quote:
      "Mwanana raised our launch from standard to standout. Their team bridged strategy and design with rare speed — and the market noticed on day one.",
    name: "Fatma Omar",
    role: "Chief Marketing Officer, Coral Retail Group",
  },
  {
    quote:
      "From media negotiation to on-ground events, the attention to detail was exceptional. We finally have an agency partner that feels in-house.",
    name: "James Mwalimu",
    role: "Director of Communications, Nuru Health Initiative",
  },
  {
    quote:
      "They understand both Stone Town culture and global brand codes. Our rebrand resonates locally and travels internationally.",
    name: "Amina Saleh",
    role: "Founder, Swahili FinTech Labs",
  },
];

export function Testimonials() {
  return (
    <section className="mw-section mw-section--paper" id="magazine">
      <div className="mw-container">
        <header className="mw-section__head mw-section__head--split" data-animate>
          <span className="mw-idx" aria-hidden>
            02
          </span>
          <div>
            <p className="mw-eyebrow">Voices</p>
            <h2>What our partners say</h2>
            <p>Results, relationships, and the long view — in their words.</p>
          </div>
        </header>
        <div className="mw-quote-grid">
          {items.map((t) => (
            <blockquote key={t.name} className="mw-quote" data-animate>
              <p>{t.quote}</p>
              <footer>
                <strong>{t.name}</strong>
                <span>{t.role}</span>
              </footer>
            </blockquote>
          ))}
        </div>
      </div>
    </section>
  );
}
