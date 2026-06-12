import { Sparkles, Shield, Layout, Download, ClipboardList, Cpu, FileDown, Star, Check, ArrowRight, BookOpen, Clock } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TemplateGallery from '@/components/landing/TemplateGallery';
import HeroSection from '@/components/landing/HeroSection';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/landing/ScrollReveal';
import ParallaxSection, { ParallaxDivider } from '@/components/landing/ParallaxSection';

const features = [
  { icon: Sparkles, title: 'AI-Powered Writing', desc: 'GPT transforms your input into professionally written, compelling resume content.' },
  { icon: Shield, title: 'ATS-Optimized', desc: 'Keyword-rich formatting ensures your resume passes Applicant Tracking Systems.' },
  { icon: Layout, title: '12 Premium Templates', desc: 'Modern, Classic, Minimal, Executive, Creative, Bold, Elegant, Tech, Corporate, Starter, Infographic & Academic.' },
  { icon: Download, title: 'Instant PDF', desc: 'Download your finished resume as a clean, print-ready PDF in one click.' },
];

const steps = [
  { icon: ClipboardList, title: 'Fill the Form', desc: 'Enter your details in our guided 5-step form.' },
  { icon: Cpu, title: 'AI Generates', desc: 'Our AI rewrites your content into polished resume language.' },
  { icon: FileDown, title: 'Download PDF', desc: 'Preview, customize the template, and download instantly.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Software Engineer', text: 'I landed 3 interviews within a week of using FreeResumeKit. The AI-written bullet points were spot-on!', rating: 5 },
  { name: 'Rahul Mehta', role: 'Marketing Manager', text: 'The ATS optimization is incredible. My resume finally gets past the filters. Can\'t believe it\'s free!', rating: 5 },
  { name: 'Ananya Desai', role: 'Data Analyst', text: 'Clean templates, smooth experience, and the AI summary is better than what I could write myself.', rating: 5 },
];

const plans = [
  {
    name: 'Free Forever',
    price: '₹0',
    period: 'forever',
    features: [
      'Unlimited Resumes',
      'All 12 Premium Templates',
      'Clean PDF (no watermark)',
      'ATS Score Analysis',
      'AI-Powered Writing',
      'Cover Letter Generator',
      'Priority Support'
    ],
    cta: 'Get Started for Free',
    highlighted: true
  },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

      {/* Template Gallery - right after hero */}
      <ScrollReveal>
        <TemplateGallery />
      </ScrollReveal>

      <ParallaxDivider />

      <ParallaxSection shapes speed={-0.12}>
        <section id="features" className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Everything you need to land the job</h2>
              <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">Powerful features that make resume writing effortless.</p>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5" staggerDelay={0.12}>
              {features.map((f) => (
                <StaggerItem key={f.title}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 h-full cursor-default">
                    <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                      <f.icon className="h-6 w-6 text-primary" />
                    </div>
                    <h3 className="text-lg font-semibold text-card-foreground">{f.title}</h3>
                    <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxDivider />

      <ParallaxSection shapes speed={-0.18}>
        <section id="how-it-works" className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">How it works</h2>
              <p className="mt-4 text-muted-foreground text-lg">Three simple steps to your perfect resume.</p>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-4xl mx-auto" staggerDelay={0.15}>
              {steps.map((s, i) => (
                <StaggerItem key={s.title}>
                  <div className="text-center">
                    <div className="mx-auto mb-5 flex h-16 w-16 items-center justify-center rounded-2xl gradient-primary shadow-primary">
                      <s.icon className="h-8 w-8 text-primary-foreground" />
                    </div>
                    <div className="text-xs font-bold text-primary mb-2">STEP {i + 1}</div>
                    <h3 className="text-xl font-semibold text-foreground">{s.title}</h3>
                    <p className="mt-2 text-muted-foreground text-sm">{s.desc}</p>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxSection speed={-0.1}>
        <section className="py-20 md:py-28">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16" scale>
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Loved by job seekers</h2>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
              {testimonials.map((t) => (
                <StaggerItem key={t.name}>
                  <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 cursor-default h-full">
                    <div className="flex gap-1 mb-4">
                      {Array.from({ length: t.rating }).map((_, j) => (
                        <Star key={j} className="h-4 w-4 fill-primary text-primary" />
                      ))}
                    </div>
                    <p className="text-sm text-muted-foreground mb-4">"{t.text}"</p>
                    <div>
                      <div className="font-semibold text-sm text-card-foreground">{t.name}</div>
                      <div className="text-xs text-muted-foreground">{t.role}</div>
                    </div>
                  </div>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxDivider />

      <ParallaxSection shapes speed={-0.15}>
        <section id="pricing" className="py-20 md:py-28 bg-muted/30">
          <div className="container mx-auto px-4">
            <ScrollReveal className="text-center mb-16">
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">100% Free Forever</h2>
              <p className="mt-4 text-muted-foreground text-lg">Access all professional features without spending a paisa.</p>
            </ScrollReveal>
            <div className="max-w-lg mx-auto">
              {plans.map((p) => (
                <ScrollReveal key={p.name} scale>
                  <div className={`rounded-3xl border-2 p-8 md:p-10 cursor-default relative ${
                    p.highlighted
                      ? 'border-primary bg-card shadow-elevated'
                      : 'border-border bg-card shadow-card'
                  }`}>
                    {p.highlighted && (
                      <div className="absolute -top-4 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-6 py-1.5 text-xs font-bold uppercase tracking-wider text-primary-foreground shadow-primary">
                        Best for Everyone
                      </div>
                    )}
                    <div className="text-center mb-8">
                      <h3 className="text-2xl font-bold text-card-foreground mb-2">{p.name}</h3>
                      <div className="flex items-baseline justify-center gap-1">
                        <span className="text-5xl font-extrabold text-foreground">{p.price}</span>
                        <span className="text-muted-foreground text-base tracking-tight">{p.period}</span>
                      </div>
                      <p className="mt-4 text-sm text-muted-foreground">No credit card required. No hidden costs.</p>
                    </div>

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-8">
                      {p.features.map(f => (
                        <div key={f} className="flex items-center gap-3 text-sm font-medium text-foreground/80">
                          <div className="flex h-5 w-5 items-center justify-center rounded-full bg-primary/10 text-primary">
                            <Check className="h-3.5 w-3.5" />
                          </div>
                          {f}
                        </div>
                      ))}
                    </div>

                    <Button
                      asChild
                      className="mt-10 w-full text-base font-bold h-12 gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity"
                    >
                      <Link to="/builder">{p.cta}</Link>
                    </Button>
                  </div>
                </ScrollReveal>
              ))}
            </div>
          </div>
        </section>
      </ParallaxSection>

      {/* Blog/Resources Section */}
      <section className="py-20 md:py-28 border-t border-border bg-muted/20">
        <div className="container mx-auto px-4 max-w-6xl">
          <ScrollReveal className="text-center mb-16">
            <div className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider mb-4">
              <Sparkles className="h-3.5 w-3.5" />
              Latest Career Resources
            </div>
            <h2 className="text-3xl md:text-4xl font-bold text-foreground">Featured Resume &amp; Career Guides</h2>
            <p className="mt-4 text-muted-foreground text-lg max-w-xl mx-auto">
              Master the job search with recruiter-approved tips, ATS guides, and remote work strategies.
            </p>
          </ScrollReveal>

          {/* New Company Guides Promo Banner */}
          <div className="max-w-5xl mx-auto mb-12">
            <Link to="/blog/company-resume-guide" className="group block relative overflow-hidden rounded-3xl border border-primary/20 bg-gradient-to-r from-indigo-950 via-slate-900 to-slate-950 p-6 md:p-8 hover:shadow-elevated hover:border-primary/40 transition-all duration-300">
              <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px]" />
              <div className="absolute top-1/2 right-1/4 -translate-y-1/2 w-[300px] h-[300px] rounded-full bg-primary/10 blur-[80px] -z-10" />
              <div className="relative z-10 flex flex-col md:flex-row md:items-center justify-between gap-6">
                <div className="text-left">
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-primary/20 border border-primary/30 text-xs font-bold text-primary uppercase tracking-wider mb-3">
                    <Sparkles className="h-3 w-3" /> New Guide
                  </span>
                  <h3 className="text-2xl md:text-3xl font-black text-white leading-tight mb-2 group-hover:text-primary transition-colors">
                    Company-Specific Resume Guides 2026
                  </h3>
                  <p className="text-slate-300 text-sm md:text-base max-w-2xl">
                    Exact resume formats, keywords, and recruiter preferences for Google, Amazon, Meta, TCS, Infosys, McKinsey, Goldman Sachs, and 20+ top employers.
                  </p>
                </div>
                <div className="shrink-0">
                  <Button className="gradient-primary text-white font-bold rounded-xl px-5 py-4 shadow-primary group-hover:opacity-90 transition-opacity">
                    Access Guides
                    <ArrowRight className="h-4 w-4 ml-1.5 group-hover:translate-x-1 transition-transform" />
                  </Button>
                </div>
              </div>
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto">
            {[
              {
                id: 'ats',
                title: 'What is ATS? How to Make Your Resume Pass Applicant Tracking Systems in 2026',
                excerpt: '75% of resumes are rejected before a human ever reads them. Learn exactly how ATS software works, which resume formats pass the filter, and the 7 rules to follow.',
                tag: 'ATS Guide',
                tagClass: 'bg-blue-500/10 text-blue-500 dark:text-blue-400',
                readTime: '8 min read'
              },
              {
                id: 'ai-resume-writing',
                title: 'AI Resume Builder: How to Use ChatGPT &amp; AI Tools to Write Your Resume in 2026',
                excerpt: 'AI is changing how resumes are written and scanned. Learn how to write a resume using ChatGPT, avoid the common AI traps, and get shortlisted.',
                tag: 'AI Guide',
                tagClass: 'bg-indigo-500/10 text-indigo-500 dark:text-indigo-400',
                readTime: '6 min read'
              },
              {
                id: 'fresher-india',
                title: 'Resume Format for Freshers in India 2026 — Free Format With Sample',
                excerpt: 'The exact resume format that works for Indian companies — from TCS and Infosys to high-growth startups — with a sample you can copy today.',
                tag: 'India Freshers',
                tagClass: 'bg-amber-500/10 text-amber-500 dark:text-amber-400',
                readTime: '7 min read'
              }
            ].map((article) => (
              <div
                key={article.id}
                className="group flex flex-col justify-between rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 overflow-hidden"
              >
                <div className="p-6">
                  <div className="flex items-center justify-between mb-4">
                    <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.tagClass}`}>
                      {article.tag}
                    </span>
                  </div>

                  <Link to={`/blog/${article.id}`}>
                    <h3 className="font-bold text-lg tracking-tight text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3 cursor-pointer">
                      {article.title}
                    </h3>
                  </Link>
                  
                  <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 leading-relaxed">
                    {article.excerpt}
                  </p>
                </div>

                <div className="px-6 pb-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                  <div className="flex items-center gap-1">
                    <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                    <span>{article.readTime}</span>
                  </div>
                  <Link to={`/blog/${article.id}`} className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                    Read Guide
                    <ArrowRight className="h-3.5 w-3.5 ml-1" />
                  </Link>
                </div>
              </div>
            ))}
          </div>

          <div className="text-center mt-12">
            <Button asChild variant="outline" className="border-primary text-primary hover:bg-primary/5 rounded-xl px-6 py-5 font-semibold">
              <Link to="/blog">
                View All Career Articles
                <ArrowRight className="h-4 w-4 ml-1.5" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      <ScrollReveal direction="none" scale>
        {/* FAQ Section - rich keyword content for Google */}
        <section id="faq" className="py-16 md:py-20 bg-muted/20 border-t border-border">
          <div className="container mx-auto px-4 max-w-3xl">
            <ScrollReveal className="text-center mb-10">
              <h2 className="text-2xl md:text-3xl font-bold text-foreground">Frequently Asked Questions</h2>
              <p className="mt-3 text-muted-foreground">Everything you need to know about FreeResumeKit</p>
            </ScrollReveal>
            <div className="space-y-4">
              {[
                {
                  q: 'Is FreeResumeKit really 100% free?',
                  a: 'Yes. FreeResumeKit is a completely free resume maker and builder. All 12 professional resume templates, ATS-friendly formats, AI-powered descriptions, and PDF downloads are 100% free with no hidden paywalls or watermark charges.',
                },
                {
                  q: 'Do I need to sign up or create an account?',
                  a: 'No sign-up or account is required. Open the free resume builder, fill in your details, and download your PDF — no email, no password, no registration.',
                },
                {
                  q: 'Are the resumes ATS-optimized?',
                  a: 'Yes. Every resume built with FreeResumeKit is ATS-optimized with keyword-rich content, clean formatting, and proper section structure that passes Applicant Tracking Systems with a 95%+ success rate.',
                },
                {
                  q: 'How many resume templates are available?',
                  a: 'FreeResumeKit offers 12 professional resume templates: Modern, Classic, Minimal, Executive, Creative, Bold, Elegant, Tech, Corporate, Starter, Infographic, and Academic — including specialized developer-friendly resume template programmer options.',
                },
                {
                  q: 'Can I download my resume as a PDF without watermark?',
                  a: 'Yes. Download your completed resume as a clean, print-ready PDF with no watermarks, no branding, and no hidden charges.',
                },
                {
                  q: 'How is FreeResumeKit different from Resume Worded, Resume Ground, Rezi, or Teal?',
                  a: 'Unlike Resume Worded, Resume Ground, Rezi, or Teal — which limit free features, impose page limits, or require premium subscriptions — FreeResumeKit gives you full access to every template and tool completely free.',
                },
              ].map((item) => (
                <details key={item.q} className="group rounded-2xl border border-border bg-card shadow-card overflow-hidden">
                  <summary className="flex items-center justify-between gap-4 px-6 py-4 cursor-pointer font-semibold text-foreground text-sm sm:text-base list-none select-none hover:bg-accent transition-colors">
                    {item.q}
                    <span className="text-primary text-xl font-light shrink-0 group-open:rotate-45 transition-transform duration-200">+</span>
                  </summary>
                  <p className="px-6 pb-5 pt-2 text-sm text-muted-foreground leading-relaxed">{item.a}</p>
                </details>
              ))}
            </div>
          </div>
        </section>

        {/* Hidden SEO keyword paragraph for search engines */}
        <div className="sr-only" aria-hidden="true">
          FreeResumeKit is a free AI resume builder online and resume maker free. Build ATS-optimized resumes free with artificial intelligence.
          Free resume maker no sign up required. Free resume builder 2026. AI resume generator free. Free CV builder online.
          Professional resume templates free download, resume template, resume format, and developer resume template programmer styles.
          Resume builder with PDF export free. ATS resume builder free. Compare with Resume Worded, Resume Ground, Rezi, and Teal.
          Best free resume builder no watermark. Free resume creator with AI writing assistant.
        </div>

        <Footer />
      </ScrollReveal>
    </div>
  );
}
