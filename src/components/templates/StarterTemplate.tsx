import type { ResumeData, GeneratedResume } from '@/types/resume';

interface Props { data: ResumeData; generated: GeneratedResume; }

export default function StarterTemplate({ data, generated }: Props) {
  const { personalInfo } = data;
  return (
    <div className="min-h-[1122px] bg-white text-gray-900 text-[11px] leading-relaxed p-10" style={{ width: '794px', fontFamily: 'Inter, sans-serif' }}>
      <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-2xl p-7 text-white mb-6">
        <h1 className="text-3xl font-extrabold">{personalInfo.fullName || 'Your Name'}</h1>
        <p className="text-indigo-200 text-sm mt-1 font-medium">{personalInfo.targetRole || 'Target Role'}</p>
        <div className="flex flex-wrap gap-4 mt-3 text-[10px] text-indigo-100">
          {personalInfo.email && <span>{personalInfo.email}</span>}
          {personalInfo.phone && <span>{personalInfo.phone}</span>}
          {personalInfo.city && <span>{personalInfo.city}</span>}
          {personalInfo.linkedin && <span>{personalInfo.linkedin}</span>}
        </div>
      </div>
      {generated.summary && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2 flex items-center gap-2"><span className="h-[2px] flex-1 bg-indigo-200" />About Me<span className="h-[2px] flex-1 bg-indigo-200" /></h2>
          <p className="text-gray-600 text-center">{generated.summary}</p>
        </div>
      )}
      {generated.experience.length > 0 && (
        <div className="mb-5">
          <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-3">Experience</h2>
          {generated.experience.map((exp, i) => (
            <div key={i} className="mb-4 bg-indigo-50/50 rounded-xl p-4">
              <div className="flex justify-between"><h3 className="font-bold text-gray-900">{exp.role}</h3><span className="text-[10px] text-gray-500 bg-white rounded-full px-2 py-0.5">{exp.startDate} - {exp.endDate}</span></div>
              <p className="text-indigo-600 text-[10px] font-semibold">{exp.company}</p>
              <ul className="mt-1.5 space-y-0.5">{exp.bullets.map((b, j) => <li key={j} className="flex gap-1.5"><span className="text-indigo-400">→</span>{b}</li>)}</ul>
            </div>
          ))}
        </div>
      )}
      <div className="grid grid-cols-2 gap-6">
        {generated.education.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Education</h2>
            {generated.education.map((ed, i) => <div key={i} className="mb-2"><h3 className="font-bold">{ed.degree}</h3><p className="text-gray-500 text-[10px]">{ed.institution} · {ed.year}</p></div>)}
          </div>
        )}
        {generated.skills.length > 0 && (
          <div>
            <h2 className="text-xs font-bold uppercase tracking-wider text-indigo-600 mb-2">Skills</h2>
            <div className="flex flex-wrap gap-1.5">{generated.skills.map(s => <span key={s} className="bg-indigo-100 text-indigo-700 rounded-full px-2.5 py-0.5 text-[10px] font-medium">{s}</span>)}</div>
          </div>
        )}
      </div>
    </div>
  );
}
