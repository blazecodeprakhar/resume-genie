import { motion } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users, ShieldCheck, FileText } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';

const fadeUp = {
  hidden: { opacity: 0, y: 20 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { delay: i * 0.1, duration: 0.5, ease: [0.22, 1, 0.36, 1] },
  }),
};

const stats = [
  { value: '12', label: 'Pro Templates', icon: Zap },
  { value: '10K+', label: 'Resumes Built', icon: Users },
  { value: '95%', label: 'ATS Pass Rate', icon: ShieldCheck },
];

const steps = [
  { icon: FileText, step: '1', text: 'Fill your details' },
  { icon: Sparkles, step: '2', text: 'AI writes it' },
  { icon: ArrowRight, step: '3', text: 'Download PDF' },
];

export default function HeroSection() {
  return (
    <section
      className="relative flex items-center justify-center overflow-hidden bg-background"
      style={{ minHeight: 'calc(100vh - 4rem)' }}
    >
      {/* Background glow - CSS only, constrained */}
      <div
        className="pointer-events-none absolute inset-0"
        aria-hidden="true"
      >
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 h-[60%] w-[80%] max-w-3xl rounded-full opacity-[0.10] dark:opacity-[0.16] blur-3xl"
          style={{ background: 'radial-gradient(ellipse, hsl(var(--primary)), transparent 70%)' }}
        />
        {/* Subtle grid */}
        <div
          className="absolute inset-0 opacity-[0.03] dark:opacity-[0.05]"
          style={{
            backgroundImage:
              'linear-gradient(hsl(var(--foreground)) 1px, transparent 1px), linear-gradient(90deg, hsl(var(--foreground)) 1px, transparent 1px)',
            backgroundSize: '48px 48px',
          }}
        />
      </div>

      {/* Content - single centered column */}
      <div className="relative z-10 w-full container mx-auto px-4 py-16 sm:py-20 flex flex-col items-center text-center">

        {/* Badge */}
        <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
          <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 border border-primary/20 px-4 py-1.5 text-xs font-semibold text-primary mb-6">
            <Sparkles className="h-3.5 w-3.5" />
            AI-Powered · 100% Free · No Sign-up
          </span>
        </motion.div>

        {/* Headline */}
        <motion.h1
          className="text-4xl sm:text-5xl md:text-6xl font-black tracking-tight text-foreground leading-[1.08] mb-5 max-w-3xl"
          initial="hidden" animate="visible" variants={fadeUp} custom={1}
        >
          Free AI{' '}
          <span className="bg-gradient-to-r from-primary to-blue-400 bg-clip-text text-transparent">
            Resume Builder
          </span>{' '}
          Online
        </motion.h1>

        {/* Subtitle */}
        <motion.p
          className="text-base sm:text-lg text-muted-foreground max-w-xl leading-relaxed mb-8"
          initial="hidden" animate="visible" variants={fadeUp} custom={2}
        >
          Build a professional, ATS-optimized resume with AI in minutes. No sign up required, download instant PDF free. Fill a simple form → AI writes it → Pick a template → Download.
        </motion.p>

        {/* How it works - inline steps */}
        <motion.div
          className="flex items-center justify-center gap-2 sm:gap-4 mb-10 flex-wrap"
          initial="hidden" animate="visible" variants={fadeUp} custom={2.5}
        >
          {steps.map((s, i) => (
            <div key={s.text} className="flex items-center gap-2">
              <div className="flex items-center gap-2 rounded-xl bg-card border border-border px-3 py-2 text-sm font-medium text-foreground shadow-card">
                <span className="flex h-5 w-5 items-center justify-center rounded-full bg-primary text-primary-foreground text-[10px] font-bold shrink-0">
                  {s.step}
                </span>
                {s.text}
              </div>
              {i < steps.length - 1 && (
                <ArrowRight className="h-4 w-4 text-muted-foreground/40 hidden sm:block" />
              )}
            </div>
          ))}
        </motion.div>

        {/* CTA Buttons */}
        <motion.div
          className="flex flex-col sm:flex-row gap-3 items-center justify-center mb-5 w-full sm:w-auto"
          initial="hidden" animate="visible" variants={fadeUp} custom={3}
        >
          <Link to="/builder" className="w-full sm:w-auto">
            <div className="relative group">
              <span className="absolute inset-0 rounded-2xl bg-primary opacity-20 blur-lg group-hover:opacity-35 transition-opacity duration-300 pointer-events-none" />
              <Button
                size="lg"
                className="relative w-full sm:w-auto gradient-primary text-primary-foreground text-base sm:text-lg px-8 sm:px-10 h-14 sm:h-16 rounded-2xl font-bold shadow-primary hover:opacity-90 transition-opacity"
              >
                Build My Resume - Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </div>
          </Link>
          <a href="#templates" className="w-full sm:w-auto">
            <Button
              size="lg"
              variant="outline"
              className="w-full sm:w-auto text-base px-8 h-14 sm:h-16 rounded-2xl border-2 hover:bg-accent hover:border-primary/30 transition-all font-semibold"
            >
              See Templates
            </Button>
          </a>
        </motion.div>

        {/* Trust note */}
        <motion.p
          className="text-xs text-muted-foreground/60 mb-12"
          initial="hidden" animate="visible" variants={fadeUp} custom={3.5}
        >
          No account needed · Instant PDF · Works on all devices
        </motion.p>

        {/* Stats row */}
        <motion.div
          className="flex flex-wrap items-center justify-center gap-3 sm:gap-4"
          initial="hidden" animate="visible" variants={fadeUp} custom={4}
        >
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="flex items-center gap-3 rounded-2xl border border-border bg-card px-5 py-3 shadow-card"
            >
              <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-primary/10 shrink-0">
                <stat.icon className="h-4 w-4 text-primary" />
              </div>
              <div className="text-left">
                <div className="text-lg font-black text-primary leading-none">{stat.value}</div>
                <div className="text-[11px] text-muted-foreground font-medium">{stat.label}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
