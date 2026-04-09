import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props { data: ResumeData; generated: GeneratedResume; }

export default function InfographicTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[297mm] min-h-[297mm] overflow-hidden relative bg-white text-gray-900 text-[11px] leading-relaxed" style={{ width: '210mm', fontFamily: 'Inter, sans-serif' }}>
      <div className="flex">
        {/* Left sidebar */}
        <div className="w-[280px] bg-gradient-to-b from-teal-600 to-teal-800 text-white p-7 flex flex-col gap-5">
          <div className="w-20 h-20 rounded-full bg-white/20 border-2 border-white/40 flex items-center justify-center text-2xl font-bold">
            {(personalInfo.fullName || 'YN').split(' ').map(n => n[0]).join('')}
          </div>
          <div>
            <h1 className="text-xl font-bold leading-tight">{personalInfo.fullName || 'Your Name'}</h1>
            <p className="text-teal-200 text-xs mt-1 uppercase tracking-widest">{personalInfo.targetRole || 'Target Role'}</p>
          </div>
          <div className="space-y-2 text-[10px]">
            {personalInfo.email && <div className="flex items-center gap-2"><Mail className="h-3 w-3 text-teal-300" />{personalInfo.email}</div>}
            {personalInfo.phone && <div className="flex items-center gap-2"><Phone className="h-3 w-3 text-teal-300" />{personalInfo.phone}</div>}
            {personalInfo.city && <div className="flex items-center gap-2"><MapPin className="h-3 w-3 text-teal-300" />{personalInfo.city}</div>}
            {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin className="h-3 w-3 text-teal-300" />{personalInfo.linkedin}</div>}
          </div>
          {generated.skills.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2">Skills</h3>
              <div className="space-y-2">
                {generated.skills.slice(0, 8).map((s, i) => (
                  <div key={i}>
                    <div className="flex justify-between text-[10px] mb-0.5"><span>{s}</span></div>
                    <div className="h-1.5 bg-teal-900/50 rounded-full overflow-hidden">
                      <div className="h-full bg-teal-300 rounded-full" style={{ width: `${85 - i * 5}%` }} />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}
          {generated.certifications.length > 0 && (
            <div>
              <h3 className="text-[10px] font-bold uppercase tracking-widest text-teal-200 mb-2">Certifications</h3>
              {generated.certifications.map((c, i) => <p key={i} className="text-[10px] mb-1">✦ {c}</p>)}
            </div>
          )}
        </div>
        {/* Right content */}
        <div className="flex-1 p-8 space-y-5">
          {generated.summary && (
            <div>
              <h2 className="text-sm font-bold text-teal-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-teal-500" />PROFILE
              </h2>
              <p className="text-gray-600">{generated.summary}</p>
            </div>
          )}
          {generated.experience.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-teal-700 mb-3 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-teal-500" />EXPERIENCE
              </h2>
              <div className="relative border-l-2 border-teal-200 pl-5 space-y-4">
                {generated.experience.map((exp, i) => (
                  <div key={i} className="relative">
                    <div className="absolute -left-[27px] top-0.5 w-3 h-3 rounded-full bg-teal-500 border-2 border-white" />
                    <div className="flex justify-between"><h3 className="font-bold">{exp.role}</h3><span className="text-[10px] text-gray-400">{exp.startDate} - {exp.endDate}</span></div>
                    <p className="text-teal-600 text-[10px] font-semibold">{exp.company}</p>
                    <ul className="mt-1 space-y-0.5">{exp.bullets.map((b, j) => <li key={j} className="text-gray-600">• {b}</li>)}</ul>
                  </div>
                ))}
              </div>
            </div>
          )}
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-sm font-bold text-teal-700 mb-2 flex items-center gap-2">
                <span className="w-8 h-[2px] bg-teal-500" />EDUCATION
              </h2>
              {generated.education.map((ed, i) => (
                <div key={i} className="mb-2"><h3 className="font-bold">{ed.degree}</h3><p className="text-gray-500 text-[10px]">{ed.institution} · {ed.year}{ed.grade ? ` · ${ed.grade}` : ''}</p></div>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
