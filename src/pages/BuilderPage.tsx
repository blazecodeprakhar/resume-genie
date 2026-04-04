import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowLeft, ArrowRight, Plus, X, Briefcase, GraduationCap, User, Wrench, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Checkbox } from '@/components/ui/checkbox';
import Navbar from '@/components/layout/Navbar';
import { useResumeStore } from '@/hooks/useResumeStore';

const stepLabels = [
  { label: 'Personal', icon: User },
  { label: 'Experience', icon: Briefcase },
  { label: 'Education', icon: GraduationCap },
  { label: 'Skills', icon: Wrench },
  { label: 'Additional', icon: Award },
];

export default function BuilderPage() {
  const nav = useNavigate();
  const store = useResumeStore();
  const { data, currentStep, setCurrentStep } = store;
  const [skillInput, setSkillInput] = useState('');
  const [softSkillInput, setSoftSkillInput] = useState('');

  const addSkill = (type: 'technical' | 'soft') => {
    const input = type === 'technical' ? skillInput : softSkillInput;
    const setter = type === 'technical' ? setSkillInput : setSoftSkillInput;
    const key = type === 'technical' ? 'technicalSkills' : 'softSkills';
    if (input.trim()) {
      store.updateData({ [key]: [...data[key], input.trim()] });
      setter('');
    }
  };

  const removeSkill = (type: 'technical' | 'soft', index: number) => {
    const key = type === 'technical' ? 'technicalSkills' : 'softSkills';
    store.updateData({ [key]: data[key].filter((_, i) => i !== index) });
  };

  const handleNext = () => {
    if (currentStep < 4) setCurrentStep(currentStep + 1);
    else nav('/preview');
  };

  return (
    <div className="min-h-screen flex flex-col bg-muted/20">
      <Navbar />
      <div className="flex-1 container mx-auto px-4 py-8 max-w-3xl">
        {/* Progress */}
        <div className="mb-8">
          <div className="flex items-center justify-between mb-3">
            {stepLabels.map((s, i) => (
              <button
                key={s.label}
                onClick={() => setCurrentStep(i)}
                className={`flex flex-col items-center gap-1.5 text-xs font-medium transition-colors ${
                  i <= currentStep ? 'text-primary' : 'text-muted-foreground'
                }`}
              >
                <div className={`flex h-10 w-10 items-center justify-center rounded-full border-2 transition-all ${
                  i < currentStep ? 'gradient-primary border-primary text-primary-foreground'
                    : i === currentStep ? 'border-primary bg-background text-primary'
                    : 'border-border bg-background text-muted-foreground'
                }`}>
                  <s.icon className="h-5 w-5" />
                </div>
                <span className="hidden sm:block">{s.label}</span>
              </button>
            ))}
          </div>
          <div className="h-2 rounded-full bg-muted overflow-hidden">
            <div
              className="h-full rounded-full gradient-primary transition-all duration-500"
              style={{ width: `${((currentStep + 1) / 5) * 100}%` }}
            />
          </div>
        </div>

        {/* Form steps */}
        <AnimatePresence mode="wait">
          <motion.div
            key={currentStep}
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: -20 }}
            transition={{ duration: 0.3 }}
            className="rounded-2xl border border-border bg-card p-6 md:p-8 shadow-card"
          >
            {currentStep === 0 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-card-foreground">Personal Information</h2>
                <p className="text-muted-foreground text-sm">Tell us about yourself.</p>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Full Name *</label>
                    <Input value={data.personalInfo.fullName} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, fullName: e.target.value } })} placeholder="John Doe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Email *</label>
                    <Input type="email" value={data.personalInfo.email} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, email: e.target.value } })} placeholder="john@email.com" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Phone</label>
                    <Input value={data.personalInfo.phone} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, phone: e.target.value } })} placeholder="+91 9876543210" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">LinkedIn</label>
                    <Input value={data.personalInfo.linkedin} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, linkedin: e.target.value } })} placeholder="linkedin.com/in/johndoe" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">City</label>
                    <Input value={data.personalInfo.city} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, city: e.target.value } })} placeholder="Mumbai" />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Target Role *</label>
                    <Input value={data.personalInfo.targetRole} onChange={e => store.updateData({ personalInfo: { ...data.personalInfo, targetRole: e.target.value } })} placeholder="Software Engineer" />
                  </div>
                </div>
              </div>
            )}

            {currentStep === 1 && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Work Experience</h2>
                    <p className="text-muted-foreground text-sm mt-1">Add your professional experience.</p>
                  </div>
                  <Button size="sm" variant="outline" onClick={store.addExperience}>
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
                {data.experience.length === 0 && (
                  <div className="text-center py-10 text-muted-foreground">
                    <Briefcase className="h-10 w-10 mx-auto mb-3 opacity-40" />
                    <p>No experience added yet. Click "Add" to get started.</p>
                  </div>
                )}
                {data.experience.map((exp, i) => (
                  <div key={exp.id} className="border border-border rounded-xl p-5 space-y-4 relative">
                    <button onClick={() => store.removeExperience(exp.id)} className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                    <div className="text-xs font-semibold text-primary">EXPERIENCE {i + 1}</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Company</label>
                        <Input value={exp.company} onChange={e => store.updateExperience(exp.id, { company: e.target.value })} placeholder="Acme Corp" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Role</label>
                        <Input value={exp.role} onChange={e => store.updateExperience(exp.id, { role: e.target.value })} placeholder="Software Engineer" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Start Date</label>
                        <Input type="month" value={exp.startDate} onChange={e => store.updateExperience(exp.id, { startDate: e.target.value })} />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">End Date</label>
                        <Input type="month" value={exp.endDate} onChange={e => store.updateExperience(exp.id, { endDate: e.target.value })} disabled={exp.current} />
                        <div className="flex items-center gap-2 mt-1">
                          <Checkbox checked={exp.current} onCheckedChange={v => store.updateExperience(exp.id, { current: !!v, endDate: v ? '' : exp.endDate })} id={`current-${exp.id}`} />
                          <label htmlFor={`current-${exp.id}`} className="text-xs text-muted-foreground cursor-pointer">Currently working here</label>
                        </div>
                      </div>
                    </div>
                    <div className="space-y-1.5">
                      <label className="text-sm font-medium text-foreground">Description</label>
                      <Textarea value={exp.description} onChange={e => store.updateExperience(exp.id, { description: e.target.value })} placeholder="Describe your responsibilities and achievements..." rows={3} />
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 2 && (
              <div className="space-y-5">
                <div className="flex items-center justify-between">
                  <div>
                    <h2 className="text-2xl font-bold text-card-foreground">Education</h2>
                    <p className="text-muted-foreground text-sm mt-1">Add your educational background.</p>
                  </div>
                  <Button size="sm" variant="outline" onClick={store.addEducation}>
                    <Plus className="h-4 w-4 mr-1" /> Add
                  </Button>
                </div>
                {data.education.length === 0 && (
                  <div className="text-center py-10 text-muted-foreground">
                    <GraduationCap className="h-10 w-10 mx-auto mb-3 opacity-40" />
                    <p>No education added yet. Click "Add" to get started.</p>
                  </div>
                )}
                {data.education.map((edu, i) => (
                  <div key={edu.id} className="border border-border rounded-xl p-5 space-y-4 relative">
                    <button onClick={() => store.removeEducation(edu.id)} className="absolute top-3 right-3 text-muted-foreground hover:text-destructive transition-colors">
                      <X className="h-4 w-4" />
                    </button>
                    <div className="text-xs font-semibold text-primary">EDUCATION {i + 1}</div>
                    <div className="grid sm:grid-cols-2 gap-4">
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Degree</label>
                        <Input value={edu.degree} onChange={e => store.updateEducation(edu.id, { degree: e.target.value })} placeholder="B.Tech Computer Science" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Institution</label>
                        <Input value={edu.institution} onChange={e => store.updateEducation(edu.id, { institution: e.target.value })} placeholder="IIT Delhi" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Year</label>
                        <Input value={edu.year} onChange={e => store.updateEducation(edu.id, { year: e.target.value })} placeholder="2024" />
                      </div>
                      <div className="space-y-1.5">
                        <label className="text-sm font-medium text-foreground">Grade/CGPA</label>
                        <Input value={edu.grade} onChange={e => store.updateEducation(edu.id, { grade: e.target.value })} placeholder="8.5 CGPA" />
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {currentStep === 3 && (
              <div className="space-y-6">
                <h2 className="text-2xl font-bold text-card-foreground">Skills</h2>
                <p className="text-muted-foreground text-sm">Add your technical and soft skills.</p>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Technical Skills</label>
                  <div className="flex gap-2">
                    <Input value={skillInput} onChange={e => setSkillInput(e.target.value)} placeholder="e.g. React, Python, SQL" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill('technical'))} />
                    <Button variant="outline" onClick={() => addSkill('technical')}>Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.technicalSkills.map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full bg-primary/10 px-3 py-1 text-sm font-medium text-primary">
                        {s}
                        <button onClick={() => removeSkill('technical', i)} className="hover:text-destructive"><X className="h-3 w-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>

                <div className="space-y-3">
                  <label className="text-sm font-medium text-foreground">Soft Skills</label>
                  <div className="flex gap-2">
                    <Input value={softSkillInput} onChange={e => setSoftSkillInput(e.target.value)} placeholder="e.g. Leadership, Communication" onKeyDown={e => e.key === 'Enter' && (e.preventDefault(), addSkill('soft'))} />
                    <Button variant="outline" onClick={() => addSkill('soft')}>Add</Button>
                  </div>
                  <div className="flex flex-wrap gap-2">
                    {data.softSkills.map((s, i) => (
                      <span key={i} className="inline-flex items-center gap-1 rounded-full bg-accent px-3 py-1 text-sm font-medium text-accent-foreground">
                        {s}
                        <button onClick={() => removeSkill('soft', i)} className="hover:text-destructive"><X className="h-3 w-3" /></button>
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {currentStep === 4 && (
              <div className="space-y-5">
                <h2 className="text-2xl font-bold text-card-foreground">Additional Information</h2>
                <p className="text-muted-foreground text-sm">Optional details to strengthen your resume.</p>
                <div className="space-y-1.5">
                  <label className="text-sm font-medium text-foreground">Professional Summary</label>
                  <Textarea value={data.summary} onChange={e => store.updateData({ summary: e.target.value })} placeholder="Brief overview of your career... (AI will enhance this)" rows={4} />
                </div>
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Certifications</label>
                    <Textarea value={data.certifications} onChange={e => store.updateData({ certifications: e.target.value })} placeholder="AWS Certified, Google Analytics..." rows={3} />
                  </div>
                  <div className="space-y-1.5">
                    <label className="text-sm font-medium text-foreground">Languages</label>
                    <Textarea value={data.languages} onChange={e => store.updateData({ languages: e.target.value })} placeholder="English (Fluent), Hindi (Native)..." rows={3} />
                  </div>
                </div>
              </div>
            )}
          </motion.div>
        </AnimatePresence>

        {/* Navigation */}
        <div className="flex justify-between mt-6">
          <Button variant="outline" onClick={() => setCurrentStep(Math.max(0, currentStep - 1))} disabled={currentStep === 0}>
            <ArrowLeft className="h-4 w-4 mr-2" /> Back
          </Button>
          <Button onClick={handleNext} className="gradient-primary text-primary-foreground shadow-primary hover:opacity-90">
            {currentStep === 4 ? 'Generate Resume' : 'Next'} <ArrowRight className="h-4 w-4 ml-2" />
          </Button>
        </div>
      </div>
    </div>
  );
}
