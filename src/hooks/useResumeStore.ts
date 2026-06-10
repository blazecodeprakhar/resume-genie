import { useState, useCallback } from 'react';
import type { ResumeData, WorkExperience, Education } from '@/types/resume';

const initialData: ResumeData = {
  personalInfo: { fullName: '', email: '', phone: '', linkedin: '', city: '', targetRole: '' },
  experience: [],
  education: [],
  technicalSkills: [],
  softSkills: [],
  certifications: '',
  languages: '',
  summary: '',
};

export function useResumeStore() {
  const [data, setData] = useState<ResumeData>(() => {
    const saved = localStorage.getItem('resume-draft');
    return saved ? JSON.parse(saved) : initialData;
  });
  const [currentStep, setCurrentStep] = useState(0);

  const updateData = useCallback((partial: Partial<ResumeData>) => {
    setData(prev => {
      const next = { ...prev, ...partial };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const addExperience = useCallback(() => {
    const entry: WorkExperience = {
      id: crypto.randomUUID(),
      company: '', role: '', startDate: '', endDate: '', current: false, description: '',
    };
    setData(prev => {
      const next = { ...prev, experience: [...prev.experience, entry] };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const updateExperience = useCallback((id: string, partial: Partial<WorkExperience>) => {
    setData(prev => {
      const next = {
        ...prev,
        experience: prev.experience.map(e => e.id === id ? { ...e, ...partial } : e),
      };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const removeExperience = useCallback((id: string) => {
    setData(prev => {
      const next = { ...prev, experience: prev.experience.filter(e => e.id !== id) };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const addEducation = useCallback(() => {
    const entry: Education = {
      id: crypto.randomUUID(),
      degree: '', institution: '', year: '', grade: '',
    };
    setData(prev => {
      const next = { ...prev, education: [...prev.education, entry] };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const updateEducation = useCallback((id: string, partial: Partial<Education>) => {
    setData(prev => {
      const next = {
        ...prev,
        education: prev.education.map(e => e.id === id ? { ...e, ...partial } : e),
      };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const removeEducation = useCallback((id: string) => {
    setData(prev => {
      const next = { ...prev, education: prev.education.filter(e => e.id !== id) };
      localStorage.setItem('resume-draft', JSON.stringify(next));
      return next;
    });
  }, []);

  const reset = useCallback(() => {
    setData(initialData);
    setCurrentStep(0);
    localStorage.removeItem('resume-draft');
  }, []);

  return {
    data, currentStep, setCurrentStep,
    updateData, addExperience, updateExperience, removeExperience,
    addEducation, updateEducation, removeEducation, reset,
  };
}
