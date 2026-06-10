import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function ExecutiveTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[296mm] min-h-[296mm] overflow-hidden relative bg-white text-gray-900 text-[11px] leading-relaxed" style={{ width: '210mm', fontFamily: 'Georgia, serif' }}>
      {/* Header band */}
      <div className="bg-[#111827] text-white px-10 py-8">
        <h1 className="text-3xl font-bold tracking-wide">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-amber-400 text-sm mt-1 font-medium uppercase tracking-[0.2em]">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex gap-4 mt-3 text-[10px] text-gray-300 flex-wrap">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>•  {personalInfo.phone}</span>}
          {personalInfo.city && <span>•  {personalInfo.city}</span>}
          {personalInfo.linkedin && <span>•  {personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="px-10 py-8 space-y-6">
        {generated.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#111827] border-b-2 border-amber-400 pb-1 mb-3 inline-block">Executive Summary</h2>
            <p className="text-gray-700 leading-relaxed">{generated.summary}</p>
          </div>
        )}

        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#111827] border-b-2 border-amber-400 pb-1 mb-4 inline-block">Professional Experience</h2>
            {generated.experience.map((exp, i) => (
              <div key={i} className="mb-5">
                <div className="flex justify-between items-baseline">
                  <div>
                    <span className="font-bold text-[#111827]">{exp.role}</span>
                    <span className="text-gray-500 ml-2 text-[10px] italic">{exp.company}</span>
                  </div>
                  <span className="text-[10px] text-gray-400 font-medium">{exp.startDate} - {exp.endDate}</span>
                </div>
                <ul className="mt-2 space-y-1 ml-3">
                  {exp.bullets.map((b, j) => (
                    <li key={j} className="flex gap-2">
                      <span className="text-amber-500 mt-0.5 text-[9px]">▸</span>
                      <span className="text-gray-600">{b}</span>
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#111827] border-b-2 border-amber-400 pb-1 mb-3 inline-block">Education</h2>
              {generated.education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <p className="font-bold text-[#111827]">{edu.degree}</p>
                  <p className="text-gray-500 text-[10px]">{edu.institution} - {edu.year}</p>
                  {edu.grade && <p className="text-gray-400 text-[10px]">{edu.grade}</p>}
                </div>
              ))}
            </div>
          )}

          <div className="space-y-5">
            {generated.skills.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#111827] border-b-2 border-amber-400 pb-1 mb-3 inline-block">Core Competencies</h2>
                <div className="grid grid-cols-2 gap-1">
                  {generated.skills.map((s, i) => (
                    <span key={i} className="text-gray-600 flex items-center gap-1.5">
                      <span className="h-1 w-1 rounded-full bg-amber-400 flex-shrink-0" />
                      {s}
                    </span>
                  ))}
                </div>
              </div>
            )}

            {generated.certifications.length > 0 && (
              <div>
                <h2 className="text-xs font-bold uppercase tracking-[0.15em] text-[#111827] border-b-2 border-amber-400 pb-1 mb-3 inline-block">Certifications</h2>
                {generated.certifications.map((c, i) => (
                  <p key={i} className="text-gray-600 mb-1">{c}</p>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
