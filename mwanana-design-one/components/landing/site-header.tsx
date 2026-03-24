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
    const onScroll = () => setScrolled(window.scrollY > 10);
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
    <header className={`header${scrolled ? " is-scrolled" : ""}`} id="top">
      <div className="container nav" role="navigation" aria-label="Primary">
        <a className="brand" href="#top">
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
          className={`hamburger${menuOpen ? " is-open" : ""}`}
          onClick={toggleMenu}
          aria-expanded={menuOpen}
          aria-controls="navMenu"
          aria-label={menuOpen ? "Close menu" : "Open menu"}
        >
          <span />
          <span />
          <span />
        </button>
        <div className={`nav-links-wrap${menuOpen ? " is-open" : ""}`} id="navMenu">
          <ul className="nav-links">
            <li>
              <a href="#top" onClick={() => closeMenu()}>
                Home
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => closeMenu()}>
                Services
              </a>
            </li>
            <li>
              <a href="#services" onClick={() => closeMenu()}>
                Industries
              </a>
            </li>
            <li>
              <a href="#work" onClick={() => closeMenu()}>
                Work
              </a>
            </li>
            <li>
              <a href="#about" onClick={() => closeMenu()}>
                About
              </a>
            </li>
            <li>
              <a href="#magazine" onClick={() => closeMenu()}>
                Magazine
              </a>
            </li>
            <li>
              <a href="#contact" onClick={() => closeMenu()}>
                Contact
              </a>
            </li>
          </ul>
          <div className="nav-actions-mobile">
            <a className="btn btn-primary" href="#contact" onClick={() => closeMenu()}>
              Work With Us
            </a>
          </div>
        </div>
        <div className="nav-actions">
          <a className="btn btn-primary btn-nav-cta" href="#contact">
            Work With Us
          </a>
        </div>
      </div>
    </header>
  );
}
