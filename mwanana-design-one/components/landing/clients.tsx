import Image from "next/image";
import { clientLogos } from "@/lib/client-logos";

function LogoSlide({
  client,
  duplicate,
}: {
  client: (typeof clientLogos)[number];
  duplicate?: boolean;
}) {
  return (
    <div
      className="client-logo-slide"
      data-marquee-dup={duplicate ? true : undefined}
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
        className="client-logo-img"
      />
    </div>
  );
}

export function Clients() {
  return (
    <section id="work">
      <div className="container">
        <header className="section-head" data-animate>
          <p className="eyebrow">Trusted by</p>
          <h2>Our Clients</h2>
          <p>
            A selection of organizations we’ve helped shape narratives, launches, and lasting
            impressions.
          </p>
        </header>
        <div className="clients-strip" data-animate>
          <div
            className="clients-marquee"
            role="region"
            aria-label="Client logos, scrolling"
          >
            <div className="clients-marquee-track">
              {clientLogos.map((client) => (
                <LogoSlide key={client.alt} client={client} />
              ))}
              {clientLogos.map((client) => (
                <LogoSlide key={`${client.alt}-dup`} client={client} duplicate />
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
