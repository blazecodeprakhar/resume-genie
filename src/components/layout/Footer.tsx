import { FileText, ExternalLink, Download, Image, Music, Minimize2 } from 'lucide-react';
import { Link } from 'react-router-dom';

const tools = [
  { label: 'Downloader', href: 'https://freemediakit.com/', icon: Download },
  { label: 'Thumbnail Downloader', href: 'https://freemediakit.com/thumbnail-downloader', icon: Image },
  { label: 'Video to MP3', href: 'https://freemediakit.com/video-to-mp3', icon: Music },
  { label: 'Image Compressor', href: 'https://freemediakit.com/image-compressor', icon: Minimize2 },
];

export default function Footer() {
  return (
    <footer className="border-t border-border bg-muted/30">
      <div className="container mx-auto px-4 py-12">
        <div className="grid gap-8 md:grid-cols-5">
          {/* Brand */}
          <div className="md:col-span-2">
            <Link to="/" className="flex items-center gap-2 font-bold text-lg mb-3">
              <div className="flex h-8 w-8 items-center justify-center rounded-lg gradient-primary">
                <FileText className="h-4 w-4 text-primary-foreground" />
              </div>
              FreeResume<span className="text-primary">Kit</span>
            </Link>
            <p className="text-sm text-muted-foreground max-w-xs">
              Build ATS-optimized resumes free with AI. No sign-up required. freeresumekit.com
            </p>
          </div>

          {/* Product */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Product</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#features" className="hover:text-foreground transition-colors">Features</a></li>
              <li><a href="#pricing" className="hover:text-foreground transition-colors">Free Forever</a></li>
              <li><Link to="/builder" className="hover:text-foreground transition-colors">Resume Builder</Link></li>
            </ul>
          </div>

          {/* Free Tools */}
          <div>
            <h4 className="font-semibold mb-3 text-sm flex items-center gap-1.5">
              Free Tools
              <ExternalLink className="h-3.5 w-3.5 text-primary" />
            </h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              {tools.map(tool => (
                <li key={tool.label}>
                  <a
                    href={tool.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center gap-2 hover:text-foreground transition-colors group"
                  >
                    <tool.icon className="h-3.5 w-3.5 text-primary/60 group-hover:text-primary transition-colors" />
                    {tool.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Legal */}
          <div>
            <h4 className="font-semibold mb-3 text-sm">Legal</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-foreground transition-colors">Privacy Policy</a></li>
              <li><a href="#" className="hover:text-foreground transition-colors">Terms of Service</a></li>
              <li><a href="https://freemediakit.com/contact.html" target="_blank" rel="noopener noreferrer" className="hover:text-foreground transition-colors">Contact</a></li>
            </ul>
          </div>
        </div>

        <div className="mt-10 border-t border-border pt-6 flex flex-col sm:flex-row items-center justify-between gap-3 text-sm text-muted-foreground">
          <span>© {new Date().getFullYear()} FreeResumeKit. All rights reserved.</span>
          <a
            href="https://freemediakit.com/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 hover:text-foreground transition-colors"
          >
            <ExternalLink className="h-3.5 w-3.5" />
            More free tools at freemediakit.com
          </a>
        </div>
      </div>
    </footer>
  );
}
