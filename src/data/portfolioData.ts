import {
  AchievementItem,
  CertificationItem,
  ExperienceItem,
  ProjectItem,
  SkillGroup,
} from '../types/portfolio';

export const PROFILE = {
  name: 'Janani Murali',
  monogram: 'JM',
  title: 'Computer Science Engineering Student | Aspiring Software Developer',
  intro:
    'Building intelligent applications, exploring emerging technologies and transforming ideas into practical software solutions.',
  photoUrl: '/assets/aistudio/Jan_photo_deac32e9.png',
  resumeUrl: '/assets/aistudio/Janani_M_Resume_a4bd840d.pdf',
  email: 'jananimurali0212@gmail.com',
  github: 'https://github.com/jananimurali0212',
  linkedin: 'https://www.linkedin.com/in/janani-murali0212/',
  aboutParagraphs: [
    'I am a Computer Science and Engineering student at Panimalar Engineering College with a strong interest in software development, Artificial Intelligence and full-stack application development.',
    'I enjoy developing practical applications, experimenting with AI-powered technologies and exploring solutions to real-world problems.',
    'Through academic projects, internships and independent development, I am continuously strengthening my technical knowledge, problem-solving abilities and development skills.',
  ],
  education: {
    degree: 'B.E. Computer Science and Engineering',
    institution: 'Panimalar Engineering College',
    year: 'Second Year (2025–2029)',
    cgpa: '9.4',
    interests: ['AI', 'Software Engineering', 'Full-Stack Development'],
    priorEducation: [
      {
        level: 'HSC',
        school: 'C.S.I. Bain Matriculation Higher Secondary School',
        period: '2024–2025',
        score: '91.8%',
      },
      {
        level: 'SSLC',
        school: 'C.S.I. Bain Matriculation Higher Secondary School',
        period: '2022–2023',
        score: '91.4%',
      },
    ],
  },
};

export const SKILL_GROUPS: SkillGroup[] = [
  {
    id: 'languages',
    title: 'Programming Languages',
    subtitle: 'Core procedural and object-oriented foundations',
    items: [
      { name: 'Python', icon: 'python', note: 'AI workflows & scripting' },
      { name: 'C', icon: 'c', note: 'Structured programming' },
      { name: 'C++', icon: 'cpp', note: 'Problem solving & DSA' },
      { name: 'Java', icon: 'java', note: 'Object-oriented basics' },
    ],
  },
  {
    id: 'frontend',
    title: 'Frontend Development',
    subtitle: 'Responsive interfaces and interactive web views',
    items: [
      { name: 'HTML5', icon: 'html', note: 'Semantic markup' },
      { name: 'CSS3', icon: 'css', note: 'Responsive layouts' },
      { name: 'JavaScript', icon: 'javascript', note: 'DOM & async logic' },
      { name: 'React', icon: 'react', note: 'Component interfaces' },
    ],
  },
  {
    id: 'tools',
    title: 'Developer Tools',
    subtitle: 'Version control and development workflow',
    items: [
      { name: 'Git', icon: 'git', note: 'Branching & commits' },
      { name: 'GitHub', icon: 'github', note: 'Repository collaboration' },
      { name: 'VS Code', icon: 'vscode', note: 'Primary code editor' },
    ],
  },
  {
    id: 'ai-areas',
    title: 'AI & Application Architecture',
    subtitle: 'Applied areas across projects and internships',
    items: [
      { name: 'Artificial Intelligence', icon: 'ai', note: 'Applied LLM & vision tasks' },
      { name: 'Retrieval-Augmented Generation', icon: 'rag', note: 'Context-grounded QA' },
      { name: 'API Integration', icon: 'api', note: 'Model & service endpoints' },
      { name: 'Database Integration', icon: 'database', note: 'Supabase & PostgreSQL exposure' },
      { name: 'AI-Assisted App Development', icon: 'cloud', note: 'End-to-end prototypes' },
      { name: 'Manual Testing & Debugging', icon: 'testing', note: 'Verification & bug reproduction' },
    ],
  },
];

export const INITIAL_PROJECTS: ProjectItem[] = [
  {
    id: 'syspredictai',
    title: 'SysPredictAI',
    subtitle: 'AI-Assisted System Monitoring & Predictive Analysis',
    category: 'Agents & Systems',
    description:
      'An AI-assisted system monitoring and predictive analysis application focused on tracking operational metrics, identifying abnormal behaviour, and surfacing actionable insights.',
    howItWorks: [
      'Collects and organizes system performance metrics into structured monitoring views.',
      'Applies predictive analysis patterns to detect anomalies and potential bottlenecks before escalation.',
      'Presents system health insights and potential issues in a clear diagnostic interface.',
    ],
    techStack: ['Python', 'System Monitoring', 'Predictive Analysis', 'AI Insights'],
    features: [
      'System metric monitoring and trend inspection',
      'Predictive analysis for early anomaly identification',
      'Detection of abnormal behaviour and potential system issues',
      'Clear presentation of system diagnostics and insights',
    ],
    githubUrl: 'https://github.com/jananimurali0212/SysPredictAI',
    liveDemoUrl: null,
  },
  {
    id: 'personal-ai-knowledge-assistant',
    title: 'Personal AI Knowledge Assistant',
    subtitle: 'Context-Aware RAG Knowledge Retrieval System',
    category: 'AI & RAG',
    description:
      'A personal AI-powered knowledge assistant built on Retrieval-Augmented Generation (RAG) to retrieve relevant context from personal knowledge sources and produce grounded answers.',
    howItWorks: [
      'Indexes user knowledge sources so relevant excerpts can be queried efficiently.',
      'Retrieves the most relevant passages for a natural-language question using RAG retrieval.',
      'Evaluates retrieved context and generates concise, context-aware responses (with streaming support where implemented).',
    ],
    techStack: ['Python', 'RAG Architecture', 'Knowledge Retrieval', 'LLM Integration'],
    features: [
      'Retrieval-Augmented Generation (RAG) pipeline',
      'Context-aware question answering grounded in source material',
      'Retrieval evaluation and response synthesis',
      'Streaming response flow for responsive interaction',
    ],
    githubUrl: 'https://github.com/jananimurali0212/personal-ai-knowledge-assisstant',
    liveDemoUrl: null,
  },
  {
    id: 'ai-enhanced-document-generator',
    title: 'AI-Enhanced Document Generator',
    subtitle: 'Full-Stack Document Creation, Persistence & Export',
    category: 'Full-Stack',
    description:
      'A full-stack AI-powered application for drafting, storing, managing, and exporting structured documents with authenticated user persistence.',
    howItWorks: [
      'Authenticates users via Supabase and links generated documents to persistent user records.',
      'Takes user prompts and document parameters to generate structured drafts using AI assistance.',
      'Stores documents in the database for ongoing editing, organization, and downloadable export.',
    ],
    techStack: ['React', 'Supabase', 'PostgreSQL', 'AI Document Generation'],
    features: [
      'AI-assisted structured document drafting',
      'User authentication and persistent document storage',
      'Database-backed document management',
      'Export functionality for generated documents',
    ],
    githubUrl: 'https://github.com/jananimurali0212/ai-enhanced-document-generator',
    liveDemoUrl: null,
  },
  {
    id: 'kalasetu',
    title: 'KalaSetu',
    subtitle: 'AI Market Linkage Platform for Artisans · SIH 2026 (PS SIH26090)',
    category: 'Full-Stack',
    description:
      'An AI-powered market linkage platform designed to help traditional and marginalized artisans analyze their crafts, generate multilingual product listings, and connect with buyers and exhibitions.',
    howItWorks: [
      'Accepts craft images and uses Gemini Vision analysis to categorize the craft form, raw materials, and artistic style.',
      'Generates multilingual product descriptions so artisans can reach broader regional and global buyers.',
      'Facilitates buyer discovery and exhibition matching to expand market access for traditional creators.',
    ],
    techStack: ['Gemini Vision', 'Multilingual AI', 'Full-Stack Web', 'Craft Classification'],
    features: [
      'AI-powered craft image analysis and categorization',
      'Raw material and regional style identification',
      'Multilingual product listing generation',
      'Buyer and exhibition discovery workflows',
    ],
    githubUrl: 'https://github.com/jananimurali0212/kalasetu-ai',
    liveDemoUrl: null,
  },
  {
    id: 'multi-agent-negotiation-simulator',
    title: 'Multi-Agent Negotiation Simulator',
    subtitle: 'Infosys Springboard 7.0 Team Project · AI-vs-AI & Human-vs-AI',
    category: 'Agents & Systems',
    description:
      'An AI-powered negotiation training and simulation platform supporting role-based AI-vs-AI and human-vs-AI negotiation scenarios with full transcripts and outcome analytics.',
    howItWorks: [
      'Configures distinct negotiating agent roles, objectives, and negotiation scenarios.',
      'Executes turn-by-turn AI-vs-AI or human-vs-AI negotiation rounds while tracking strategies.',
      'Compiles readable negotiation transcripts alongside outcome reports and satisfaction metrics.',
    ],
    techStack: ['Multi-Agent AI', 'Frontend UI', 'Manual Testing', 'Debugging'],
    features: [
      'Multiple role-based negotiating agents and strategies',
      'Human-versus-AI and AI-versus-AI interaction modes',
      'Configurable negotiation scenarios and live transcripts',
      'Structured outcome reports and satisfaction metrics',
    ],
    roleNote:
      'Team contribution: Frontend UI & human-interaction flows, extensive manual testing, bug reproduction, and functional issue resolution.',
    githubUrl: 'https://github.com/jananimurali0212/multiagent-negotitation-simulator',
    liveDemoUrl: null,
  },
  {
    id: 'reviewai',
    title: 'ReviewAI',
    subtitle: 'AI-Assisted Review Analysis & Feedback Synthesis',
    category: 'AI & RAG',
    description:
      'An AI-powered review analysis application built to process user or product feedback, surface recurring themes, and organize qualitative insights clearly.',
    howItWorks: [
      'Ingests review text or feedback entries provided by the user.',
      'Uses AI prompting to categorize sentiment patterns, strengths, and recurring issues.',
      'Outputs structured review summaries so key takeaways can be scanned quickly.',
    ],
    techStack: ['Python', 'AI Text Analysis', 'Prompt Engineering', 'Web Interface'],
    features: [
      'Automated processing of unstructured review text',
      'Extraction of recurring themes and feedback points',
      'Structured summary generation for quick inspection',
      'Clean interface for submitting and reviewing analysis',
    ],
    githubUrl: 'https://github.com/jananimurali0212/ReviewAI',
    liveDemoUrl: null,
  },
  {
    id: 'document-qa-rag',
    title: 'Document QA RAG',
    subtitle: 'Document Ingestion & Grounded Question Answering',
    category: 'AI & RAG',
    description:
      'A Retrieval-Augmented Generation (RAG) document question-answering project focused on querying uploaded documents and returning source-grounded answers.',
    howItWorks: [
      'Parses source documents and splits text into manageable semantic chunks for indexing.',
      'Matches incoming user questions against indexed chunks to retrieve the highest-relevance context.',
      'Passes retrieved passages to the language model to generate focused answers tied to document content.',
    ],
    techStack: ['Python', 'RAG Pipeline', 'Document Parsing', 'Contextual QA'],
    features: [
      'Document ingestion and text chunking workflow',
      'Semantic context retrieval for user queries',
      'Grounded question-answering over source documents',
      'Modular RAG pipeline structure',
    ],
    githubUrl: 'https://github.com/jananimurali0212/document-qa-rag',
    liveDemoUrl: null,
  },
];

export const INITIAL_EXPERIENCES: ExperienceItem[] = [
  {
    id: 'infosys-springboard',
    organization: 'Infosys Springboard Virtual Internship 7.0 (Batch 2)',
    role: 'Artificial Intelligence Intern',
    period: 'July 15, 2026 – September 20, 2026',
    statusLabel: 'Completed · Issued Nov 9, 2026',
    summary:
      'Completed the Infosys Springboard AI learning curriculum and collaborated in a five-member engineering team on the AI-Driven Multi-Agent Negotiation Training & Simulation Platform.',
    highlights: [
      'Completed the required Infosys Springboard Artificial Intelligence internship learning modules.',
      'Contributed to the Multi-Agent Negotiation Simulator team project, focusing on frontend implementation and human-interaction flows.',
      'Played a major role in manual testing—systematically identifying, reproducing, and helping resolve functional bugs.',
      'Handled debugging, functionality verification, and end-to-end quality checks across negotiation scenarios.',
      'Received mentor appreciation for strong language proficiency, clear communication, and articulation.',
    ],
    certificatePdfUrl: '/assets/aistudio/infosys_internship_artificial_intelligence_57d3e806.pdf',
    certificateVerifyUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'inamigos-foundation',
    organization: 'InAmigos Foundation',
    role: 'AI Web Development Intern',
    period: 'June 13, 2026 – June 26, 2026',
    statusLabel: 'Completed · Issued June 30, 2026',
    summary:
      'Completed an intensive AI Web Development internship focused on non-profit research, structured data analysis, and AI-enabled growth strategy.',
    highlights: [
      'Conducted structured research across 10 Indian NGOs and 15 volunteer opportunities.',
      'Prepared an AI-based data analysis report synthesizing outreach patterns and digital opportunities.',
      'Identified five practical AI-driven growth recommendations tailored for NGO operations.',
      'Supported fundraising-related research and campaign activities on Ketto.',
    ],
    certificatePdfUrl: '/assets/aistudio/Inamigos_internship_a2f427d0.pdf',
  },
];

export const INITIAL_CERTIFICATIONS: CertificationItem[] = [
  {
    id: 'cert-infosys-ai',
    title: 'Infosys Springboard AI Virtual Internship 7.0',
    issuer: 'Infosys Springboard',
    category: 'Artificial Intelligence',
    issueDate: 'November 9, 2026',
    details:
      'Creation of AI Driven Multi-Agent Negotiation Training & Simulation Platform (July 15 – September 20, 2026).',
    pdfUrl: '/assets/aistudio/infosys_internship_artificial_intelligence_57d3e806.pdf',
    verificationUrl: 'https://verify.onwingspan.com',
  },
  {
    id: 'cert-inamigos',
    title: 'InAmigos Foundation — AI Web Development Internship',
    issuer: 'InAmigos Foundation',
    category: 'AI & Web Development',
    issueDate: 'June 30, 2026',
    details: 'Completion of AI Web Development Internship (June 13 – June 26, 2026).',
    pdfUrl: '/assets/aistudio/Inamigos_internship_a2f427d0.pdf',
  },
  {
    id: 'cert-nptel-java',
    title: 'NPTEL Programming in Java (Elite, 75%)',
    issuer: 'NPTEL / IIT',
    category: 'Programming',
    issueDate: 'Academic Record',
    details: 'Certified Elite score (75%) in object-oriented Java programming.',
  },
  {
    id: 'cert-infosys-ds',
    title: 'Infosys Springboard Data Structures',
    issuer: 'Infosys Springboard',
    category: 'Computer Science Core',
    issueDate: 'Verification link pending',
    details: 'Core data structures and algorithmic problem-solving coursework.',
  },
  {
    id: 'cert-tcs-ion',
    title: 'TCS iON Career Edge – Young Professional',
    issuer: 'TCS iON',
    category: 'Professional Skills',
    issueDate: 'Verification link pending',
    details: 'Workplace communication, soft skills, and IT career readiness curriculum.',
  },
  {
    id: 'cert-simplilearn-cpp',
    title: 'Simplilearn C++ / C Programming Basics',
    issuer: 'Simplilearn',
    category: 'Programming',
    issueDate: 'Verification link pending',
    details: 'Foundational C and C++ programming syntax, memory concepts, and control flow.',
  },
  {
    id: 'cert-nasscom-python',
    title: 'NASSCOM Software Programmer – Python',
    issuer: 'NASSCOM FutureSkills',
    category: 'Programming',
    issueDate: 'Verification link pending',
    details: 'Python programming assessment for software development fundamentals.',
  },
  {
    id: 'cert-swayam-plus',
    title: 'SWAYAM Plus Employability Skills',
    issuer: 'SWAYAM Plus',
    category: 'Career Readiness',
    issueDate: 'Verification link pending',
    details: 'Structured employability and professional problem-solving training.',
  },
  {
    id: 'cert-mindluster',
    title: 'Mindluster Soft Skills',
    issuer: 'Mindluster',
    category: 'Communication',
    issueDate: 'Verification link pending',
    details: 'Interpersonal communication, presentation, and collaboration skills.',
  },
];

export const INITIAL_ACHIEVEMENTS: AchievementItem[] = [
  {
    id: 'ach-sih',
    title: 'Smart India Hackathon (SIH) 2026 Participation',
    eventOrContext: 'Problem Statement SIH26090 · KalaSetu',
    dateLabel: '2026',
    description:
      'Designed and built the KalaSetu AI market linkage concept empowering traditional artisans with Gemini Vision craft identification and multilingual listings.',
    isEditable: true,
  },
  {
    id: 'ach-conference',
    title: 'International Conference Participation',
    eventOrContext: 'Academic International Conference (Editable event name)',
    dateLabel: 'Date editable',
    description:
      'Participated in a college-level International Conference, engaging with technical research presentations and emerging computing topics.',
    isEditable: true,
  },
  {
    id: 'ach-capgemini',
    title: 'Capgemini-Collaborated College Ideathon',
    eventOrContext: 'Panimalar Engineering College × Capgemini (Editable event name)',
    dateLabel: 'Date editable',
    description:
      'Participated in an industry-collaborated ideathon conducted with Capgemini, developing practical problem-solving proposals under time constraints.',
    isEditable: true,
  },
  {
    id: 'ach-infosys-mentor',
    title: 'Mentor Appreciation for Communication & Language Proficiency',
    eventOrContext: 'Infosys Springboard Virtual Internship 7.0',
    dateLabel: 'September 2026',
    description:
      'Recognized by the internship mentor for clear articulation, accent clarity, and effective technical communication during team reviews and testing.',
  },
  {
    id: 'ach-projects',
    title: 'Consistent Applied AI & Full-Stack Engineering',
    eventOrContext: '7+ Public Repositories & Academic CGPA 9.4',
    dateLabel: '2025–2026',
    description:
      'Built practical applications spanning RAG pipelines, multi-agent systems, predictive monitoring, and Supabase-backed full-stack web apps alongside a 9.4 CGPA.',
  },
];
