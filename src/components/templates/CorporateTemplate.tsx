import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props { data: ResumeData; generated: GeneratedResume; }

export default function CorporateTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="h-[297mm] min-h-[297mm] overflow-hidden relative bg-white text-gray-900 text-[11px] leading-relaxed" style={{ width: '210mm', fontFamily: 'Georgia, serif' }}>
      <div className="bg-[#1a1a2e] text-white px-10 py-8">
        <h1 className="text-3xl font-bold tracking-wide">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-[#e94560] text-sm mt-1 font-semibold tracking-widest uppercase">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex flex-wrap gap-5 mt-4 text-[10px] text-gray-300">
          {personalInfo.email && <span className="flex items-center gap-1.5"><Mail className="h-3 w-3 text-[#e94560]" />{personalInfo.email}</span>}
          {personalInfo.phone && <span className="flex items-center gap-1.5"><Phone className="h-3 w-3 text-[#e94560]" />{personalInfo.phone}</span>}
          {personalInfo.city && <span className="flex items-center gap-1.5"><MapPin className="h-3 w-3 text-[#e94560]" />{personalInfo.city}</span>}
          {personalInfo.linkedin && <span className="flex items-center gap-1.5"><Linkedin className="h-3 w-3 text-[#e94560]" />{personalInfo.linkedin}</span>}
        </div>
      </div>
      <div className="px-10 py-6 space-y-5">
        {generated.summary && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e] border-b-2 border-[#e94560] pb-1 mb-2">Executive Summary</h2>
            <p className="text-gray-700 italic">{generated.summary}</p>
          </div>
        )}
        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e] border-b-2 border-[#e94560] pb-1 mb-3">Professional Experience</h2>
            {generated.experience.map((exp, i) => (
              <div key={i} className="mb-4 pl-4 border-l-2 border-[#e94560]/30">
                <div className="flex justify-between"><h3 className="font-bold">{exp.role}</h3><span className="text-[10px] text-gray-500">{exp.startDate} - {exp.endDate}</span></div>
                <p className="text-[#e94560] text-[10px] font-semibold">{exp.company}</p>
                <ul className="mt-1.5 space-y-0.5">{exp.bullets.map((b, j) => <li key={j} className="flex gap-1.5"><span className="text-[#e94560]">■</span>{b}</li>)}</ul>
              </div>
            ))}
          </div>
        )}
        <div className="grid grid-cols-2 gap-6">
          {generated.education.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e] border-b-2 border-[#e94560] pb-1 mb-2">Education</h2>
              {generated.education.map((ed, i) => <div key={i} className="mb-2"><h3 className="font-bold">{ed.degree}</h3><p className="text-gray-500 text-[10px]">{ed.institution} · {ed.year}</p></div>)}
            </div>
          )}
          {generated.skills.length > 0 && (
            <div>
              <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e] border-b-2 border-[#e94560] pb-1 mb-2">Core Competencies</h2>
              <div className="grid grid-cols-2 gap-1">{generated.skills.map(s => <span key={s} className="text-[10px] py-0.5">• {s}</span>)}</div>
            </div>
          )}
        </div>
        {generated.certifications.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-[0.2em] text-[#1a1a2e] border-b-2 border-[#e94560] pb-1 mb-2">Certifications</h2>
            <p className="text-gray-700">{generated.certifications.join(' • ')}</p>
          </div>
        )}
      </div>
    </div>
  );
}
