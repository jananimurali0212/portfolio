import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  Activity,
  ArrowUpRight,
  BookOpenCheck,
  BrainCircuit,
  Check,
  ExternalLink,
  FileText,
  Layers,
  MessageSquareQuote,
  Palette,
  Users,
  X,
} from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { TechIcon } from './TechIcons';
import { Tilt3D } from './Tilt3D';

interface ProjectsProps {
  projects: ProjectItem[];
}

const CATEGORIES: ProjectCategory[] = ['All', 'AI & RAG', 'Full-Stack', 'Agents & Systems'];

function getProjectIcon(id: string) {
  switch (id) {
    case 'syspredictai':
      return Activity;
    case 'personal-ai-knowledge-assistant':
      return BrainCircuit;
    case 'ai-enhanced-document-generator':
      return FileText;
    case 'kalasetu':
      return Palette;
    case 'multi-agent-negotiation-simulator':
      return Users;
    case 'reviewai':
      return MessageSquareQuote;
    case 'document-qa-rag':
      return BookOpenCheck;
    default:
      return Layers;
  }
}

export const Projects: React.FC<ProjectsProps> = ({ projects }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <section id="projects" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0D9488]">Featured Projects</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Selected engineering &amp; AI systems
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#334155] sm:text-base">
              Click any project card to inspect its architecture, how it works, and GitHub source.
            </p>
          </div>

          {/* Category Filter */}
          <div
            role="tablist"
            aria-label="Filter projects by domain"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white p-1 shadow-xs"
          >
            {CATEGORIES.map((category) => (
              <button
                key={category}
                type="button"
                role="tab"
                aria-selected={activeCategory === category}
                onClick={() => setActiveCategory(category)}
                className={`h-9 shrink-0 rounded-lg px-3.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeCategory === category
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        {/* Compact 3D Icon-Driven Project Grid */}
        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {filteredProjects.map((project, index) => {
            const Icon = getProjectIcon(project.id);
            return (
              <Tilt3D key={project.id} maxTilt={9} scaleOnHover={1.02}>
                <motion.article
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(index * 0.04, 0.2) }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs transition-colors duration-150 hover:border-[#2563EB]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <button
                        type="button"
                        onClick={() => setSelectedProject(project)}
                        aria-label={`Inspect ${project.title}`}
                        style={{ transform: 'translateZ(20px)' }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB] transition-colors group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </button>

                      <span className="text-xs font-semibold text-[#0D9488]">
                        {project.category}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="mt-4 block text-left"
                    >
                      <h3 className="font-display text-lg font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                        {project.title}
                      </h3>
                      <p className="mt-1 line-clamp-2 text-xs leading-relaxed text-[#334155]">
                        {project.description}
                      </p>
                    </button>

                    <p className="mt-3 font-mono text-[11px] font-medium text-[#0D9488]">
                      {project.techStack.join(' · ')}
                    </p>
                  </div>

                  <div className="mt-4 flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-3.5">
                    {project.githubUrl ? (
                      <a
                        href={project.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 text-xs font-semibold text-[#0F172A] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
                      >
                        <TechIcon id="github" className="h-3.5 w-3.5 text-[#0F172A]" />
                        <span>GitHub</span>
                      </a>
                    ) : (
                      <span />
                    )}

                    <button
                      type="button"
                      onClick={() => setSelectedProject(project)}
                      className="inline-flex h-9 shrink-0 items-center gap-1 rounded-lg bg-[#2563EB] px-3 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1D4ED8]"
                    >
                      <span>How It Works</span>
                      <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                    </button>
                  </div>
                </motion.article>
              </Tilt3D>
            );
          })}
        </div>
      </div>

      {/* Project Detail Modal */}
      <AnimatePresence>
        {selectedProject && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm"
            onClick={() => setSelectedProject(null)}
          >
            <motion.div
              role="dialog"
              aria-modal="true"
              aria-labelledby="project-modal-title"
              initial={prefersReducedMotion ? false : { opacity: 0, scale: 0.96, y: 8 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={prefersReducedMotion ? undefined : { opacity: 0, scale: 0.96, y: 8 }}
              transition={{ duration: 0.2, ease: [0.16, 1, 0.3, 1] }}
              onClick={(e) => e.stopPropagation()}
              className="max-h-[90vh] w-full max-w-2xl overflow-y-auto rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-2xl sm:p-8"
            >
              <div className="flex items-start justify-between gap-4">
                <div>
                  <p className="text-xs font-semibold text-[#0D9488]">
                    {selectedProject.category} · {selectedProject.techStack.join(' · ')}
                  </p>
                  <h3
                    id="project-modal-title"
                    className="mt-1.5 font-display text-2xl font-bold text-[#0F172A]"
                  >
                    {selectedProject.title}
                  </h3>
                  <p className="mt-1 text-sm text-[#334155]">{selectedProject.subtitle}</p>
                </div>

                <button
                  type="button"
                  onClick={() => setSelectedProject(null)}
                  aria-label="Close project details"
                  className="inline-flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] text-[#334155] transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
                >
                  <X className="h-5 w-5" />
                </button>
              </div>

              <div className="mt-6 space-y-6">
                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">Overview</h4>
                  <p className="mt-2 text-sm leading-relaxed text-[#334155]">
                    {selectedProject.description}
                  </p>
                  {selectedProject.roleNote && (
                    <p className="mt-3 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-3 text-xs leading-relaxed text-[#0F172A]">
                      {selectedProject.roleNote}
                    </p>
                  )}
                </div>

                <div>
                  <h4 className="flex items-center gap-2 text-xs font-semibold tracking-wide text-[#64748B]">
                    <Layers className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
                    <span>How It Works</span>
                  </h4>
                  <ol className="mt-2.5 space-y-2.5 text-sm text-[#334155]">
                    {selectedProject.howItWorks.map((step, idx) => (
                      <li key={idx} className="flex items-start gap-3">
                        <span className="flex h-5 w-5 shrink-0 items-center justify-center rounded-md bg-[#F0FDFA] font-mono text-xs font-semibold text-[#0D9488] tabular-nums">
                          {idx + 1}
                        </span>
                        <span>{step}</span>
                      </li>
                    ))}
                  </ol>
                </div>

                <div>
                  <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">
                    Key Capabilities
                  </h4>
                  <ul className="mt-2.5 grid grid-cols-1 gap-2 sm:grid-cols-2">
                    {selectedProject.features.map((feat, idx) => (
                      <li
                        key={idx}
                        className="flex items-start gap-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-3 text-xs text-[#334155]"
                      >
                        <Check className="mt-0.5 h-3.5 w-3.5 shrink-0 text-[#0D9488]" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(selectedProject.githubUrl || selectedProject.liveDemoUrl) && (
                  <div className="flex flex-wrap items-center gap-3 border-t border-[#E2E8F0] pt-5">
                    {selectedProject.githubUrl && (
                      <a
                        href={selectedProject.githubUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                      >
                        <TechIcon id="github" className="h-4 w-4 text-white" />
                        <span>Open GitHub Repository</span>
                      </a>
                    )}

                    {selectedProject.liveDemoUrl && (
                      <a
                        href={selectedProject.liveDemoUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#0D9488]/40 bg-[#F0FDFA] px-4 text-xs font-semibold text-[#0D9488] hover:bg-[#CCFBF1]"
                      >
                        <ExternalLink className="h-4 w-4" />
                        <span>Open Live Demo</span>
                      </a>
                    )}
                  </div>
                )}
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
