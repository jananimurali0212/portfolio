import React, { useState } from 'react';
import {
  Award,
  Briefcase,
  Code2,
  Download,
  FolderGit2,
  Home,
  Mail,
  Menu,
  Trophy,
  User,
  X,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

export type SectionId =
  | 'home'
  | 'about'
  | 'skills'
  | 'projects'
  | 'experience'
  | 'certifications'
  | 'achievements'
  | 'contact';

export interface NavItem {
  id: SectionId;
  label: string;
  shortLabel: string;
  icon: React.ComponentType<{ className?: string }>;
}

export const NAV_ITEMS: NavItem[] = [
  { id: 'home', label: 'Home', shortLabel: 'Home', icon: Home },
  { id: 'about', label: 'About', shortLabel: 'About', icon: User },
  { id: 'skills', label: 'Skills', shortLabel: 'Skills', icon: Code2 },
  { id: 'projects', label: 'Projects', shortLabel: 'Projects', icon: FolderGit2 },
  { id: 'experience', label: 'Experience', shortLabel: 'Internships', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', shortLabel: 'Certs', icon: Award },
  { id: 'achievements', label: 'Achievements', shortLabel: 'Awards', icon: Trophy },
  { id: 'contact', label: 'Contact', shortLabel: 'Contact', icon: Mail },
];

interface NavbarProps {
  activeSection: SectionId;
  onSelectSection: (id: SectionId) => void;
}

export const Navbar: React.FC<NavbarProps> = ({ activeSection, onSelectSection }) => {
  const [mobileOpen, setMobileOpen] = useState(false);

  const handleSelect = (id: SectionId) => {
    setMobileOpen(false);
    onSelectSection(id);
  };

  return (
    <header className="sticky top-0 z-40 border-b border-[#CBD5E1] bg-[#F8FAFC]/90 backdrop-blur-xl">
      <div className="mx-auto flex h-14 max-w-7xl items-center justify-between gap-4 px-4 sm:px-6 lg:px-8">
        {/* Brand Monogram + Name */}
        <button
          type="button"
          onClick={() => handleSelect('home')}
          className="group flex shrink-0 items-center gap-2.5 whitespace-nowrap"
        >
          <span className="flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBD5E1] bg-white font-display text-xs font-bold tracking-tight text-[#0F172A] shadow-xs transition-transform duration-150 group-hover:scale-105 group-hover:border-[#2563EB] group-hover:text-[#2563EB]">
            {PROFILE.monogram}
          </span>
          <span className="font-display text-sm font-semibold tracking-tight text-[#0F172A] sm:text-base">
            {PROFILE.name}
          </span>
        </button>

        {/* Desktop Icon + Label View Switchers */}
        <nav aria-label="Primary Navigation" className="hidden items-center gap-1 lg:flex">
          {NAV_ITEMS.map((item) => {
            const Icon = item.icon;
            const isActive = activeSection === item.id;
            return (
              <button
                key={item.id}
                type="button"
                onClick={() => handleSelect(item.id)}
                className={`inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium whitespace-nowrap transition-all duration-150 ${
                  isActive
                    ? 'bg-[#2563EB] text-white shadow-xs'
                    : 'text-[#334155] hover:bg-white hover:text-[#0F172A]'
                }`}
              >
                <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                <span>{item.shortLabel}</span>
              </button>
            );
          })}
        </nav>

        {/* Primary Action + Mobile Toggle */}
        <div className="flex shrink-0 items-center gap-2.5">
          <a
            href={PROFILE.resumeUrl}
            download="Janani_M_Resume.pdf"
            className="inline-flex h-9 shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-3.5 text-xs font-semibold text-white whitespace-nowrap shadow-xs transition-colors duration-150 hover:bg-[#1D4ED8] sm:text-sm"
          >
            <Download className="h-3.5 w-3.5" aria-hidden="true" />
            <span>Resume</span>
          </a>

          <button
            type="button"
            onClick={() => setMobileOpen((prev) => !prev)}
            aria-expanded={mobileOpen}
            aria-label={mobileOpen ? 'Close navigation menu' : 'Open navigation menu'}
            className="inline-flex h-10 w-10 items-center justify-center rounded-lg border border-[#CBD5E1] bg-white text-[#0F172A] transition-colors hover:border-[#2563EB] lg:hidden"
          >
            {mobileOpen ? <X className="h-4 w-4" /> : <Menu className="h-4 w-4" />}
          </button>
        </div>
      </div>

      {/* Mobile Icon Grid Drawer */}
      {mobileOpen && (
        <nav
          aria-label="Mobile Navigation"
          className="border-t border-[#CBD5E1] bg-white px-4 py-3 lg:hidden"
        >
          <div className="grid grid-cols-2 gap-1.5 sm:grid-cols-4">
            {NAV_ITEMS.map((item) => {
              const Icon = item.icon;
              const isActive = activeSection === item.id;
              return (
                <button
                  key={item.id}
                  type="button"
                  onClick={() => handleSelect(item.id)}
                  className={`flex h-11 items-center gap-2 rounded-lg px-3 text-sm font-medium transition-colors ${
                    isActive
                      ? 'bg-[#2563EB] text-white'
                      : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] hover:border-[#2563EB] hover:text-[#0F172A]'
                  }`}
                >
                  <Icon className="h-4 w-4 shrink-0" aria-hidden="true" />
                  <span className="truncate">{item.label}</span>
                </button>
              );
            })}
          </div>
        </nav>
      )}
    </header>
  );
};
