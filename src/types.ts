export interface Education {
  school: string;
  degree: string;
  date: string;
  gpa: string;
  exitExamScore: string;
  focus: string[];
}

export interface Experience {
  company: string;
  department: string;
  role: string;
  period: string;
  responsibilities: string[];
  award?: string;
}

export interface Project {
  title: string;
  year: string;
  role: string;
  description: string;
  highlights: string[];
  technologies: string[];
}

export interface SkillCategory {
  category: string;
  skills: string[];
}

export interface Certification {
  id: string;
  title: string;
  issuer: string;
  date: string;
  category: 'ai_cloud' | 'networking_cyber' | 'software_data' | 'marketing_analytics';
}

export interface Reference {
  name: string;
  role: string;
  affiliation: string;
  emailPlaceholder: string;
}
