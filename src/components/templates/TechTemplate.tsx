import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function TechTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[296mm] min-h-[296mm] overflow-hidden relative bg-[#0f172a] text-gray-200 text-[11px] leading-relaxed" style={{ width: '210mm', fontFamily: "'JetBrains Mono', 'Fira Code', monospace" }}>
      {/* Terminal-style header */}
      <div className="bg-[#1e293b] border-b border-cyan-500/20 p-6">
        <div className="flex items-center gap-2 mb-3">
          <div className="w-3 h-3 rounded-full bg-red-500" />
          <div className="w-3 h-3 rounded-full bg-yellow-500" />
          <div className="w-3 h-3 rounded-full bg-green-500" />
          <span className="ml-2 text-[10px] text-gray-500">resume.tsx</span>
        </div>
        <div className="text-cyan-400 text-[10px] mb-1">{'// '}Full-Stack Developer</div>
        <h1 className="text-3xl font-bold text-white">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-cyan-300 text-xs mt-1 font-medium">{`> ${personalInfo.targetRole || 'Target Role'}`}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-gray-400">
          {personalInfo.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3 text-cyan-500" />{personalInfo.email}</span>}
          {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3 text-cyan-500" />{personalInfo.phone}</span>}
          {personalInfo.city && <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-cyan-500" />{personalInfo.city}</span>}
          {personalInfo.linkedin && <span className="flex items-center gap-1"><Linkedin className="h-3 w-3 text-cyan-500" />{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="p-6 space-y-5">
        {/* Summary */}
        {generated.summary && (
          <div>
            <h2 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
              <span className="text-gray-500">{'/**'}</span> About <span className="text-gray-500">{'*/'}</span>
            </h2>
            <p className="text-gray-400 leading-relaxed pl-4 border-l-2 border-cyan-800">{generated.summary}</p>
          </div>
        )}

        {/* Experience */}
        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-sm font-bold text-cyan-400 mb-3 flex items-center gap-2">
              <span className="text-gray-500">{'/**'}</span> Experience <span className="text-gray-500">{'*/'}</span>
            </h2>
            <div className="space-y-4">
              {generated.experience.map((exp, i) => (
                <div key={i} className="bg-[#1e293b] rounded-lg p-4 border border-cyan-500/10">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-white">{exp.role}</h3>
                    <span className="text-[10px] text-cyan-500 font-mono">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-cyan-400 text-[10px] font-semibold mb-1.5">{exp.company}</p>
                  <ul className="space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-gray-400"><span className="text-green-400 font-bold">→</span>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-5">
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <span className="text-gray-500">{'/**'}</span> Education <span className="text-gray-500">{'*/'}</span>
              </h2>
              {generated.education.map((ed, i) => (
                <div key={i} className="mb-2 bg-[#1e293b] rounded p-3 border border-cyan-500/10">
                  <h3 className="font-bold text-white text-[11px]">{ed.degree}</h3>
                  <p className="text-gray-500 text-[10px]">{ed.institution} · {ed.year}</p>
                </div>
              ))}
            </div>
          )}

          {generated.skills.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-cyan-400 mb-2 flex items-center gap-2">
                <span className="text-gray-500">{'/**'}</span> Skills <span className="text-gray-500">{'*/'}</span>
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {generated.skills.map(skill => (
                  <span key={skill} className="bg-cyan-950 text-cyan-300 px-2.5 py-1 rounded text-[10px] font-mono border border-cyan-500/20">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
