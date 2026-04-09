import type { ResumeData, GeneratedResume } from '@/types/resume';
import { Mail, Phone, MapPin, Linkedin } from 'lucide-react';

interface Props {
  data: ResumeData;
  generated: GeneratedResume;
}

export default function ModernTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="flex h-[1122px] overflow-hidden relative break-inside-avoid bg-white text-gray-900 text-[11px] leading-relaxed" style={{ width: '794px', fontFamily: 'Inter, sans-serif' }}>
      {/* Sidebar */}
      <div className="w-[260px] bg-[#1e3a8a] text-white p-7 flex flex-col gap-6">
        <div>
          <h1 className="text-2xl font-bold leading-tight">{personalInfo.fullName || 'Your Name'}</h1>
          <p className="text-blue-200 text-xs mt-1 font-medium uppercase tracking-wider">{personalInfo.targetRole || 'Target Role'}</p>
        </div>

        <div className="space-y-2.5">
          <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 border-b border-blue-400/30 pb-1">Contact</h3>
          {personalInfo.email && <div className="flex items-center gap-2"><Mail className="h-3 w-3 flex-shrink-0 text-blue-300" /><span className="break-all">{personalInfo.email}</span></div>}
          {personalInfo.phone && <div className="flex items-center gap-2"><Phone className="h-3 w-3 flex-shrink-0 text-blue-300" /><span>{personalInfo.phone}</span></div>}
          {personalInfo.city && <div className="flex items-center gap-2"><MapPin className="h-3 w-3 flex-shrink-0 text-blue-300" /><span>{personalInfo.city}</span></div>}
          {personalInfo.linkedin && <div className="flex items-center gap-2"><Linkedin className="h-3 w-3 flex-shrink-0 text-blue-300" /><span className="break-all">{personalInfo.linkedin}</span></div>}
        </div>

        {generated.skills.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 border-b border-blue-400/30 pb-1">Skills</h3>
            <div className="flex flex-wrap gap-1.5">
              {generated.skills.map((s, i) => (
                <span key={i} className="bg-blue-800/50 rounded px-2 py-0.5 text-[10px]">{s}</span>
              ))}
            </div>
          </div>
        )}

        {generated.certifications.length > 0 && (
          <div className="space-y-2.5">
            <h3 className="text-[10px] font-bold uppercase tracking-widest text-blue-300 border-b border-blue-400/30 pb-1">Certifications</h3>
            {generated.certifications.map((c, i) => <p key={i}>{c}</p>)}
          </div>
        )}
      </div>

      {/* Main */}
      <div className="flex-1 p-8 space-y-6">
        {generated.summary && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1 mb-3">Professional Summary</h2>
            <p className="text-gray-700">{generated.summary}</p>
          </div>
        )}

        {generated.experience.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1 mb-3">Experience</h2>
            {generated.experience.map((exp, i) => (
              <div key={i} className="mb-4">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">{exp.role}</h3>
                  <span className="text-[10px] text-gray-500">{exp.startDate} - {exp.endDate}</span>
                </div>
                <p className="text-gray-600 text-[10px] font-medium">{exp.company}</p>
                <ul className="mt-1.5 space-y-1">
                  {exp.bullets.map((b, j) => <li key={j} className="flex gap-1.5"><span className="text-[#2563eb] mt-0.5">•</span><span>{b}</span></li>)}
                </ul>
              </div>
            ))}
          </div>
        )}

        {generated.education.length > 0 && (
          <div>
            <h2 className="text-sm font-bold uppercase tracking-wider text-[#1e3a8a] border-b-2 border-[#1e3a8a] pb-1 mb-3">Education</h2>
            {generated.education.map((edu, i) => (
              <div key={i} className="mb-3">
                <div className="flex justify-between items-baseline">
                  <h3 className="font-bold text-gray-900">{edu.degree}</h3>
                  <span className="text-[10px] text-gray-500">{edu.year}</span>
                </div>
                <p className="text-gray-600 text-[10px]">{edu.institution}{edu.grade ? ` - ${edu.grade}` : ''}</p>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
