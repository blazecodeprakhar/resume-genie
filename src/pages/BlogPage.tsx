import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Search, BookOpen, Clock, X, ArrowRight, Mail, Sparkles, AlertCircle } from 'lucide-react';
import { Link, useParams, useNavigate } from 'react-router-dom';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { articles } from '@/data/blogArticles';
import { trackEvent } from '@/utils/analytics';

const tags = [
  { id: 'all', label: 'All Articles' },
  { id: 'ats', label: 'ATS Guide' },
  { id: 'howto', label: 'How-To' },
  { id: 'india', label: 'India Freshers' },
  { id: 'tips', label: 'Resume Tips' },
  { id: 'compare', label: 'Comparisons' },
  { id: 'fresher', label: 'No Experience' },
  { id: 'interview', label: 'Interview' },
  { id: 'ai', label: 'AI Guides' },
];

// Helper function to update head meta tags and JSON-LD schema for strong SEO
const updateBlogMetaTags = (title: string, desc: string, url: string, isArticle: boolean, articleId?: string) => {
  // Title
  document.title = title;

  // Meta Description
  let metaDesc = document.querySelector('meta[name="description"]');
  if (!metaDesc) {
    metaDesc = document.createElement('meta');
    metaDesc.setAttribute('name', 'description');
    document.head.appendChild(metaDesc);
  }
  metaDesc.setAttribute('content', desc);

  // Canonical Link
  let canonical = document.querySelector('link[rel="canonical"]');
  if (!canonical) {
    canonical = document.createElement('link');
    canonical.setAttribute('rel', 'canonical');
    document.head.appendChild(canonical);
  }
  canonical.setAttribute('href', url);

  // Open Graph / Social Media Tags
  const setOgMeta = (property: string, content: string) => {
    let tag = document.querySelector(`meta[property="${property}"]`);
    if (!tag) {
      tag = document.createElement('meta');
      tag.setAttribute('property', property);
      document.head.appendChild(tag);
    }
    tag.setAttribute('content', content);
  };

  setOgMeta('og:title', title);
  setOgMeta('og:description', desc);
  setOgMeta('og:url', url);
  setOgMeta('og:type', isArticle ? 'article' : 'website');

  // Inject or update Schema.org JSON-LD Structured Data
  let schemaScript = document.getElementById('blog-seo-schema');
  if (schemaScript) {
    schemaScript.remove();
  }

  schemaScript = document.createElement('script');
  schemaScript.setAttribute('id', 'blog-seo-schema');
  schemaScript.setAttribute('type', 'application/ld+json');

  const schemaData = isArticle ? {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    "headline": title.replace(" | FreeResumeKit Blog", ""),
    "description": desc,
    "url": url,
    "mainEntityOfPage": {
      "@type": "WebPage",
      "@id": url
    },
    "publisher": {
      "@type": "Organization",
      "name": "FreeResumeKit",
      "logo": {
        "@type": "ImageObject",
        "url": "https://freeresumekit.com/favicon.svg"
      }
    },
    "author": {
      "@type": "Organization",
      "name": "FreeResumeKit"
    },
    "datePublished": "2026-06-12T12:00:00+05:30",
    "dateModified": "2026-06-12T12:10:00+05:30"
  } : {
    "@context": "https://schema.org",
    "@type": "Blog",
    "name": "FreeResumeKit Career Blog",
    "url": url,
    "description": desc,
    "publisher": {
      "@type": "Organization",
      "name": "FreeResumeKit"
    }
  };

  schemaScript.innerHTML = JSON.stringify(schemaData);
  document.head.appendChild(schemaScript);
};

export default function BlogPage() {
  const { id } = useParams<{ id?: string }>();
  const navigate = useNavigate();
  
  const [searchQuery, setSearchQuery] = useState('');
  const [selectedTag, setSelectedTag] = useState('all');
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  // Sync state and route-based SEO metadata
  useEffect(() => {
    if (id && articles[id]) {
      const article = articles[id];
      const pageTitle = `${article.title} | FreeResumeKit Blog`;
      const pageDesc = article.excerpt;
      const pageUrl = `https://freeresumekit.com/blog/${id}`;
      
      updateBlogMetaTags(pageTitle, pageDesc, pageUrl, true, id);
      trackEvent('Blog', 'Read Article', article.title);
    } else {
      const pageTitle = "Resume Tips & Career Blog 2026 | FreeResumeKit";
      const pageDesc = "Free expert resume tips, ATS guides, fresher resume formats, remote work cover letters, and interview prep to land your dream job in 2026.";
      const pageUrl = "https://freeresumekit.com/blog";
      
      updateBlogMetaTags(pageTitle, pageDesc, pageUrl, false);
      
      // If URL contains invalid article ID, clean it up by redirecting to /blog
      if (id && !articles[id]) {
        navigate('/blog', { replace: true });
      }
    }
  }, [id, navigate]);

  // Filter Articles
  const filteredArticles = Object.entries(articles).filter(([articleId, article]) => {
    const matchesSearch = article.title.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.excerpt.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          article.body.toLowerCase().includes(searchQuery.toLowerCase());
    
    const matchesTag = selectedTag === 'all' || 
                       articleId === selectedTag ||
                       article.tag.toLowerCase().includes(selectedTag.toLowerCase()) ||
                       (selectedTag === 'india' && (articleId.includes('india') || article.tag.toLowerCase().includes('india'))) ||
                       (selectedTag === 'ai' && (articleId.includes('ai') || article.tag.toLowerCase().includes('ai')));

    return matchesSearch && matchesTag;
  });

  const handleCloseArticle = () => {
    navigate('/blog');
  };

  const handleSubscribe = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      trackEvent('Newsletter', 'Subscribe', email);
      setSubscribed(true);
      setEmail('');
    }
  };

  const selectedArticle = id ? articles[id] : null;

  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground transition-colors duration-300">
      <Navbar />

      {/* Hero Section */}
      <section className="relative overflow-hidden py-20 px-4 border-b border-border bg-gradient-to-b from-primary/5 via-transparent to-transparent">
        {/* Backdrop Grid Pattern */}
        <div className="absolute inset-0 bg-grid-white/[0.02] bg-[size:30px_30px] -z-10" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[350px] h-[350px] rounded-full bg-primary/10 blur-[80px] -z-10" />
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
            className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full border border-primary/20 bg-primary/10 text-xs font-semibold text-primary uppercase tracking-wider mb-6"
          >
            <Sparkles className="h-3.5 w-3.5" />
            Career Resource Hub 2026
          </motion.div>
          
          <motion.h1
            initial={{ opacity: 0, y: 10 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className="text-4xl md:text-5xl font-black tracking-tight mb-6 leading-tight"
          >
            Resume Tips & Career Advice That <span className="text-primary gradient-text">Actually Works</span>
          </motion.h1>

          <motion.p
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 leading-relaxed"
          >
            Research-backed guides to help you write better resumes, pass applicant tracking systems (ATS), and land 3x more interviews — completely free.
          </motion.p>

          {/* Search Box */}
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.5, delay: 0.3 }}
            className="relative max-w-lg mx-auto"
          >
            <Search className="absolute left-4 top-1/2 -translate-y-1/2 text-muted-foreground h-5 w-5" />
            <Input
              type="text"
              placeholder="Search: ATS secrets, fresher formats, remote jobs..."
              value={searchQuery}
              onChange={(e) => setSearchQuery(e.target.value)}
              className="pl-12 pr-4 py-6 text-base rounded-2xl shadow-elevated border-border bg-card/60 backdrop-blur-md focus-visible:ring-2 focus-visible:ring-primary w-full"
            />
          </motion.div>
        </div>
      </section>

      {/* Filter Tabs */}
      <div className="sticky top-16 z-40 border-b border-border bg-background/90 backdrop-blur-lg py-4">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex gap-2 overflow-x-auto pb-1 scrollbar-none justify-start md:justify-center">
            {tags.map((tag) => (
              <button
                key={tag.id}
                onClick={() => {
                  setSelectedTag(tag.id);
                  trackEvent('Blog', 'Filter Tag', tag.label);
                }}
                className={`px-4 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition-all border ${
                  selectedTag === tag.id
                    ? 'bg-primary border-primary text-primary-foreground shadow-primary'
                    : 'bg-card border-border text-muted-foreground hover:text-foreground hover:bg-accent'
                }`}
              >
                {tag.label}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Featured Section */}
      {searchQuery === '' && selectedTag === 'all' && (
        <section className="py-12 bg-muted/20">
          <div className="container mx-auto px-4 max-w-6xl">
            <h2 className="text-xs font-bold tracking-widest text-muted-foreground uppercase mb-6 flex items-center gap-2">
              <TrendingUpIcon className="h-4 w-4 text-primary" />
              Featured Resource
            </h2>
            
            <div className="grid md:grid-cols-12 gap-6 rounded-3xl border border-border bg-card shadow-card hover:shadow-elevated overflow-hidden transition-all duration-300">
              {/* Image Banner */}
              <div className="md:col-span-5 bg-gradient-to-br from-primary/20 via-primary/5 to-purple-500/10 p-8 flex flex-col justify-between min-h-[260px] md:min-h-full relative overflow-hidden">
                <div className="absolute inset-0 bg-grid-white/[0.01] -z-10" />
                <span className="inline-block bg-primary text-primary-foreground text-xs font-semibold px-3 py-1 rounded-full w-fit">
                  {articles.ats.tag}
                </span>
                
                <h3 className="font-black text-2xl md:text-3xl tracking-tight leading-tight my-4">
                  What is ATS? The Complete Guide
                </h3>
                
                <div className="flex items-center gap-2 text-xs text-muted-foreground">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>8 min read</span>
                </div>
              </div>

              {/* Body */}
              <div className="md:col-span-7 p-6 md:p-8 flex flex-col justify-between">
                <div>
                  <Link to="/blog/ats">
                    <h3 className="text-xl md:text-2xl font-bold mb-3 hover:text-primary transition-colors cursor-pointer">
                      {articles.ats.title}
                    </h3>
                  </Link>
                  <p className="text-muted-foreground text-sm md:text-base leading-relaxed mb-6">
                    {articles.ats.excerpt}
                  </p>
                </div>
                
                <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 border-t border-border pt-4">
                  <div className="text-xs text-muted-foreground space-y-1 sm:space-y-0 sm:space-x-3">
                    <span>🔥 200K+ monthly searches</span>
                    <span className="hidden sm:inline">•</span>
                    <span>Updated June 2026</span>
                  </div>
                  <Link to="/blog/ats">
                    <Button className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90 transition-opacity w-full sm:w-auto">
                      Read Article
                      <ArrowRight className="h-4 w-4 ml-1.5" />
                    </Button>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </section>
      )}

      {/* Main Grid */}
      <section className="py-16 flex-grow">
        <div className="container mx-auto px-4 max-w-6xl">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-xl md:text-2xl font-bold tracking-tight">
              {searchQuery ? `Search Results (${filteredArticles.length})` : 'All Articles & Resource Guides'}
            </h2>
            {selectedTag !== 'all' && (
              <Button variant="ghost" onClick={() => setSelectedTag('all')} className="text-xs font-semibold text-primary">
                Clear Filters
              </Button>
            )}
          </div>

          {filteredArticles.length === 0 ? (
            <div className="text-center py-16 border border-dashed border-border rounded-2xl bg-card/50">
              <AlertCircle className="h-12 w-12 text-muted-foreground mx-auto mb-4" />
              <h3 className="font-bold text-lg text-foreground mb-1">No articles found</h3>
              <p className="text-muted-foreground text-sm max-w-xs mx-auto">
                We couldn't find any resources matching your search. Try different keywords.
              </p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
              {filteredArticles.map(([articleId, article]) => (
                <Link
                  key={articleId}
                  to={`/blog/${articleId}`}
                  className="group flex flex-col justify-between rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated hover:border-primary/20 transition-all duration-300 overflow-hidden cursor-pointer"
                >
                  <div className="p-6">
                    <div className="flex items-center justify-between mb-4">
                      <span className={`text-[10px] font-bold uppercase tracking-wider px-2.5 py-1 rounded-full ${article.tagClass}`}>
                        {article.tag}
                      </span>
                      <span className={`text-[10px] font-bold px-2 py-0.5 rounded-full ${article.volumeClass}`}>
                        {article.volume.split(' ')[0]} {article.volume.split(' ')[1]}
                      </span>
                    </div>

                    <h3 className="font-bold text-lg tracking-tight text-card-foreground group-hover:text-primary transition-colors line-clamp-2 mb-3">
                      {article.title}
                    </h3>
                    
                    <p className="text-muted-foreground text-xs md:text-sm line-clamp-3 leading-relaxed">
                      {article.excerpt}
                    </p>
                  </div>

                  <div className="px-6 pb-6 pt-4 border-t border-border/50 flex items-center justify-between text-xs text-muted-foreground">
                    <div className="flex items-center gap-1">
                      <BookOpen className="h-3.5 w-3.5 text-primary/70" />
                      <span>{article.meta.split('·')[1]?.trim() || '6 min read'}</span>
                    </div>
                    <span className="text-primary font-bold inline-flex items-center group-hover:translate-x-1 transition-transform">
                      Read
                      <ArrowRight className="h-3.5 w-3.5 ml-1" />
                    </span>
                  </div>
                </Link>
              ))}
            </div>
          )}
        </div>
      </section>

      {/* Newsletter Section */}
      <section className="py-20 border-t border-border bg-muted/30 relative overflow-hidden">
        <div className="absolute inset-0 bg-grid-white/[0.01] -z-10" />
        <div className="absolute bottom-0 right-1/4 w-[300px] h-[300px] rounded-full bg-primary/5 blur-[90px] -z-10" />
        
        <div className="container mx-auto px-4 max-w-xl text-center relative z-10">
          <Mail className="h-10 w-10 text-primary mx-auto mb-4" />
          <h2 className="text-3xl font-black tracking-tight mb-3">Get Weekly Resume Secrets</h2>
          <p className="text-muted-foreground text-sm md:text-base mb-8 max-w-sm mx-auto">
            Join 15,000+ job seekers who get our best ATS tips, cover letter templates, and interview prep guides.
          </p>

          {subscribed ? (
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              className="p-4 rounded-xl bg-primary/10 border border-primary/20 text-primary font-semibold text-sm"
            >
              🎉 Welcome to the club! Check your inbox for our ATS Starter Kit!
            </motion.div>
          ) : (
            <form onSubmit={handleSubscribe} className="flex gap-2 flex-col sm:flex-row max-w-md mx-auto">
              <Input
                type="email"
                required
                placeholder="Enter your professional email..."
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

      {/* Reader Modal */}
      <AnimatePresence>
        {selectedArticle && (
          <div className="fixed inset-0 z-[100] flex items-center justify-center p-4 md:p-6 overflow-y-auto">
            {/* Backdrop */}
            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={handleCloseArticle}
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
              <div className="relative p-6 md:p-8 bg-gradient-to-br from-primary/10 via-transparent to-transparent border-b border-border">
                <button
                  onClick={handleCloseArticle}
                  className="absolute top-4 right-4 md:top-6 md:right-6 p-2 rounded-full border border-border bg-card/60 hover:bg-accent text-foreground transition-all duration-200"
                  aria-label="Close article"
                >
                  <X className="h-4 w-4" />
                </button>
                
                <span className={`inline-block text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full mb-4 ${selectedArticle.tagClass}`}>
                  {selectedArticle.tag}
                </span>

                <h2 className="text-2xl md:text-3xl font-black tracking-tight text-foreground leading-tight">
                  {selectedArticle.title}
                </h2>
                
                <p className="text-xs text-muted-foreground mt-4 flex items-center gap-1.5">
                  <Clock className="h-3.5 w-3.5 text-primary" />
                  <span>{selectedArticle.meta}</span>
                </p>
              </div>

              {/* HTML Content Body */}
              <div 
                className="p-6 md:p-8 overflow-y-auto flex-grow prose prose-slate dark:prose-invert max-w-none prose-headings:font-bold prose-h3:text-lg prose-h3:mt-6 prose-h3:mb-3 prose-p:text-muted-foreground prose-p:leading-relaxed prose-p:mb-4 prose-li:text-muted-foreground prose-li:my-1 text-sm md:text-base"
                dangerouslySetInnerHTML={{ __html: selectedArticle.body }}
              />

              {/* Bottom CTA */}
              <div className="p-6 border-t border-border bg-muted/30 flex flex-col sm:flex-row items-center justify-between gap-4">
                <div className="text-center sm:text-left">
                  <h4 className="font-bold text-sm text-foreground">Ready to make a difference?</h4>
                  <p className="text-xs text-muted-foreground">Build your ATS-optimized resume in 5 minutes with AI.</p>
                </div>
                <Link to="/builder" className="w-full sm:w-auto">
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

// Simple Helper Components for Layout
function TrendingUpIcon(props: React.SVGProps<SVGSVGElement>) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <polyline points="22 7 13.5 15.5 8.5 10.5 2 17" />
      <polyline points="16 7 22 7 22 13" />
    </svg>
  );
}
