import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, Sun, Moon, Download, Image, Music, Minimize2, ExternalLink, ChevronDown } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect, useRef } from 'react';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return true;
    const saved = localStorage.getItem('theme');
    return saved !== 'light';
  });

  useEffect(() => {
    if (dark) {
      document.documentElement.classList.add('dark');
      localStorage.setItem('theme', 'dark');
    } else {
      document.documentElement.classList.remove('dark');
      localStorage.setItem('theme', 'light');
    }
  }, [dark]);

  return { dark, toggle: () => setDark(d => !d) };
}

const tools = [
  { label: 'Downloader', href: 'https://freemediakit.com/', icon: Download },
  { label: 'Thumbnail', href: 'https://freemediakit.com/thumbnail-downloader', icon: Image },
  { label: 'Video to MP3', href: 'https://freemediakit.com/video-to-mp3', icon: Music },
  { label: 'Compressor', href: 'https://freemediakit.com/image-compressor', icon: Minimize2 },
];

function ToolsDropdown() {
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handler = (e: MouseEvent) => {
      if (ref.current && !ref.current.contains(e.target as Node)) setOpen(false);
    };
    document.addEventListener('mousedown', handler);
    return () => document.removeEventListener('mousedown', handler);
  }, []);

  return (
    <div ref={ref} className="relative">
      <button
        onClick={() => setOpen(o => !o)}
        className="flex items-center gap-1.5 text-sm text-muted-foreground hover:text-foreground transition-colors px-2 py-1.5 rounded-lg hover:bg-accent"
      >
        <ExternalLink className="h-3.5 w-3.5" />
        Free Tools
        <ChevronDown className={`h-3.5 w-3.5 transition-transform duration-200 ${open ? 'rotate-180' : ''}`} />
      </button>
      {open && (
        <div className="absolute top-full right-0 mt-2 w-52 rounded-xl border border-border bg-card shadow-elevated z-50 overflow-hidden">
          <div className="p-1.5">
            {tools.map(tool => (
              <a
                key={tool.label}
                href={tool.href}
                target="_blank"
                rel="noopener noreferrer"
                onClick={() => setOpen(false)}
                className="flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
              >
                <div className="flex h-7 w-7 items-center justify-center rounded-lg bg-primary/10">
                  <tool.icon className="h-3.5 w-3.5 text-primary" />
                </div>
                {tool.label}
                <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
              </a>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const [mobileToolsOpen, setMobileToolsOpen] = useState(false);
  const isHome = location.pathname === '/';
  const { dark, toggle } = useTheme();

  const navLinks = isHome ? [
    { href: '#features', label: 'Features' },
    { href: '#templates', label: 'Templates' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#pricing', label: 'Free Forever' },
  ] : [];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl shrink-0">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-foreground">FreeResume<span className="text-primary">Kit</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-5">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}

          {/* Divider */}
          <div className="h-5 w-px bg-border" />

          {/* Tools dropdown */}
          <ToolsDropdown />

          {/* Divider */}
          <div className="h-5 w-px bg-border" />

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
          </button>

          <Link to="/builder">
            <Button size="sm" className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity">
              Create Resume
            </Button>
          </Link>
        </div>

        {/* Mobile hamburger */}
        <Sheet open={open} onOpenChange={setOpen}>
          <SheetTrigger asChild className="md:hidden">
            <button className="flex items-center justify-center h-10 w-10 rounded-lg hover:bg-accent transition-colors" aria-label="Open menu">
              <Menu className="h-6 w-6 text-foreground" />
            </button>
          </SheetTrigger>
          <SheetContent side="right" className="w-[300px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full overflow-y-auto">
              {/* Header */}
              <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                  <FileText className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">FreeResume<span className="text-primary">Kit</span></span>
              </div>

              {/* Links */}
              <div className="flex-1 px-4 py-4 space-y-1">
                {navLinks.map(link => (
                  <a
                    key={link.href}
                    href={link.href}
                    onClick={() => setOpen(false)}
                    className="flex items-center px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                  >
                    {link.label}
                  </a>
                ))}

                {/* Free Tools section */}
                <div className="pt-3">
                  <button
                    onClick={() => setMobileToolsOpen(o => !o)}
                    className="flex items-center justify-between w-full px-3 py-2.5 rounded-lg text-sm font-medium text-foreground hover:bg-accent transition-colors"
                  >
                    <span className="flex items-center gap-2">
                      <ExternalLink className="h-4 w-4 text-primary" />
                      Free Tools
                    </span>
                    <ChevronDown className={`h-4 w-4 text-muted-foreground transition-transform duration-200 ${mobileToolsOpen ? 'rotate-180' : ''}`} />
                  </button>
                  {mobileToolsOpen && (
                    <div className="ml-3 mt-1 space-y-1 border-l-2 border-primary/20 pl-3">
                      {tools.map(tool => (
                        <a
                          key={tool.label}
                          href={tool.href}
                          target="_blank"
                          rel="noopener noreferrer"
                          onClick={() => setOpen(false)}
                          className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors"
                        >
                          <tool.icon className="h-4 w-4 text-primary" />
                          {tool.label}
                          <ExternalLink className="h-3 w-3 ml-auto opacity-40" />
                        </a>
                      ))}
                    </div>
                  )}
                </div>
              </div>

              {/* Footer */}
              <div className="px-4 py-4 border-t border-border space-y-3">
                {/* Dark mode toggle */}
                <div className="flex items-center justify-between px-3 py-2">
                  <div className="flex items-center gap-2 text-sm text-muted-foreground">
                    {dark ? <Moon className="h-4 w-4" /> : <Sun className="h-4 w-4" />}
                    Dark Mode
                  </div>
                  <Switch checked={dark} onCheckedChange={toggle} />
                </div>

                <Link to="/builder" onClick={() => setOpen(false)} className="block">
                  <Button size="sm" className="w-full gradient-primary text-primary-foreground">
                    Create Resume
                  </Button>
                </Link>
              </div>
            </div>
          </SheetContent>
        </Sheet>
      </div>
    </nav>
  );
}
