import Image from "next/image";
import { clientLogos } from "@/lib/client-logos";

function Slide({
  client,
  duplicate,
}: {
  client: (typeof clientLogos)[number];
  duplicate?: boolean;
}) {
  return (
    <div
      className="nc-client-slide"
      data-marq-dup={duplicate ? true : undefined}
      role="group"
      aria-hidden={duplicate ? true : undefined}
      aria-label={duplicate ? undefined : client.alt}
    >
      <Image
        src={client.src}
        alt=""
        width={client.src.width}
        height={client.src.height}
        sizes="180px"
      />
    </div>
  );
}

export function Clients() {
  return (
    <section className="nc-section" id="work">
      <div className="nc-container">
        <header className="nc-section__head" data-animate>
          <p className="nc-eyebrow">Trusted by</p>
          <h2>Our Clients</h2>
          <p>
            A selection of organizations we’ve helped shape narratives, launches, and lasting
            impressions.
          </p>
        </header>
        <div className="nc-clients-well" data-animate>
          <div className="nc-marquee" role="region" aria-label="Client logos, scrolling">
            <div className="nc-marquee-track">
              {clientLogos.map((c) => (
                <Slide key={c.alt} client={c} />
              ))}
              {clientLogos.map((c) => (
                <Slide key={`${c.alt}-dup`} client={c} duplicate />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
