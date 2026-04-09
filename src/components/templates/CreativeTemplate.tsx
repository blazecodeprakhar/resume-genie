import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function CreativeTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[1122px] overflow-hidden relative bg-white text-gray-800 text-[11px] leading-relaxed" style={{ width: '794px', fontFamily: 'Inter, sans-serif' }}>
      {/* Accent bar */}
      <div className="h-2 bg-gradient-to-r from-violet-500 via-fuchsia-500 to-pink-500" />

      <div className="flex">
        {/* Left column */}
        <div className="w-[280px] bg-gray-50 p-7 space-y-6 border-r border-gray-100">
          <div>
            <h1 className="text-2xl font-extrabold text-gray-900 leading-tight">{personalInfo.fullName || 'Your Name'}</h1>
            <p className="text-transparent bg-clip-text bg-gradient-to-r from-violet-600 to-fuchsia-600 text-xs font-bold uppercase tracking-wider mt-1">{personalInfo.targetRole || 'Target Role'}</p>
          </div>

          <div className="space-y-2">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400">Contact</h3>
            <div className="space-y-1.5 text-gray-600">
              {personalInfo.email && <p className="break-all">{personalInfo.email}</p>}
              {personalInfo.phone && <p>{personalInfo.phone}</p>}
              {personalInfo.city && <p>{personalInfo.city}</p>}
              {personalInfo.linkedin && <p className="break-all">{personalInfo.linkedin}</p>}
            </div>
          </div>

          {generated.skills.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Skills</h3>
              <div className="space-y-1.5">
                {generated.skills.map((s, i) => (
                  <div key={i} className="flex items-center gap-2">
                    <div className="h-1.5 flex-1 bg-gray-200 rounded-full overflow-hidden">
                      <div
                        className="h-full rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500"
                        style={{ width: `${70 + ((i * 13) % 30)}%` }}
                      />
                    </div>
                    <span className="text-[10px] text-gray-600 w-20 text-right">{s}</span>
                  </div>
                ))}
              </div>
            </div>
          )}

          {generated.certifications.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-gray-400 mb-2">Certifications</h3>
              {generated.certifications.map((c, i) => (
                <div key={i} className="flex items-start gap-2 mb-1.5">
                  <span className="text-fuchsia-500 mt-0.5">◆</span>
                  <span className="text-gray-600">{c}</span>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Right column */}
        <div className="flex-1 p-8 space-y-6">
          {generated.summary && (
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 mb-2 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                About Me
              </h2>
              <p className="text-gray-600 leading-relaxed">{generated.summary}</p>
            </div>
          )}

          {generated.experience.length > 0 && (
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                Experience
              </h2>
              {generated.experience.map((exp, i) => (
                <div key={i} className="mb-5 relative pl-4 border-l-2 border-gray-100">
                  <div className="absolute -left-[5px] top-1 h-2 w-2 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500" />
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-[10px] text-gray-400">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-fuchsia-600 text-[10px] font-semibold">{exp.company}</p>
                  <ul className="mt-1.5 space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="text-gray-600 flex gap-1.5">
                        <span className="text-violet-400 mt-0.5">›</span>
                        <span>{b}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          )}

          {generated.education.length > 0 && (
            <div>
              <h2 className="text-sm font-extrabold uppercase tracking-wider text-gray-900 mb-3 flex items-center gap-2">
                <span className="h-4 w-1 rounded-full bg-gradient-to-b from-violet-500 to-fuchsia-500" />
                Education
              </h2>
              {generated.education.map((edu, i) => (
                <div key={i} className="mb-2">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                    <span className="text-[10px] text-gray-400">{edu.year}</span>
                  </div>
                  <p className="text-gray-500 text-[10px]">{edu.institution}{edu.grade ? ` • ${edu.grade}` : ''}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
