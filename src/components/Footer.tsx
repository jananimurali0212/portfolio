import React from 'react';
import { ArrowUp, Linkedin, Mail, RotateCcw } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

interface FooterProps {
  hasCustomEdits: boolean;
  onResetEdits: () => void;
}

export const Footer: React.FC<FooterProps> = ({ hasCustomEdits, onResetEdits }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className="border-t border-[#CBD5E1] bg-[#F1F5F9] py-10">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
          <div>
            <p className="font-display text-base font-bold text-[#0F172A]">{PROFILE.name}</p>
            <p className="mt-0.5 text-xs text-[#334155]">
              Computer Science Engineering Student · Panimalar Engineering College
            </p>
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
            <span aria-hidden="true" className="text-[#CBD5E1]">
              ·
            </span>
            <a
              href={PROFILE.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#2563EB]"
            >
              <Linkedin className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
              <span>LinkedIn</span>
            </a>
            <span aria-hidden="true" className="text-[#CBD5E1]">
              ·
            </span>
            <a
              href={`mailto:${PROFILE.email}`}
              className="inline-flex items-center gap-1.5 font-medium transition-colors hover:text-[#0D9488]"
            >
              <Mail className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
              <span>{PROFILE.email}</span>
            </a>
          </div>
        </div>

        <div className="mt-8 flex flex-col justify-between gap-4 border-t border-[#CBD5E1] pt-6 text-xs text-[#475569] sm:flex-row sm:items-center">
          <p>© {new Date().getFullYear()} Janani Murali. All rights reserved.</p>

          <div className="flex items-center gap-3">
            {hasCustomEdits && (
              <button
                type="button"
                onClick={onResetEdits}
                className="inline-flex items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 text-xs text-[#334155] transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
              >
                <RotateCcw className="h-3 w-3" aria-hidden="true" />
                <span>Reset Custom Edits</span>
              </button>
            )}
            <button
              type="button"
              onClick={scrollToTop}
              className="inline-flex items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-white px-3 py-1.5 text-xs font-medium text-[#0F172A] transition-colors hover:border-[#2563EB]"
            >
              <ArrowUp className="h-3.5 w-3.5 text-[#2563EB]" aria-hidden="true" />
              <span>Back to Top</span>
            </button>
          </div>
        </div>
      </div>
    </footer>
  );
};
