import React, { useEffect } from 'react';
import { Download, ExternalLink, X } from 'lucide-react';

interface CertificateViewerModalProps {
  title: string;
  assetUrl: string;
  verifyUrl?: string;
  isImage?: boolean;
  onClose: () => void;
}

export const CertificateViewerModal: React.FC<CertificateViewerModalProps> = ({
  title,
  assetUrl,
  verifyUrl,
  isImage = false,
  onClose,
}) => {
  useEffect(() => {
    const onKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    window.addEventListener('keydown', onKeyDown);
    return () => window.removeEventListener('keydown', onKeyDown);
  }, [onClose]);

  return (
    <div
      className="fixed inset-0 z-50 flex items-center justify-center bg-[#0F172A]/55 p-4 backdrop-blur-sm"
      onClick={onClose}
    >
      <div
        role="dialog"
        aria-modal="true"
        aria-labelledby="asset-viewer-title"
        onClick={(e) => e.stopPropagation()}
        className="flex h-[88vh] w-full max-w-4xl flex-col overflow-hidden rounded-2xl border border-[#CBD5E1] bg-white shadow-2xl"
      >
        <div className="flex items-center justify-between gap-4 border-b border-[#CBD5E1] px-5 py-4">
          <h3
            id="asset-viewer-title"
            className="truncate font-display text-base font-bold text-[#0F172A] sm:text-lg"
          >
            {title}
          </h3>
          <div className="flex shrink-0 items-center gap-2">
            {verifyUrl && (
              <a
                href={verifyUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex h-9 items-center gap-1.5 rounded-lg border border-[#CBD5E1] bg-[#F8FAFC] px-3 text-xs font-medium text-[#0F172A] hover:border-[#0D9488] hover:text-[#0D9488]"
              >
                <ExternalLink className="h-3.5 w-3.5 text-[#0D9488]" />
                <span className="hidden sm:inline">Verify Online</span>
              </a>
            )}
            <a
              href={assetUrl}
              download
              className="inline-flex h-9 items-center gap-1.5 rounded-lg bg-[#2563EB] px-3 text-xs font-semibold text-white hover:bg-[#1D4ED8]"
            >
              <Download className="h-3.5 w-3.5" />
              <span>Download</span>
            </a>
            <button
              type="button"
              onClick={onClose}
              aria-label="Close document viewer"
              className="inline-flex h-9 w-9 items-center justify-center rounded-lg border border-[#CBD5E1] text-[#334155] hover:text-[#0F172A]"
            >
              <X className="h-4 w-4" />
            </button>
          </div>
        </div>

        <div className="flex-1 overflow-auto bg-[#F8FAFC] p-4">
          {isImage ? (
            <div className="flex h-full items-center justify-center">
              <img
                src={assetUrl}
                alt={title}
                referrerPolicy="no-referrer"
                className="max-h-full max-w-full rounded-lg object-contain"
              />
            </div>
          ) : (
            <iframe
              src={assetUrl}
              title={title}
              className="h-full w-full rounded-lg border border-[#CBD5E1] bg-white"
            />
          )}
        </div>
      </div>
    </div>
  );
};
