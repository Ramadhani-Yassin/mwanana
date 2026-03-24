"use client";

import Image from "next/image";
import { useCallback, useEffect, useState } from "react";
import { brandLogo } from "@/lib/site-assets";

export function SiteHeader() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const closeMenu = useCallback(() => {
    setMenuOpen(false);
    document.body.style.overflow = "";
  }, []);

  const toggleMenu = useCallback(() => {
    setMenuOpen((open) => {
      const next = !open;
      document.body.style.overflow = next ? "hidden" : "";
      return next;
    });
  }, []);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    window.addEventListener("scroll", onScroll, { passive: true });
    onScroll();
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    const mq = window.matchMedia("(min-width: 961px)");
    const onChange = () => {
      if (mq.matches) closeMenu();
    };
    mq.addEventListener("change", onChange);
    return () => mq.removeEventListener("change", onChange);
  }, [closeMenu]);

  return (
    <header className={`mw-head${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="mw-container mw-nav" role="navigation" aria-label="Primary">
        <a className="mw-nav__brand" href="#top">
          <Image
            src={brandLogo}
            alt="Mwanana Communications logo"
            width={44}
            height={44}
            className="h-11 w-11 object-contain"
            priority
          />
          <span>Mwanana Communications</span>
        </a>
        <button
          type="button"
          className={`mw-hamburger${menuOpen ? " is-open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navMenu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`mw-nav__wrap${menuOpen ? " is-open" : ""}`} id="navMenu">
          <ul className="mw-nav__links">
            <li>
              <a className="mw-nav__link" href="#top" onClick={() => closeMenu()}>
                Home
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#services" onClick={() => closeMenu()}>
                Services
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#services" onClick={() => closeMenu()}>
                Industries
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#work" onClick={() => closeMenu()}>
                Work
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#about" onClick={() => closeMenu()}>
                About
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#magazine" onClick={() => closeMenu()}>
                Magazine
              </a>
            </li>
            <li>
              <a className="mw-nav__link" href="#contact" onClick={() => closeMenu()}>
                Contact
              </a>
            </li>
          </ul>
          <div className="mw-nav__mobile-cta">
            <a className="mw-nav__cta" href="#contact" onClick={() => closeMenu()}>
              Work With Us
            </a>
          </div>
        </div>
        <div className="mw-nav__actions">
          <a className="mw-nav__cta" href="#contact">
            Work With Us
          </a>
        </div>
      </div>
    </header>
  );
}
