import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Sparkles, ArrowRight, BookOpen, Clock, X, Search, Check, TrendingUp, HelpCircle, Mail, Briefcase, Award } from 'lucide-react';
import { Link } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { companyArticles } from '@/data/companyArticles';
import { trackEvent } from '@/utils/analytics';

// Tab definitions
const categories = [
  { id: 'faang', label: '🔷 FAANG / Big Tech' },
  { id: 'india-it', label: '🇮🇳 India IT Giants' },
  { id: 'consulting', label: '📊 Consulting' },
  { id: 'finance', label: '💰 Finance & Banking' },
  { id: 'startups', label: '🚀 Startups' },
  { id: 'trends', label: '📈 2026 Trends' },
  { id: 'compare', label: '⚖️ Compare All' }
];

export default function CompanyResumeGuide() {
  const [activeTab, setActiveTab] = useState('faang');
  const [selectedCompanyId, setSelectedCompanyId] = useState<string | null>(null);
  const [searchQuery, setSearchQuery] = useState('');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // SEO Update
  useEffect(() => {
    document.title = "Company-Specific Resume Guides 2026 | FreeResumeKit";
    
    // Description Meta
    let metaDesc = document.querySelector('meta[name="description"]');
    if (!metaDesc) {
      metaDesc = document.createElement('meta');
      metaDesc.setAttribute('name', 'description');
      document.head.appendChild(metaDesc);
    }
    metaDesc.setAttribute('content', "Exact resume formats preferred by Google, Amazon, TCS, Infosys, McKinsey, Goldman Sachs and 20+ top companies. Company-by-company resume guide for 2025-2026.");

    // Canonical
    let canonical = document.querySelector('link[rel="canonical"]');
    if (!canonical) {
      canonical = document.createElement('link');
      canonical.setAttribute('rel', 'canonical');
      document.head.appendChild(canonical);
    }
    canonical.setAttribute('href', 'https://freeresumekit.com/blog/company-resume-guide');

    // JSON-LD Schema
    let schemaScript = document.getElementById('company-seo-schema');
    if (schemaScript) {
      schemaScript.remove();
    }
    schemaScript = document.createElement('script');
    schemaScript.setAttribute('id', 'company-seo-schema');
    schemaScript.setAttribute('type', 'application/ld+json');
    schemaScript.innerHTML = JSON.stringify({
      "@context": "https://schema.org",
      "@type": "WebPage",
      "name": "Company-Specific Resume Guides 2026 | FreeResumeKit",
      "description": "Exact resume formats preferred by Google, Amazon, TCS, Infosys, McKinsey, Goldman Sachs and 20+ top companies.",
      "url": "https://freeresumekit.com/blog/company-resume-guide"
    });
    document.head.appendChild(schemaScript);
  }, []);

  const handleOpenModal = (id: string) => {
    setSelectedCompanyId(id);
    trackEvent('CompanyGuide', 'Open Guide', id);
    document.body.style.overflow = 'hidden';
  };

  const handleCloseModal = () => {
    setSelectedCompanyId(null);
    document.body.style.overflow = '';
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackEvent('Newsletter', 'SubscribeCompanyGuides', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  const selectedArticle = selectedCompanyId ? companyArticles[selectedCompanyId] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Banner */}
      <section className="relative overflow-hidden py-24 px-4 bg-gradient-to-br from-slate-950 via-slate-900 to-indigo-950 text-white text-center border-b border-border">
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] -z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[450px] h-[450px] rounded-full bg-primary/20 blur-[100px] -z-10" />
        
        <div className="container mx-auto max-w-4xl relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/30 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Research-backed · Updated June 2026
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-6xl font-extrabold tracking-tight mb-6 leading-tight font-serif text-white"
          >
            What Resume Does <span className="text-primary gradient-text italic">Your Dream Company</span> Want?
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-slate-350 text-lg md:text-xl max-w-2xl mx-auto mb-12 leading-relaxed"
          >
            Company-by-company breakdown: exact formats, keywords, ATS systems, salary benchmarks, and insider tips for 20+ top employers — from Google to TCS to McKinsey.
          </motion.p>

          {/* Stats Bar */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="grid grid-cols-2 md:grid-cols-4 gap-6 max-w-3xl mx-auto border-t border-white/10 pt-8 mt-4"
          >
            <div>
              <div className="text-3xl font-extrabold text-white">20+</div>
              <div className="text-xs text-slate-400 mt-1">Companies Covered</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">2026</div>
              <div className="text-xs text-slate-400 mt-1">Fully Updated</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">100%</div>
              <div className="text-xs text-slate-400 mt-1">Free Guides</div>
            </div>
            <div>
              <div className="text-3xl font-extrabold text-white">AI-Ready</div>
              <div className="text-xs text-slate-400 mt-1">Latest Formats</div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Sticky Category Switcher */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/95 backdrop-blur-md py-4 shadow-sm">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
            {categories.map((cat) => (
              <button
                key={cat.id}
                onClick={() => {
                  setActiveTab(cat.id);
                  trackEvent('CompanyGuide', 'Switch Tab', cat.label);
                }}
                className={`px-4 py-2 rounded-xl text-xs md:text-sm font-semibold whitespace-nowrap transition-all border ${
                  activeTab === cat.id
                    ? 'bg-primary border-primary text-primary-foreground shadow-primary'
                    : 'bg-card border-border text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {cat.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Main Grid Content */}
      <main className="container mx-auto px-4 max-w-6xl py-12 flex-grow">
        
        {/* FAANG / BIG TECH SECTION */}
        {activeTab === 'faang' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">FAANG &amp; Big Tech</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">Google, Amazon, Meta, Microsoft, Apple — Recruiter Secrets</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                These companies receive millions of applications yearly. Here is exactly what their recruiters search for, and what triggers an instant rejection.
              </p>
            </div>

            {/* Google Featured Card */}
            <div 
              onClick={() => handleOpenModal('google')}
              className="group grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 overflow-hidden mb-8 cursor-pointer"
            >
              <div className="md:col-span-5 bg-gradient-to-br from-blue-700 to-indigo-900 p-8 flex flex-col justify-between min-h-[260px] md:min-h-full relative overflow-hidden text-white">
                <div className="absolute inset-0 bg-grid-white/[0.02] -z-10" />
                <span className="inline-block bg-white/20 text-white text-xs font-bold px-3 py-1 rounded-full w-fit">
                  Deep Dive · Most Popular
                </span>
                
                <h3 className="font-extrabold text-2xl md:text-3xl tracking-tight leading-tight my-4">
                  The Google Resume: What a Former Google Recruiter Actually Looks For
                </h3>
                
                <div className="flex gap-2 flex-wrap">
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10">Data-driven bullets</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10">XYZ Formula</span>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded-full bg-white/10">1 page preferred</span>
                </div>
              </div>
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <h4 className="text-xs font-bold uppercase text-primary mb-2">What's inside this guide</h4>
                  <ul className="space-y-2.5 my-4">
                    {[
                      "The exact XYZ bullet formula Google's careers team recommends",
                      "Why Google wants hard metrics in every single bullet point",
                      "Which sections Google recruiters scan first (and in what order)",
                      "The 5 most common reasons Google rejects strong candidates",
                      "Keywords Google's ATS looks for by role (SWE, PM, Marketing)",
                      "Salary ranges for India and global Google roles in 2026"
                    ].map((li, i) => (
                      <li key={i} className="flex gap-2 items-start text-sm text-muted-foreground leading-relaxed">
                        <Check className="h-4.5 w-4.5 text-primary shrink-0 mt-0.5" />
                        <span>{li}</span>
                      </li>
                    ))}
                  </ul>
                </div>
                <div className="flex items-center justify-between border-t border-border pt-4 mt-4 text-xs text-muted-foreground">
                  <span>🔥 200K+ monthly searches</span>
                  <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Full Guide
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </span>
                </div>
              </div>
            </div>

            {/* Grid of Other Big Tech */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'amazon', logo: 'A', bg: 'bg-amber-500', name: 'Amazon', roles: 'SDE, Product, Ops, Finance', desc: 'Amazon hires for its 16 Leadership Principles — your resume must reflect these principles through specific STAR achievements.', tags: ['STAR Method', '16 LP keywords'] },
                { id: 'microsoft', logo: 'M', bg: 'bg-blue-600', name: 'Microsoft', roles: 'SWE, PM, Azure, Cloud, Sales', desc: 'Microsoft values growth mindset and collaboration. Recruiters look for evidence of learning, mentoring, and scale.', tags: ['Growth mindset', 'Azure keywords'] },
                { id: 'meta', logo: 'M', bg: 'bg-indigo-600', name: 'Meta', roles: 'Engineering, Data, Product, AI/ML', desc: 'Meta wants builders who move fast. Show products shipped, users impacted, and system loads built at scale.', tags: ['Scale & impact', 'AI/ML priority'] },
                { id: 'apple', logo: '🍎', bg: 'bg-zinc-800', name: 'Apple', roles: 'Hardware, SW, Design, Operations', desc: 'Apple values obsessive craft precision, attention to detail, and a track record of passion for Apple products.', tags: ['Craft & precision', 'App Store links'] },
                { id: 'netflix', logo: 'N', bg: 'bg-red-600', name: 'Netflix', roles: 'Engineering, Data, Content, Product', desc: 'Netflix operates via the Keeper Test. Only exceptional results belong on your resume. Cut average bullets.', tags: ['Highest paying', 'Autonomy'] },
                { id: 'nvidia', logo: 'N', bg: 'bg-green-600', name: 'NVIDIA', roles: 'AI/ML, GPU Engineering, Research', desc: 'The hottest employer of 2026. CUDA programming, GPU architecture, parallel computing, and ML models serve as filters.', tags: ['CUDA / GPU', 'AI infrastructure'] }
              ].map((co) => (
                <div
                  key={co.id}
                  onClick={() => handleOpenModal(co.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-4">
                      <div className={`h-11 w-11 rounded-xl flex items-center justify-center font-bold text-white ${co.bg}`}>
                        {co.logo}
                      </div>
                      <div>
                        <h3 className="font-bold text-base text-foreground">{co.name}</h3>
                        <p className="text-xs text-muted-foreground">{co.roles}</p>
                      </div>
                    </div>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                      {co.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {co.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                    <span>🔥 Recruiter-backed</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Guide
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* INDIA IT GIANTS SECTION */}
        {activeTab === 'india-it' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">India IT Giants</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">TCS, Infosys, Wipro, HCL, Cognizant, Accenture — Fresher Guide</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                These 6 companies hire over 200,000 freshers annually. Here are the eligibility thresholds, resume rules, and salary paths that work in 2026.
              </p>
            </div>

            {/* Quick Eligibility Matrix */}
            <div className="border border-border rounded-3xl bg-card shadow-card overflow-hidden mb-12">
              <div className="p-6 border-b border-border bg-muted/20">
                <h3 className="font-bold text-lg">Eligibility Matrix (At-a-Glance)</h3>
              </div>
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left">
                  <thead>
                    <tr className="bg-muted/40 border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-bold">
                      <th className="p-4">Company</th>
                      <th className="p-4">Min CGPA/Marks</th>
                      <th className="p-4">Backlogs Allowed</th>
                      <th className="p-4">Eligible Batches</th>
                      <th className="p-4">Fresher Salary Package</th>
                      <th className="p-4">Guide Link</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border">
                    {[
                      { name: 'TCS (Ninja / Digital)', cgpa: '60% throughout', backlogs: 'No active backlogs', batch: '2024, 2025, 2026', lpa: '₹3.6 – ₹7 LPA', id: 'tcs' },
                      { name: 'Infosys', cgpa: '65% / 6.5 CGPA', backlogs: 'No active backlogs', batch: '2024, 2025, 2026', lpa: '₹3.6 – ₹9.5 LPA', id: 'infosys' },
                      { name: 'Wipro Elite NLTH', cgpa: '60% throughout', backlogs: 'No active backlogs', batch: '2024, 2025, 2026', lpa: '₹3.5 – ₹6.5 LPA', id: 'wipro' },
                      { name: 'HCL Technologies', cgpa: '60% throughout', backlogs: '1 active backlog OK', batch: '2024, 2025, 2026', lpa: '₹3.5 – ₹6.0 LPA', id: 'hcl' },
                      { name: 'Cognizant GenC Next', cgpa: '60% throughout', backlogs: 'No active backlogs', batch: '2024, 2025, 2026', lpa: '₹4.0 – ₹4.5 LPA', id: 'cognizant' },
                      { name: 'Accenture ASE', cgpa: '60% throughout', backlogs: 'No active backlogs', batch: '2024, 2025, 2026', lpa: '₹4.5 – ₹6.5 LPA', id: 'accenture' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-accent/40 transition-colors">
                        <td className="p-4 font-semibold text-foreground">{row.name}</td>
                        <td className="p-4 text-muted-foreground">{row.cgpa}</td>
                        <td className="p-4 text-muted-foreground">{row.backlogs}</td>
                        <td className="p-4 text-muted-foreground">{row.batch}</td>
                        <td className="p-4 text-primary font-semibold">{row.lpa}</td>
                        <td className="p-4">
                          <button 
                            onClick={() => handleOpenModal(row.id)}
                            className="text-xs font-bold text-primary hover:underline"
                          >
                            Open Guide →
                          </button>
                        </td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>

            {/* IT Grid */}
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'tcs', bg: 'bg-indigo-900', title: 'TCS — Tata Consultancy Services', desc: 'TCS screens candidates via iAssure ATS. Academic CGPA belongs at the top, along with core projects. NQT scores dictate your entry salary tier.' },
                { id: 'infosys', bg: 'bg-blue-600', title: 'Infosys', desc: 'InfyTQ certification provides an automatic shortlisting boost. HackWithInfy is the fastest track to their specialist ₹9.5 LPA offer.' },
                { id: 'wipro', bg: 'bg-sky-700', title: 'Wipro Elite NLTH', desc: 'Phenom ATS scans your skills. Wipro values developer certifications (AWS, cloud, cybersecurity) and lists specific client geographies.' },
                { id: 'hcl', bg: 'bg-cyan-600', title: 'HCL Technologies', desc: 'The most project-lenient IT firm. HCL is an excellent option if your CGPA is below 7.0 but you have robust project codes.' },
                { id: 'cognizant', bg: 'bg-blue-700', title: 'Cognizant GenC Next', desc: 'GenC Next offers higher starter salaries. Cognizant heavily tests English communication and Workday-ATS formatting.' },
                { id: 'accenture', bg: 'bg-purple-800', title: 'Accenture India', desc: 'Accenture places massive weight on corporate communication and soft skills. Adaptability and team dynamics belong in your bullets.' }
              ].map((co) => (
                <div
                  key={co.id}
                  onClick={() => handleOpenModal(co.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">IT Giant</span>
                    <h3 className="font-extrabold text-lg text-foreground mt-2 mb-3">{co.title}</h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {co.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-6 text-[11px] text-muted-foreground">
                    <span>100% Fresher focus</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Guide
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* CONSULTING SECTION */}
        {activeTab === 'consulting' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Management Consulting</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">McKinsey, BCG, Deloitte, Big 4 — The Elite Resume Formula</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                Consulting firms reject 99% of applications. They prioritize intelligence, leadership, and structured thinking — all backed by quantified numbers.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { id: 'mckinsey', bg: 'bg-emerald-800', logo: 'M', title: 'McKinsey & Company', desc: 'The prestige filter is fierce. McKinsey reviews university names, GPA, and employer brands before reading bullets. One-page strictness is non-negotiable. Leadership and quantified impact belong in every row.', tags: ['Prestige school', 'Quant impact', '1 page strictly'] },
                { id: 'bcg', bg: 'bg-green-700', logo: 'B', title: 'BCG — Boston Consulting Group', desc: 'BCG looks for creative problem-solving and intellectual curiosity. Their Rocket Model bullet formula puts results first: Result + Action Verb + Tasks.', tags: ['Problem solving', 'Result-first', 'Curiosity'] },
                { id: 'deloitte', bg: 'bg-lime-700', logo: 'D', title: 'Deloitte Strategy & Operations', desc: 'Deloitte is the largest consulting firm and values industry domain expertise. CA, MBA, or cloud platform credentials carry high score boosts.', tags: ['Domain expertise', 'Enterprise ATS', '80K+ India staff'] },
                { id: 'pwc-ey-kpmg', bg: 'bg-orange-700', logo: 'B4', title: 'Big 4: PwC, EY, KPMG', desc: 'PwC is known for tax/digital, EY for strategy/entrepreneurship, and KPMG for audit/forensics. High CA or finance-specific credentials get prioritized.', tags: ['CA qualification', 'Service lines', 'Consulting track'] }
              ].map((co) => (
                <div
                  key={co.id}
                  onClick={() => handleOpenModal(co.id)}
                  className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <div className="flex items-center gap-3 mb-6">
                      <div className="h-12 w-12 rounded-xl bg-primary/10 flex items-center justify-center font-black text-primary text-lg">
                        {co.logo}
                      </div>
                      <div>
                        <h3 className="font-extrabold text-lg text-foreground">{co.title}</h3>
                        <span className="text-[10px] font-bold text-muted-foreground uppercase tracking-wider">Top-Tier Consulting</span>
                      </div>
                    </div>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {co.desc}
                    </p>
                    <div className="flex flex-wrap gap-1.5 mb-4">
                      {co.tags.map((t, idx) => (
                        <span key={idx} className="text-[10px] font-semibold px-2 py-0.5 rounded-full bg-accent border border-border text-muted-foreground">
                          {t}
                        </span>
                      ))}
                    </div>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>Acceptance Rate: &lt;1%</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Guide
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* FINANCE & BANKING SECTION */}
        {activeTab === 'finance' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Finance &amp; Banking</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">Goldman Sachs, JP Morgan, and Indian Banks</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                Finance recruiting expects prestige, strict numerical metrics, and deep quantitative skills. Here is how to format your banking resume.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {[
                { id: 'goldman', name: 'Goldman Sachs', roles: 'Analyst, Quant, Trader, Tech', desc: 'Vault #1 Investment Bank. Goldman requires top academic credentials, finance internships, and deal metrics in every bullet.', tag: 'Investment Banking' },
                { id: 'jpmorgan', name: 'JP Morgan Chase', roles: 'SWE, Analyst, Risk, Operations', desc: 'JPM has massive technology hubs in India. Their engineering divisions interview like Google, demanding scale metrics.', tag: 'Corporate Tech' },
                { id: 'sbi-hdfc', name: 'SBI, HDFC, ICICI, Axis', roles: 'PO, Clerical, Wealth, Manager', desc: 'Indian banking follows traditional formatting with DOB and photo inputs. Relationship managers must detail sales volumes.', tag: 'Indian Retail Banking' }
              ].map((co) => (
                <div
                  key={co.id}
                  onClick={() => handleOpenModal(co.id)}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{co.tag}</span>
                    <h3 className="font-extrabold text-lg text-foreground mt-2">{co.name}</h3>
                    <p className="text-xs text-muted-foreground mb-3">{co.roles}</p>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed mb-4">
                      {co.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-[11px] text-muted-foreground">
                    <span>🔥 High Salary Track</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Guide
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* STARTUPS SECTION */}
        {activeTab === 'startups' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Startups &amp; New-Age Companies</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">Swiggy, Zomato, Razorpay, CRED, Flipkart — Startup Blueprint</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                Startups prioritize builder proof, fast execution, and shipping products over academic credentials. Show what you built and shipped.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { id: 'swiggy-zomato', title: 'Swiggy & Zomato', desc: 'Food-tech giants hire for execution speed. Detail GMV values, delivery optimizations, CAC/LTV numbers, and conversion rates. Side projects and code repos get prioritized.', tag: 'Consumer Food-Tech' },
                { id: 'razorpay-cred', title: 'CRED, Razorpay, PhonePe', desc: 'Fintech startups look for payments infrastructure knowledge and deep ownership. CRED is notoriously selective — rewrite bullets to show individual decisions, not group participation.', tag: 'Fintech Unicorns' },
                { id: 'flipkart', title: 'Flipkart (Walmart)', desc: 'Flipkart operates as a hybrid startup-corporate. Tech roles follow strict Amazon/Google systems design formats. Business roles focus on e-commerce logistics.', tag: 'E-Commerce Giant' },
                { id: 'mnc-general', title: 'MNCs in India: IBM, SAP, Salesforce', desc: 'Global MNCs follow standardized Workday/Taleo ATS screens. Platform certifications (Salesforce Admin, SAP HANA, Oracle Cloud) guarantee shortlisting.', tag: 'Global MNC Hubs' }
              ].map((co) => (
                <div
                  key={co.id}
                  onClick={() => handleOpenModal(co.id)}
                  className="group flex flex-col justify-between rounded-3xl border border-border bg-card p-6 md:p-8 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer"
                >
                  <div>
                    <span className="text-[10px] font-bold text-primary uppercase tracking-widest">{co.tag}</span>
                    <h3 className="font-extrabold text-xl text-foreground mt-2 mb-3">{co.title}</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-6">
                      {co.desc}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 text-xs text-muted-foreground">
                    <span>⚡ Builder Mindset</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Guide
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* 2026 TRENDS SECTION */}
        {activeTab === 'trends' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Resume Trends 2026</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">Skills-First Hiring &amp; AI Screening</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                Based on LinkedIn's 2026 Skills on the Rise Report and global hiring surveys. Here is how recruitment has changed this year.
              </p>
            </div>

            <div className="grid sm:grid-cols-2 gap-6">
              {[
                { id: 'ai-skills-trend', title: '🤖 AI Skills Are Baseline in 2026', excerpt: "LinkedIn's report shows that listing generic 'AI' is meaningless. Employers check for specific tools: ChatGPT prompt engineering, LangChain, PyTorch, model serving, and vector DBs." },
                { id: 'skills-first', title: '📊 41% of Employers Moving Away from Credentials', excerpt: "Willo Hiring Report 2026 shows that 41% of companies prioritize portfolios, skills assessments, and GitHub contributions over traditional degrees." },
                { id: 'ai-resume-screening', title: '🔍 AI Reviews Your Application First', excerpt: "Over 60% of recruiters use AI to source 'hidden gems.' Mass-applying with identical resumes triggers spam filters — customization is mandatory." },
                { id: 'personal-branding', title: '🏷️ Personal Branding Beats CV Credentials', excerpt: "Resumes listing verified LinkedIn profiles and portfolio links yield 71% higher call-back rates. Your online footprint is parsed by recruiters." }
              ].map((trend) => (
                <div
                  key={trend.id}
                  onClick={() => handleOpenModal(trend.id)}
                  className="group rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-pointer flex flex-col justify-between"
                >
                  <div>
                    <h3 className="font-bold text-lg text-foreground group-hover:text-primary transition-colors mb-3">
                      {trend.title}
                    </h3>
                    <p className="text-xs md:text-sm text-muted-foreground leading-relaxed">
                      {trend.excerpt}
                    </p>
                  </div>
                  <div className="flex items-center justify-between border-t border-border pt-4 mt-6 text-[11px] text-muted-foreground">
                    <span>📈 2026 Market Trend</span>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read Trend Analysis
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>
        )}

        {/* COMPARISON TABLE SECTION */}
        {activeTab === 'compare' && (
          <div>
            <div className="mb-10 text-center md:text-left">
              <span className="text-xs font-bold text-muted-foreground uppercase tracking-widest">Master Comparison</span>
              <h2 className="text-2xl md:text-3xl font-black mt-2">What Every Major Company Wants — At a Glance</h2>
              <p className="text-muted-foreground mt-2 max-w-2xl text-sm md:text-base">
                The fastest reference guide: format, length, must-have skills, and what triggers an instant rejection.
              </p>
            </div>

            <div className="border border-border rounded-3xl bg-card shadow-card overflow-hidden">
              <div className="overflow-x-auto">
                <table className="w-full border-collapse text-sm text-left">
                  <thead>
                    <tr className="bg-muted border-b border-border text-xs uppercase tracking-wider text-muted-foreground font-bold">
                      <th className="p-4 min-w-[150px]">Company</th>
                      <th className="p-4 min-w-[120px]">Preferred Length</th>
                      <th className="p-4 min-w-[200px]">Must-Have Content</th>
                      <th className="p-4 min-w-[200px]">Instant Rejection Trigger</th>
                      <th className="p-4 min-w-[250px]">Secret Insider Tip</th>
                    </tr>
                  </thead>
                  <tbody className="divide-y divide-border text-xs md:text-sm">
                    {[
                      { co: 'Google', len: '1 page (strict)', must: 'XYZ formula bullets, data everywhere', reject: 'Vague bullets, no quantitative metrics', tip: 'Google resume guide: "Accomplished [X] as measured by [Y] doing [Z]"' },
                      { co: 'Amazon', len: '1–2 pages', must: 'STAR bullets, Leadership Principle keywords', reject: 'Duties listed without results', tip: 'Include words from the 16 LPs: "customer obsession", "bias for action", "ownership"' },
                      { co: 'Microsoft', len: '1–2 pages', must: 'Growth mindset signals, Azure/cloud skills', reject: 'Tables, graphics, text boxes (break ATS)', tip: 'Show learning — certifications, courses, conferences attended' },
                      { co: 'Meta', len: '1 page strictly', must: 'Scale numbers (users, load, revenue)', reject: 'Long resumes, slow-paced language', tip: 'Show what you built that real people actually used' },
                      { co: 'TCS', len: '1 page', must: 'CGPA at top, Java/Python, projects', reject: 'Active backlogs, below 60% eligibility', tip: 'Score high on NQT Programming section for Digital/Prime tier' },
                      { co: 'Infosys', len: '1 page', must: 'InfyTQ certification, 6.5+ CGPA', reject: 'CGPA below 6.5', tip: 'HackWithInfy participation bumps you to ₹9.5 LPA track automatically' },
                      { co: 'Wipro', len: '1 page', must: 'Domain certifications (AWS, CISSP)', reject: 'Creative template designs (Phenom ATS fails)', tip: 'List client geography experience (US/UK) for better project allocation' },
                      { co: 'McKinsey', len: '1 page strictly', must: 'Prestige school, GPA, leadership metrics', reject: 'Irrelevant experience, 2+ pages', tip: 'First bullet of current role must show impact in the first 10 words' },
                      { co: 'Deloitte', len: '1–2 pages', must: 'Domain expertise, certifications', reject: 'Generic consulting buzzwords', tip: 'Mention specific Deloitte practices: Strategy, Risk Advisory, Tech' },
                      { co: 'Goldman Sachs', len: '1 page', must: 'GPA, deal/portfolio metrics, quant skills', reject: 'No financial metrics in bullets', tip: 'List every finance-related achievement with $ or % — even academic' },
                      { co: 'Swiggy / Zomato', len: '1–2 pages', must: 'Consumer metrics, execution at scale', reject: 'Corporate-heavy, slow language', tip: 'Show side projects or products you built on your own time' },
                      { co: 'CRED / Razorpay', len: '1 page', must: 'Ownership, fintech/payments knowledge', reject: 'IIT/IIM credentials without actual projects', tip: 'Explain what specific product decision you owned — not what team you were on' }
                    ].map((row, idx) => (
                      <tr key={idx} className="hover:bg-accent/40 transition-colors">
                        <td className="p-4 font-bold text-foreground">{row.co}</td>
                        <td className="p-4 text-muted-foreground">{row.len}</td>
                        <td className="p-4 text-muted-foreground">{row.must}</td>
                        <td className="p-4 text-red-500 font-semibold">{row.reject}</td>
                        <td className="p-4 text-muted-foreground italic">{row.tip}</td>
                      </tr>
                    ))}
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        )}

      </main>

      {/* Newsletter Block */}
      <section className="py-20 border-t border-border bg-muted/20 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] -z-10" />
        
        <div className="container mx-auto px-4 max-w-xl text-center relative z-10">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-black tracking-tight mb-3">Get Company-Specific Resume Tips Weekly</h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-sm mx-auto">
            New company guides and ATS hacks sent straight to your inbox. Join 15,000+ job seekers.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-sm"
            >
              🎉 Thank you for subscribing! Check your email next Tuesday!
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="bg-card border-border py-5 rounded-xl flex-grow shadow-card"
              />
              <Button type="submit" className="gradient-primary text-primary-foreground py-5 rounded-xl shadow-primary">
                Subscribe Free
              </Button>
            </form>
          )}
        </div>
      </section>

      <Footer />

      {/* Detail Overlay Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseModal}
              className="fixed inset-0 bg-background/80 backdrop-blur-md"
            />

            {/* Modal Box */}
            <motion.div
              initial={{ opacity: 0, scale: 0.95, y: 20 }}
              animate={{ opacity: 1, scale: 1, y: 0 }}
              exit={{ opacity: 0, scale: 0.95, y: 20 }}
              transition={{ type: 'spring', damping: 25, stiffness: 350 }}
              className="relative bg-card border border-border w-full max-w-3xl rounded-3xl shadow-elevated z-10 overflow-hidden max-h-[90vh] flex flex-col"
            >
              {/* Header */}
              <div 
                className="relative p-6 md:p-8 text-white border-b border-border"
                style={{ background: selectedArticle.bg }}
              >
                <button
                  onClick={handleCloseModal}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-white/20 bg-white/10 hover:bg-white/20 text-white transition-all duration-200"
                  aria-label="Close guide"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <span className="inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-white/20 mb-4">
                  {selectedArticle.tag}
                </span>

                <h2 className="text-2xl md:text-3xl font-serif font-black tracking-tight text-white leading-tight">
                  {selectedArticle.title}
                </h2>
                
                <p className="text-xs opacity-90 mt-4 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-white" />
                  <span>{selectedArticle.meta}</span>
                </p>
              </div>

              {/* Scrollable Body */}
              <div 
                className="p-6 md:p-8 overflow-y-auto flex-grow prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-li:text-muted-foreground prose-li:my-1 text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: selectedArticle.body }}
              />

              {/* Bottom Actions */}
              <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-sm text-foreground">Build your company-optimized resume</h4>
                  <p className="text-xs text-muted-foreground">Select a premium template and build with AI now.</p>
                </div>
                <Link to="/builder" className="w-full sm:w-auto" onClick={handleCloseModal}>
                  <Button className="w-full sm:w-auto gradient-primary text-primary-foreground shadow-primary font-bold">
                    Build My Resume Free
                    <ArrowRight className="h-4 w-4 ml-1.5" />
                  </Button>
                </Link>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
