import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function MinimalTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[296mm] min-h-[296mm] overflow-hidden relative bg-white text-gray-800 text-[11px] leading-relaxed p-10" style={{ width: '210mm', fontFamily: 'Inter, sans-serif' }}>
      {/* Header */}
      <div className="mb-8">
        <h1 className="text-3xl font-light tracking-tight text-gray-900">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-sm text-gray-400 font-medium mt-0.5">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex gap-4 mt-3 text-[10px] text-gray-500">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.city && <span>{personalInfo.city}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="grid grid-cols-[1fr_260px] gap-10">
        {/* Left */}
        <div className="space-y-6">
          {generated.summary && (
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Summary</h2>
              <p className="text-gray-600">{generated.summary}</p>
            </div>
          )}

          {generated.experience.length > 0 && (
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Experience</h2>
              {generated.experience.map((exp, i) => (
                <div key={i} className="mb-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-900">{exp.role}</h3>
                    <span className="text-[10px] text-gray-400">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-400 text-[10px]">{exp.company}</p>
                  <ul className="mt-1.5 space-y-0.5">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2">
                        <span className="text-gray-300 mt-0.5">-</span>
                        <span className="text-gray-600">{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {generated.education.length > 0 && (
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-3">Education</h2>
              {generated.education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-semibold text-gray-900">{edu.degree}</h3>
                    <span className="text-[10px] text-gray-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">{edu.institution}{edu.grade ? ` • ${edu.grade}` : ''}</p>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right */}
        <div className="space-y-6 border-l border-gray-100 pl-8">
          {generated.skills.length > 0 && (
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {generated.skills.map((s, i) => (
                  <span key={i} className="bg-gray-50 border border-gray-100 rounded px-2 py-0.5 text-[10px] text-gray-600">{s}</span>
                ))}
              </div>
            </div>
          )}

          {generated.certifications.length > 0 && (
            <div>
              <h2 className="text-[10px] font-semibold uppercase tracking-[0.2em] text-gray-400 mb-2">Certifications</h2>
              {generated.certifications.map((c, i) => (
                <p key={i} className="text-gray-600 mb-1">{c}</p>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
