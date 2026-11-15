import { useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'motion/react';
import { AboutEducation } from './components/AboutEducation';
import { Achievements } from './components/Achievements';
import { CertificateViewerModal } from './components/CertificateViewerModal';
import { Certifications } from './components/Certifications';
import { Contact } from './components/Contact';
import { CursorGlow } from './components/CursorGlow';
import { Experience } from './components/Experience';
import { Footer } from './components/Footer';
import { Hero } from './components/Hero';
import { LoadingScreen } from './components/LoadingScreen';
import { NAV_ITEMS, Navbar, SectionId } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import {
  INITIAL_ACHIEVEMENTS,
  INITIAL_CERTIFICATIONS,
  INITIAL_EXPERIENCES,
  INITIAL_PROJECTS,
  PROFILE,
} from './data/portfolioData';

interface ViewerAsset {
  title: string;
  assetUrl: string;
  verifyUrl?: string;
  isImage?: boolean;
}

export default function App() {
  const prefersReducedMotion = useReducedMotion();
  const [activeSection, setActiveSection] = useState<SectionId>('home');
  const [viewerAsset, setViewerAsset] = useState<ViewerAsset | null>(null);

  const handleSelectSection = (id: SectionId) => {
    setActiveSection(id);
    window.scrollTo({ top: 0, behavior: 'auto' });
  };

  const renderSection = () => {
    switch (activeSection) {
      case 'home':
        return (
          <Hero
            onNavigateSection={handleSelectSection}
            onOpenResumePreview={() =>
              setViewerAsset({
                title: 'Janani Murali — Resume',
                assetUrl: PROFILE.resumeUrl,
              })
            }
          />
        );
      case 'about':
        return <AboutEducation />;
      case 'skills':
        return <Skills />;
      case 'projects':
        return <Projects projects={INITIAL_PROJECTS} />;
      case 'experience':
        return (
          <Experience
            experiences={INITIAL_EXPERIENCES}
            onViewCertificate={(title, assetUrl, verifyUrl) =>
              setViewerAsset({ title, assetUrl, verifyUrl })
            }
          />
        );
      case 'certifications':
        return (
          <Certifications
            certifications={INITIAL_CERTIFICATIONS}
            onViewAsset={(title, assetUrl, verifyUrl, isImage) =>
              setViewerAsset({ title, assetUrl, verifyUrl, isImage })
            }
          />
        );
      case 'achievements':
        return <Achievements achievements={INITIAL_ACHIEVEMENTS} />;
      case 'contact':
        return <Contact />;
    }
  };

  return (
    <div className="relative flex min-h-screen flex-col overflow-x-clip bg-[#F8FAFC] text-[#0F172A]">
      <LoadingScreen />
      <CursorGlow />

      <div className="relative z-10 flex flex-1 flex-col">
        <Navbar activeSection={activeSection} onSelectSection={handleSelectSection} />

        <main className="flex-1" style={{ perspective: '1200px' }}>
          {/* Compact Icon Bar for Quick Section Switching when Inside Sub-Views */}
          {activeSection !== 'home' && (
            <div className="border-b border-[#CBD5E1] bg-white/80 backdrop-blur-sm">
              <div className="mx-auto flex max-w-7xl items-center gap-1.5 overflow-x-auto px-4 py-2 sm:px-6 lg:px-8">
                {NAV_ITEMS.map((item) => {
                  const Icon = item.icon;
                  const isActive = activeSection === item.id;
                  return (
                    <button
                      key={item.id}
                      type="button"
                      onClick={() => handleSelectSection(item.id)}
                      className={`inline-flex h-8 shrink-0 items-center gap-1.5 rounded-lg px-2.5 text-xs font-medium whitespace-nowrap transition-colors ${
                        isActive
                          ? 'bg-[#2563EB] text-white'
                          : 'border border-[#E2E8F0] bg-[#F8FAFC] text-[#334155] hover:border-[#2563EB] hover:text-[#0F172A]'
                      }`}
                    >
                      <Icon className="h-3.5 w-3.5" aria-hidden="true" />
                      <span>{item.shortLabel}</span>
                    </button>
                  );
                })}
              </div>
            </div>
          )}

          {/* 3D Perspective View Transition */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeSection}
              initial={
                prefersReducedMotion ? false : { opacity: 0, y: 12, rotateX: 3, scale: 0.99 }
              }
              animate={{ opacity: 1, y: 0, rotateX: 0, scale: 1 }}
              exit={
                prefersReducedMotion ? undefined : { opacity: 0, y: -8, rotateX: -2, scale: 0.99 }
              }
              transition={{ duration: 0.24, ease: [0.16, 1, 0.3, 1] }}
              style={{ transformOrigin: 'top center' }}
            >
              {renderSection()}
            </motion.div>
          </AnimatePresence>
        </main>

        <Footer onSelectSection={handleSelectSection} />
      </div>

      {/* Document / Certificate / Resume Preview Modal */}
      {viewerAsset && (
        <CertificateViewerModal
          title={viewerAsset.title}
          assetUrl={viewerAsset.assetUrl}
          verifyUrl={viewerAsset.verifyUrl}
          isImage={viewerAsset.isImage}
          onClose={() => setViewerAsset(null)}
        />
      )}
    </div>
  );
}
