import React, { useState } from 'react';
import { Download, Menu, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export interface NavItem {
  id: string;
  label: string;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home' },
  { id: 'about', label: 'About' },
  { id: 'skills', label: 'Skills' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certifications', label: 'Certifications' },
  { id: 'achievements', label: 'Achievements' },
  { id: 'contact', label: 'Contact' },
];

interface NavbarProps {
  activeSection: string;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleLinkClick = (id: string) => {
    setMobileOpen(false);
    const el = document.getElementById(id);
    if (el) {
      el.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#CBD5E1] bg-[#F8FAFC]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-16 max-w-7xl items-center justify-between gap-6 px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram + Name */}
        <a
          href="#home"
          onClick={(e) => {
            e.preventDefault();
            handleLinkClick('home');
          }}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap"
        >
          <span className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBD5E1] bg-white font-display text-sm font-bold tracking-tight text-[#0F172A] transition-colors group-hover:border-[#2563EB] group-hover:text-[#2563EB]">
            {PROFILE.monogram}
          </span>
          <span className="font-display text-base font-semibold tracking-tight text-[#0F172A]">
            {PROFILE.name}
          </span>
        </a>

        {/* Desktop Links */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-5 lg:flex">
          {NAV_ITEMS.map((item) => {
            const isActive = activeSection === item.id;
            return (
              <a
                key={item.id}
                href={`#${item.id}`}
                onClick={(e) => {
                  e.preventDefault();
                  handleLinkClick(item.id);
                }}
                className={`relative shrink-0 py-1 text-sm font-medium whitespace-nowrap transition-colors duration-150 ${
                  isActive ? 'text-[#0F172A]' : 'text-[#334155] hover:text-[#2563EB]'
                }`}
              >
                {item.label}
                {isActive && (
                  <span
                    aria-hidden="true"
                    className="absolute inset-x-0 -bottom-0.5 h-0.5 rounded-full bg-[#2563EB]"
                  />
                )}
              </a>
            );
          })}
        </nav>

        {/* Primary Action + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-3">
          <a
            href={PROFILE.resumeUrl}
            download="Janani_M_Resume.pdf"
            className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-sm font-medium text-white whitespace-nowrap shadow-xs transition-colors duration-150 hover:bg-[#1D4ED8]"
          >
            <Download className="h-4 w-4" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-[#CBD5E1] bg-white text-[#0F172A] transition-colors hover:border-[#2563EB] lg:hidden"
          >
            {mobileOpen ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
          </button>
        </div>
      </div>

      {/* Mobile Navigation Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#CBD5E1] bg-white px-4 py-3 lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => {
              const isActive = activeSection === item.id;
              return (
                <a
                  key={item.id}
                  href={`#${item.id}`}
                  onClick={(e) => {
                    e.preventDefault();
                    handleLinkClick(item.id);
                  }}
                  className={`flex h-11 items-center rounded-lg px-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'border border-[#2563EB]/30 bg-[#EFF6FF] text-[#1D4ED8]'
                      : 'text-[#334155] hover:bg-[#F8FAFC] hover:text-[#0F172A]'
                  }`}
                >
                  {item.label}
                </a>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
