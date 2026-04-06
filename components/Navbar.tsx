"use client";

import { useState } from "react";

const navLinks = [
  { label: "لماذا ردود؟", href: "#why" },
  { label: "كيف نعمل؟", href: "#how" },
  { label: "أمثلة حية", href: "#cases" },
  { label: "الأسعار", href: "#pricing" },
  { label: "الأسئلة الشائعة", href: "#faq" },
];

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <header className="fixed top-0 inset-x-0 z-50 backdrop-blur-md bg-night/80 border-b border-border/50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <a href="#" className="flex items-center gap-2 group">
            <span className="text-2xl font-black text-text-primary tracking-tight group-hover:text-gold transition-colors duration-200">
              ردود
            </span>
            <span className="w-2 h-2 rounded-full bg-gold animate-pulse-ring"></span>
          </a>

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

          {/* CTA Button */}
          <div className="hidden md:flex items-center gap-3">
            <a
              href="#pricing"
              className="px-5 py-2 rounded-full bg-gold text-night text-sm font-bold hover:bg-gold-light transition-all duration-200 shadow-gold-sm hover:shadow-gold"
            >
              ابدأ الآن
            </a>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="md:hidden p-2 rounded-lg text-text-muted hover:text-text-primary hover:bg-surface transition-colors"
            aria-label="القائمة"
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
              <div className="pt-3 px-4">
                <a
                  href="#pricing"
                  onClick={() => setMenuOpen(false)}
                  className="block w-full text-center px-5 py-3 rounded-full bg-gold text-night text-sm font-bold hover:bg-gold-light transition-all"
                >
                  ابدأ الآن
                </a>
              </div>
            </div>
          </div>
        )}
      </nav>
    </header>
  );
}
