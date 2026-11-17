import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play,
  Clock,
  Terminal,
  CheckCircle2,
  FileCode,
  UploadCloud,
  Check,
  Paperclip,
  Share2,
  Cpu,
  Layers,
  Sparkles,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { useToast } from '../../app/ToastProvider';
import { sessionService } from '../../services/sessionService';

export default function ExperimentDetailPage() {
  const { courseId = 'PCCSL407', expId = 'exp-04' } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const course =
    KTU_2024_CSE_COURSES.find((c) => c.code.toLowerCase() === courseId.toLowerCase()) ||
    KTU_2024_CSE_COURSES.find((c) => c.code === 'PCCSL407')!;

  const experiment =
    course.experiments.find((e) => e.id === expId) ||
    course.experiments[0] || {
      id: 'exp-04',
      expNumber: 4,
      title: 'Process Scheduling & Fork System Calls',
      question:
        'Write a C program using fork() to create a parent-child process tree and verify execution.',
      durationMinutes: 45,
      environment: 'Isolated Linux Container',
      objectives: [
        'Understand process creation using fork()',
        'Practice process scheduling & system calls',
      ],
      practiceSkills: [
        { name: 'C Programming', tag: 'POSIX', iconType: 'code' },
        { name: 'fork()', tag: 'Syscall', iconType: 'fork' },
        { name: 'Process Tree', tag: 'Tree', iconType: 'tree' },
      ],
      checklistSteps: [
        {
          id: 's1',
          stepNumber: 1,
          label: 'Write C program for parent-child process creation',
          completed: true,
        },
        { id: 's2', stepNumber: 2, label: 'Compile & debug using gcc', completed: true },
        { id: 's3', stepNumber: 3, label: 'Demonstrate output on terminal', completed: false },
      ],
      submissionRequirements: {
        fileTypes: ['1 C file (.c)', 'Output screenshot (.png/.jpg)'],
        description: 'Single .c file and terminal execution output screenshot',
        acceptedFormats: '.c,.png,.jpg',
      },
      status: 'Ready' as const,
    };

  const [checklist, setChecklist] = useState(experiment.checklistSteps);
  const [isProvisioning, setIsProvisioning] = useState(false);
  const [provisionStep, setProvisionStep] = useState<'REQUESTED' | 'PROVISIONING' | 'READY'>('READY');
  const [uploadedFiles, setUploadedFiles] = useState<string[]>([]);

  const toggleStep = (id: string) => {
    setChecklist((prev) =>
      prev.map((step) => (step.id === id ? { ...step, completed: !step.completed } : step))
    );
  };

  const handleLaunch = async () => {
    setIsProvisioning(true);
    setProvisionStep('REQUESTED');
    showToast('Requesting isolated container allocation...', 'info');

    setTimeout(() => {
      setProvisionStep('PROVISIONING');
    }, 700);

    setTimeout(async () => {
      setProvisionStep('READY');
      await sessionService.startSession(course.code, experiment.id);
      setIsProvisioning(false);
      navigate(`/workspace/s4-cse-os-lab`);
    }, 1600);
  };

  const handleDropUpload = (e: React.DragEvent) => {
    e.preventDefault();
    setUploadedFiles(['process_tree.c', 'terminal_output.png']);
    showToast('Files uploaded successfully for auto-check!');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      <Topbar searchPlaceholder="Search experiments, labs..." />

      <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
        {/* Visual Hero Banner Card (Image 4) */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] p-8 sm:p-10 text-white shadow-xl border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="px-3 py-1 rounded-full text-xs font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30 inline-block">
                {course.semester} • {course.code} {course.title}
              </span>

              <h2 className="text-2xl sm:text-3xl lg:text-4xl font-black text-white tracking-tight leading-tight">
                Exp 0{experiment.expNumber}: {experiment.title}
              </h2>

              {/* Status and specs pills */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 border border-slate-700/80 text-slate-200 backdrop-blur-md">
                  <Clock className="w-3.5 h-3.5 text-blue-400" />
                  {experiment.durationMinutes} Mins
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-medium bg-slate-900/60 border border-slate-700/80 text-slate-200 backdrop-blur-md">
                  <Terminal className="w-3.5 h-3.5 text-amber-400" />
                  {experiment.environment}
                </span>
                <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-[#ECFDF5]/90 border border-[#A7F3D0] text-[#065F46] backdrop-blur-md">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  Active Status
                </span>
              </div>

              {/* Start Lab Button */}
              <div className="pt-4">
                <button
                  onClick={handleLaunch}
                  disabled={isProvisioning}
                  className="px-6 py-3.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-sm shadow-xl shadow-blue-600/30 flex items-center gap-2.5 transition-all transform active:scale-95"
                >
                  <Play className="w-4 h-4 fill-white" />
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

            {/* Right Side Linux Terminal & Process Tree Illustration (Image 4) */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-72 rounded-2xl bg-slate-950/90 border border-blue-500/40 p-4 shadow-2xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2 mb-3">
                  <span className="text-[11px] font-mono font-bold text-emerald-400">$ Linux</span>
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                    <span className="w-2 h-2 rounded-full bg-slate-600" />
                  </div>
                </div>

                {/* Simulated Process Tree Diagram in Terminal */}
                <div className="space-y-1.5 font-mono text-[10px]">
                  <div className="text-blue-300">├── Parent PID [12450]</div>
                  <div className="text-cyan-400 pl-4">├── Child 1 PID [12451]</div>
                  <div className="text-cyan-400 pl-4">└── Child 2 PID [12452]</div>
                </div>

                <div className="mt-4 pt-2 border-t border-slate-800/80 flex items-center justify-between text-[10px] text-slate-400">
                  <span>gcc 13.2 POSIX</span>
                  <span className="text-emerald-400 font-semibold">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Detail Cards Below (Image 4) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: What You Will Practice */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-bold text-slate-900 mb-4">What You Will Practice</h3>

            <div className="space-y-3">
              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    C
                  </div>
                  <span className="text-xs font-bold text-slate-800">C Programming</span>
                </div>
                <FileCode className="w-4 h-4 text-slate-400" />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    fork
                  </div>
                  <span className="text-xs font-bold text-slate-800">fork()</span>
                </div>
                <Cpu className="w-4 h-4 text-slate-400" />
              </div>

              <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-3">
                  <div className="w-8 h-8 rounded-lg bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    Tree
                  </div>
                  <span className="text-xs font-bold text-slate-800">Process Tree</span>
                </div>
                <Layers className="w-4 h-4 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Card 2: Step-by-Step Checklist */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-bold text-slate-900 mb-4">Step-by-Step Checklist</h3>

            <div className="space-y-3">
              {checklist.map((step) => (
                <div
                  key={step.id}
                  onClick={() => toggleStep(step.id)}
                  className={`p-3.5 rounded-xl border cursor-pointer transition-colors flex items-start gap-3 select-none ${
                    step.completed
                      ? 'bg-blue-50/40 border-blue-200'
                      : 'bg-white border-slate-200 hover:bg-slate-50'
                  }`}
                >
                  <div
                    className={`w-5 h-5 rounded-md flex items-center justify-center mt-0.5 transition-colors ${
                      step.completed ? 'bg-[#2563EB] text-white' : 'border border-slate-300 bg-white'
                    }`}
                  >
                    {step.completed && <Check className="w-3.5 h-3.5" />}
                  </div>
                  <div>
                    <span className="text-xs font-bold text-slate-900 block">
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
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <h3 className="text-base font-bold text-slate-900 mb-4">Submission Requirements</h3>

            <div className="space-y-3">
              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs font-semibold text-slate-700">
                <UploadCloud className="w-4 h-4 text-blue-600 shrink-0" />
                <span>1 C file (.c)</span>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-100 flex items-center gap-3 text-xs font-semibold text-slate-700">
                <Paperclip className="w-4 h-4 text-blue-600 shrink-0" />
                <span>Output screenshot (.png/.jpg)</span>
              </div>

              {/* Drag & Drop Upload Dropzone */}
              <div
                onDragOver={(e) => e.preventDefault()}
                onDrop={handleDropUpload}
                onClick={() => {
                  setUploadedFiles(['process_tree.c', 'output.png']);
                  showToast('Files attached: process_tree.c, output.png');
                }}
                className="p-6 rounded-xl border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/30 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-1"
              >
                <UploadCloud className="w-6 h-6 text-slate-400 mb-1" />
                <span className="text-xs font-bold text-slate-700">
                  {uploadedFiles.length > 0
                    ? `Attached (${uploadedFiles.join(', ')})`
                    : 'Drag & Drop or Upload'}
                </span>
                <span className="text-[10px] text-slate-400">Click to select files</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
