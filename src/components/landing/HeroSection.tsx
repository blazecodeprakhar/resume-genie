import { motion, useMotionValue, useTransform, useSpring } from 'framer-motion';
import { ArrowRight, Sparkles, Zap, Users, ShieldCheck } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Button } from '@/components/ui/button';
import { useRef, useEffect, useState, lazy, Suspense } from 'react';

const Hero3DScene = lazy(() => import('./Hero3DScene'));

const fadeUp = {
  hidden: { opacity: 0, y: 30 },
  visible: (i: number) => ({
    opacity: 1, y: 0, transition: { delay: i * 0.12, duration: 0.6 },
  }),
};


const stats = [
  { value: '12', label: 'Pro Templates', icon: Zap },
  { value: '10K+', label: 'Resumes Built', icon: Users },
  { value: '95%', label: 'ATS Pass Rate', icon: ShieldCheck },
];

function MouseGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current?.parentElement;
    if (!el) return;
    const handler = (e: MouseEvent) => {
      const rect = el.getBoundingClientRect();
      setPos({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    };
    el.addEventListener('mousemove', handler);
    return () => el.removeEventListener('mousemove', handler);
  }, []);

  return (
    <div
      ref={ref}
      className="pointer-events-none absolute inset-0 z-0 opacity-30 transition-opacity"
      style={{
        background: `radial-gradient(600px circle at ${pos.x}px ${pos.y}px, hsl(var(--primary) / 0.15), transparent 60%)`,
      }}
    />
  );
}

function TiltCard({ children, className }: { children: React.ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springConfig = { stiffness: 300, damping: 20 };
  const rotateX = useSpring(useTransform(y, [-80, 80], [8, -8]), springConfig);
  const rotateY = useSpring(useTransform(x, [-80, 80], [-8, 8]), springConfig);

  const handleMouse = (e: React.MouseEvent) => {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set(e.clientX - rect.left - rect.width / 2);
    y.set(e.clientY - rect.top - rect.height / 2);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouse}
      onMouseLeave={() => { x.set(0); y.set(0); }}
      style={{ rotateX, rotateY, transformStyle: 'preserve-3d' }}
      className={className}
    >
      {children}
    </motion.div>
  );
}

export { TiltCard };

export default function HeroSection() {
  return (
    <section className="relative overflow-hidden min-h-[90vh] flex items-center">
      {/* Animated background orbs */}
      <div className="absolute inset-0 gradient-hero" />
      <motion.div
        className="absolute top-[-10%] right-[-5%] w-[500px] h-[500px] rounded-full opacity-20"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.4), transparent 70%)' }}
        animate={{ scale: [1, 1.15, 1], x: [0, 30, 0], y: [0, -20, 0] }}
        transition={{ duration: 8, repeat: Infinity, ease: 'easeInOut' }}
      />
      <motion.div
        className="absolute bottom-[-15%] left-[-10%] w-[600px] h-[600px] rounded-full opacity-15"
        style={{ background: 'radial-gradient(circle, hsl(var(--primary) / 0.3), transparent 70%)' }}
        animate={{ scale: [1, 1.1, 1], x: [0, -20, 0], y: [0, 25, 0] }}
        transition={{ duration: 10, repeat: Infinity, ease: 'easeInOut', delay: 2 }}
      />

      {/* Dot grid */}
      <div
        className="absolute inset-0 opacity-[0.04]"
        style={{
          backgroundImage: 'radial-gradient(circle at 1px 1px, hsl(var(--foreground)) 1px, transparent 0)',
          backgroundSize: '32px 32px',
        }}
      />

      {/* 3D Scene */}
      <Suspense fallback={null}>
        <Hero3DScene />
      </Suspense>

      {/* Mouse glow */}
      <MouseGlow />

      <div className="relative container mx-auto px-4 py-20 sm:py-28 md:py-32">
        <div className="max-w-4xl mx-auto text-center">
          {/* Badge */}
          <motion.div initial="hidden" animate="visible" variants={fadeUp} custom={0}>
            <span className="inline-flex items-center gap-2 rounded-full bg-primary/10 px-5 py-2.5 text-xs sm:text-sm font-semibold text-primary border border-primary/20 backdrop-blur-sm">
              <Sparkles className="h-4 w-4 animate-pulse" />
              AI-Powered Resume Builder
              <span className="ml-1 rounded-full bg-primary/20 px-2 py-0.5 text-[10px] font-bold uppercase tracking-wider">New</span>
            </span>
          </motion.div>

          {/* Heading */}
          <motion.h1
            className="mt-8 text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black tracking-tight text-foreground leading-[1.08]"
            initial="hidden" animate="visible" variants={fadeUp} custom={1}
          >
            Land Your Dream Job{' '}
            <br className="hidden sm:block" />
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-primary via-primary to-primary-dark bg-clip-text text-transparent">
                with AI Resumes
              </span>
              <motion.span
                className="absolute -bottom-2 left-0 right-0 h-1 rounded-full bg-gradient-to-r from-primary to-primary-dark"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ delay: 0.8, duration: 0.6, ease: 'easeOut' }}
                style={{ transformOrigin: 'left' }}
              />
            </span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="mt-7 text-lg sm:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed"
            initial="hidden" animate="visible" variants={fadeUp} custom={2}
          >
            Create ATS-optimized, professionally written resumes in minutes.
            Choose from 12 stunning templates and let AI do the heavy lifting.
          </motion.p>

          {/* CTAs */}
          <motion.div
            className="mt-10 flex flex-col sm:flex-row gap-4 justify-center items-center"
            initial="hidden" animate="visible" variants={fadeUp} custom={3}
          >
            <Link to="/builder">
              <Button
                size="lg"
                className="w-full sm:w-auto gradient-primary text-primary-foreground shadow-primary hover:shadow-elevated hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 text-base px-8 h-14 rounded-xl font-semibold"
              >
                Build My Resume - Free
                <ArrowRight className="ml-2 h-5 w-5" />
              </Button>
            </Link>
            <a href="#templates">
              <Button
                size="lg"
                variant="outline"
                className="w-full sm:w-auto text-base px-8 h-14 rounded-xl border-2 hover:bg-accent hover:scale-[1.02] active:scale-[0.98] transition-all duration-200 font-semibold"
              >
                Browse Templates
              </Button>
            </a>
          </motion.div>

          {/* Trust line */}
          <motion.p
            className="mt-5 text-xs text-muted-foreground/60"
            initial="hidden" animate="visible" variants={fadeUp} custom={3.5}
          >
            No credit card required · Free forever plan · 30-second setup
          </motion.p>

          {/* Stats */}
          <motion.div
            className="mt-14 flex flex-wrap justify-center gap-4 sm:gap-6"
            initial="hidden" animate="visible" variants={fadeUp} custom={4}
          >
            {stats.map((stat) => (
              <TiltCard key={stat.label} className="cursor-default">
                <div className="group rounded-2xl border border-border/60 bg-card/70 backdrop-blur-md px-6 py-5 shadow-card hover:shadow-elevated hover:border-primary/30 transition-all duration-300">
                  <div className="flex items-center gap-3">
                    <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                      <stat.icon className="h-5 w-5 text-primary" />
                    </div>
                    <div className="text-left">
                      <div className="text-2xl sm:text-3xl font-black text-primary leading-none">{stat.value}</div>
                      <div className="text-xs sm:text-sm text-muted-foreground font-medium mt-0.5">{stat.label}</div>
                    </div>
                  </div>
                </div>
              </TiltCard>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
