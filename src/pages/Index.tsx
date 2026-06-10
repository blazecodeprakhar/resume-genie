import { Sparkles, Shield, Layout, Download, ClipboardList, Cpu, FileDown, Star, Check } from 'lucide-react';
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
                  a: 'Yes. FreeResumeKit is completely free forever — no credit card, no subscription, no watermarks. All 12 professional templates, AI-powered writing, and PDF download are included at zero cost.',
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
                  a: 'FreeResumeKit offers 12 professional resume templates: Modern, Classic, Minimal, Executive, Creative, Bold, Elegant, Tech, Corporate, Starter, Infographic, and Academic — all free.',
                },
                {
                  q: 'Can I download my resume as a PDF without watermark?',
                  a: 'Yes. Download your completed resume as a clean, print-ready PDF with no watermarks, no branding, and no hidden charges.',
                },
                {
                  q: 'How is FreeResumeKit different from Rezi, Teal, or Kickresume?',
                  a: 'Unlike Rezi, Teal, or Kickresume — which require sign-ups and limit free features — FreeResumeKit gives you full access to every feature completely free with no account needed.',
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
          FreeResumeKit is a free AI resume builder online. Build ATS-optimized resumes free with artificial intelligence.
          Free resume maker no sign up required. Free resume builder 2025. AI resume generator free. Free CV builder online.
          Professional resume templates free download. Resume builder with PDF export free. ATS resume builder free.
          Best free resume builder no watermark. Free resume creator with AI writing assistant.
          Alternative to Rezi, Teal, Kickresume, Resume Genius, Canva resume builder — completely free, no account needed.
        </div>

        <Footer />
      </ScrollReveal>
    </div>
  );
}
