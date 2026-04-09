import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function ClassicTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[297mm] min-h-[297mm] overflow-hidden relative bg-white text-gray-900 text-[11px] leading-relaxed p-10" style={{ width: '210mm', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="text-center border-b-2 border-gray-900 pb-4 mb-6">
        <h1 className="text-3xl font-bold tracking-tight">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-gray-600 text-xs mt-1 uppercase tracking-widest font-medium">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex items-center justify-center gap-3 mt-2 text-[10px] text-gray-500 flex-wrap">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <><span>|</span><span>{personalInfo.phone}</span></>}
          {personalInfo.city && <><span>|</span><span>{personalInfo.city}</span></>}
          {personalInfo.linkedin && <><span>|</span><span>{personalInfo.linkedin}</span></>}
        </div>
      </div>

      {generated.summary && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Professional Summary</h2>
          <p className="text-gray-700">{generated.summary}</p>
        </div>
      )}

      {generated.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Experience</h2>
          {generated.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between">
                <div>
                  <span className="font-bold">{exp.role}</span>
                  <span className="text-gray-500"> - {exp.company}</span>
                </div>
                <span className="text-[10px] text-gray-500">{exp.startDate} - {exp.endDate}</span>
              </div>
              <ul className="mt-1.5 space-y-0.5 ml-4 list-disc">
                {exp.bullets.map((b, j) => <li key={j}>{b}</li>)}
              </ul>
            </div>
          ))}
        </div>
      )}

      {generated.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-3">Education</h2>
          {generated.education.map((edu, i) => (
            <div key={i} className="mb-2 flex justify-between">
              <div>
                <span className="font-bold">{edu.degree}</span>
                <span className="text-gray-500"> - {edu.institution}</span>
                {edu.grade && <span className="text-gray-400"> ({edu.grade})</span>}
              </div>
              <span className="text-[10px] text-gray-500">{edu.year}</span>
            </div>
          ))}
        </div>
      )}

      {generated.skills.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Skills</h2>
          <p className="text-gray-700">{generated.skills.join(' • ')}</p>
        </div>
      )}

      {generated.certifications.length > 0 && (
        <div>
          <h2 className="text-xs font-bold uppercase tracking-wider border-b border-gray-300 pb-1 mb-2">Certifications</h2>
          <p className="text-gray-700">{generated.certifications.join(' • ')}</p>
        </div>
      )}
    </div>
  );
}
