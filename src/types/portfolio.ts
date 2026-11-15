export type TechIconId =
  | 'python'
  | 'c'
  | 'cpp'
  | 'java'
  | 'html'
  | 'css'
  | 'javascript'
  | 'react'
  | 'git'
  | 'github'
  | 'vscode'
  | 'ai'
  | 'api'
  | 'database'
  | 'cloud'
  | 'rag'
  | 'testing';

export type ProjectCategory = 'All' | 'AI & RAG' | 'Full-Stack' | 'Agents & Systems';

export interface ProjectItem {
  id: string;
  title: string;
  subtitle: string;
  category: Exclude<ProjectCategory, 'All'>;
  description: string;
  howItWorks: string[];
  techStack: string[];
  features: string[];
  githubUrl: string | null;
  liveDemoUrl: string | null;
  roleNote?: string;
  isEditable?: boolean;
}

export interface ExperienceItem {
  id: string;
  organization: string;
  role: string;
  period: string;
  statusLabel: string;
  summary: string;
  highlights: string[];
  certificatePdfUrl?: string;
  certificateVerifyUrl?: string;
}

export interface CertificationItem {
  id: string;
  title: string;
  issuer: string;
  category: string;
  issueDate: string;
  details: string;
  pdfUrl?: string;
  imageUrl?: string;
  verificationUrl?: string;
}

export interface AchievementItem {
  id: string;
  title: string;
  eventOrContext: string;
  dateLabel: string;
  description: string;
  isEditable?: boolean;
}

export interface SkillGroup {
  id: string;
  title: string;
  subtitle: string;
  items: {
    name: string;
    icon: TechIconId;
    note: string;
  }[];
}
