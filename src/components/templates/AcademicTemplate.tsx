import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props { data: ResumeData; generated: GeneratedResume; }

export default function AcademicTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[297mm] min-h-[297mm] overflow-hidden relative bg-[#fffef7] text-gray-900 text-[11px] leading-relaxed p-10" style={{ width: '210mm', fontFamily: 'Palatino Linotype, Book Antiqua, Palatino, serif' }}>
      <div className="text-center border-b border-gray-800 pb-4 mb-6">
        <h1 className="text-[28px] font-bold tracking-wide">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-gray-600 text-xs mt-1 italic">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex justify-center gap-4 mt-2 text-[10px] text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>| {personalInfo.phone}</span>}
          {personalInfo.city && <span>| {personalInfo.city}</span>}
          {personalInfo.linkedin && <span>| {personalInfo.linkedin}</span>}
        </div>
      </div>
      {generated.education.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">Education</h2>
          {generated.education.map((ed, i) => (
            <div key={i} className="mb-2 flex justify-between">
              <div><span className="font-bold">{ed.degree}</span>, <span className="italic">{ed.institution}</span>{ed.grade ? <span className="text-gray-500"> - {ed.grade}</span> : null}</div>
              <span className="text-[10px] text-gray-500">{ed.year}</span>
            </div>
          ))}
        </div>
      )}
      {generated.summary && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">Research Interests</h2>
          <p className="text-gray-700">{generated.summary}</p>
        </div>
      )}
      {generated.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-3">Experience</h2>
          {generated.experience.map((exp, i) => (
            <div key={i} className="mb-4">
              <div className="flex justify-between"><div><span className="font-bold">{exp.role}</span>, <span className="italic">{exp.company}</span></div><span className="text-[10px] text-gray-500">{exp.startDate} - {exp.endDate}</span></div>
              <ul className="mt-1 ml-4 list-disc space-y-0.5">{exp.bullets.map((b, j) => <li key={j}>{b}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-8">
        {generated.skills.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">Technical Skills</h2>
            <p className="text-gray-700">{generated.skills.join(', ')}</p>
          </div>
        )}
        {generated.certifications.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider border-b border-gray-400 pb-1 mb-2">Certifications & Awards</h2>
            {generated.certifications.map((c, i) => <p key={i} className="text-gray-700 mb-0.5">• {c}</p>)}
          </div>
        )}
      </div>
    </div>
  );
}
