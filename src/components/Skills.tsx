import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { X } from 'lucide-react';
import { SKILL_GROUPS } from '../data/portfolioData';
import { TechIcon } from './TechIcons';
import { Tilt3D } from './Tilt3D';

export const Skills: React.FC = () => {
  const prefersReducedMotion = useReducedMotion();
  const [selectedGroupId, setSelectedGroupId] = useState<string>('all');
  const [activeSkill, setActiveSkill] = useState<{
    name: string;
    note: string;
    group: string;
  } | null>(null);

  const visibleItems = SKILL_GROUPS.filter(
    (g) => selectedGroupId === 'all' || g.id === selectedGroupId
  ).flatMap((g) =>
    g.items.map((item) => ({
      ...item,
      groupTitle: g.title,
    }))
  );

  return (
    <section id="skills" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0D9488]">Technical Skills</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Languages, web stack &amp; applied AI tooling
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#334155] sm:text-base">
              Click any category tab or technology icon to inspect how it is applied.
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
              All ({SKILL_GROUPS.reduce((acc, g) => acc + g.items.length, 0)})
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

        {/* Active Clicked Skill Inspector */}
        {activeSkill && (
          <div className="mt-5 flex items-center justify-between gap-4 rounded-xl border border-[#0D9488]/40 bg-white px-4 py-3 shadow-xs">
            <div className="text-sm text-[#334155]">
              <span className="font-display font-bold text-[#0F172A]">{activeSkill.name}</span>
              <span className="mx-2 text-[#CBD5E1]">·</span>
              <span className="font-medium text-[#0D9488]">{activeSkill.group}</span>
              <span className="mx-2 text-[#CBD5E1]">·</span>
              <span>{activeSkill.note}</span>
            </div>
            <button
              type="button"
              onClick={() => setActiveSkill(null)}
              aria-label="Close skill detail"
              className="inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        )}

        {/* Compact 3D Clickable Icon Grid (fits cleanly without long vertical scrolling) */}
        <motion.div
          initial={prefersReducedMotion ? false : { opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.3 }}
          className="mt-6 grid grid-cols-2 gap-3.5 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6"
        >
          {visibleItems.map((skill) => {
            const isSelected = activeSkill?.name === skill.name;
            return (
              <Tilt3D key={skill.name} maxTilt={12} scaleOnHover={1.03}>
                <button
                  type="button"
                  onClick={() =>
                    setActiveSkill({
                      name: skill.name,
                      note: skill.note,
                      group: skill.groupTitle,
                    })
                  }
                  className={`group flex h-full w-full flex-col items-center justify-center rounded-xl border bg-white p-4 text-center shadow-xs transition-colors duration-150 ${
                    isSelected
                      ? 'border-[#2563EB] ring-2 ring-[#2563EB]/20'
                      : 'border-[#CBD5E1] hover:border-[#0D9488]'
                  }`}
                >
                  <div
                    style={{ transform: 'translateZ(22px)' }}
                    className="flex h-12 w-12 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] transition-transform duration-150 group-hover:scale-105"
                  >
                    <TechIcon id={skill.icon} className="h-6 w-6 text-[#0F172A]" />
                  </div>
                  <p
                    style={{ transform: 'translateZ(14px)' }}
                    className="mt-3 font-display text-xs font-bold text-[#0F172A]"
                  >
                    {skill.name}
                  </p>
                  <p className="mt-0.5 line-clamp-1 text-[11px] font-medium text-[#0D9488]">
                    {skill.note}
                  </p>
                </button>
              </Tilt3D>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
};
