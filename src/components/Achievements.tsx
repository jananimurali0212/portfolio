import React from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Award, Cpu, Lightbulb, Mic, Trophy } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';
import { Tilt3D } from './Tilt3D';

interface AchievementsProps {
  achievements: AchievementItem[];
}

function getAchievementIcon(id: string) {
  switch (id) {
    case 'ach-sih':
      return Cpu;
    case 'ach-conference':
      return Mic;
    case 'ach-capgemini':
      return Lightbulb;
    case 'ach-infosys-mentor':
      return Award;
    default:
      return Trophy;
  }
}

export const Achievements: React.FC<AchievementsProps> = ({ achievements }) => {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section id="achievements" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">Achievements</p>
          <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Hackathons, conferences &amp; recognition
          </h2>
          <p className="mt-2 text-sm text-[#334155] sm:text-base">
            Academic, technical, and communication milestones across hackathons, industry
            ideathons, and team internships.
          </p>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => {
            const Icon = getAchievementIcon(item.id);
            return (
              <Tilt3D key={item.id} maxTilt={9} scaleOnHover={1.02}>
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.3, delay: Math.min(idx * 0.04, 0.2) }}
                  className="flex h-full flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs transition-colors hover:border-[#2563EB]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-3">
                      <div
                        style={{ transform: 'translateZ(20px)' }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#0D9488]"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </div>
                      {item.dateLabel && (
                        <span className="font-mono text-xs text-[#64748B] tabular-nums">
                          {item.dateLabel}
                        </span>
                      )}
                    </div>

                    <h3 className="mt-3.5 font-display text-base font-bold text-[#0F172A]">
                      {item.title}
                    </h3>

                    <p className="mt-1 text-xs font-semibold text-[#0D9488]">
                      {item.eventOrContext}
                    </p>

                    <p className="mt-2.5 text-sm leading-relaxed text-[#334155]">
                      {item.description}
                    </p>
                  </div>
                </motion.div>
              </Tilt3D>
            );
          })}
        </div>
      </div>
    </section>
  );
};
