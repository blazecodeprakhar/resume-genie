import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { ArrowRight, Eye } from 'lucide-react';
import { useState } from 'react';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({ opacity: 1, y: 0, transition: { delay: i * 0.06, duration: 0.5 } }),
};

const templates = [
  {
    id: 'modern', name: 'Modern Blue', desc: 'Bold blue sidebar with contact & skills panel.', color: 'from-blue-500 to-blue-800',
    preview: (
      <div className="w-full h-full flex">
        <div className="w-[34%] bg-[#1e3a8a] p-[6px] flex flex-col gap-[3px]">
          <div className="h-[5px] bg-white/90 rounded-sm w-[85%]" />
          <div className="h-[2px] bg-blue-300/40 rounded-sm w-[60%]" />
          <div className="mt-[2px] space-y-[2px]">{[70, 55, 80].map((w, i) => <div key={i} className="h-[2px] bg-blue-300/30 rounded-sm" style={{ width: `${w}%` }} />)}</div>
          <div className="flex flex-wrap gap-[2px] mt-[2px]">{[1, 2, 3].map(i => <div key={i} className="h-[3px] w-[16px] bg-blue-400/30 rounded-sm" />)}</div>
        </div>
        <div className="flex-1 bg-white p-[5px] space-y-[3px]">
          <div className="h-[2px] bg-blue-900/20 rounded-sm w-[35%]" />
          <div className="space-y-[1.5px]">{[100, 85, 65].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>
          <div className="h-[2px] bg-blue-900/20 rounded-sm w-[40%] mt-[3px]" />
          <div className="space-y-[1.5px]">{[90, 100, 75].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'classic', name: 'Classic', desc: 'Traditional single-column with underlined sections.', color: 'from-gray-600 to-gray-900',
    preview: (
      <div className="w-full h-full bg-white p-[6px] space-y-[3px]">
        <div className="text-center border-b border-gray-800/30 pb-[3px]">
          <div className="h-[5px] bg-gray-800/80 rounded-sm w-[55%] mx-auto" />
          <div className="h-[2px] bg-gray-400/40 rounded-sm w-[70%] mx-auto mt-[2px]" />
        </div>
        {[1, 2, 3].map(s => (
          <div key={s} className="space-y-[1.5px]">
            <div className="h-[2px] bg-gray-700/30 rounded-sm w-[45%]" />
            {[100, 85].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}
          </div>
        ))}
      </div>
    ),
  },
  {
    id: 'minimal', name: 'Minimal', desc: 'Clean two-column with generous whitespace.', color: 'from-slate-400 to-slate-600',
    preview: (
      <div className="w-full h-full bg-white p-[6px]">
        <div className="h-[5px] bg-gray-800/70 rounded-sm w-[50%] mb-[2px]" />
        <div className="h-[2px] bg-gray-300/50 rounded-sm w-[30%] mb-[4px]" />
        <div className="flex gap-[5px]">
          <div className="flex-1 space-y-[3px]">
            {[1, 2].map(s => (<div key={s} className="space-y-[1.5px]"><div className="h-[2px] bg-gray-500/30 rounded-sm w-[40%]" />{[100, 85].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-100 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
          </div>
          <div className="w-[38%] space-y-[3px]">
            {[1, 2].map(s => (<div key={s} className="space-y-[1.5px]"><div className="h-[2px] bg-gray-500/30 rounded-sm w-[50%]" />{[90, 70].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-100 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'executive', name: 'Executive', desc: 'Dark header with gold accents.', color: 'from-amber-500 to-amber-800',
    preview: (
      <div className="w-full h-full bg-white">
        <div className="bg-gray-900 p-[5px]">
          <div className="h-[5px] bg-white/90 rounded-sm w-[55%]" />
          <div className="h-[2px] bg-amber-400/60 rounded-sm w-[40%] mt-[2px]" />
        </div>
        <div className="p-[5px] space-y-[3px]">
          {[1, 2].map(s => (<div key={s} className="border-l-2 border-amber-500/60 pl-[3px] space-y-[1.5px]"><div className="h-[2px] bg-gray-700/25 rounded-sm w-[45%]" />{[100, 80].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
        </div>
      </div>
    ),
  },
  {
    id: 'creative', name: 'Creative', desc: 'Gradient accent with skill bars.', color: 'from-purple-500 to-pink-500',
    preview: (
      <div className="w-full h-full bg-white">
        <div className="h-[4px] bg-gradient-to-r from-purple-500 to-pink-500" />
        <div className="p-[5px]">
          <div className="h-[5px] bg-gray-800/70 rounded-sm w-[50%]" />
          <div className="h-[2px] bg-purple-400/50 rounded-sm w-[30%] mt-[2px]" />
          <div className="flex gap-[4px] mt-[4px]">
            <div className="flex-1 space-y-[2px]">
              <div className="h-[2px] bg-purple-500/25 rounded-sm w-[35%]" />
              {[100, 70].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-100 rounded-sm" style={{ width: `${w}%` }} />)}
            </div>
            <div className="w-[38%] space-y-[2px]">
              {[80, 65, 55].map((w, i) => (
                <div key={i} className="h-[2px] bg-gray-100 rounded-full overflow-hidden">
                  <div className="h-full bg-gradient-to-r from-purple-400 to-pink-400 rounded-full" style={{ width: `${w}%` }} />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'bold', name: 'Bold', desc: 'High-impact red gradient header.', color: 'from-red-500 to-red-800',
    preview: (
      <div className="w-full h-full bg-white">
        <div className="p-[5px]" style={{ background: 'linear-gradient(135deg, #dc2626, #991b1b)' }}>
          <div className="h-[6px] bg-white/90 rounded-sm w-[65%]" />
          <div className="h-[2px] bg-red-200/50 rounded-sm w-[45%] mt-[2px]" />
        </div>
        <div className="p-[5px] space-y-[3px]">
          <div className="h-[2px] bg-red-600/30 rounded-sm w-[35%]" />
          {[100, 80].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}
        </div>
      </div>
    ),
  },
  {
    id: 'elegant', name: 'Elegant', desc: 'Serif typography with emerald accents.', color: 'from-emerald-500 to-emerald-800',
    preview: (
      <div className="w-full h-full bg-[#faf9f6] p-[6px]">
        <div className="text-center space-y-[2px] mb-[3px]">
          <div className="h-[5px] bg-gray-800/60 rounded-sm w-[55%] mx-auto" />
          <div className="h-[1px] bg-emerald-500/50 w-[20%] mx-auto" />
          <div className="h-[2px] bg-emerald-600/30 rounded-sm w-[35%] mx-auto" />
        </div>
        {[1, 2].map(s => (<div key={s} className="space-y-[1.5px] mb-[3px]"><div className="flex items-center gap-[2px]"><div className="flex-1 h-[1px] bg-emerald-300/40" /><div className="h-[2px] bg-emerald-600/30 rounded-sm w-[30%]" /><div className="flex-1 h-[1px] bg-emerald-300/40" /></div>{[100, 85].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200/80 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
      </div>
    ),
  },
  {
    id: 'tech', name: 'Tech', desc: 'Dark terminal-inspired for devs.', color: 'from-cyan-400 to-cyan-700',
    preview: (
      <div className="w-full h-full bg-[#0f172a]">
        <div className="bg-[#1e293b] p-[4px] border-b border-cyan-500/20">
          <div className="flex items-center gap-[2px] mb-[2px]">
            <div className="w-[3px] h-[3px] rounded-full bg-red-500" /><div className="w-[3px] h-[3px] rounded-full bg-yellow-500" /><div className="w-[3px] h-[3px] rounded-full bg-green-500" />
          </div>
          <div className="h-[5px] bg-white/80 rounded-sm w-[55%]" />
          <div className="h-[2px] bg-cyan-400/40 rounded-sm w-[40%] mt-[2px]" />
        </div>
        <div className="p-[4px] space-y-[3px]">
          <div className="h-[2px] bg-cyan-400/30 rounded-sm w-[30%]" />
          {[100, 80].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-600/30 rounded-sm" style={{ width: `${w}%` }} />)}
        </div>
      </div>
    ),
  },
  {
    id: 'corporate', name: 'Corporate', desc: 'Navy & crimson executive style.', color: 'from-rose-500 to-rose-800',
    preview: (
      <div className="w-full h-full bg-white">
        <div className="bg-[#1a1a2e] p-[5px]">
          <div className="h-[5px] bg-white/90 rounded-sm w-[55%]" />
          <div className="h-[2px] bg-[#e94560]/60 rounded-sm w-[40%] mt-[2px]" />
        </div>
        <div className="p-[5px] space-y-[3px]">
          {[1, 2].map(s => (<div key={s} className="border-l-2 border-[#e94560]/40 pl-[3px] space-y-[1.5px]"><div className="h-[2px] bg-gray-700/25 rounded-sm w-[50%]" />{[100, 80].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
        </div>
      </div>
    ),
  },
  {
    id: 'starter', name: 'Starter', desc: 'Vibrant indigo rounded card header.', color: 'from-indigo-500 to-violet-600',
    preview: (
      <div className="w-full h-full bg-white p-[5px]">
        <div className="bg-gradient-to-r from-indigo-500 to-violet-600 rounded-lg p-[5px] mb-[4px]">
          <div className="h-[5px] bg-white/90 rounded-sm w-[60%]" />
          <div className="h-[2px] bg-indigo-200/50 rounded-sm w-[40%] mt-[2px]" />
        </div>
        <div className="space-y-[3px]">
          <div className="bg-indigo-50/50 rounded-md p-[3px] space-y-[1.5px]">
            <div className="h-[2px] bg-gray-700/25 rounded-sm w-[50%]" />
            {[100, 80].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}
          </div>
        </div>
      </div>
    ),
  },
  {
    id: 'infographic', name: 'Infographic', desc: 'Teal sidebar with skill progress bars.', color: 'from-teal-500 to-teal-800',
    preview: (
      <div className="w-full h-full flex">
        <div className="w-[36%] bg-gradient-to-b from-teal-600 to-teal-800 p-[5px] flex flex-col gap-[3px]">
          <div className="w-[14px] h-[14px] rounded-full bg-white/20 border border-white/30" />
          <div className="h-[4px] bg-white/80 rounded-sm w-[80%]" />
          <div className="h-[2px] bg-teal-200/40 rounded-sm w-[60%]" />
          <div className="space-y-[2px] mt-[2px]">{[80, 65, 50].map((w, i) => <div key={i} className="h-[2px] bg-teal-900/40 rounded-full overflow-hidden"><div className="h-full bg-teal-300 rounded-full" style={{ width: `${w}%` }} /></div>)}</div>
        </div>
        <div className="flex-1 bg-white p-[5px] space-y-[3px]">
          <div className="h-[2px] bg-teal-700/30 rounded-sm w-[35%]" />
          <div className="border-l-2 border-teal-200 pl-[3px] space-y-[1.5px]">{[100, 85, 65].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>
        </div>
      </div>
    ),
  },
  {
    id: 'academic', name: 'Academic', desc: 'Serif font for academic CVs.', color: 'from-stone-500 to-stone-800',
    preview: (
      <div className="w-full h-full bg-[#fffef7] p-[6px]">
        <div className="text-center border-b border-gray-800/40 pb-[3px] mb-[4px]">
          <div className="h-[5px] bg-gray-800/70 rounded-sm w-[50%] mx-auto" />
          <div className="h-[2px] bg-gray-400/40 rounded-sm w-[65%] mx-auto mt-[2px]" />
        </div>
        {[1, 2, 3].map(s => (<div key={s} className="space-y-[1.5px] mb-[3px]"><div className="h-[2px] bg-gray-800/25 rounded-sm w-[40%] border-b border-gray-300" />{[100, 85].map((w, i) => <div key={i} className="h-[1.5px] bg-gray-200 rounded-sm" style={{ width: `${w}%` }} />)}</div>))}
      </div>
    ),
  },
];

export default function TemplateGallery() {
  const [hoveredId, setHoveredId] = useState<string | null>(null);

  return (
    <section id="templates" className="py-16 sm:py-20 md:py-28 bg-muted/30">
      <div className="container mx-auto px-4">
        <div className="text-center mb-10 md:mb-16">
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold text-foreground">12 Professional Templates</h2>
          <p className="mt-3 sm:mt-4 text-muted-foreground text-base sm:text-lg max-w-xl mx-auto">
            Pick a design that matches your style - all ATS-optimized and recruiter-approved.
          </p>
        </div>

        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-4 gap-3 sm:gap-4 md:gap-5 max-w-6xl mx-auto">
          {templates.map((t, i) => (
            <motion.div
              key={t.id}
              className="group relative"
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true }}
              variants={fadeUp}
              custom={i}
              onMouseEnter={() => setHoveredId(t.id)}
              onMouseLeave={() => setHoveredId(null)}
            >
              <div className="rounded-xl border border-border bg-card overflow-hidden shadow-card hover:shadow-elevated transition-all duration-300 hover:-translate-y-1">
                {/* Fixed smaller aspect ratio */}
                <div className="aspect-[5/4] relative overflow-hidden bg-muted/50">
                  <div className="absolute inset-[4px] sm:inset-[6px] rounded-md overflow-hidden border border-border shadow-sm">
                    {t.preview}
                  </div>
                  <div className={`absolute inset-0 bg-black/50 backdrop-blur-[1px] flex items-center justify-center transition-opacity duration-200 ${hoveredId === t.id ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}>
                    <Link to="/builder">
                      <Button size="sm" className="gradient-primary text-primary-foreground shadow-primary text-xs gap-1.5">
                        <Eye className="h-3.5 w-3.5" /> Use Template
                      </Button>
                    </Link>
                  </div>
                </div>
                <div className="p-2.5 sm:p-3">
                  <div className="flex items-center gap-1.5 mb-0.5">
                    <div className={`h-2 w-2 rounded-full bg-gradient-to-br ${t.color} flex-shrink-0`} />
                    <h3 className="font-semibold text-xs sm:text-sm text-card-foreground truncate">{t.name}</h3>
                  </div>
                  <p className="text-[10px] sm:text-xs text-muted-foreground leading-relaxed line-clamp-1">{t.desc}</p>
                </div>
              </div>
            </motion.div>
          ))}
        </div>

        <div className="text-center mt-8 sm:mt-10 md:mt-12">
          <Link to="/builder">
            <Button size="lg" className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity text-sm sm:text-base px-6 sm:px-8">
              Start Building Your Resume <ArrowRight className="ml-2 h-4 w-4 sm:h-5 sm:w-5" />
            </Button>
          </Link>
        </div>
      </div>
    </section>
  );
}
