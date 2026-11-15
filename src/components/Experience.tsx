import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Briefcase, Check, ExternalLink, FileText, Pencil, X } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onUpdateExperienceDate: (id: string, nextPeriod: string) => void;
  onViewCertificate: (title: string, pdfUrl: string, verifyUrl?: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  onUpdateExperienceDate,
  onViewCertificate,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftPeriod, setDraftPeriod] = useState('');

  const startEdit = (exp: ExperienceItem) => {
    setEditingId(exp.id);
    setDraftPeriod(exp.period);
  };

  const saveEdit = (id: string) => {
    if (draftPeriod.trim()) {
      onUpdateExperienceDate(id, draftPeriod.trim());
    }
    setEditingId(null);
  };

  return (
    <section id="experience" className="border-b border-[#CBD5E1] bg-[#F1F5F9]/55 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">Internship Experience</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Applied team engineering, testing &amp; AI research
          </h2>
          <p className="mt-3 text-base text-[#334155]">
            Hands-on internship experience spanning collaborative AI development, manual QA
            verification, bug reproduction, and AI-driven non-profit research.
          </p>
        </div>

        {/* Vertical Timeline */}
        <div className="relative mt-12 space-y-8 pl-6 sm:pl-10">
          {/* Vertical Track */}
          <div
            aria-hidden="true"
            className="absolute top-2 bottom-2 left-2.5 w-px bg-gradient-to-b from-[#2563EB] via-[#0D9488] to-transparent sm:left-4"
          />

          {experiences.map((exp, idx) => (
            <motion.div
              key={exp.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.45, delay: idx * 0.08 }}
              className="relative rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs sm:p-8"
            >
              {/* Timeline Node */}
              <span
                aria-hidden="true"
                className="absolute top-8 -left-[22px] flex h-4 w-4 items-center justify-center rounded-full border-2 border-[#2563EB] bg-[#F8FAFC] sm:-left-[30px]"
              >
                <span className="h-1.5 w-1.5 rounded-full bg-[#0D9488]" />
              </span>

              <div className="flex flex-col justify-between gap-4 border-b border-[#E2E8F0] pb-5 md:flex-row md:items-start">
                <div>
                  <div className="flex items-center gap-2.5 text-xs font-semibold text-[#0D9488]">
                    <Briefcase className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{exp.statusLabel}</span>
                  </div>
                  <h3 className="mt-2 font-display text-xl font-bold text-[#0F172A] sm:text-2xl">
                    {exp.organization}
                  </h3>
                  <p className="mt-1 text-sm font-semibold text-[#2563EB]">{exp.role}</p>
                </div>

                {/* Editable Date Period */}
                <div className="shrink-0">
                  {editingId === exp.id ? (
                    <div className="flex items-center gap-1.5">
                      <input
                        type="text"
                        value={draftPeriod}
                        onChange={(e) => setDraftPeriod(e.target.value)}
                        aria-label="Internship period"
                        className="w-56 rounded-lg border border-[#2563EB] bg-[#F8FAFC] px-3 py-1.5 text-xs text-[#0F172A] focus:outline-none"
                      />
                      <button
                        type="button"
                        onClick={() => saveEdit(exp.id)}
                        aria-label="Save internship period"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg bg-[#2563EB] text-white"
                      >
                        <Check className="h-3.5 w-3.5" />
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        aria-label="Cancel edit"
                        className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-[#CBD5E1] text-[#334155]"
                      >
                        <X className="h-3.5 w-3.5" />
                      </button>
                    </div>
                  ) : (
                    <div className="flex items-center gap-2 font-mono text-xs text-[#334155] tabular-nums">
                      <span>{exp.period}</span>
                      <button
                        type="button"
                        onClick={() => startEdit(exp)}
                        aria-label={`Edit dates for ${exp.organization}`}
                        className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#CBD5E1] bg-[#F8FAFC] text-[#475569] transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
                      >
                        <Pencil className="h-3 w-3" />
                      </button>
                    </div>
                  )}
                </div>
              </div>

              <p className="mt-4 text-sm leading-relaxed text-[#334155]">{exp.summary}</p>

              <ul className="mt-5 space-y-2.5 text-sm text-[#334155]">
                {exp.highlights.map((bullet, i) => (
                  <li key={i} className="flex items-start gap-3">
                    <span className="mt-2 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                    <span className="leading-relaxed">{bullet}</span>
                  </li>
                ))}
              </ul>

              {(exp.certificatePdfUrl || exp.certificateVerifyUrl) && (
                <div className="mt-6 flex flex-wrap items-center gap-3 border-t border-[#E2E8F0] pt-5">
                  {exp.certificatePdfUrl && (
                    <button
                      type="button"
                      onClick={() =>
                        onViewCertificate(
                          `${exp.organization} — Completion Certificate`,
                          exp.certificatePdfUrl!,
                          exp.certificateVerifyUrl
                        )
                      }
                      className="inline-flex h-10 items-center gap-2 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white transition-colors hover:bg-[#1D4ED8]"
                    >
                      <FileText className="h-4 w-4" aria-hidden="true" />
                      <span>View Internship Certificate</span>
                    </button>
                  )}

                  {exp.certificateVerifyUrl && (
                    <a
                      href={exp.certificateVerifyUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-10 items-center gap-2 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-4 text-xs font-medium text-[#0F172A] transition-colors hover:border-[#0D9488] hover:text-[#0D9488]"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
                      <span>Wingspan Verification</span>
                    </a>
                  )}
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
