import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Compass, GraduationCap, Target } from 'lucide-react';
import { PROFILE } from '../data/portfolioData';
import { Tilt3D } from './Tilt3D';

export const AboutEducation: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="about" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
          className="grid grid-cols-1 gap-8 lg:grid-cols-12 lg:gap-10"
        >
          {/* About Narrative */}
          <div className="lg:col-span-7">
            <p className="text-sm font-semibold text-[#0D9488]">About Me</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Engineering practical AI and full-stack software
            </h2>

            <div className="mt-5 space-y-3.5 text-base leading-relaxed text-[#334155]">
              {PROFILE.aboutParagraphs.map((paragraph, idx) => (
                <p key={idx}>{paragraph}</p>
              ))}
            </div>

            {/* 3D Highlight Cards */}
            <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
              <Tilt3D maxTilt={8}>
                <div className="flex h-full items-start gap-3.5 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#0D9488]">
                    <Compass className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D9488]">Core Areas of Interest</p>
                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                      {PROFILE.education.interests.join(' · ')}
                    </p>
                  </div>
                </div>
              </Tilt3D>

              <Tilt3D maxTilt={8}>
                <div className="flex h-full items-start gap-3.5 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]">
                    <Target className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D9488]">Internship Target Roles</p>
                    <p className="mt-1 text-sm font-semibold text-[#0F172A]">
                      AI/ML · Python · Software · Full-Stack · QA/Testing
                    </p>
                  </div>
                </div>
              </Tilt3D>
            </div>
          </div>

          {/* 3D Education Card */}
          <div className="lg:col-span-5">
            <Tilt3D maxTilt={7} scaleOnHover={1.01}>
              <div className="h-full rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs sm:p-7">
                <div className="flex items-center gap-3.5">
                  <div
                    style={{ transform: 'translateZ(20px)' }}
                    className="flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#2563EB]"
                  >
                    <GraduationCap className="h-6 w-6" aria-hidden="true" />
                  </div>
                  <div>
                    <p className="text-xs font-semibold text-[#0D9488]">Education</p>
                    <h3 className="font-display text-lg font-bold text-[#0F172A]">
                      {PROFILE.education.degree}
                    </h3>
                  </div>
                </div>

                <div className="mt-5 space-y-4 border-t border-[#E2E8F0] pt-4">
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
                      <p className="text-xs text-[#64748B]">CGPA</p>
                      <p className="mt-0.5 font-display text-xl font-bold text-[#0F172A] tabular-nums">
                        {PROFILE.education.cgpa}
                      </p>
                    </div>
                  </div>
                </div>

                {/* Prior Academic Foundation */}
                <div className="mt-5 space-y-2.5 border-t border-[#E2E8F0] pt-4">
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
            </Tilt3D>
          </div>
        </motion.div>
      </div>
    </section>
  );
};
