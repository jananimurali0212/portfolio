import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Check, Pencil, Trophy, X } from 'lucide-react';
import { AchievementItem } from '../types/portfolio';

interface AchievementsProps {
  achievements: AchievementItem[];
  onUpdateAchievement: (updated: AchievementItem) => void;
}

export const Achievements: React.FC<AchievementsProps> = ({
  achievements,
  onUpdateAchievement,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [editingId, setEditingId] = useState<string | null>(null);
  const [draftEvent, setDraftEvent] = useState('');
  const [draftDate, setDraftDate] = useState('');

  const startEdit = (item: AchievementItem) => {
    setEditingId(item.id);
    setDraftEvent(item.eventOrContext);
    setDraftDate(item.dateLabel);
  };

  const saveEdit = (item: AchievementItem) => {
    onUpdateAchievement({
      ...item,
      eventOrContext: draftEvent.trim() || item.eventOrContext,
      dateLabel: draftDate.trim() || item.dateLabel,
    });
    setEditingId(null);
  };

  return (
    <section
      id="achievements"
      className="border-b border-[#CBD5E1] bg-[#F1F5F9]/55 py-16 sm:py-24"
    >
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">Achievements</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Hackathons, conferences &amp; mentor recognition
          </h2>
          <p className="mt-3 text-base text-[#334155]">
            Academic, technical, and communication milestones across hackathons, industry
            ideathons, and team internships. Event details marked editable can be refined anytime.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 md:grid-cols-2 lg:grid-cols-3">
          {achievements.map((item, idx) => (
            <motion.div
              key={item.id}
              initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.1 }}
              transition={{ duration: 0.35, delay: Math.min(idx * 0.04, 0.2) }}
              className="flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-xs"
            >
              <div>
                <div className="flex items-start justify-between gap-3">
                  <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#0D9488]">
                    <Trophy className="h-5 w-5" aria-hidden="true" />
                  </div>
                  <span className="font-mono text-xs text-[#64748B] tabular-nums">
                    {item.dateLabel}
                  </span>
                </div>

                <h3 className="mt-4 font-display text-lg font-bold text-[#0F172A]">
                  {item.title}
                </h3>

                {editingId === item.id ? (
                  <div className="mt-3 space-y-2.5">
                    <input
                      type="text"
                      value={draftEvent}
                      onChange={(e) => setDraftEvent(e.target.value)}
                      aria-label="Event or context"
                      className="w-full rounded-lg border border-[#2563EB] bg-[#F8FAFC] px-3 py-1.5 text-xs text-[#0F172A] focus:outline-none"
                    />
                    <input
                      type="text"
                      value={draftDate}
                      onChange={(e) => setDraftDate(e.target.value)}
                      aria-label="Event date"
                      className="w-full rounded-lg border border-[#2563EB] bg-[#F8FAFC] px-3 py-1.5 text-xs text-[#0F172A] focus:outline-none"
                    />
                    <div className="flex items-center gap-2">
                      <button
                        type="button"
                        onClick={() => saveEdit(item)}
                        className="inline-flex h-8 items-center gap-1 rounded-lg bg-[#2563EB] px-3 text-xs font-medium text-white"
                      >
                        <Check className="h-3.5 w-3.5" />
                        <span>Save</span>
                      </button>
                      <button
                        type="button"
                        onClick={() => setEditingId(null)}
                        className="inline-flex h-8 items-center gap-1 rounded-lg border border-[#CBD5E1] px-3 text-xs text-[#334155]"
                      >
                        <X className="h-3.5 w-3.5" />
                        <span>Cancel</span>
                      </button>
                    </div>
                  </div>
                ) : (
                  <p className="mt-1.5 text-xs font-semibold text-[#0D9488]">
                    {item.eventOrContext}
                  </p>
                )}

                <p className="mt-3 text-sm leading-relaxed text-[#334155]">{item.description}</p>
              </div>

              {item.isEditable && editingId !== item.id && (
                <div className="mt-5 border-t border-[#E2E8F0] pt-3.5">
                  <button
                    type="button"
                    onClick={() => startEdit(item)}
                    className="inline-flex items-center gap-1.5 text-xs font-medium text-[#475569] transition-colors hover:text-[#2563EB]"
                  >
                    <Pencil className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>Edit event name or date</span>
                  </button>
                </div>
              )}
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};
