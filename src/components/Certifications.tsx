import React, { useState } from 'react';
import { motion, useReducedMotion } from 'motion/react';
import { Award, ExternalLink, FileText, ImagePlus, Link2, Upload, X } from 'lucide-react';
import { CertificationItem } from '../types/portfolio';

interface CertificationsProps {
  certifications: CertificationItem[];
  onUpdateCertification: (updated: CertificationItem) => void;
  onViewAsset: (
    title: string,
    assetUrl: string,
    verifyUrl?: string,
    isImage?: boolean
  ) => void;
}

export const Certifications: React.FC<CertificationsProps> = ({
  certifications,
  onUpdateCertification,
  onViewAsset,
}) => {
  const prefersReducedMotion = useReducedMotion();
  const [editingCert, setEditingCert] = useState<CertificationItem | null>(null);
  const [draftVerifyUrl, setDraftVerifyUrl] = useState('');
  const [draftIssueDate, setDraftIssueDate] = useState('');
  const [draftImageData, setDraftImageData] = useState<string | undefined>(undefined);
  const [uploadError, setUploadError] = useState<string | null>(null);

  const openEditor = (cert: CertificationItem) => {
    setEditingCert(cert);
    setDraftVerifyUrl(cert.verificationUrl || '');
    setDraftIssueDate(cert.issueDate);
    setDraftImageData(cert.imageUrl);
    setUploadError(null);
  };

  const handleImageFileChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    const file = e.target.files?.[0];
    if (!file) return;
    if (!file.type.startsWith('image/')) {
      setUploadError('Please select a PNG, JPG, or WebP image file.');
      return;
    }
    if (file.size > 3 * 1024 * 1024) {
      setUploadError('Please choose an image smaller than 3 MB.');
      return;
    }
    setUploadError(null);
    const reader = new FileReader();
    reader.onload = () => {
      if (typeof reader.result === 'string') {
        setDraftImageData(reader.result);
      }
    };
    reader.readAsDataURL(file);
  };

  const handleSave = (e: React.FormEvent) => {
    e.preventDefault();
    if (!editingCert) return;
    onUpdateCertification({
      ...editingCert,
      issueDate: draftIssueDate.trim() || editingCert.issueDate,
      verificationUrl: draftVerifyUrl.trim() ? draftVerifyUrl.trim() : undefined,
      imageUrl: draftImageData,
    });
    setEditingCert(null);
  };

  return (
    <section id="certifications" className="border-b border-[#CBD5E1] py-16 sm:py-24">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="max-w-2xl">
          <p className="text-sm font-semibold text-[#0D9488]">Certifications</p>
          <h2 className="mt-2 font-display text-3xl font-bold tracking-tight text-[#0F172A] sm:text-4xl">
            Verified credentials &amp; technical coursework
          </h2>
          <p className="mt-3 text-base text-[#334155]">
            Completed internships and industry certifications. Attached internship PDFs can be
            inspected directly, and additional certificate images or verification links can be added
            individually.
          </p>
        </div>

        <div className="mt-10 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {certifications.map((cert, index) => {
            const hasPreview = Boolean(cert.pdfUrl || cert.imageUrl);
            return (
              <motion.div
                key={cert.id}
                initial={prefersReducedMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.1 }}
                transition={{ duration: 0.35, delay: Math.min(index * 0.03, 0.2) }}
                className="flex flex-col justify-between rounded-2xl border border-[#CBD5E1] bg-white p-5 shadow-xs transition-colors hover:border-[#2563EB]"
              >
                <div>
                  <div className="flex items-start justify-between gap-3">
                    <div className="flex h-10 w-10 shrink-0 items-center justify-center rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] text-[#0D9488]">
                      <Award className="h-5 w-5" aria-hidden="true" />
                    </div>
                    <span className="text-right text-xs text-[#64748B]">{cert.issueDate}</span>
                  </div>

                  <p className="mt-4 text-xs font-semibold text-[#0D9488]">
                    {cert.issuer} · {cert.category}
                  </p>
                  <h3 className="mt-1 font-display text-base font-bold text-[#0F172A]">
                    {cert.title}
                  </h3>
                  <p className="mt-2 text-xs leading-relaxed text-[#334155]">{cert.details}</p>

                  {cert.imageUrl && (
                    <div className="mt-3 overflow-hidden rounded-lg border border-[#CBD5E1] bg-[#F8FAFC]">
                      <img
                        src={cert.imageUrl}
                        alt={`${cert.title} certificate preview`}
                        referrerPolicy="no-referrer"
                        className="h-28 w-full object-cover"
                      />
                    </div>
                  )}
                </div>

                <div className="mt-5 flex flex-wrap items-center gap-2 border-t border-[#E2E8F0] pt-4">
                  {hasPreview && (
                    <button
                      type="button"
                      onClick={() =>
                        onViewAsset(
                          cert.title,
                          cert.imageUrl || cert.pdfUrl!,
                          cert.verificationUrl,
                          Boolean(cert.imageUrl)
                        )
                      }
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg bg-[#2563EB] px-3 text-xs font-semibold text-white whitespace-nowrap transition-colors hover:bg-[#1D4ED8]"
                    >
                      <FileText className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>View Certificate</span>
                    </button>
                  )}

                  {cert.verificationUrl && (
                    <a
                      href={cert.verificationUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 text-xs font-medium text-[#0F172A] whitespace-nowrap transition-colors hover:border-[#0D9488] hover:text-[#0D9488]"
                    >
                      <ExternalLink className="h-3.5 w-3.5 text-[#0D9488]" aria-hidden="true" />
                      <span>Verify</span>
                    </a>
                  )}

                  <button
                    type="button"
                    onClick={() => openEditor(cert)}
                    className="inline-flex h-9 shrink-0 items-center gap-1.5 rounded-lg border border-dashed border-[#CBD5E1] px-3 text-xs text-[#334155] whitespace-nowrap transition-colors hover:border-[#2563EB] hover:text-[#0F172A]"
                  >
                    <ImagePlus className="h-3.5 w-3.5" aria-hidden="true" />
                    <span>{hasPreview || cert.verificationUrl ? 'Update' : 'Add Image / Link'}</span>
                  </button>
                </div>
              </motion.div>
            );
          })}
        </div>
      </div>

      {/* Certificate Image & Verification URL Attachment Modal */}
      {editingCert && (
        <div
          className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/50 p-4 backdrop-blur-sm"
          onClick={() => setEditingCert(null)}
        >
          <div
            role="dialog"
            aria-modal="true"
            aria-labelledby="cert-edit-title"
            onClick={(e) => e.stopPropagation()}
            className="w-full max-w-md rounded-2xl border border-[#CBD5E1] bg-white p-6 shadow-2xl"
          >
            <div className="flex items-start justify-between gap-3">
              <div>
                <p className="text-xs font-semibold text-[#0D9488]">{editingCert.issuer}</p>
                <h3
                  id="cert-edit-title"
                  className="mt-1 font-display text-lg font-bold text-[#0F172A]"
                >
                  {editingCert.title}
                </h3>
              </div>
              <button
                type="button"
                onClick={() => setEditingCert(null)}
                aria-label="Close certificate editor"
                className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
              >
                <X className="h-4 w-4" />
              </button>
            </div>

            <form onSubmit={handleSave} className="mt-5 space-y-4">
              <div>
                <label htmlFor="cert-date" className="block text-xs font-medium text-[#0F172A]">
                  Issue Date / Status
                </label>
                <input
                  id="cert-date"
                  type="text"
                  value={draftIssueDate}
                  onChange={(e) => setDraftIssueDate(e.target.value)}
                  className="mt-1.5 w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 py-2 text-sm text-[#0F172A] focus:border-[#2563EB] focus:outline-none"
                />
              </div>

              <div>
                <label htmlFor="cert-verify" className="block text-xs font-medium text-[#0F172A]">
                  Verification URL (Official issuer link)
                </label>
                <div className="relative mt-1.5">
                  <Link2
                    className="pointer-events-none absolute top-3 left-3 h-4 w-4 text-[#64748B]"
                    aria-hidden="true"
                  />
                  <input
                    id="cert-verify"
                    type="url"
                    placeholder="https://..."
                    value={draftVerifyUrl}
                    onChange={(e) => setDraftVerifyUrl(e.target.value)}
                    className="w-full rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] py-2 pr-3 pl-9 text-sm text-[#0F172A] placeholder:text-[#94A3B8] focus:border-[#2563EB] focus:outline-none"
                  />
                </div>
              </div>

              <div>
                <label className="block text-xs font-medium text-[#0F172A]">
                  Certificate Image (Optional local upload)
                </label>
                <label className="mt-1.5 flex cursor-pointer items-center justify-center gap-2 rounded-lg border border-dashed border-[#CBD5E1] bg-[#F8FAFC] px-4 py-3 text-xs font-medium text-[#334155] transition-colors hover:border-[#2563EB] hover:text-[#0F172A]">
                  <Upload className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
                  <span>{draftImageData ? 'Replace Certificate Image' : 'Upload PNG / JPG'}</span>
                  <input
                    type="file"
                    accept="image/*"
                    onChange={handleImageFileChange}
                    className="sr-only"
                  />
                </label>
                {uploadError && <p className="mt-1.5 text-xs text-rose-600">{uploadError}</p>}
                {draftImageData && (
                  <div className="mt-2 flex items-center justify-between text-xs text-[#334155]">
                    <span>Image attached</span>
                    <button
                      type="button"
                      onClick={() => setDraftImageData(undefined)}
                      className="text-rose-600 hover:underline"
                    >
                      Remove image
                    </button>
                  </div>
                )}
              </div>

              <div className="flex items-center justify-end gap-2.5 pt-2">
                <button
                  type="button"
                  onClick={() => setEditingCert(null)}
                  className="h-10 rounded-lg border border-[#CBD5E1] px-4 text-xs font-medium text-[#334155] hover:text-[#0F172A]"
                >
                  Cancel
                </button>
                <button
                  type="submit"
                  className="h-10 rounded-lg bg-[#2563EB] px-4 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
                >
                  Save Certificate
                </button>
              </div>
            </form>
          </div>
        </div>
      )}
    </section>
  );
};
