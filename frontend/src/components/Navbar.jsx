import React from 'react';
import { THEME } from '../config/theme';

export default function Navbar() {
  return (
    <header
      className="fixed top-0 inset-x-0 z-40 backdrop-blur-md shadow-2xs"
      style={{
        backgroundColor: 'rgba(255, 255, 255, 0.90)',
        borderBottom: `1px solid ${THEME.border}`
      }}
    >
      <div className="max-w-5xl mx-auto px-5 sm:px-8 h-16 flex items-center justify-between gap-4">
        <a
          href="#about"
          className="flex items-center gap-2.5 font-bold text-base sm:text-lg tracking-tight shrink-0"
          style={{ fontFamily: "'Plus Jakarta Sans', sans-serif" }}
        >
          <span
            className="w-2.5 h-2.5 rounded-full shrink-0"
            style={{ background: THEME.gradient }}
          />
          <span>Ajay Bazil Issac</span>
        </a>

        <nav
          className="flex items-center gap-4 sm:gap-7 text-xs sm:text-sm font-medium"
          style={{ color: THEME.textMuted }}
        >
          <a href="#about" className="hover:text-[#0064E0] transition-colors">
            About
          </a>
          <a href="#projects" className="hover:text-[#0064E0] transition-colors">
            Projects
          </a>
          <a href="#skills" className="hover:text-[#0064E0] transition-colors">
            Skills
          </a>
          <a href="#experience" className="hover:text-[#0064E0] transition-colors">
            Experience
          </a>
          <a
            href="#contact"
            className="px-3.5 py-1.5 rounded-full text-xs font-semibold transition-transform hover:-translate-y-0.5"
            style={{
              background: THEME.gradient,
              color: THEME.accentText
            }}
          >
            Contact
          </a>
        </nav>
      </div>
    </header>
  );
}
