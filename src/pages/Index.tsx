import { Sparkles, Shield, Layout, Download, ClipboardList, Cpu, FileDown, Star, Check } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import TemplateGallery from '@/components/landing/TemplateGallery';
import HeroSection, { TiltCard } from '@/components/landing/HeroSection';
import ScrollReveal, { StaggerContainer, StaggerItem } from '@/components/landing/ScrollReveal';
import ParallaxSection, { ParallaxDivider } from '@/components/landing/ParallaxSection';

const features = [
  { icon: Sparkles, title: 'AI-Powered Writing', desc: 'GPT transforms your input into professionally written, compelling resume content.' },
  { icon: Shield, title: 'ATS-Optimized', desc: 'Keyword-rich formatting ensures your resume passes Applicant Tracking Systems.' },
  { icon: Layout, title: '12 Pro Templates', desc: 'Modern, Classic, Minimal, Executive, Creative, Bold, Elegant, Tech, Corporate, Starter, Infographic & Academic.' },
  { icon: Download, title: 'Instant PDF', desc: 'Download your finished resume as a clean, print-ready PDF in one click.' },
];

const steps = [
  { icon: ClipboardList, title: 'Fill the Form', desc: 'Enter your details in our guided 5-step form.' },
  { icon: Cpu, title: 'AI Generates', desc: 'Our AI rewrites your content into polished resume language.' },
  { icon: FileDown, title: 'Download PDF', desc: 'Preview, customize the template, and download instantly.' },
];

const testimonials = [
  { name: 'Priya Sharma', role: 'Software Engineer', text: 'I landed 3 interviews within a week of using ResumeAI. The AI-written bullet points were spot-on!', rating: 5 },
  { name: 'Rahul Mehta', role: 'Marketing Manager', text: 'The ATS optimization is incredible. My resume finally gets past the filters. Worth every rupee.', rating: 5 },
  { name: 'Ananya Desai', role: 'Data Analyst', text: 'Clean templates, smooth experience, and the AI summary is better than what I could write myself.', rating: 5 },
];

const plans = [
  { name: 'Free', price: '₹0', period: 'forever', features: ['1 Resume', '3 Templates', 'Watermarked PDF', 'Basic AI writing'], cta: 'Get Started Free', highlighted: false },
  { name: 'Pro', price: '₹299', period: '/month', features: ['Unlimited Resumes', 'All 12 Templates', 'Clean PDF (no watermark)', 'ATS Score Analysis', 'Priority AI generation'], cta: 'Go Pro', highlighted: true },
  { name: 'Annual', price: '₹1,999', period: '/year', features: ['Everything in Pro', 'Cover Letter Generator', '2 months free', 'Email support', 'Early access to features'], cta: 'Best Value', highlighted: false },
];

export default function LandingPage() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <HeroSection />

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
                  <TiltCard>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-card hover:shadow-elevated transition-all h-full cursor-default">
                      <div className="mb-4 flex h-12 w-12 items-center justify-center rounded-xl bg-primary/10">
                        <f.icon className="h-6 w-6 text-primary" />
                      </div>
                      <h3 className="text-lg font-semibold text-card-foreground">{f.title}</h3>
                      <p className="mt-2 text-sm text-muted-foreground">{f.desc}</p>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ParallaxSection>

      <ParallaxDivider />

      {/* Template Gallery */}
      <ScrollReveal>
        <TemplateGallery />
      </ScrollReveal>

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
                  <TiltCard>
                    <div className="rounded-2xl border border-border bg-card p-6 shadow-card cursor-default h-full">
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
                  </TiltCard>
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
              <h2 className="text-3xl md:text-4xl font-bold text-foreground">Simple, transparent pricing</h2>
              <p className="mt-4 text-muted-foreground text-lg">Start free. Upgrade when you need more.</p>
            </ScrollReveal>
            <StaggerContainer className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-5xl mx-auto" staggerDelay={0.12}>
              {plans.map((p) => (
                <StaggerItem key={p.name}>
                  <TiltCard>
                    <div className={`rounded-2xl border p-8 cursor-default h-full ${
                      p.highlighted
                        ? 'border-primary bg-card shadow-elevated relative'
                        : 'border-border bg-card shadow-card'
                    }`}>
                      {p.highlighted && (
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 rounded-full gradient-primary px-4 py-1 text-xs font-semibold text-primary-foreground">
                          Most Popular
                        </div>
                      )}
                      <h3 className="text-xl font-bold text-card-foreground">{p.name}</h3>
                      <div className="mt-4 flex items-baseline gap-1">
                        <span className="text-4xl font-extrabold text-foreground">{p.price}</span>
                        <span className="text-muted-foreground text-sm">{p.period}</span>
                      </div>
                      <ul className="mt-6 space-y-3">
                        {p.features.map(f => (
                          <li key={f} className="flex items-center gap-2 text-sm text-muted-foreground">
                            <Check className="h-4 w-4 text-primary flex-shrink-0" /> {f}
                          </li>
                        ))}
                      </ul>
                      <Button
                        className={`mt-8 w-full ${
                          p.highlighted
                            ? 'gradient-primary text-primary-foreground shadow-primary hover:opacity-90'
                            : ''
                        }`}
                        variant={p.highlighted ? 'default' : 'outline'}
                      >
                        {p.cta}
                      </Button>
                    </div>
                  </TiltCard>
                </StaggerItem>
              ))}
            </StaggerContainer>
          </div>
        </section>
      </ParallaxSection>

      <ScrollReveal direction="none" scale>
        <Footer />
      </ScrollReveal>
    </div>
  );
}
