import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function ElegantTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[296mm] min-h-[296mm] overflow-hidden relative bg-[#faf9f6] text-gray-800 text-[11px] leading-relaxed" style={{ width: '210mm', fontFamily: "'Georgia', serif" }}>
      {/* Header - centered, refined */}
      <div className="text-center pt-10 pb-6 px-10">
        <h1 className="text-3xl font-normal tracking-[0.15em] uppercase text-gray-900" style={{ fontFamily: "'Georgia', serif" }}>
          {personalInfo.fullName || 'Your Name'}
        </h1>
        <div className="w-24 h-[1px] bg-emerald-600 mx-auto mt-3 mb-2" />
        <p className="text-emerald-700 text-xs tracking-[0.25em] uppercase">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex justify-center flex-wrap gap-4 mt-3 text-[10px] text-gray-500">
          {personalInfo.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3 text-emerald-600" />{personalInfo.email}</span>}
          {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3 text-emerald-600" />{personalInfo.phone}</span>}
          {personalInfo.city && <span className="flex items-center gap-1"><MapPin className="h-3 w-3 text-emerald-600" />{personalInfo.city}</span>}
          {personalInfo.linkedin && <span className="flex items-center gap-1"><Linkedin className="h-3 w-3 text-emerald-600" />{personalInfo.linkedin}</span>}
        </div>
      </div>

      <div className="px-10 pb-10 space-y-5">
        {/* Summary */}
        {generated.summary && (
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-emerald-700 mb-2 flex items-center gap-3">
              <span className="flex-1 h-[1px] bg-emerald-200" />About<span className="flex-1 h-[1px] bg-emerald-200" />
            </h2>
            <p className="text-gray-600 text-center italic leading-relaxed">{generated.summary}</p>
          </div>
        )}

        {/* Experience */}
        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-xs tracking-[0.3em] uppercase text-emerald-700 mb-3 flex items-center gap-3">
              <span className="flex-1 h-[1px] bg-emerald-200" />Experience<span className="flex-1 h-[1px] bg-emerald-200" />
            </h2>
            <div className="space-y-4">
              {generated.experience.map((exp, i) => (
                <div key={i}>
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900 text-[12px]">{exp.role}</h3>
                    <span className="text-[10px] text-emerald-600 italic">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-gray-500 italic text-[10px] mb-1">{exp.company}</p>
                  <ul className="space-y-1 ml-3">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-gray-600"><span className="text-emerald-500 mt-[2px]">◆</span>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-8">
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-emerald-700 mb-2 flex items-center gap-3">
                <span className="flex-1 h-[1px] bg-emerald-200" />Education<span className="flex-1 h-[1px] bg-emerald-200" />
              </h2>
              {generated.education.map((ed, i) => (
                <div key={i} className="mb-2">
                  <h3 className="font-bold text-gray-900">{ed.degree}</h3>
                  <p className="text-gray-500 italic text-[10px]">{ed.institution} · {ed.year}</p>
                </div>
              ))}
            </div>
          )}

          {generated.skills.length > 0 && (
            <div>
              <h2 className="text-xs tracking-[0.3em] uppercase text-emerald-700 mb-2 flex items-center gap-3">
                <span className="flex-1 h-[1px] bg-emerald-200" />Skills<span className="flex-1 h-[1px] bg-emerald-200" />
              </h2>
              <div className="flex flex-wrap gap-1.5">
                {generated.skills.map(skill => (
                  <span key={skill} className="bg-emerald-50 text-emerald-800 px-2.5 py-1 rounded-full text-[10px] border border-emerald-200">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
