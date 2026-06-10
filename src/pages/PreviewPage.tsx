import { useState, useEffect, useRef } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Download, RefreshCw, ArrowLeft, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import ModernTemplate from '@/components/templates/ModernTemplate';
import ClassicTemplate from '@/components/templates/ClassicTemplate';
import MinimalTemplate from '@/components/templates/MinimalTemplate';
import ExecutiveTemplate from '@/components/templates/ExecutiveTemplate';
import CreativeTemplate from '@/components/templates/CreativeTemplate';
import BoldTemplate from '@/components/templates/BoldTemplate';
import ElegantTemplate from '@/components/templates/ElegantTemplate';
import TechTemplate from '@/components/templates/TechTemplate';
import CorporateTemplate from '@/components/templates/CorporateTemplate';
import StarterTemplate from '@/components/templates/StarterTemplate';
import InfographicTemplate from '@/components/templates/InfographicTemplate';
import AcademicTemplate from '@/components/templates/AcademicTemplate';
import { useResumeStore } from '@/hooks/useResumeStore';
import { generateMockResume } from '@/utils/resumeGenerator';
import type { GeneratedResume, TemplateType } from '@/types/resume';
import { useToast } from '@/hooks/use-toast';
import { trackEvent } from '@/utils/analytics';

const templates: { key: TemplateType; label: string }[] = [
  { key: 'modern', label: 'Modern' },
  { key: 'classic', label: 'Classic' },
  { key: 'minimal', label: 'Minimal' },
  { key: 'executive', label: 'Executive' },
  { key: 'creative', label: 'Creative' },
  { key: 'bold', label: 'Bold' },
  { key: 'elegant', label: 'Elegant' },
  { key: 'tech', label: 'Tech' },
  { key: 'corporate', label: 'Corporate' },
  { key: 'starter', label: 'Starter' },
  { key: 'infographic', label: 'Infographic' },
  { key: 'academic', label: 'Academic' },
];

export default function PreviewPage() {
  const nav = useNavigate();
  const { toast } = useToast();
  const { data } = useResumeStore();
  const [template, setTemplate] = useState<TemplateType>('modern');
  const [generated, setGenerated] = useState<GeneratedResume | null>(null);
  const [loading, setLoading] = useState(true);
  const [downloading, setDownloading] = useState(false);
  const resumeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => {
      setGenerated(generateMockResume(data));
      setLoading(false);
    }, 1500);
    return () => clearTimeout(timer);
  }, [data]);

  const regenerate = () => {
    setLoading(true);
    trackEvent('regenerate_resume', {
      event_category: 'Resume',
      event_label: template,
      template: template
    });
    setTimeout(() => {
      setGenerated(generateMockResume(data));
      setLoading(false);
      toast({ title: 'Resume regenerated!' });
    }, 1200);
  };

  const downloadPdf = async () => {
    if (!resumeRef.current) return;
    setDownloading(true);

    const filename = (() => { const n = (data.personalInfo.fullName || '').trim().split(' ')[0].toLowerCase().replace(/[^a-z0-9]/g, '') || 'resume'; return n.charAt(0).toUpperCase() + n.slice(1) + '_resume.pdf'; })();

    trackEvent('download_resume', {
      event_category: 'Resume',
      event_label: template,
      template: template,
      status: 'started',
      filename: filename
    });

    try {
      const html2pdf = (await import('html2pdf.js')).default;
      const element = resumeRef.current;
      
      const opt = {
        margin: 0,
        filename: filename,
        image: { type: 'jpeg' as const, quality: 0.98 },
        html2canvas: { 
          scale: 2, 
          useCORS: true,
          letterRendering: true,
          scrollY: 0,
          scrollX: 0
        },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' as const }
      };
      
      await html2pdf().set(opt).from(element).save();
      toast({ title: 'PDF downloaded!' });

      trackEvent('download_resume', {
        event_category: 'Resume',
        event_label: template,
        template: template,
        status: 'success',
        filename: filename
      });
    } catch (err) {
      console.error('PDF Error:', err);
      toast({ title: 'Download failed', variant: 'destructive' });

      trackEvent('download_resume', {
        event_category: 'Resume',
        event_label: template,
        template: template,
        status: 'failed',
        error: err instanceof Error ? err.message : String(err)
      });
    } finally {
      setDownloading(false);
    }
  };

  const templateMap = {
    modern: ModernTemplate, classic: ClassicTemplate, minimal: MinimalTemplate,
    executive: ExecutiveTemplate, creative: CreativeTemplate, bold: BoldTemplate,
    elegant: ElegantTemplate, tech: TechTemplate, corporate: CorporateTemplate,
    starter: StarterTemplate, infographic: InfographicTemplate, academic: AcademicTemplate,
  };
  const TemplateComponent = templateMap[template];

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-6">
          <div className="flex items-center gap-3">
            <Button variant="ghost" size="sm" onClick={() => nav('/builder')}>
              <ArrowLeft className="h-4 w-4 mr-1" /> Edit
            </Button>
            <h1 className="text-2xl font-bold text-foreground">Resume Preview</h1>
          </div>
          <div className="flex items-center gap-2 flex-wrap">
            <Button variant="outline" size="sm" onClick={regenerate} disabled={loading}>
              <RefreshCw className={`h-4 w-4 mr-1 ${loading ? 'animate-spin' : ''}`} /> Regenerate
            </Button>
            <Button size="sm" onClick={downloadPdf} disabled={loading || downloading} className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90">
              {downloading ? <Loader2 className="h-4 w-4 mr-1 animate-spin" /> : <Download className="h-4 w-4 mr-1" />}
              Download PDF
            </Button>
          </div>
        </div>

        {/* Template switcher */}
        <div className="mb-6 overflow-x-auto">
          <div className="flex rounded-lg border border-border overflow-hidden w-fit">
            {templates.map(t => (
              <button
                key={t.key}
                onClick={() => {
                  setTemplate(t.key);
                  trackEvent('change_template', {
                    event_category: 'Resume',
                    event_label: t.key,
                    template: t.key
                  });
                }}
                className={`px-3 py-2 text-xs font-medium transition-colors whitespace-nowrap ${
                  template === t.key
                    ? 'gradient-primary text-primary-foreground'
                    : 'bg-background text-muted-foreground hover:bg-muted'
                }`}
              >
                {t.label}
              </button>
            ))}
          </div>
        </div>

        {loading ? (
          <div className="flex flex-col items-center justify-center py-32">
            <Loader2 className="h-12 w-12 text-primary animate-spin mb-4" />
            <p className="text-lg font-medium text-foreground">Generating your resume...</p>
            <p className="text-sm text-muted-foreground mt-1">AI is crafting professional content for you</p>
          </div>
        ) : generated ? (
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} className="flex justify-center">
            <div className="shadow-elevated rounded-xl overflow-auto max-h-[80vh] border border-border max-w-full">
              <div ref={resumeRef} className="shrink-0 bg-white" style={{ width: '210mm' }}>
                <TemplateComponent data={data} generated={generated} />
              </div>
            </div>
          </motion.div>
        ) : null}
      </div>
    </div>
  );
}
