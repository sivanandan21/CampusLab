import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play,
  Clock,
  Terminal,
  FileCode,
  UploadCloud,
  Check,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { useToast } from '../../app/ToastProvider';
import { sessionService } from '../../services/sessionService';
import { ASSETS } from '../../assets';

export default function ExperimentDetailPage() {
  const { courseId = 'PCCSL407', expId } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const course =
    KTU_2024_CSE_COURSES.find((c) => c.code.toLowerCase() === courseId.toLowerCase()) ||
    KTU_2024_CSE_COURSES.find((c) => c.code === 'PCCSL407')!;

  const experiment =
    course.experiments.find((e) => e.id.toLowerCase() === (expId || '').toLowerCase()) ||
    course.experiments[0] || {
      id: `${course.code.toLowerCase()}-exp01`,
      expNumber: 1,
      title: course.title,
      question: `Implement laboratory requirements for ${course.title}.`,
      durationMinutes: 45,
      environment: 'Isolated Linux Sandbox',
      objectives: [
        `Understand core principles of ${course.title}`,
        'Implement solution following KTU 2024 Scheme specifications',
      ],
      practiceSkills: [
        { name: course.title, tag: 'KTU 2024', iconType: 'code' },
        { name: 'Testing & Verification', tag: 'Lab', iconType: 'cpu' },
      ],
      checklistSteps: [
        { id: 's1', stepNumber: 1, label: 'Design algorithm and implementation', completed: true },
        { id: 's2', stepNumber: 2, label: 'Compile and debug', completed: true },
        { id: 's3', stepNumber: 3, label: 'Demonstrate output on terminal', completed: false },
      ],
      submissionRequirements: {
        fileTypes: ['Source file', 'Output screenshot (.png/.jpg)'],
        description: `Submission for ${course.code}`,
        acceptedFormats: '*',
      },
      status: 'Ready' as const,
    };

  const [checklist, setChecklist] = useState(experiment.checklistSteps);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionStep, setProvisionStep] = useState<'REQUESTED' | 'PROVISIONING' | 'READY'>('READY');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  useEffect(() => {
    setChecklist(experiment.checklistSteps);
    setUploadedFiles([]);
  }, [experiment.id]);

  const toggleStep = (id: string) => {
    setChecklist((prev) =>
      prev.map((step) => (step.id === id ? { ...step, completed: !step.completed } : step))
    );
  };

  const handleLaunch = async () => {
    setIsProvisioning(true);
    setProvisionStep('REQUESTED');
    showToast(`Requesting isolated ${experiment.environment} allocation...`, 'info');

    setTimeout(() => {
      setProvisionStep('PROVISIONING');
    }, 700);

    setTimeout(async () => {
      setProvisionStep('READY');
      await sessionService.startSession(course.code, experiment.id);
      setIsProvisioning(false);
      navigate(`/workspace/${course.code.toLowerCase()}-${experiment.id}`);
    }, 1500);
  };

  const handleDropUpload = (e: React.DragEvent) => {
    e.preventDefault();
    const mockFile = experiment.submissionRequirements.fileTypes[0] || 'solution.txt';
    setUploadedFiles([mockFile, 'execution_output.png']);
    showToast('Files uploaded successfully for KTU auto-grader!');
  };

  const getSkillIcon = (skill: { name: string; tag: string; iconType: string }) => {
    const n = skill.name.toLowerCase();
    const t = skill.iconType?.toLowerCase() || '';

    if (t === 'fork') {
      return <img src={ASSETS.icons.fork} alt="fork" className="w-full h-full object-contain" />;
    }
    if (t === 'tree') {
      return <img src={ASSETS.icons.tree} alt="tree" className="w-full h-full object-contain" />;
    }
    if (t === 'sql') {
      return <img src={ASSETS.icons.sqlPreview} alt="sql" className="w-full h-full object-contain" />;
    }
    if (n.includes('c programming') || t === 'c') {
      return <img src={ASSETS.icons.c} alt="C" className="w-full h-full object-contain" />;
    }
    if (t === 'python' || n.includes('python')) {
      return (
        <div className="w-full h-full bg-blue-600/10 text-blue-600 rounded flex items-center justify-center font-bold text-xs">
          Py
        </div>
      );
    }
    if (t === 'cpu') {
      return <Cpu className="w-5 h-5 text-indigo-500" />;
    }
    if (t === 'layers') {
      return <Layers className="w-5 h-5 text-emerald-500" />;
    }
    if (t === 'terminal') {
      return <Terminal className="w-5 h-5 text-amber-500" />;
    }
    return <FileCode className="w-5 h-5 text-blue-500" />;
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      <Topbar searchPlaceholder="Search experiments, labs..." />

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Visual Hero Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] p-5 sm:p-6 text-white shadow-md border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30 inline-block">
                {course.semester} • {course.code} {course.title}
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                Exp {experiment.expNumber.toString().padStart(2, '0')}: {experiment.title}
              </h2>

              <p className="text-xs text-blue-100/90 leading-relaxed max-w-2xl">
                {experiment.question}
              </p>

              {/* Status and specs pills */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-900/60 border border-slate-700/80 text-slate-200 backdrop-blur-md">
                  <Clock className="w-3 h-3 text-blue-400" />
                  {experiment.durationMinutes} Mins
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-medium bg-slate-900/60 border border-slate-700/80 text-slate-200 backdrop-blur-md">
                  <Terminal className="w-3 h-3 text-amber-400" />
                  {experiment.environment}
                </span>
                <span className="flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-[#ECFDF5]/90 border border-[#A7F3D0] text-[#065F46] backdrop-blur-md">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  Active Status
                </span>
              </div>

              {/* Start Lab Button */}
              <div className="pt-2">
                <button
                  onClick={handleLaunch}
                  disabled={isProvisioning}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center gap-2 transition-all transform active:scale-95 cursor-pointer"
                >
                  <Play className="w-3.5 h-3.5 fill-white" />
                  <span>
                    {isProvisioning
                      ? provisionStep === 'REQUESTED'
                        ? 'Allocating Container...'
                        : 'Provisioning Environment...'
                      : 'Start Lab Environment'}
                  </span>
                </button>
              </div>
            </div>

            {/* Right Side Illustration Image */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-72 h-44 rounded-xl overflow-hidden shadow-2xl border border-blue-400/40 group bg-slate-950">
                <img
                  src={ASSETS.labs[course.code] || ASSETS.illustrations.dashboardOsHero}
                  alt={course.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  onError={(e) => {
                    e.currentTarget.src = ASSETS.illustrations.dashboardOsHero;
                  }}
                />
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Detail Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: What You Will Practice with Real Domain Icons */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center gap-2">
              <Sparkles className="w-4 h-4 text-blue-600" />
              <span>What You Will Practice</span>
            </h3>

            <div className="space-y-2.5">
              {experiment.practiceSkills.map((skill, sIdx) => (
                <div
                  key={sIdx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between hover:bg-blue-50/30 transition-colors"
                >
                  <div className="flex items-center gap-3">
                    <div className="w-8 h-8 rounded-lg overflow-hidden shrink-0 shadow-sm flex items-center justify-center bg-white p-0.5 border border-slate-200">
                      {getSkillIcon(skill)}
                    </div>
                    <div>
                      <span className="text-xs font-bold text-slate-800 block leading-tight">
                        {skill.name}
                      </span>
                      <span className="text-[10px] font-semibold text-slate-500">
                        {skill.tag}
                      </span>
                    </div>
                  </div>
                  <span className="text-[10px] font-bold px-2 py-0.5 rounded bg-blue-100 text-blue-700">
                    Core
                  </span>
                </div>
              ))}
            </div>
          </div>

          {/* Card 2: Step-by-Step Checklist */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 mb-3 flex items-center justify-between">
              <span>Step-by-Step Checklist</span>
              <span className="text-xs font-semibold text-blue-600">
                {checklist.filter((s) => s.completed).length}/{checklist.length} Done
              </span>
            </h3>

            <div className="space-y-2">
              {checklist.map((step) => (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-2.5 rounded-lg border cursor-pointer transition-colors flex items-start gap-2.5 select-none ${
                    step.completed
                      ? 'bg-blue-50/40 border-blue-200'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-4 h-4 rounded flex items-center justify-center mt-0.5 transition-colors ${
                      step.completed ? 'bg-[#2563EB] text-white' : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {step.completed && <Check className="w-3 h-3" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block leading-tight">
                      Step {step.stepNumber}
                    </span>
                    <span className="text-xs text-slate-600 leading-tight">
                      {step.label}
                    </span>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Card 3: Submission Requirements */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Submission Requirements</h3>

            <div className="space-y-2">
              {experiment.submissionRequirements.fileTypes.map((ft, idx) => (
                <div
                  key={idx}
                  className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700"
                >
                  <UploadCloud className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                  <span>{ft}</span>
                </div>
              ))}
            </div>

            {/* Drop / Upload Zone */}
            <div
              onDragOver={(e) => e.preventDefault()}
              onDrop={handleDropUpload}
              onClick={() => {
                const sampleName = experiment.submissionRequirements.fileTypes[0] || 'solution.py';
                setUploadedFiles([sampleName, 'test_output.png']);
                showToast('Files uploaded successfully for auto-check!');
              }}
              className="mt-3 border-2 border-dashed border-slate-200 hover:border-blue-400 rounded-xl p-3 text-center cursor-pointer transition-colors bg-slate-50/50 hover:bg-blue-50/30"
            >
              {uploadedFiles.length > 0 ? (
                <div className="space-y-1">
                  <span className="text-xs font-bold text-emerald-600 flex items-center justify-center gap-1">
                    <Check className="w-3.5 h-3.5" />
                    Files Attached ({uploadedFiles.length})
                  </span>
                  <div className="text-[11px] text-slate-500 font-mono">
                    {uploadedFiles.join(', ')}
                  </div>
                </div>
              ) : (
                <>
                  <p className="text-xs font-bold text-slate-700">Drag &amp; Drop or Upload</p>
                  <p className="text-[10px] text-slate-400 mt-0.5">
                    Formats: {experiment.submissionRequirements.acceptedFormats}
                  </p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
