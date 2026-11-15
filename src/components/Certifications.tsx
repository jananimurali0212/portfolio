import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import {
  Award,
  Briefcase,
  Code2,
  Cpu,
  ExternalLink,
  Eye,
  GraduationCap,
} from 'lucide-react';
import { CertificationItem } from '../types/portfolio';
import { Tilt3D } from './Tilt3D';

interface CertificationsProps {
  certifications: CertificationItem[];
  onViewAsset: (
    title: string,
    assetUrl: string,
    verifyUrl?: string,
    isImage?: boolean
  ) => void;
}

type CertFilter = 'All' | 'AI & Internships' | 'Programming' | 'Professional';

const CERT_FILTERS: CertFilter[] = ['All', 'AI & Internships', 'Programming', 'Professional'];

function matchesCertFilter(cert: CertificationItem, filter: CertFilter): boolean {
  if (filter === 'All') return true;
  if (filter === 'AI & Internships') {
    return (
      cert.category === 'Artificial Intelligence' || cert.category === 'AI & Web Development'
    );
  }
  if (filter === 'Programming') {
    return cert.category === 'Programming' || cert.category === 'Computer Science Core';
  }
  return (
    cert.category === 'Professional Skills' ||
    cert.category === 'Career Readiness' ||
    cert.category === 'Communication'
  );
}

function getCertIcon(category: string) {
  if (category === 'AI & Web Development') return Briefcase;
  if (category === 'Artificial Intelligence') return Cpu;
  if (category === 'Programming' || category === 'Computer Science Core') return Code2;
  if (category === 'Career Readiness') return GraduationCap;
  return Award;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onViewAsset,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [activeFilter, setActiveFilter] = useState<CertFilter>('All');

  const visibleCerts = certifications.filter((cert) => matchesCertFilter(cert, activeFilter));

  return (
    <section id="certifications" className="py-8 sm:py-12">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col justify-between gap-4 md:flex-row md:items-end">
          <div>
            <p className="text-sm font-semibold text-[#0D9488]">Certifications</p>
            <h2 className="mt-1.5 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
              Verified credentials &amp; coursework
            </h2>
            <p className="mt-2 max-w-2xl text-sm text-[#334155] sm:text-base">
              Click any certificate card or icon to open and inspect the full credential document.
            </p>
          </div>

          <div
            role="tablist"
            aria-label="Filter certifications"
            className="inline-flex flex-wrap items-center gap-1 rounded-xl border border-[#CBD5E1] bg-white p-1 shadow-xs"
          >
            {CERT_FILTERS.map((filter) => (
              <button
                key={filter}
                type="button"
                role="tab"
                aria-selected={activeFilter === filter}
                onClick={() => setActiveFilter(filter)}
                className={`h-9 shrink-0 rounded-lg px-3 text-xs font-medium whitespace-nowrap transition-colors ${
                  activeFilter === filter
                    ? 'bg-[#2563EB] text-white'
                    : 'text-[#334155] hover:text-[#0F172A]'
                }`}
              >
                {filter}
              </button>
            ))}
          </div>
        </div>

        <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5">
          {visibleCerts.map((cert, index) => {
            const Icon = getCertIcon(cert.category);
            const assetUrl = cert.imageUrl || cert.pdfUrl;
            const isImage = Boolean(cert.imageUrl);

            return (
              <Tilt3D key={cert.id} maxTilt={10} scaleOnHover={1.025}>
                <motion.div
                  initial={prefersReducedMotion ? false : { opacity: 0, y: 12 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.28, delay: Math.min(index * 0.03, 0.2) }}
                  className="group flex h-full flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-4 shadow-xs transition-colors hover:border-[#2563EB]"
                >
                  <div>
                    <div className="flex items-start justify-between gap-2">
                      <button
                        type="button"
                        onClick={() =>
                          assetUrl &&
                          onViewAsset(cert.title, assetUrl, cert.verificationUrl, isImage)
                        }
                        aria-label={`Open ${cert.title} certificate`}
                        style={{ transform: 'translateZ(20px)' }}
                        className="flex h-10 w-10 shrink-0 items-center justify-center rounded-xl border border-[#CBD5E1] bg-[#F8FAFC] text-[#0D9488] transition-colors group-hover:border-[#2563EB] group-hover:bg-[#2563EB] group-hover:text-white"
                      >
                        <Icon className="h-5 w-5" aria-hidden="true" />
                      </button>

                      <span className="text-right font-mono text-[11px] text-[#64748B]">
                        {cert.issueDate}
                      </span>
                    </div>

                    <button
                      type="button"
                      onClick={() =>
                        assetUrl &&
                        onViewAsset(cert.title, assetUrl, cert.verificationUrl, isImage)
                      }
                      className="mt-3 block text-left"
                    >
                      <p className="text-[11px] font-semibold text-[#0D9488]">{cert.issuer}</p>
                      <h3 className="mt-1 line-clamp-2 font-display text-sm font-bold text-[#0F172A] group-hover:text-[#2563EB]">
                        {cert.title}
                      </h3>
                      <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-[#475569]">
                        {cert.details}
                      </p>
                    </button>
                  </div>

                  <div className="mt-3.5 flex items-center justify-between gap-2 border-t border-[#E2E8F0] pt-3">
                    {assetUrl && (
                      <button
                        type="button"
                        onClick={() =>
                          onViewAsset(cert.title, assetUrl, cert.verificationUrl, isImage)
                        }
                        className="inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg bg-[#2563EB] px-2.5 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1D4ED8]"
                      >
                        <Eye className="h-3.5 w-3.5" aria-hidden="true" />
                        <span>View</span>
                      </button>
                    )}

                    {cert.verificationUrl && (
                      <a
                        href={cert.verificationUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex h-8 shrink-0 items-center gap-1 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-2.5 text-xs font-medium text-[#0F172A] whitespace-nowrap transition-colors hover:border-[#0D9488] hover:text-[#0D9488]"
                      >
                        <ExternalLink className="h-3 w-3 text-[#0D9488]" aria-hidden="true" />
                        <span>Verify</span>
                      </a>
                    )}
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
