import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { ArrowDownRight, Download, Eye, Linkedin } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { TechIconId } from '../types/portfolio';

interface HeroProps {
  onOpenResumePreview: () => void;
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
    positionClass: '-top-5 left-4 sm:left-6',
    animClass: 'animate-float-slow',
    depth: 10,
  },
  {
    id: 'react',
    label: 'React',
    positionClass: '-top-6 right-8 sm:right-10',
    animClass: 'animate-float-medium',
    depth: -12,
  },
  {
    id: 'ai',
    label: 'Artificial Intelligence',
    positionClass: 'top-1/4 -left-4 sm:-left-6',
    animClass: 'animate-float-reverse',
    depth: 14,
  },
  {
    id: 'java',
    label: 'Java',
    positionClass: 'top-1/3 -right-4 sm:-right-6',
    animClass: 'animate-float-slow',
    depth: -10,
  },
  {
    id: 'cpp',
    label: 'C++',
    positionClass: 'bottom-1/4 -left-4 sm:-left-6',
    animClass: 'animate-float-medium',
    depth: 8,
  },
  {
    id: 'javascript',
    label: 'JavaScript',
    positionClass: 'bottom-1/4 -right-4 sm:-right-6',
    animClass: 'animate-float-reverse',
    depth: -14,
  },
  {
    id: 'database',
    label: 'Database',
    positionClass: '-bottom-5 left-6 sm:left-10',
    animClass: 'animate-float-slow',
    depth: 11,
  },
  {
    id: 'cloud',
    label: 'Cloud Computing',
    positionClass: '-bottom-5 right-1/3',
    animClass: 'animate-float-medium',
    depth: -8,
  },
  {
    id: 'github',
    label: 'GitHub',
    positionClass: '-bottom-5 right-6 sm:right-10',
    animClass: 'animate-float-reverse',
    depth: 12,
  },
  {
    id: 'html',
    label: 'HTML5',
    positionClass: 'top-12 right-3 sm:-right-2 hidden xl:flex',
    animClass: 'animate-float-medium',
    depth: -9,
  },
  {
    id: 'css',
    label: 'CSS3',
    positionClass: 'top-12 left-3 sm:-left-2 hidden xl:flex',
    animClass: 'animate-float-slow',
    depth: 9,
  },
];

export const Hero: React.FC<HeroProps> = ({ onOpenResumePreview }) => {
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

  const scrollToProjects = () => {
    const el = document.getElementById('projects');
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <section
      id="home"
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative overflow-hidden border-b border-[#CBD5E1] py-16 sm:py-20 lg:py-28"
    >
      {/* Subtle architectural ambient wash */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute -top-28 left-1/2 h-[420px] w-[760px] -translate-x-1/2 rounded-full bg-gradient-to-r from-[#2563EB]/8 via-[#0D9488]/7 to-[#2563EB]/5 blur-3xl"
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-12 lg:grid-cols-12 lg:gap-10">
          {/* LEFT COLUMN */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-7"
          >
            <p className="text-sm font-semibold tracking-wide text-[#0D9488]">
              B.E. Computer Science &amp; Engineering · Panimalar Engineering College
            </p>

            <h1 className="mt-4 font-display text-4xl font-bold tracking-tight text-[#0F172A] sm:text-5xl lg:text-6xl">
              {PROFILE.name}
            </h1>

            <p className="mt-3 font-display text-lg font-semibold text-[#334155] sm:text-xl">
              {PROFILE.title}
            </p>

            <p className="mt-5 max-w-2xl text-base leading-relaxed text-[#334155] sm:text-lg">
              {PROFILE.intro}
            </p>

            {/* Primary CTAs */}
            <div className="mt-8 flex flex-wrap items-center gap-3.5">
              <button
                type="button"
                onClick={scrollToProjects}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg bg-[#2563EB] px-5 text-sm font-semibold text-white whitespace-nowrap shadow-sm transition-colors duration-150 hover:bg-[#1D4ED8]"
              >
                <span>Explore My Projects</span>
                <ArrowDownRight className="h-4 w-4" aria-hidden="true" />
              </button>

              <a
                href={PROFILE.resumeUrl}
                download="Janani_M_Resume.pdf"
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-white px-5 text-sm font-semibold text-[#0F172A] whitespace-nowrap transition-colors duration-150 hover:border-[#2563EB] hover:text-[#2563EB]"
              >
                <Download className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
                <span>Download Resume</span>
              </a>

              <button
                type="button"
                onClick={onOpenResumePreview}
                className="inline-flex h-11 shrink-0 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-sm font-medium text-[#334155] whitespace-nowrap transition-colors duration-150 hover:border-[#0D9488] hover:text-[#0F172A]"
              >
                <Eye className="h-4 w-4 text-[#0D9488]" aria-hidden="true" />
                <span>Preview Resume</span>
              </button>
            </div>

            {/* Social Links */}
            <div className="mt-8 flex flex-wrap items-center gap-6 border-t border-[#CBD5E1] pt-6 text-sm text-[#334155]">
              <a
                href={PROFILE.github}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-medium text-[#0F172A] transition-colors hover:text-[#2563EB]"
              >
                <TechIcon id="github" className="h-5 w-5 text-[#0F172A]" />
                <span>github.com/jananimurali0212</span>
              </a>

              <span aria-hidden="true" className="text-[#CBD5E1]">
                /
              </span>

              <a
                href={PROFILE.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2.5 font-medium text-[#0F172A] transition-colors hover:text-[#2563EB]"
              >
                <Linkedin className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                <span>LinkedIn Profile</span>
              </a>
            </div>
          </motion.div>

          {/* RIGHT COLUMN: Genuine Portrait + Floating Tech Constellation */}
          <motion.div
            initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.97 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.55, delay: 0.08, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-5"
          >
            <div className="relative mx-auto max-w-md px-5 py-7 sm:px-8 sm:py-8">
              {/* Subtle Cobalt-Teal Glow Behind Frame */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-4 rounded-3xl bg-gradient-to-tr from-[#2563EB]/20 via-[#0D9488]/15 to-[#38BDF8]/18 blur-2xl"
              />

              {/* Subtle Orbit Ring */}
              <div
                aria-hidden="true"
                className="pointer-events-none absolute inset-1 rounded-3xl border border-[#CBD5E1]/70"
              />

              {/* Floating Tech Icons Around Frame */}
              {FLOATING_ICONS.map((icon, index) => (
                <div
                  key={icon.id}
                  title={icon.label}
                  aria-hidden="true"
                  className={`pointer-events-none absolute z-20 flex h-10 w-10 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white shadow-[0_8px_20px_rgba(15,23,42,0.08)] sm:h-11 sm:w-11 ${icon.positionClass}`}
                  style={{
                    transform: prefersReducedMotion
                      ? undefined
                      : `translate3d(${parallax.x * icon.depth}px, ${parallax.y * icon.depth}px, 0)`,
                    transition: 'transform 220ms cubic-bezier(0.16, 1, 0.3, 1)',
                  }}
                >
                  <div
                    className={icon.animClass}
                    style={{ animationDelay: `${index * 0.35}s` }}
                  >
                    <TechIcon id={icon.id} className="h-5 w-5 text-[#0F172A] sm:h-6 sm:w-6" />
                  </div>
                </div>
              ))}

              {/* Rounded Rectangular Portrait Frame */}
              <div className="relative z-10 rounded-2xl bg-gradient-to-br from-[#2563EB]/70 via-[#0D9488]/60 to-[#2563EB]/50 p-[1.5px] shadow-[0_20px_48px_rgba(15,23,42,0.12)]">
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
                  <div className="flex items-center justify-between border-t border-[#CBD5E1] bg-white px-4 py-3 text-xs text-[#334155]">
                    <span className="font-semibold text-[#0F172A]">Janani Murali</span>
                    <span className="font-medium text-[#0D9488]">AI &amp; Full-Stack Developer</span>
                  </div>
                </div>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Full-Width Key Academic & Engineering Summary Strip */}
        <div className="mt-14 grid grid-cols-2 gap-4 border-t border-[#CBD5E1] pt-8 sm:grid-cols-4">
          <div className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-4 shadow-xs">
            <p className="text-xs font-medium text-[#0D9488]">Academic Standing</p>
            <p className="mt-1 font-display text-xl font-bold text-[#0F172A] tabular-nums">
              9.4 CGPA
            </p>
            <p className="mt-0.5 text-xs text-[#334155]">Second Year B.E. CSE</p>
          </div>
          <div className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-4 shadow-xs">
            <p className="text-xs font-medium text-[#0D9488]">AI &amp; Software Builds</p>
            <p className="mt-1 font-display text-xl font-bold text-[#0F172A] tabular-nums">
              7 Projects
            </p>
            <p className="mt-0.5 text-xs text-[#334155]">RAG, Agents &amp; Full-Stack</p>
          </div>
          <div className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-4 shadow-xs">
            <p className="text-xs font-medium text-[#0D9488]">Industry Exposure</p>
            <p className="mt-1 font-display text-xl font-bold text-[#0F172A] tabular-nums">
              2 Internships
            </p>
            <p className="mt-0.5 text-xs text-[#334155]">Infosys Springboard &amp; InAmigos</p>
          </div>
          <div className="rounded-xl border border-[#CBD5E1] bg-white px-4 py-4 shadow-xs">
            <p className="text-xs font-medium text-[#0D9488]">Verified Credentials</p>
            <p className="mt-1 font-display text-xl font-bold text-[#0F172A] tabular-nums">
              9 Certificates
            </p>
            <p className="mt-0.5 text-xs text-[#334155]">AI, Java, Python, C++ &amp; DSA</p>
          </div>
        </div>
      </div>
    </section>
  );
};
