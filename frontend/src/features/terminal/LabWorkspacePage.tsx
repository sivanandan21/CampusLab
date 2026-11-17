import React, { useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import confetti from 'canvas-confetti';
import {
  ChevronLeft,
  ChevronRight,
  ChevronDown,
  RotateCcw,
  Check,
  Send,
  LogOut,
  X,
  FileCode,
  ShieldCheck,
  Terminal as TerminalIcon,
} from 'lucide-react';
import { useTerminalSocket } from '../../hooks/useTerminalSocket';
import { useCountdown } from '../../hooks/useCountdown';
import { useToast } from '../../app/ToastProvider';
import { sessionService } from '../../services/sessionService';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { ASSETS } from '../../assets';

export default function LabWorkspacePage() {
  const { sessionId = 's4-cse-os-lab' } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const cleanSession = (sessionId || 's4-cse-os-lab').toLowerCase();
  const course =
    KTU_2024_CSE_COURSES.find((c) => cleanSession.includes(c.code.toLowerCase())) ||
    KTU_2024_CSE_COURSES.find((c) => cleanSession.includes('s4-cse-os-lab') && c.code === 'PCCSL407') ||
    KTU_2024_CSE_COURSES.find((c) => c.code === 'PCCSL407')!;

  const experiment =
    course.experiments.find((e) => cleanSession.includes(e.id.toLowerCase())) ||
    course.experiments[0] || {
      id: `${course.code.toLowerCase()}-exp01`,
      expNumber: 1,
      title: course.title,
      question: `Implement laboratory requirements for ${course.title}.`,
      durationMinutes: 45,
      environment: 'Isolated Linux Sandbox',
      objectives: [
        `Understand theoretical principles of ${course.title}`,
        'Implement and test laboratory solution matching KTU 2024 Scheme requirements',
      ],
      practiceSkills: [],
      checklistSteps: [
        { id: 's1', stepNumber: 1, label: `Design algorithm & write implementation for ${course.title}`, completed: true },
        { id: 's2', stepNumber: 2, label: `Compile & debug in isolated container`, completed: false },
        { id: 's3', stepNumber: 3, label: `Demonstrate output on terminal & run KTU auto-checks`, completed: false },
      ],
      submissionRequirements: {
        fileTypes: ['Source file', 'Output screenshot (.png/.jpg)'],
        description: `Submission for ${course.code}`,
        acceptedFormats: '*',
      },
      status: 'Ready',
    };

  const [leftPaneOpen, setLeftPaneOpen] = useState(true);
  const [tasks, setTasks] = useState<{ [key: string]: boolean }>(() => {
    const initial: { [key: string]: boolean } = {};
    experiment.checklistSteps.forEach((s) => {
      initial[s.id] = !!s.completed;
    });
    return initial;
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);

  const { formatted: timerDisplay } = useCountdown(42 * 60 + 18, true);

  const { terminalRef, fitTerminal, resetTerminal } = useTerminalSocket({
    sessionId,
    course,
    experiment,
    onCommandRun: (cmd) => {
      const lower = cmd.toLowerCase();
      if (lower.includes('gcc') || lower.includes('python') || lower.includes('javac') || lower.includes('psql') || lower.includes('flex')) {
        setTasks((prev) => {
          const updated = { ...prev };
          const stepKeys = Object.keys(updated);
          if (stepKeys[1]) updated[stepKeys[1]] = true;
          return updated;
        });
      }
      if (lower.includes('./') || lower.includes('ps') || lower.includes('python3') || lower.includes('java')) {
        setTasks((prev) => {
          const updated = { ...prev };
          const stepKeys = Object.keys(updated);
          if (stepKeys[2]) updated[stepKeys[2]] = true;
          return updated;
        });
      }
    },
  });

  const handleTogglePane = () => {
    setLeftPaneOpen(!leftPaneOpen);
    setTimeout(() => {
      fitTerminal();
    }, 250);
  };

  const handleEndSession = async () => {
    if (window.confirm(`Are you sure you want to end session for ${course.code} ${experiment.title}? Unsaved terminal data will be lost.`)) {
      await sessionService.endSession(sessionId);
      showToast('Lab session terminated.', 'info');
      navigate('/dashboard');
    }
  };

  const handleSubmitLab = () => {
    setSubmissionModalOpen(true);
  };

  const handleConfirmSubmit = () => {
    setIsSubmitting(true);
    setTimeout(() => {
      setIsSubmitting(false);
      setSubmissionModalOpen(false);
      confetti({
        particleCount: 100,
        spread: 70,
        origin: { y: 0.6 },
      });
      showToast(`Experiment submitted successfully! Auto-grader awarded 48/50 (S) for ${course.code}.`);
      navigate('/submissions');
    }, 1200);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0B1120] text-slate-100 select-none overflow-hidden font-sans">
      {/* Dark Navy Top Toolbar */}
      <header className="h-14 bg-[#0F172A] border-b border-[#1E293B] px-4 sm:px-6 flex items-center justify-between shrink-0 z-30">
        {/* Left: Brand Logo + Breadcrumb */}
        <div className="flex items-center gap-3">
          <div
            onClick={() => navigate('/dashboard')}
            className="flex items-center gap-2 cursor-pointer group"
          >
            <div className="w-8 h-8 rounded-lg bg-blue-600/30 border border-blue-400/40 p-1 flex items-center justify-center">
              <img src={ASSETS.brand.logo} alt="CampusLab" className="w-full h-full object-contain" />
            </div>
            <span className="font-extrabold text-base tracking-tight text-white group-hover:text-blue-400 transition-colors">
              CampusLab
            </span>
          </div>

          <div className="h-4 w-px bg-slate-700 mx-2" />

          <div className="flex items-center gap-2 text-xs font-semibold text-slate-300">
            <span className="text-blue-400">{course.semester} CSE</span>
            <span>•</span>
            <span className="truncate">{course.code} {course.title}</span>
          </div>
        </div>

        {/* Right: Status Pill + Timer + Actions */}
        <div className="flex items-center gap-3">
          {/* Status Pill */}
          <span className="flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5]/10 border border-emerald-500/30 text-emerald-400">
            <span className="w-2 h-2 rounded-full bg-emerald-400 animate-pulse" />
            CONNECTED
          </span>

          {/* Live Countdown Timer */}
          <div className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-800 text-xs font-mono font-bold text-slate-300">
            {timerDisplay}
          </div>

          {/* Submit Lab Button */}
          <button
            onClick={handleSubmitLab}
            className="px-4 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all cursor-pointer"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Lab</span>
          </button>

          {/* End Session Button */}
          <button
            onClick={handleEndSession}
            className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold transition-colors flex items-center gap-1 cursor-pointer"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>End Session</span>
          </button>
        </div>
      </header>

      {/* Workspace Split Body */}
      <div className="flex-1 flex min-h-0 relative">
        {/* Left Collapsible Instructions Pane */}
        {leftPaneOpen && (
          <motion.div
            initial={{ width: 0, opacity: 0 }}
            animate={{ width: '32%', opacity: 1 }}
            exit={{ width: 0, opacity: 0 }}
            transition={{ duration: 0.2 }}
            className="h-full bg-white text-slate-900 border-r border-[#E2E8F0] overflow-y-auto p-6 flex flex-col justify-between shrink-0"
          >
            <div className="space-y-6">
              {/* Exp Title with Collapse Icon */}
              <div className="flex items-start justify-between gap-2 border-b border-slate-100 pb-4">
                <div>
                  <div className="flex items-center gap-1.5 text-[#2563EB] text-xs font-bold mb-1">
                    <ChevronDown className="w-4 h-4" />
                    <span>Experiment Task</span>
                  </div>
                  <h2 className="text-base sm:text-lg font-black text-slate-900 leading-tight">
                    Exp {experiment.expNumber.toString().padStart(2, '0')}: {experiment.title}
                  </h2>
                  <p className="text-xs text-slate-600 mt-2 leading-relaxed">
                    {experiment.question}
                  </p>
                </div>
                <button
                  onClick={handleTogglePane}
                  title="Collapse Instructions"
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100 cursor-pointer"
                >
                  <ChevronLeft className="w-4 h-4" />
                </button>
              </div>

              {/* Objectives */}
              <div className="space-y-2">
                <h3 className="text-xs font-extrabold uppercase tracking-wider text-slate-500">
                  Objectives
                </h3>
                <ul className="space-y-1.5 text-xs text-slate-700">
                  {experiment.objectives.map((obj, oIdx) => (
                    <li key={oIdx} className="flex items-center gap-2">
                      <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                      {obj}
                    </li>
                  ))}
                </ul>
              </div>

              {/* Interactive Checklist / Tasks */}
              <div className="space-y-3">
                <h3 className="text-xs font-bold text-slate-900">
                  Lab Step-by-Step Tasks
                </h3>
                <div className="space-y-2">
                  {experiment.checklistSteps.map((step) => {
                    const isDone = tasks[step.id];
                    return (
                      <label
                        key={step.id}
                        onClick={() => setTasks((p) => ({ ...p, [step.id]: !p[step.id] }))}
                        className="flex items-start gap-2.5 text-xs text-slate-700 cursor-pointer select-none p-2 rounded-lg hover:bg-slate-50 border border-transparent hover:border-slate-200 transition-colors"
                      >
                        <div
                          className={`w-4 h-4 rounded flex items-center justify-center mt-0.5 transition-colors shrink-0 ${
                            isDone ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                          }`}
                        >
                          {isDone && <Check className="w-3 h-3" />}
                        </div>
                        <span className={isDone ? 'text-slate-900 font-medium' : 'text-slate-600'}>
                          Step {step.stepNumber}: {step.label}
                        </span>
                      </label>
                    );
                  })}
                </div>
              </div>
            </div>

            {/* Bottom Help note */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              Need assistance? Check KTU syllabus instructions or run <code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded font-mono">help</code> in the terminal.
            </div>
          </motion.div>
        )}

        {/* Collapsed Toggle Button when pane is closed */}
        {!leftPaneOpen && (
          <button
            onClick={handleTogglePane}
            className="absolute top-4 left-4 z-20 p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 shadow-xl border border-slate-700 cursor-pointer"
            title="Expand Instructions"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Right Main Terminal */}
        <div className="flex-1 flex flex-col bg-[#0B1120] min-w-0 overflow-hidden">
          <div className="flex-1 w-full h-full p-2 overflow-hidden relative">
            <div ref={terminalRef} className="w-full h-full terminal-container" />
          </div>

          {/* Bottom Status Bar */}
          <div className="h-9 bg-[#0F172A] border-t border-[#1E293B] px-4 flex items-center justify-between text-[11px] font-mono text-slate-400 shrink-0">
            <div className="flex items-center gap-3">
              <span className="flex items-center gap-1.5">
                <TerminalIcon className="w-3.5 h-3.5 text-blue-400" />
                <span>PTY 100×30</span>
              </span>
              <span>|</span>
              <span className="text-slate-300">
                {experiment.environment} (Non-root container)
              </span>
            </div>

            <div className="flex items-center gap-3">
              <button
                onClick={resetTerminal}
                className="hover:text-white flex items-center gap-1 transition-colors text-slate-300 cursor-pointer"
                title="Reset Terminal Buffer"
              >
                <RotateCcw className="w-3 h-3" />
                <span>Reset Terminal</span>
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Lab Submission Confirmation Modal */}
      {submissionModalOpen && (
        <div className="fixed inset-0 z-50 bg-black/70 backdrop-blur-sm flex items-center justify-center p-4">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="bg-white text-slate-900 rounded-2xl max-w-lg w-full p-6 shadow-2xl border border-slate-200 space-y-5"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <div className="flex items-center gap-2 text-blue-600 font-bold text-sm">
                <ShieldCheck className="w-5 h-5 text-emerald-600" />
                <span>Confirm Experiment Submission</span>
              </div>
              <button
                onClick={() => setSubmissionModalOpen(false)}
                className="text-slate-400 hover:text-slate-600 cursor-pointer"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="space-y-3">
              <div>
                <span className="text-xs font-semibold text-slate-500 uppercase tracking-wider">
                  Target Course &amp; Experiment
                </span>
                <p className="text-sm font-black text-slate-900">
                  {course.code}: {course.title}
                </p>
                <p className="text-xs font-bold text-blue-600 mt-0.5">
                  Exp {experiment.expNumber.toString().padStart(2, '0')}: {experiment.title}
                </p>
              </div>

              <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs space-y-2">
                <div className="flex justify-between text-slate-600">
                  <span>Completed Tasks:</span>
                  <span className="font-bold text-slate-900">
                    {Object.values(tasks).filter(Boolean).length}/{Object.keys(tasks).length}
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Artifacts Attached:</span>
                  <span className="font-bold text-emerald-600">
                    {experiment.submissionRequirements.fileTypes[0]} + log
                  </span>
                </div>
                <div className="flex justify-between text-slate-600">
                  <span>Environment:</span>
                  <span className="font-mono text-slate-700">{experiment.environment}</span>
                </div>
              </div>

              <p className="text-xs text-slate-500">
                Your container session log and output files will be automatically submitted to the KTU Continuous Internal Assessment (CIA) evaluator.
              </p>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSubmissionModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100 transition-colors cursor-pointer"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all cursor-pointer"
              >
                {isSubmitting ? (
                  <span>Submitting to Auto-Grader...</span>
                ) : (
                  <>
                    <Send className="w-3.5 h-3.5" />
                    <span>Confirm &amp; Submit</span>
                  </>
                )}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
