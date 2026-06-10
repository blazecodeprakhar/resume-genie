export interface PersonalInfo {
  fullName: string;
  email: string;
  phone: string;
  linkedin: string;
  city: string;
  targetRole: string;
}

export interface WorkExperience {
  id: string;
  company: string;
  role: string;
  startDate: string;
  endDate: string;
  current: boolean;
  description: string;
}

export interface Education {
  id: string;
  degree: string;
  institution: string;
  year: string;
  grade: string;
}

export interface ResumeData {
  personalInfo: PersonalInfo;
  experience: WorkExperience[];
  education: Education[];
  technicalSkills: string[];
  softSkills: string[];
  certifications: string;
  languages: string;
  summary: string;
}

export interface GeneratedResume {
  summary: string;
  experience: {
    company: string;
    role: string;
    startDate: string;
    endDate: string;
    bullets: string[];
  }[];
  education: {
    degree: string;
    institution: string;
    year: string;
    grade: string;
  }[];
  skills: string[];
  certifications: string[];
}

export type TemplateType = 'modern' | 'classic' | 'minimal' | 'executive' | 'creative' | 'bold' | 'elegant' | 'tech' | 'corporate' | 'starter' | 'infographic' | 'academic';

export interface SavedResume {
  id: string;
  title: string;
  template: TemplateType;
  data: ResumeData;
  generatedContent: GeneratedResume | null;
  createdAt: string;
  updatedAt: string;
  downloads: number;
}
