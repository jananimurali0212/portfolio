import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Briefcase, ExternalLink, FileText } from 'lucide-react';
import { ExperienceItem } from '../types/portfolio';
import { Tilt3D } from './Tilt3D';

interface ExperienceProps {
  experiences: ExperienceItem[];
  onViewCertificate: (title: string, pdfUrl: string, verifyUrl?: string) => void;
}

export const Experience: React.FC<ExperienceProps> = ({
  experiences,
  onViewCertificate,
}) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="experience" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">Internship Experience</p>
          <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Applied team engineering, testing &amp; AI research
          </h2>
          <p className="mt-2 text-sm text-[#334155] sm:text-base">
            Hands-on internship experience spanning collaborative AI development, manual QA
            verification, bug reproduction, and AI-driven non-profit research.
          </p>
        </div>

        {/* Side-by-Side 3D Internship Cards (Eliminates Vertical Scroll) */}
        <div className="mt-6 grid grid-cols-1 gap-6 lg:grid-cols-2">
          {experiences.map((exp, idx) => (
            <Tilt3D key={exp.id} maxTilt={7} scaleOnHover={1.015}>
              <motion.div
                initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.35, delay: idx * 0.06 }}
                className="flex h-full flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs"
              >
                <div>
                  <div className="flex flex-wrap items-start justify-between gap-3 border-b border-[#E2E8F0] pb-4">
                    <div className="flex items-start gap-3">
                      <div
                        style={{ transform: 'translateZ(20px)' }}
                        className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]"
                      >
                        <Briefcase className="h-5 w-5" aria-hidden="true" />
                      </div>
                      <div>
                        <p className="text-xs font-semibold text-[#0D9488]">{exp.statusLabel}</p>
                        <h3 className="mt-0.5 font-display text-lg font-bold text-[#0F172A]">
                          {exp.organization}
                        </h3>
                        <p className="text-sm font-semibold text-[#2563EB]">{exp.role}</p>
                      </div>
                    </div>

                    <span className="font-mono text-xs text-[#334155] tabular-nums">
                      {exp.period}
                    </span>
                  </div>

                  <p className="mt-4 text-sm leading-relaxed text-[#334155]">{exp.summary}</p>

                  <ul className="mt-4 space-y-2 text-xs leading-relaxed text-[#334155] sm:text-sm">
                    {exp.highlights.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2.5">
                        <span className="mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full bg-[#0D9488]" />
                        <span>{bullet}</span>
                      </li>
                    ))}
                  </ul>
                </div>

                {(exp.certificatePdfUrl || exp.certificateVerifyUrl) && (
                  <div className="mt-5 flex flex-wrap items-center gap-2.5 border-t border-[#E2E8F0] pt-4">
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
                        <span>View Certificate</span>
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
            </Tilt3D>
          ))}
        </div>
      </div>
    </section>
  );
};
