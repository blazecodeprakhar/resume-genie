import { Link, useLocation } from 'react-router-dom';
import { FileText, Menu, LogIn, LogOut, User, Sun, Moon } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useState, useEffect } from 'react';
import { useAuth } from '@/hooks/useAuth';
import { Sheet, SheetContent, SheetTrigger, SheetTitle } from '@/components/ui/sheet';
import { Switch } from '@/components/ui/switch';

function useTheme() {
  const [dark, setDark] = useState(() => {
    if (typeof window === 'undefined') return false;
    return document.documentElement.classList.contains('dark') ||
      (!localStorage.getItem('theme') && window.matchMedia('(prefers-color-scheme: dark)').matches);
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

export default function Navbar() {
  const location = useLocation();
  const [open, setOpen] = useState(false);
  const isHome = location.pathname === '/';
  const { user, signOut } = useAuth();
  const { dark, toggle } = useTheme();

  const navLinks = isHome ? [
    { href: '#features', label: 'Features' },
    { href: '#templates', label: 'Templates' },
    { href: '#how-it-works', label: 'How it works' },
    { href: '#pricing', label: 'Pricing' },
  ] : [];

  return (
    <nav className="sticky top-0 z-50 border-b border-border bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto flex h-16 items-center justify-between px-4">
        <Link to="/" className="flex items-center gap-2 font-bold text-xl">
          <div className="flex h-9 w-9 items-center justify-center rounded-lg gradient-primary">
            <FileText className="h-5 w-5 text-primary-foreground" />
          </div>
          <span className="text-foreground">Resume<span className="text-primary">AI</span></span>
        </Link>

        {/* Desktop */}
        <div className="hidden md:flex items-center gap-6">
          {navLinks.map(link => (
            <a key={link.href} href={link.href} className="text-sm text-muted-foreground hover:text-foreground transition-colors">
              {link.label}
            </a>
          ))}

          {/* Theme toggle */}
          <button
            onClick={toggle}
            className="flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card hover:bg-accent transition-colors"
            aria-label="Toggle theme"
          >
            {dark ? <Sun className="h-4 w-4 text-foreground" /> : <Moon className="h-4 w-4 text-foreground" />}
          </button>

          {user ? (
            <>
              <Link to="/dashboard">
                <Button variant="ghost" size="sm"><User className="h-4 w-4 mr-1" /> Dashboard</Button>
              </Link>
              <Button variant="ghost" size="sm" onClick={signOut}>
                <LogOut className="h-4 w-4 mr-1" /> Sign Out
              </Button>
            </>
          ) : (
            <Link to="/auth">
              <Button variant="ghost" size="sm"><LogIn className="h-4 w-4 mr-1" /> Sign In</Button>
            </Link>
          )}
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
          <SheetContent side="right" className="w-[280px] p-0">
            <SheetTitle className="sr-only">Navigation Menu</SheetTitle>
            <div className="flex flex-col h-full">
              {/* Header */}
              <div className="flex items-center gap-2 px-6 py-5 border-b border-border">
                <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                  <FileText className="h-4 w-4 text-primary-foreground" />
                </div>
                <span className="font-bold text-foreground">Resume<span className="text-primary">AI</span></span>
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

                {user ? (
                  <>
                    <Link to="/dashboard" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                      <User className="h-4 w-4" /> Dashboard
                    </Link>
                    <button onClick={() => { signOut(); setOpen(false); }} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors w-full text-left">
                      <LogOut className="h-4 w-4" /> Sign Out
                    </button>
                  </>
                ) : (
                  <Link to="/auth" onClick={() => setOpen(false)} className="flex items-center gap-2 px-3 py-2.5 rounded-lg text-sm text-muted-foreground hover:text-foreground hover:bg-accent transition-colors">
                    <LogIn className="h-4 w-4" /> Sign In
                  </Link>
                )}
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
