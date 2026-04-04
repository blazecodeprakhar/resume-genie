import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function BoldTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="min-h-[1122px] bg-white text-gray-900 text-[11px] leading-relaxed" style={{ width: '794px', fontFamily: 'Inter, sans-serif' }}>
      {/* Header - full-width gradient band */}
      <div className="relative overflow-hidden" style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)' }}>
        <div className="absolute inset-0 opacity-10" style={{ backgroundImage: 'radial-gradient(circle at 80% 20%, white 0%, transparent 60%)' }} />
        <div className="relative p-8 pb-6 text-white">
          <h1 className="text-4xl font-black tracking-tight uppercase">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-red-200 text-sm mt-1 font-semibold tracking-[0.2em] uppercase">{personalInfo.targetRole || 'Target Role'}</p>
          <div className="flex flex-wrap gap-4 mt-4 text-[10px] text-red-100">
            {personalInfo.email && <span className="flex items-center gap-1"><Mail className="h-3 w-3" />{personalInfo.email}</span>}
            {personalInfo.phone && <span className="flex items-center gap-1"><Phone className="h-3 w-3" />{personalInfo.phone}</span>}
            {personalInfo.city && <span className="flex items-center gap-1"><MapPin className="h-3 w-3" />{personalInfo.city}</span>}
            {personalInfo.linkedin && <span className="flex items-center gap-1"><Linkedin className="h-3 w-3" />{personalInfo.linkedin}</span>}
          </div>
        </div>
      </div>

      <div className="p-8 space-y-6">
        {/* Summary */}
        {generated.summary && (
          <div>
            <h2 className="text-lg font-black uppercase tracking-wider text-red-700 border-b-[3px] border-red-600 pb-1 mb-3">Profile</h2>
            <p className="text-gray-700 leading-relaxed">{generated.summary}</p>
          </div>
        )}

        {/* Experience */}
        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-lg font-black uppercase tracking-wider text-red-700 border-b-[3px] border-red-600 pb-1 mb-3">Experience</h2>
            <div className="space-y-4">
              {generated.experience.map((exp, i) => (
                <div key={i} className="border-l-4 border-red-400 pl-4">
                  <div className="flex justify-between items-baseline">
                    <h3 className="font-bold text-gray-900">{exp.role}</h3>
                    <span className="text-[10px] text-gray-500 font-medium">{exp.startDate} - {exp.endDate}</span>
                  </div>
                  <p className="text-red-600 font-semibold text-[10px]">{exp.company}</p>
                  <ul className="mt-1.5 space-y-1">
                    {exp.bullets.map((b, j) => (
                      <li key={j} className="flex gap-2 text-gray-700"><span className="text-red-500 font-bold mt-[1px]">▸</span>{b}</li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>
          </div>
        )}

        <div className="grid grid-cols-2 gap-6">
          {/* Education */}
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-lg font-black uppercase tracking-wider text-red-700 border-b-[3px] border-red-600 pb-1 mb-3">Education</h2>
              {generated.education.map((ed, i) => (
                <div key={i} className="mb-2">
                  <h3 className="font-bold text-gray-900">{ed.degree}</h3>
                  <p className="text-gray-600 text-[10px]">{ed.institution} · {ed.year}</p>
                </div>
              ))}
            </div>
          )}

          {/* Skills */}
          {generated.skills.length > 0 && (
            <div>
              <h2 className="text-lg font-black uppercase tracking-wider text-red-700 border-b-[3px] border-red-600 pb-1 mb-3">Skills</h2>
              <div className="flex flex-wrap gap-1.5">
                {generated.skills.map(skill => (
                  <span key={skill} className="bg-red-50 text-red-800 px-2.5 py-1 rounded-sm text-[10px] font-semibold border border-red-200">{skill}</span>
                ))}
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
