import React, { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import {
  ArrowUpRight,
  Check,
  ExternalLink,
  Layers,
  Pencil,
  X,
} from 'lucide-react';
import { ProjectCategory, ProjectItem } from '../types/portfolio';
import { TechIcon } from './TechIcons';

interface ProjectsProps {
  projects: ProjectItem[];
  onUpdateProject: (updated: ProjectItem) => void;
}

const CATEGORIES: ProjectCategory[] = ['All', 'AI & RAG', 'Full-Stack', 'Agents & Systems'];

export const Projects: React.FC<ProjectsProps> = ({ projects, onUpdateProject }) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeCategory, setActiveCategory] = useState<ProjectCategory>('All');
  const [selectedProject, setSelectedProject] = useState<ProjectItem | null>(null);
  const [editingMode, setEditingMode] = useState(false);
  const [draftDescription, setDraftDescription] = useState('');
  const [draftGithubUrl, setDraftGithubUrl] = useState('');
  const [draftDemoUrl, setDraftDemoUrl] = useState('');

  const filteredProjects =
    activeCategory === 'All'
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  const openDetails = (project: ProjectItem) => {
    setSelectedProject(project);
    setEditingMode(false);
    setDraftDescription(project.description);
    setDraftGithubUrl(project.githubUrl || '');
    setDraftDemoUrl(project.liveDemoUrl || '');
  };

  const handleSaveEdits = (e: React.FormEvent) => {
    e.preventDefault();
    if (!selectedProject) return;
    const updated: ProjectItem = {
      ...selectedProject,
      description: draftDescription.trim() || selectedProject.description,
      githubUrl: draftGithubUrl.trim() ? draftGithubUrl.trim() : null,
      liveDemoUrl: draftDemoUrl.trim() ? draftDemoUrl.trim() : null,
    };
    onUpdateProject(updated);
    setSelectedProject(updated);
    setEditingMode(false);
  };

  return (
    <section id="projects" className="border-b border-[#CBD5E1] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0D9488]">Featured Projects</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Selected engineering &amp; AI systems
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#334155]">
              Practical applications covering Retrieval-Augmented Generation, multi-agent
              simulation, craft vision linkage, system monitoring, and full-stack persistence.
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

        {/* Project Cards Grid */}
        <div className="mt-10 grid grid-cols-1 gap-6 md:grid-cols-2">
          {filteredProjects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.4, delay: Math.min(index * 0.04, 0.2) }}
              className="flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs transition-colors duration-150 hover:border-[#2563EB]"
            >
              <div>
                <div className="flex items-center justify-between gap-3 text-xs">
                  <span className="font-semibold text-[#0D9488]">{project.category}</span>
                </div>

                <h3 className="mt-2 font-display text-xl font-bold text-[#0F172A]">
                  {project.title}
                </h3>
                <p className="mt-1 text-sm font-medium text-[#334155]">{project.subtitle}</p>

                <p className="mt-3 text-sm leading-relaxed text-[#334155]">
                  {project.description}
                </p>

                {/* How It Works Preview */}
                <div className="mt-4 border-t border-[#E2E8F0] pt-4">
                  <p className="text-xs font-semibold text-[#0F172A]">How It Works</p>
                  <ul className="mt-2 space-y-1.5 text-xs leading-relaxed text-[#334155]">
                    {project.howItWorks.slice(0, 2).map((step, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                        <span>{step}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {/* Tech Stack (Zero-Pill typographic line in teal highlight) */}
                <div className="mt-4 border-t border-[#E2E8F0] pt-3.5">
                  <p className="font-mono text-xs font-medium text-[#0D9488]">
                    {project.techStack.join(' · ')}
                  </p>
                </div>
              </div>

              {/* Card Actions */}
              <div className="mt-6 flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-4">
                <div className="flex flex-wrap items-center gap-2.5">
                  {project.githubUrl ? (
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 shrink-0 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3.5 text-xs font-semibold text-[#0F172A] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
                    >
                      <TechIcon id="github" className="h-4 w-4 text-[#0F172A]" />
                      <span>GitHub Repo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        openDetails(project);
                        setEditingMode(true);
                      }}
                      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-3.5 text-xs font-medium text-[#334155] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
                    >
                      <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Add Repo URL</span>
                    </button>
                  )}

                  {project.liveDemoUrl ? (
                    <a
                      href={project.liveDemoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-[#0D9488]/30 bg-[#F0FDFA] px-3.5 text-xs font-semibold text-[#0D9488] whitespace-nowrap transition-colors hover:bg-[#CCFBF1]"
                    >
                      <ExternalLink className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>Live Demo</span>
                    </a>
                  ) : (
                    <button
                      type="button"
                      onClick={() => {
                        openDetails(project);
                        setEditingMode(true);
                      }}
                      className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg border border-dashed border-[#CBD5E1] px-3 text-xs text-[#475569] whitespace-nowrap transition-colors hover:border-[#0D9488] hover:text-[#0F172A]"
                      title="Live demo URL is currently a placeholder — click to add URL"
                    >
                      <span>Demo URL Placeholder</span>
                    </button>
                  )}
                </div>

                <button
                  type="button"
                  onClick={() => openDetails(project)}
                  className="inline-flex h-10 shrink-0 items-center gap-1.5 rounded-lg bg-[#2563EB] px-3.5 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1D4ED8]"
                >
                  <span>View Details</span>
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden="true" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>

      {/* Project Detail & Editable Placeholder Modal */}
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

              {!editingMode ? (
                <div className="mt-6 space-y-6">
                  <div>
                    <h4 className="text-xs font-semibold tracking-wide text-[#64748B]">
                      Overview
                    </h4>
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

                  <div className="flex flex-wrap items-center justify-between gap-3 border-t border-[#E2E8F0] pt-5">
                    <div className="flex flex-wrap items-center gap-3">
                      {selectedProject.githubUrl ? (
                        <a
                          href={selectedProject.githubUrl}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                        >
                          <TechIcon id="github" className="h-4 w-4 text-white" />
                          <span>Open GitHub Repository</span>
                        </a>
                      ) : (
                        <span className="text-xs text-[#64748B]">
                          GitHub URL not yet linked
                        </span>
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

                    <button
                      type="button"
                      onClick={() => setEditingMode(true)}
                      className="inline-flex h-10 items-center gap-1.5 rounded-lg border border-[#CBD5E1] px-3.5 text-xs font-medium text-[#334155] hover:border-[#2563EB] hover:text-[#0F172A]"
                    >
                      <Pencil className="h-3.5 w-3.5" />
                      <span>Edit Links / Notes</span>
                    </button>
                  </div>
                </div>
              ) : (
                <form onSubmit={handleSaveEdits} className="mt-6 space-y-4">
                  <div>
                    <label
                      htmlFor="proj-desc"
                      className="block text-xs font-medium text-[#0F172A]"
                    >
                      Project Description
                    </label>
                    <textarea
                      id="proj-desc"
                      rows={3}
                      value={draftDescription}
                      onChange={(e) => setDraftDescription(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] p-3 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="proj-github"
                      className="block text-xs font-medium text-[#0F172A]"
                    >
                      GitHub Repository URL
                    </label>
                    <input
                      id="proj-github"
                      type="url"
                      placeholder="https://github.com/jananimurali0212/..."
                      value={draftGithubUrl}
                      onChange={(e) => setDraftGithubUrl(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>
                  <div>
                    <label
                      htmlFor="proj-demo"
                      className="block text-xs font-medium text-[#0F172A]"
                    >
                      Live Demonstration URL (Optional Placeholder)
                    </label>
                    <input
                      id="proj-demo"
                      type="url"
                      placeholder="https://your-live-demo-url.com"
                      value={draftDemoUrl}
                      onChange={(e) => setDraftDemoUrl(e.target.value)}
                      className="mt-1.5 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2.5 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                    />
                  </div>
                  <div className="flex items-center justify-end gap-3 pt-2">
                    <button
                      type="button"
                      onClick={() => setEditingMode(false)}
                      className="h-10 rounded-lg border border-[#CBD5E1] px-4 text-xs font-medium text-[#334155] hover:text-[#0F172A]"
                    >
                      Cancel
                    </button>
                    <button
                      type="submit"
                      className="h-10 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                    >
                      Save Changes
                    </button>
                  </div>
                </form>
              )}
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
};
