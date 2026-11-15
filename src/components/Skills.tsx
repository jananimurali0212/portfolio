import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { TechIcon } from './TechIcons';

export const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');

  const visibleGroups =
    selectedGroupId === 'all'
      ? SKILL_GROUPS
      : SKILL_GROUPS.filter((group) => group.id === selectedGroupId);

  return (
    <section id="skills" className="border-b border-[#CBD5E1] bg-[#F1F5F9]/55 py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-6 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0D9488]">Technical Skills</p>
            <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Languages, web stack &amp; applied AI tooling
            </h2>
            <p className="mt-3 max-w-2xl text-base text-[#334155]">
              Technologies and engineering workflows applied across academic projects, internships,
              and independent builds.
            </p>
          </div>

          {/* Interactive Filter Tabs */}
          <div
            role="tablist"
            aria-label="Filter technical skills by category"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white p-1 shadow-xs"
          >
            <button
              type="button"
              role="tab"
              aria-selected={selectedGroupId === 'all'}
              onClick={() => setSelectedGroupId('all')}
              className={`h-9 shrink-0 rounded-lg px-3.5 text-xs font-medium whitespace-nowrap transition-colors ${
                selectedGroupId === 'all'
                  ? 'bg-[#2563EB] text-white'
                  : 'text-[#334155] hover:text-[#0F172A]'
              }`}
            >
              All Areas
            </button>
            {SKILL_GROUPS.map((group) => (
              <button
                key={group.id}
                type="button"
                role="tab"
                aria-selected={selectedGroupId === group.id}
                onClick={() => setSelectedGroupId(group.id)}
                className={`h-9 shrink-0 rounded-lg px-3.5 text-xs font-medium whitespace-nowrap transition-colors ${
                  selectedGroupId === group.id
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {group.title.split(' ')[0]}
              </button>
            ))}
          </div>
        </div>

        {/* Skill Groups */}
        <div className="mt-10 space-y-10">
          {visibleGroups.map((group) => (
            <motion.div
              key={group.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.15 }}
              transition={{ duration: 0.4, ease: [0.16, 1, 0.3, 1] }}
            >
              <div className="mb-4 flex flex-col gap-1 sm:flex-row sm:items-baseline sm:justify-between">
                <h3 className="font-display text-lg font-semibold text-[#0F172A]">
                  {group.title}
                </h3>
                <p className="text-xs text-[#334155]">{group.subtitle}</p>
              </div>

              <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">
                {group.items.map((skill) => (
                  <motion.div
                    key={skill.name}
                    whileHover={prefersReducedMotion ? undefined : { y: -3 }}
                    transition={{ duration: 0.18, ease: [0.16, 1, 0.3, 1] }}
                    className="group flex items-center gap-4 rounded-xl border border-[#CBD5E1] bg-white p-4 shadow-xs transition-colors duration-150 hover:border-[#0D9488]"
                  >
                    <div className="flex h-11 w-11 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] transition-transform duration-200 group-hover:scale-105">
                      <TechIcon id={skill.icon} className="h-6 w-6 text-[#0F172A]" />
                    </div>
                    <div className="min-w-0">
                      <p className="truncate font-display text-sm font-semibold text-[#0F172A]">
                        {skill.name}
                      </p>
                      <p className="mt-0.5 truncate text-xs font-medium text-[#0D9488]">
                        {skill.note}
                      </p>
                    </div>
                  </motion.div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
