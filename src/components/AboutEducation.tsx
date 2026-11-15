import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, GraduationCap, Pencil, X } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';

interface AboutEducationProps {
  cgpa: string;
  onUpdateCgpa: (nextCgpa: string) => void;
}

export const AboutEducation: React.FC<AboutEducationProps> = ({ cgpa, onUpdateCgpa }) => {
  const prefersReducedMotion = useReducedMotion();
  const [editingCgpa, setEditingCgpa] = useState(false);
  const [draftCgpa, setDraftCgpa] = useState(cgpa);

  const handleSaveCgpa = (e: React.FormEvent) => {
    e.preventDefault();
    const trimmed = draftCgpa.trim();
    if (trimmed) {
      onUpdateCgpa(trimmed);
    }
    setEditingCgpa(false);
  };

  return (
    <section id="about" className="border-b border-[#CBD5E1] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.45, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-10 lg:grid-cols-12 lg:gap-12"
        >
          {/* About Narrative */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#0D9488]">About Me</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Engineering practical AI and full-stack software
            </h2>

            <div className="mt-6 space-y-4 text-base leading-relaxed text-[#334155]">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* Key Academic & Focus Metadata */}
            <div className="mt-8 grid grid-cols-1 gap-6 border-t border-[#CBD5E1] pt-6 sm:grid-cols-2">
              <div>
                <p className="text-xs font-medium text-[#0D9488]">Core Areas of Interest</p>
                <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                  {PROFILE.education.interests.join(' · ')}
                </p>
              </div>
              <div>
                <p className="text-xs font-medium text-[#0D9488]">Internship Target Roles</p>
                <p className="mt-1.5 text-sm font-semibold text-[#0F172A]">
                  AI/ML · Python · Software Development · Full-Stack · QA/Testing
                </p>
              </div>
            </div>
          </div>

          {/* Education Card */}
          <div className="lg:col-span-5">
            <div className="h-full rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs sm:p-8">
              <div className="flex items-start justify-between gap-4">
                <div className="flex items-center gap-3.5">
                  <div className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]">
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D9488]">Education</p>
                    <h3 className="font-display text-lg font-bold text-[#0F172A]">
                      {PROFILE.education.degree}
                    </h3>
                  </div>
                </div>
              </div>

              <div className="mt-6 space-y-4 border-t border-[#E2E8F0] pt-5">
                <div>
                  <p className="text-xs text-[#64748B]">Institution</p>
                  <p className="mt-0.5 text-base font-semibold text-[#0F172A]">
                    {PROFILE.education.institution}
                  </p>
                </div>

                <div className="flex flex-wrap items-center justify-between gap-4">
                  <div>
                    <p className="text-xs text-[#64748B]">Academic Year</p>
                    <p className="mt-0.5 text-sm font-medium text-[#334155]">
                      {PROFILE.education.year}
                    </p>
                  </div>

                  <div>
                    <p className="text-xs text-[#64748B]">CGPA (Editable)</p>
                    {!editingCgpa ? (
                      <div className="mt-0.5 flex items-center gap-2">
                        <span className="font-display text-xl font-bold text-[#0F172A] tabular-nums">
                          {cgpa}
                        </span>
                        <button
                          type="button"
                          onClick={() => {
                            setDraftCgpa(cgpa);
                            setEditingCgpa(true);
                          }}
                          aria-label="Edit CGPA"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#CBD5E1] bg-[#F8FAFC] text-[#334155] transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
                        >
                          <Pencil className="h-3.5 w-3.5" />
                        </button>
                      </div>
                    ) : (
                      <form onSubmit={handleSaveCgpa} className="mt-1 flex items-center gap-1.5">
                        <input
                          type="text"
                          value={draftCgpa}
                          onChange={(e) => setDraftCgpa(e.target.value)}
                          aria-label="CGPA value"
                          className="w-20 rounded-md border border-[#2563EB] bg-[#F8FAFC] px-2 py-1 text-sm font-semibold text-[#0F172A] tabular-nums focus:outline-none"
                        />
                        <button
                          type="submit"
                          aria-label="Save CGPA"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md bg-[#2563EB] text-white hover:bg-[#1D4ED8]"
                        >
                          <Check className="h-3.5 w-3.5" />
                        </button>
                        <button
                          type="button"
                          onClick={() => setEditingCgpa(false)}
                          aria-label="Cancel CGPA edit"
                          className="inline-flex h-7 w-7 items-center justify-center rounded-md border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
                        >
                          <X className="h-3.5 w-3.5" />
                        </button>
                      </form>
                    )}
                  </div>
                </div>
              </div>

              {/* Prior Academic Foundation */}
              <div className="mt-6 space-y-3 border-t border-[#E2E8F0] pt-5">
                <p className="text-xs font-medium text-[#64748B]">Secondary Academic Foundation</p>
                {PROFILE.education.priorEducation.map((item) => (
                  <div
                    key={item.level}
                    className="flex items-baseline justify-between gap-4 text-sm"
                  >
                    <div>
                      <span className="font-semibold text-[#0F172A]">{item.level}</span>
                      <span className="mx-1.5 text-[#CBD5E1]">·</span>
                      <span className="text-[#334155]">{item.school}</span>
                    </div>
                    <span className="shrink-0 font-mono text-xs font-semibold text-[#0D9488] tabular-nums">
                      {item.score}
                    </span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
