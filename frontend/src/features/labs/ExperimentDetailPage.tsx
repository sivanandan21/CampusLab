import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play,
  Clock,
  Terminal,
  FileCode,
  UploadCloud,
  Check,
  Paperclip,
  Cpu,
  Layers,
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

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Visual Hero Banner Card */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#0F172A] via-[#1E3A8A] to-[#2563EB] p-5 sm:p-6 text-white shadow-md border border-blue-500/20">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2.5">
              <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-blue-500/20 text-blue-200 border border-blue-400/30 inline-block">
                {course.semester} • {course.code} {course.title}
              </span>

              <h2 className="text-xl sm:text-2xl font-black text-white tracking-tight leading-tight">
                Exp 0{experiment.expNumber}: {experiment.title}
              </h2>

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
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white font-bold text-xs shadow-md shadow-blue-600/30 flex items-center gap-2 transition-all transform active:scale-95"
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

            {/* Right Side Linux Terminal & Process Tree Illustration */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="w-64 rounded-xl bg-slate-950/90 border border-blue-500/40 p-3 shadow-xl backdrop-blur-md">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5 mb-2">
                  <span className="text-[10px] font-mono font-bold text-emerald-400">$ Linux</span>
                  <div className="flex items-center gap-1">
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                    <span className="w-1.5 h-1.5 rounded-full bg-slate-600" />
                  </div>
                </div>

                {/* Simulated Process Tree Diagram in Terminal */}
                <div className="space-y-1 font-mono text-[9px]">
                  <div className="text-blue-300">├── Parent PID [12450]</div>
                  <div className="text-cyan-400 pl-3">├── Child 1 PID [12451]</div>
                  <div className="text-cyan-400 pl-3">└── Child 2 PID [12452]</div>
                </div>

                <div className="mt-3 pt-1.5 border-t border-slate-800/80 flex items-center justify-between text-[9px] text-slate-400">
                  <span>gcc 13.2 POSIX</span>
                  <span className="text-emerald-400 font-semibold">Ready</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* 3-Column Detail Cards Below */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-5">
          {/* Card 1: What You Will Practice */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 mb-3">What You Will Practice</h3>

            <div className="space-y-2">
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-blue-100 text-blue-700 flex items-center justify-center font-bold text-xs">
                    C
                  </div>
                  <span className="text-xs font-bold text-slate-800">C Programming</span>
                </div>
                <FileCode className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-indigo-100 text-indigo-700 flex items-center justify-center font-bold text-xs">
                    fork
                  </div>
                  <span className="text-xs font-bold text-slate-800">fork()</span>
                </div>
                <Cpu className="w-3.5 h-3.5 text-slate-400" />
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center justify-between">
                <div className="flex items-center gap-2.5">
                  <div className="w-7 h-7 rounded-md bg-emerald-100 text-emerald-700 flex items-center justify-center font-bold text-xs">
                    Tree
                  </div>
                  <span className="text-xs font-bold text-slate-800">Process Tree</span>
                </div>
                <Layers className="w-3.5 h-3.5 text-slate-400" />
              </div>
            </div>
          </div>

          {/* Card 2: Step-by-Step Checklist */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <h3 className="text-sm font-bold text-slate-900 mb-3">Step-by-Step Checklist</h3>

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
              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <UploadCloud className="w-3.5 h-3.5 text-blue-600 shrink-0" />
                <span>1 C file (.c)</span>
              </div>

              <div className="p-2.5 rounded-lg bg-slate-50 border border-slate-100 flex items-center gap-2.5 text-xs font-semibold text-slate-700">
                <Paperclip className="w-3.5 h-3.5 text-blue-600 shrink-0" />
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
                className="p-4 rounded-lg border-2 border-dashed border-slate-300 hover:border-blue-500 bg-slate-50 hover:bg-blue-50/30 text-center cursor-pointer transition-all flex flex-col items-center justify-center gap-0.5"
              >
                <UploadCloud className="w-5 h-5 text-slate-400 mb-0.5" />
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
