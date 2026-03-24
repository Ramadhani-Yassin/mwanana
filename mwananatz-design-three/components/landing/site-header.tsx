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
    const onScroll = () => setScrolled(window.scrollY > 12);
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
    <header className={`nc-header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="nc-header__bar">
        <div className="nc-nav" role="navigation" aria-label="Primary">
          <a className="nc-brand" href="#top">
            <Image
              src={brandLogo}
              alt="Mwanana Communications logo"
              width={42}
              height={42}
              className="h-[42px] w-[42px] object-contain"
              priority
            />
            <span>Mwanana Communications</span>
          </a>
          <button
            type="button"
            className={`nc-hamburger${menuOpen ? " is-open" : ""}`}
            onClick={toggleMenu}
            aria-expanded={menuOpen}
            aria-controls="ncNav"
            aria-label={menuOpen ? "Close menu" : "Open menu"}
          >
            <span />
            <span />
            <span />
          </button>
          <div className={`nc-nav__wrap${menuOpen ? " is-open" : ""}`} id="ncNav">
            <ul className="nc-nav__links">
              <li>
                <a href="#top" onClick={closeMenu}>
                  Home
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Services
                </a>
              </li>
              <li>
                <a href="#services" onClick={closeMenu}>
                  Industries
                </a>
              </li>
              <li>
                <a href="#work" onClick={closeMenu}>
                  Work
                </a>
              </li>
              <li>
                <a href="#about" onClick={closeMenu}>
                  About
                </a>
              </li>
              <li>
                <a href="#magazine" onClick={closeMenu}>
                  Magazine
                </a>
              </li>
              <li>
                <a href="#contact" onClick={closeMenu}>
                  Contact
                </a>
              </li>
            </ul>
            <div className="nc-nav__mobile-cta">
              <a className="nc-nav__cta" href="#contact" onClick={closeMenu}>
                Work With Us
              </a>
            </div>
          </div>
          <div className="nc-nav__actions">
            <a className="nc-nav__cta" href="#contact">
              Work With Us
            </a>
          </div>
        </div>
      </div>
    </header>
  );
}
