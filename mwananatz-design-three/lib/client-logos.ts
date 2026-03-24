import type { StaticImageData } from "next/image";
import cpsLive from "@/app/images/Clients/cps_live-300x164.png";
import fortitude from "@/app/images/Clients/Fortitude-Total-Security-300x164.png";
import fumbaTown from "@/app/images/Clients/Fumba-Town-300x164.png";
import pamoja from "@/app/images/Clients/Pamoja-Youth-Initiative-300x164.png";
import serikali from "@/app/images/Clients/Serikali-ya-Mapinduzi-ya-Zanzibar-300x164.png";
import zanzibarAirports from "@/app/images/Clients/Zanzibar-Airports-Authority.png";
import zbc from "@/app/images/Clients/Zanzibar-Broadcasting-Corporation-300x167.png";

export type ClientLogo = { src: StaticImageData; alt: string };

export const clientLogos: ClientLogo[] = [
  { src: pamoja, alt: "Pamoja Youth Initiative" },
  { src: serikali, alt: "Serikali ya Mapinduzi ya Zanzibar" },
  { src: zbc, alt: "Zanzibar Broadcasting Corporation" },
  { src: zanzibarAirports, alt: "Zanzibar Airports Authority" },
  { src: fumbaTown, alt: "Fumba Town" },
  { src: cpsLive, alt: "CPS Live" },
  { src: fortitude, alt: "Fortitude Total Security" },
];
