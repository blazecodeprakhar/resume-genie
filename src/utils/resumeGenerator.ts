import type { ResumeData, GeneratedResume } from '@/types/resume';

export function generateMockResume(data: ResumeData): GeneratedResume {
  const { personalInfo, experience, education, technicalSkills, softSkills, certifications, summary } = data;

  const enhancedSummary = summary
    ? `Results-driven ${personalInfo.targetRole || 'professional'} with a proven track record of delivering high-impact solutions. ${summary}`
    : `Dynamic and results-oriented ${personalInfo.targetRole || 'professional'} with extensive experience in driving business outcomes through innovative solutions. Adept at collaborating with cross-functional teams to deliver projects on time and exceed expectations.`;

  const enhancedExperience = experience.map(exp => ({
    company: exp.company,
    role: exp.role,
    startDate: exp.startDate,
    endDate: exp.current ? 'Present' : exp.endDate,
    bullets: exp.description
      ? exp.description.split('\n').filter(Boolean).map(line =>
          line.startsWith('•') || line.startsWith('-') ? line.replace(/^[•\-]\s*/, '') : line
        ).map(line => {
          if (!line.match(/^(Led|Developed|Managed|Implemented|Designed|Built|Created|Increased|Reduced|Optimized)/)) {
            return `Spearheaded ${line.charAt(0).toLowerCase()}${line.slice(1)}`;
          }
          return line;
        })
      : [
          `Led key initiatives as ${exp.role} at ${exp.company}, driving measurable business impact`,
          `Collaborated with cross-functional teams to deliver projects ahead of schedule`,
          `Implemented best practices that improved team efficiency by 25%`,
        ],
  }));

  const enhancedEducation = education.map(edu => ({
    degree: edu.degree,
    institution: edu.institution,
    year: edu.year,
    grade: edu.grade,
  }));

  const allSkills = [...technicalSkills, ...softSkills];

  const certList = certifications
    ? certifications.split(/[,\n]/).map(c => c.trim()).filter(Boolean)
    : [];

  return {
    summary: enhancedSummary,
    experience: enhancedExperience,
    education: enhancedEducation,
    skills: allSkills,
    certifications: certList,
  };
}
