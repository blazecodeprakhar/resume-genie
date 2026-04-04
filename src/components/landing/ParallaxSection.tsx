import { useRef, type ReactNode } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

interface ParallaxSectionProps {
  children: ReactNode;
  className?: string;
  speed?: number; // negative = moves up slower (background feel), positive = moves down
  /** Decorative floating shapes */
  shapes?: boolean;
}

export default function ParallaxSection({
  children,
  className = '',
  speed = -0.15,
  shapes = false,
}: ParallaxSectionProps) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });

  const y = useTransform(scrollYProgress, [0, 1], [speed * -120, speed * 120]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {/* Parallax background layer */}
      <motion.div
        className="absolute inset-0 -inset-y-20 pointer-events-none"
        style={{ y }}
      >
        {shapes && (
          <>
            <div className="absolute top-[10%] left-[5%] w-64 h-64 rounded-full bg-primary/[0.03] blur-3xl" />
            <div className="absolute bottom-[15%] right-[8%] w-80 h-80 rounded-full bg-primary/[0.04] blur-3xl" />
            <div className="absolute top-[40%] right-[20%] w-40 h-40 rounded-full bg-accent/30 blur-2xl" />
            <div className="absolute bottom-[30%] left-[15%] w-48 h-48 rounded-full bg-secondary/40 blur-2xl" />
          </>
        )}
      </motion.div>
      <div className="relative z-10">{children}</div>
    </div>
  );
}

/** A thin decorative divider with parallax offset */
export function ParallaxDivider({ className = '' }: { className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({
    target: ref,
    offset: ['start end', 'end start'],
  });
  const x = useTransform(scrollYProgress, [0, 1], ['-5%', '5%']);

  return (
    <div ref={ref} className={`overflow-hidden ${className}`}>
      <motion.div
        className="h-px bg-gradient-to-r from-transparent via-border to-transparent"
        style={{ x }}
      />
    </div>
  );
}
