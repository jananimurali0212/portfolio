import { useEffect, useState } from 'react';
import { ArrowUp } from 'lucide-react';
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
import { NAV_ITEMS, Navbar } from './components/Navbar';
import { Projects } from './components/Projects';
import { Skills } from './components/Skills';
import {
  INITIAL_ACHIEVEMENTS,
  INITIAL_CERTIFICATIONS,
  INITIAL_EXPERIENCES,
  INITIAL_PROJECTS,
  PROFILE,
} from './data/portfolioData';
import {
  AchievementItem,
  CertificationItem,
  ExperienceItem,
  ProjectItem,
} from './types/portfolio';

const STORAGE_KEY = 'jm_portfolio_customizations_v2';

interface StoredCustomizations {
  cgpa?: string;
  projects?: ProjectItem[];
  experiences?: ExperienceItem[];
  certifications?: CertificationItem[];
  achievements?: AchievementItem[];
}

interface ViewerAsset {
  title: string;
  assetUrl: string;
  verifyUrl?: string;
  isImage?: boolean;
}

function loadStoredState(): StoredCustomizations {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return {};
    const parsed = JSON.parse(raw) as StoredCustomizations;
    if (parsed.projects) {
      parsed.projects = parsed.projects.filter((p) => p.id !== 'ai-receptionist');
    }
    return parsed;
  } catch {
    return {};
  }
}

export default function App() {
  const [stored] = useState<StoredCustomizations>(() => loadStoredState());
  const [cgpa, setCgpa] = useState<string>(stored.cgpa ?? PROFILE.education.cgpa);
  const [projects, setProjects] = useState<ProjectItem[]>(stored.projects ?? INITIAL_PROJECTS);
  const [experiences, setExperiences] = useState<ExperienceItem[]>(
    stored.experiences ?? INITIAL_EXPERIENCES
  );
  const [certifications, setCertifications] = useState<CertificationItem[]>(
    stored.certifications ?? INITIAL_CERTIFICATIONS
  );
  const [achievements, setAchievements] = useState<AchievementItem[]>(
    stored.achievements ?? INITIAL_ACHIEVEMENTS
  );
  const [hasCustomEdits, setHasCustomEdits] = useState<boolean>(
    () => Object.keys(stored).length > 0
  );

  const [activeSection, setActiveSection] = useState<string>('home');
  const [showFloatingTop, setShowFloatingTop] = useState(false);
  const [viewerAsset, setViewerAsset] = useState<ViewerAsset | null>(null);

  // Persist user customizations locally
  const persistState = (next: StoredCustomizations) => {
    try {
      localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
      setHasCustomEdits(true);
    } catch {
      // Ignore storage quota errors
    }
  };

  const handleUpdateCgpa = (nextCgpa: string) => {
    setCgpa(nextCgpa);
    persistState({ cgpa: nextCgpa, projects, experiences, certifications, achievements });
  };

  const handleUpdateProject = (updated: ProjectItem) => {
    const nextProjects = projects.map((p) => (p.id === updated.id ? updated : p));
    setProjects(nextProjects);
    persistState({ cgpa, projects: nextProjects, experiences, certifications, achievements });
  };

  const handleUpdateExperienceDate = (id: string, nextPeriod: string) => {
    const nextExperiences = experiences.map((e) =>
      e.id === id ? { ...e, period: nextPeriod } : e
    );
    setExperiences(nextExperiences);
    persistState({ cgpa, projects, experiences: nextExperiences, certifications, achievements });
  };

  const handleUpdateCertification = (updated: CertificationItem) => {
    const nextCerts = certifications.map((c) => (c.id === updated.id ? updated : c));
    setCertifications(nextCerts);
    persistState({ cgpa, projects, experiences, certifications: nextCerts, achievements });
  };

  const handleUpdateAchievement = (updated: AchievementItem) => {
    const nextAchievements = achievements.map((a) => (a.id === updated.id ? updated : a));
    setAchievements(nextAchievements);
    persistState({ cgpa, projects, experiences, certifications, achievements: nextAchievements });
  };

  const handleResetEdits = () => {
    try {
      localStorage.removeItem(STORAGE_KEY);
    } catch {
      // Ignore storage errors
    }
    setCgpa(PROFILE.education.cgpa);
    setProjects(INITIAL_PROJECTS);
    setExperiences(INITIAL_EXPERIENCES);
    setCertifications(INITIAL_CERTIFICATIONS);
    setAchievements(INITIAL_ACHIEVEMENTS);
    setHasCustomEdits(false);
  };

  // Active section highlight & back-to-top visibility
  useEffect(() => {
    const sectionIds = NAV_ITEMS.map((item) => item.id);
    const elements = sectionIds
      .map((id) => document.getElementById(id))
      .filter((el): el is HTMLElement => Boolean(el));

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio);
        if (visible[0]?.target.id) {
          setActiveSection(visible[0].target.id);
        }
      },
      {
        rootMargin: '-25% 0px -55% 0px',
        threshold: [0.1, 0.25, 0.5],
      }
    );

    elements.forEach((el) => observer.observe(el));

    const onScroll = () => {
      setShowFloatingTop(window.scrollY > 520);
    };
    window.addEventListener('scroll', onScroll, { passive: true });

    return () => {
      observer.disconnect();
      window.removeEventListener('scroll', onScroll);
    };
  }, []);

  return (
    <div className="relative min-h-screen overflow-x-clip bg-[#F8FAFC] text-[#0F172A]">
      <LoadingScreen />
      <CursorGlow />

      <div className="relative z-10">
        <Navbar activeSection={activeSection} />

        <main>
          <Hero
            onOpenResumePreview={() =>
              setViewerAsset({
                title: 'Janani Murali — Resume',
                assetUrl: PROFILE.resumeUrl,
              })
            }
          />

          <AboutEducation cgpa={cgpa} onUpdateCgpa={handleUpdateCgpa} />

          <Skills />

          <Projects projects={projects} onUpdateProject={handleUpdateProject} />

          <Experience
            experiences={experiences}
            onUpdateExperienceDate={handleUpdateExperienceDate}
            onViewCertificate={(title, assetUrl, verifyUrl) =>
              setViewerAsset({ title, assetUrl, verifyUrl })
            }
          />

          <Certifications
            certifications={certifications}
            onUpdateCertification={handleUpdateCertification}
            onViewAsset={(title, assetUrl, verifyUrl, isImage) =>
              setViewerAsset({ title, assetUrl, verifyUrl, isImage })
            }
          />

          <Achievements
            achievements={achievements}
            onUpdateAchievement={handleUpdateAchievement}
          />

          <Contact />
        </main>

        <Footer hasCustomEdits={hasCustomEdits} onResetEdits={handleResetEdits} />
      </div>

      {/* Floating Back-to-Top Button */}
      {showFloatingTop && (
        <button
          type="button"
          onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
          aria-label="Scroll back to top"
          className="fixed right-5 bottom-5 z-30 flex h-11 w-11 items-center justify-center rounded-xl border border-[#CBD5E1] bg-white text-[#0F172A] shadow-md transition-colors hover:border-[#2563EB] hover:text-[#2563EB]"
        >
          <ArrowUp className="h-4 w-4 text-[#2563EB]" aria-hidden="true" />
        </button>
      )}

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
