"use client";

import { useState } from "react";
import Link from "next/link";
import Logo from "../Logo";

const navLinks = [
  { label: "Why Rudood?", href: "#why" },
  { label: "How It Works", href: "#how" },
  { label: "Platforms", href: "#platforms" },
  { label: "Pricing", href: "#pricing" },
  { label: "FAQ", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-night/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/en" className="hover:opacity-80 transition-opacity">
            <Logo size={36} showText={true} lang="en" />
          </Link>

          {/* Desktop Nav Links */}
          <div className="hidden md:flex items-center gap-6">
            {navLinks.map((link) => (
              <a
                key={link.href}
                href={link.href}
                className="text-sm text-text-muted hover:text-text-primary transition-colors duration-200"
              >
                {link.label}
              </a>
            ))}
          </div>

          {/* Right side: Lang toggle + CTA */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/"
              className="px-3 py-1.5 text-xs font-semibold rounded-full border border-border text-text-muted hover:text-text-primary hover:border-border-light transition-all"
            >
              AR
            </Link>
            <a
              href="#contact"
              className="px-5 py-2 rounded-full bg-brand-gradient text-white text-sm font-bold hover:opacity-90 transition-all duration-200 shadow-brand-sm"
            >
              Get Started
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="Menu"
          >
            {menuOpen ? (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
              </svg>
            ) : (
              <svg className="w-6 h-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4 6h16M4 12h16M4 18h16" />
              </svg>
            )}
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden py-4 border-t border-border/50 animate-fade-in-up">
            <div className="flex flex-col gap-1">
              {navLinks.map((link) => (
                <a
                  key={link.href}
                  href={link.href}
                  onClick={() => setMenuOpen(false)}
                  className="px-4 py-3 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors text-sm"
                >
                  {link.label}
                </a>
              ))}
              <div className="pt-3 px-4 flex gap-2">
                <Link
                  href="/"
                  className="px-4 py-2 rounded-full border border-border text-text-muted text-sm"
                >
                  عربي
                </Link>
                <a
                  href="#contact"
                  onClick={() => setMenuOpen(false)}
                  className="flex-1 text-center px-5 py-3 rounded-full bg-brand-gradient text-white text-sm font-bold"
                >
                  Get Started
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
