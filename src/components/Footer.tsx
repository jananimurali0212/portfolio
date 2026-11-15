import React from 'react';
import { Home, Linkedin, Mail } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SectionId } from './Navbar';
import { TechIcon } from './TechIcons';

interface FooterProps {
  onSelectSection: (id: SectionId) => void;
}

export const Footer: React.FC<FooterProps> = ({ onSelectSection }) => {
  return (
    <footer className="border-t border-[#CBD5E1] bg-[#F1F5F9] py-5">
      <div className="mx-auto flex max-w-7xl flex-col justify-between gap-4 px-4 sm:flex-row sm:items-center sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-center gap-x-3 gap-y-1 text-xs text-[#334155]">
          <span className="font-display text-sm font-bold text-[#0F172A]">{PROFILE.name}</span>
          <span aria-hidden="true" className="text-[#CBD5E1]">
            ·
          </span>
          <span>B.E. CSE · Panimalar Engineering College</span>
          <span aria-hidden="true" className="hidden text-[#CBD5E1] sm:inline">
            ·
          </span>
          <span className="text-[#64748B]">© {new Date().getFullYear()}</span>
        </div>

        <div className="flex flex-wrap items-center gap-4 text-xs text-[#334155]">
          <a
            href={PROFILE.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#0F172A]"
          >
            <TechIcon id="github" className="h-4 w-4 text-[#0F172A]" />
            <span>GitHub</span>
          </a>
          <a
            href={PROFILE.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#2563EB]"
          >
            <Linkedin className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
            <span>LinkedIn</span>
          </a>
          <a
            href={`mailto:${PROFILE.email}`}
            className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#0D9488]"
          >
            <Mail className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
            <span className="hidden sm:inline">{PROFILE.email}</span>
            <span className="sm:hidden">Email</span>
          </a>
          <button
            type="button"
            onClick={() => onSelectSection('home')}
            className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-2.5 text-xs font-medium text-[#0F172A] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
          >
            <Home className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
            <span>Hub</span>
          </button>
        </div>
      </div>
    </footer>
  );
};
