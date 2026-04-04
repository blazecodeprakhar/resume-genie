import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Plus, FileText, Download, Trash2, Edit, Calendar, Loader2 } from 'lucide-react';
import { Button } from '@/components/ui/button';
import Navbar from '@/components/layout/Navbar';
import Footer from '@/components/layout/Footer';
import { useAuth } from '@/hooks/useAuth';
import { supabase } from '@/integrations/supabase/client';
import { useToast } from '@/hooks/use-toast';

const templateLabels: Record<string, string> = {
  modern: 'Modern Blue', classic: 'Classic', minimal: 'Minimal', executive: 'Executive',
  creative: 'Creative', bold: 'Bold', elegant: 'Elegant', tech: 'Tech',
  corporate: 'Corporate', starter: 'Starter', infographic: 'Infographic', academic: 'Academic',
};

interface DbResume {
  id: string;
  title: string;
  template: string;
  created_at: string;
  updated_at: string;
}

export default function DashboardPage() {
  const { user, loading: authLoading } = useAuth();
  const { toast } = useToast();
  const [resumes, setResumes] = useState<DbResume[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!user) return;
    const fetchResumes = async () => {
      const { data, error } = await supabase
        .from('saved_resumes')
        .select('id, title, template, created_at, updated_at')
        .order('updated_at', { ascending: false });
      if (!error && data) setResumes(data);
      setLoading(false);
    };
    fetchResumes();
  }, [user]);

  const handleDelete = async (id: string) => {
    const { error } = await supabase.from('saved_resumes').delete().eq('id', id);
    if (!error) {
      setResumes(prev => prev.filter(r => r.id !== id));
      toast({ title: 'Resume deleted' });
    }
  };

  if (authLoading) return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex items-center justify-center">
        <Loader2 className="h-8 w-8 animate-spin text-primary" />
      </div>
    </div>
  );

  if (!user) return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 flex flex-col items-center justify-center text-center px-4">
        <FileText className="h-16 w-16 mb-4 text-muted-foreground/30" />
        <h2 className="text-2xl font-bold text-foreground mb-2">Sign in to view your resumes</h2>
        <p className="text-muted-foreground mb-6">Create an account to save and manage your resumes.</p>
        <Link to="/auth"><Button className="gradient-primary text-primary-foreground">Sign In</Button></Link>
      </div>
      <Footer />
    </div>
  );

  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-foreground">My Resumes</h1>
            <p className="text-muted-foreground mt-1">Manage and download your resumes</p>
          </div>
          <Link to="/builder">
            <Button className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90">
              <Plus className="h-4 w-4 mr-2" /> Create New
            </Button>
          </Link>
        </div>

        {loading ? (
          <div className="flex justify-center py-20"><Loader2 className="h-8 w-8 animate-spin text-primary" /></div>
        ) : resumes.length === 0 ? (
          <div className="text-center py-20">
            <FileText className="h-16 w-16 mx-auto mb-4 text-muted-foreground/30" />
            <h3 className="text-lg font-semibold text-foreground">No resumes yet</h3>
            <p className="text-muted-foreground mt-1 mb-6">Create your first AI-powered resume in minutes.</p>
            <Link to="/builder"><Button className="gradient-primary text-primary-foreground">Create Resume</Button></Link>
          </div>
        ) : (
          <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {resumes.map((r, i) => (
              <motion.div
                key={r.id}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.1 }}
                className="rounded-2xl border border-border bg-card shadow-card hover:shadow-elevated transition-shadow p-6"
              >
                <div className="flex items-start justify-between mb-4">
                  <div className="flex h-11 w-11 items-center justify-center rounded-xl bg-primary/10">
                    <FileText className="h-6 w-6 text-primary" />
                  </div>
                  <span className="text-[10px] font-medium rounded-full bg-secondary px-2.5 py-0.5 text-secondary-foreground">
                    {templateLabels[r.template] || r.template}
                  </span>
                </div>
                <h3 className="font-semibold text-card-foreground mb-1">{r.title}</h3>
                <div className="flex items-center gap-2 text-xs text-muted-foreground mb-4">
                  <Calendar className="h-3 w-3" /> {new Date(r.created_at).toLocaleDateString()}
                </div>
                <div className="flex gap-2">
                  <Link to="/builder" className="flex-1">
                    <Button variant="outline" size="sm" className="w-full">
                      <Edit className="h-3.5 w-3.5 mr-1" /> Edit
                    </Button>
                  </Link>
                  <Button variant="outline" size="sm" onClick={() => handleDelete(r.id)} className="text-destructive hover:text-destructive">
                    <Trash2 className="h-3.5 w-3.5" />
                  </Button>
                </div>
              </motion.div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
}
