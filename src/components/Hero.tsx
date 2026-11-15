import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  ArrowRight,
  Award,
  Briefcase,
  Code2,
  Download,
  Eye,
  FolderGit2,
  Linkedin,
  Mail,
  Trophy,
  User,
} from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { SectionId } from './Navbar';
import { TechIcon } from './TechIcons';
import { TechIconId } from '../types/portfolio';
import { Tilt3D } from './Tilt3D';

interface HeroProps {
  onOpenResumePreview: () => void;
  onNavigateSection: (section: SectionId) => void;
}

interface FloatingIconConfig {
  id: TechIconId;
  label: string;
  positionClass: string;
  animClass: string;
  depth: number;
}

const FLOATING_ICONS: FloatingIconConfig[] = [
  {
    id: 'python',
    label: 'Python',
    positionClass: '-top-4 left-4 sm:left-6',
    animClass: 'animate-float-slow',
    depth: 12,
  },
  {
    id: 'react',
    label: 'React',
    positionClass: '-top-5 right-8 sm:right-10',
    animClass: 'animate-float-medium',
    depth: -14,
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    positionClass: 'top-1/4 -left-3 sm:-left-5',
    animClass: 'animate-float-reverse',
    depth: 16,
  },
  {
    id: 'java',
    label: 'Java',
    positionClass: 'top-1/3 -right-3 sm:-right-5',
    animClass: 'animate-float-slow',
    depth: -12,
  },
  {
    id: 'cpp',
    label: 'C++',
    positionClass: 'bottom-1/4 -left-3 sm:-left-5',
    animClass: 'animate-float-medium',
    depth: 10,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    positionClass: 'bottom-1/4 -right-3 sm:-right-5',
    animClass: 'animate-float-reverse',
    depth: -16,
  },
  {
    id: 'database',
    label: 'Database',
    positionClass: '-bottom-4 left-6 sm:left-10',
    animClass: 'animate-float-slow',
    depth: 12,
  },
  {
    id: 'cloud',
    label: 'Cloud Computing',
    positionClass: '-bottom-4 right-1/3',
    animClass: 'animate-float-medium',
    depth: -10,
  },
  {
    id: 'github',
    label: 'GitHub',
    positionClass: '-bottom-4 right-6 sm:right-10',
    animClass: 'animate-float-reverse',
    depth: 14,
  },
  {
    id: 'html',
    label: 'HTML5',
    positionClass: 'top-10 right-2 sm:-right-2 hidden xl:flex',
    animClass: 'animate-float-medium',
    depth: -10,
  },
  {
    id: 'css',
    label: 'CSS3',
    positionClass: 'top-10 left-2 sm:-left-2 hidden xl:flex',
    animClass: 'animate-float-slow',
    depth: 10,
  },
];

interface QuickTile {
  id: SectionId;
  label: string;
  meta: string;
  icon: React.ComponentType<{ className?: string }>;
}

const QUICK_TILES: QuickTile[] = [
  { id: 'about', label: 'About & Education', meta: '9.4 CGPA · B.E. CSE', icon: User },
  { id: 'skills', label: 'Technical Skills', meta: '17 Core Tools', icon: Code2 },
  { id: 'projects', label: 'Projects', meta: '7 GitHub Builds', icon: FolderGit2 },
  { id: 'experience', label: 'Internships', meta: 'Infosys & InAmigos', icon: Briefcase },
  { id: 'certifications', label: 'Certifications', meta: '10 Credentials', icon: Award },
  { id: 'achievements', label: 'Achievements', meta: 'SIH 2026 & Honors', icon: Trophy },
  { id: 'contact', label: 'Contact', meta: 'Email & Socials', icon: Mail },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumePreview, onNavigateSection }) => {
  const prefersReducedMotion = useReducedMotion();
  const [parallax, setParallax] = useState({ x: 0, y: 0 });
  const [imgError, setImgError] = useState(false);

  const handleMouseMove = (e: React.MouseEvent<HTMLElement>) => {
    if (prefersReducedMotion) return;
    const rect = e.currentTarget.getBoundingClientRect();
    const nx = (e.clientX - rect.left) / rect.width - 0.5;
    const ny = (e.clientY - rect.top) / rect.height - 0.5;
    setParallax({ x: nx, y: ny });
  };

  const handleMouseLeave = () => {
    setParallax({ x: 0, y: 0 });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden py-8 sm:py-12"
    >
      {/* Subtle architectural ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-24 left-1/2 h-[380px] w-[720px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB]/8 via-[#0D9488]/7 to-[#2563EB]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-8 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold tracking-wide text-[#0D9488]">
              B.E. Computer Science &amp; Engineering · Panimalar Engineering College
            </p>

            <h1 className="mt-3 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl">
              {PROFILE.name}
            </h1>

            <p className="mt-2 font-display text-lg font-semibold text-[#334155]">
              {PROFILE.title}
            </p>

            <p className="mt-4 max-w-2xl text-base leading-relaxed text-[#334155]">
              {PROFILE.intro}
            </p>

            {/* Primary CTAs */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => onNavigateSection('projects')}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-5 text-sm font-semibold text-white whitespace-nowrap shadow-sm transition-all duration-150 hover:-translate-y-0.5 hover:bg-[#1D4ED8]"
              >
                <span>Explore My Projects</span>
                <ArrowRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PROFILE.resumeUrl}
                download="Janani_M_Resume.pdf"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-4 text-sm font-semibold text-[#0F172A] whitespace-nowrap transition-all duration-150 hover:-translate-y-0.5 hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Download className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumePreview}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-4 text-sm font-medium text-[#334155] whitespace-nowrap transition-all duration-150 hover:-translate-y-0.5 hover:border-[#0D9488] hover:text-[#0F172A]"
              >
                <Eye className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
                <span>Preview Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-6 flex flex-wrap items-center gap-5 text-sm text-[#334155]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#0F172A] transition-colors hover:text-[#2563EB]"
              >
                <TechIcon id="github" className="h-4 w-4 text-[#0F172A]" />
                <span>github.com/jananimurali0212</span>
              </a>

              <span aria-hidden="true" className="text-[#CBD5E1]">
                /
              </span>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 font-medium text-[#0F172A] transition-colors hover:text-[#2563EB]"
              >
                <Linkedin className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: 3D Tilting Portrait + Floating Tech Constellation */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.06, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md px-5 py-6 sm:px-7 sm:py-6">
              {/* Subtle Cobalt-Teal Glow Behind Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#2563EB]/20 via-[#0D9488]/15 to-[#38BDF8]/18 blur-2xl"
              />

              {/* Subtle 3D Orbit Ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-1 rounded-3xl border border-[#CBD5E1]/70"
              />

              {/* Floating Tech Icons Around Frame with Parallax Depth */}
              {FLOATING_ICONS.map((icon, index) => (
                <div
                  key={icon.id}
                  title={icon.label}
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-20 flex h-9 w-9 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white shadow-[0_10px_24px_rgba(15,23,42,0.1)] sm:h-10 sm:w-10 ${icon.positionClass}`}
                  style={{
                    transform: prefersReducedMotion
                      ? undefined
                      : `translate3d(${parallax.x * icon.depth}px, ${parallax.y * icon.depth}px, 32px)`,
                    transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    className={icon.animClass}
                    style={{ animationDelay: `${index * 0.35}s` }}
                  >
                    <TechIcon id={icon.id} className="h-5 w-5 text-[#0F172A]" />
                  </div>
                </div>
              ))}

              {/* 3D Tilt Portrait Frame */}
              <Tilt3D maxTilt={10} scaleOnHover={1.02} className="z-10">
                <div className="rounded-2xl bg-gradient-to-br from-[#2563EB]/75 via-[#0D9488]/65 to-[#2563EB]/55 p-[1.5px] shadow-[0_24px_54px_rgba(15,23,42,0.14)]">
                  <div className="overflow-hidden rounded-[14.5px] bg-white">
                    <div className="aspect-[4/3] w-full overflow-hidden bg-[#F1F5F9]">
                      {!imgError ? (
                        <img
                          src={PROFILE.photoUrl}
                          alt="Janani Murali — Computer Science Engineering Student"
                          referrerPolicy="no-referrer"
                          onError={() => setImgError(true)}
                          className="h-full w-full object-cover object-[center_12%]"
                        />
                      ) : (
                        <div className="flex h-full w-full flex-col items-center justify-center bg-[#F1F5F9] text-[#0F172A]">
                          <span className="font-display text-3xl font-bold">JM</span>
                          <span className="mt-1 text-xs text-[#334155]">Janani Murali</span>
                        </div>
                      )}
                    </div>
                    <div className="flex items-center justify-between border-t border-[#CBD5E1] bg-white px-4 py-2.5 text-xs text-[#334155]">
                      <span className="font-semibold text-[#0F172A]">Janani Murali</span>
                      <span className="font-medium text-[#0D9488]">
                        AI &amp; Full-Stack Developer
                      </span>
                    </div>
                  </div>
                </div>
              </Tilt3D>
            </div>
          </motion.div>
        </div>

        {/* Clickable 3D Quick-Launch Icon Hub (Replaces Long Scroll) */}
        <div className="mt-8 border-t border-[#CBD5E1] pt-6">
          <div className="mb-4 flex items-center justify-between">
            <p className="text-xs font-semibold tracking-wide text-[#0D9488]">
              Explore Portfolio Sections — Click Any Icon
            </p>
            <p className="hidden text-xs text-[#64748B] sm:block">
              Interactive 3D cards · Zero long scroll
            </p>
          </div>

          <div className="grid grid-cols-2 gap-3 sm:grid-cols-4 lg:grid-cols-7">
            {QUICK_TILES.map((tile) => {
              const Icon = tile.icon;
              return (
                <Tilt3D key={tile.id} maxTilt={12} scaleOnHover={1.03}>
                  <button
                    type="button"
                    onClick={() => onNavigateSection(tile.id)}
                    className="group flex h-full w-full flex-col items-start justify-between rounded-xl border border-[#CBD5E1] bg-white p-3.5 text-left shadow-xs transition-colors duration-150 hover:border-[#2563EB]"
                  >
                    <div
                      style={{ transform: 'translateZ(18px)' }}
                      className="flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB] transition-colors group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                    >
                      <Icon className="h-4 w-4" aria-hidden="true" />
                    </div>
                    <div style={{ transform: 'translateZ(12px)' }} className="mt-3">
                      <p className="font-display text-xs font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                        {tile.label}
                      </p>
                      <p className="mt-0.5 text-[11px] font-medium text-[#0D9488]">{tile.meta}</p>
                    </div>
                  </button>
                </Tilt3D>
              );
            })}
          </div>
        </div>
      </div>
    </section>
  );
};
