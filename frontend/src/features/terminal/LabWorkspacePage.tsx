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
} from 'lucide-react';
import { useTerminalSocket } from '../../hooks/useTerminalSocket';
import { useCountdown } from '../../hooks/useCountdown';
import { useToast } from '../../app/ToastProvider';
import { sessionService } from '../../services/sessionService';
import { ASSETS } from '../../assets';

export default function LabWorkspacePage() {
  const { sessionId = 's4-cse-os-lab' } = useParams();
  const navigate = useNavigate();
  const { showToast } = useToast();

  const [leftPaneOpen, setLeftPaneOpen] = useState(true);
  const [tasks, setTasks] = useState({
    t1_create: true,
    t1_fork: true,
    t1_compile: false,
    t1_execute: false,
    t2_verify: false,
  });

  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submissionModalOpen, setSubmissionModalOpen] = useState(false);

  const { formatted: timerDisplay, secondsLeft } = useCountdown(42 * 60 + 18, true);

  const { terminalRef, connectionStatus, fitTerminal, resetTerminal } = useTerminalSocket({
    sessionId,
    onCommandRun: (cmd) => {
      if (cmd.includes('gcc')) {
        setTasks((prev) => ({ ...prev, t1_compile: true }));
      }
      if (cmd.includes('process_tree')) {
        setTasks((prev) => ({ ...prev, t1_execute: true }));
      }
      if (cmd.includes('ps')) {
        setTasks((prev) => ({ ...prev, t2_verify: true }));
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
    if (window.confirm('Are you sure you want to end this lab session? Unsaved terminal data will be lost.')) {
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
      showToast('Experiment submitted successfully! Auto-grader awarded 48/50 (S).');
      navigate('/submissions');
    }, 1200);
  };

  return (
    <div className="h-screen w-screen flex flex-col bg-[#0B1120] text-slate-100 select-none overflow-hidden font-sans">
      {/* Dark Navy Top Toolbar (Image 5) */}
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
            <span className="text-blue-400">S4 CSE</span>
            <span>•</span>
            <span className="truncate">PCCSL407 Operating Systems Lab</span>
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
            className="px-4 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all"
          >
            <Send className="w-3.5 h-3.5" />
            <span>Submit Lab</span>
          </button>

          {/* End Session Button */}
          <button
            onClick={handleEndSession}
            className="px-3 py-1.5 rounded-lg bg-rose-500/10 hover:bg-rose-500/20 text-rose-400 border border-rose-500/30 text-xs font-bold transition-colors flex items-center gap-1"
          >
            <LogOut className="w-3.5 h-3.5" />
            <span>End Session</span>
          </button>
        </div>
      </header>

      {/* Workspace Split Body */}
      <div className="flex-1 flex min-h-0 relative">
        {/* Left Collapsible Instructions Pane (Image 5) */}
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
                  <h2 className="text-lg font-black text-slate-900 leading-tight">
                    Exp 04: Process Scheduling &amp; Fork System Calls
                  </h2>
                </div>
                <button
                  onClick={handleTogglePane}
                  title="Collapse Instructions"
                  className="p-1 rounded-md text-slate-400 hover:text-slate-600 hover:bg-slate-100"
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
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    Understand process creation using fork()
                  </li>
                  <li className="flex items-center gap-2">
                    <span className="w-1.5 h-1.5 rounded-full bg-blue-600 shrink-0" />
                    Practice process scheduling &amp; system calls
                  </li>
                </ul>
              </div>

              {/* Task 01: Process Tree using fork() */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-slate-900">
                  Task 01: Process Tree using fork()
                </h3>
                <div className="space-y-2">
                  <label
                    onClick={() => setTasks((p) => ({ ...p, t1_create: !p.t1_create }))}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        tasks.t1_create ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                      }`}
                    >
                      {tasks.t1_create && <Check className="w-3 h-3" />}
                    </div>
                    <span className={tasks.t1_create ? 'text-slate-900 font-medium' : ''}>
                      Create process_tree.c
                    </span>
                  </label>

                  <label
                    onClick={() => setTasks((p) => ({ ...p, t1_fork: !p.t1_fork }))}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        tasks.t1_fork ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                      }`}
                    >
                      {tasks.t1_fork && <Check className="w-3 h-3" />}
                    </div>
                    <span className={tasks.t1_fork ? 'text-slate-900 font-medium' : ''}>
                      Implement fork() system calls
                    </span>
                  </label>

                  <label
                    onClick={() => setTasks((p) => ({ ...p, t1_compile: !p.t1_compile }))}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        tasks.t1_compile ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                      }`}
                    >
                      {tasks.t1_compile && <Check className="w-3 h-3" />}
                    </div>
                    <span className={tasks.t1_compile ? 'text-slate-900 font-medium' : ''}>
                      Compile process_tree.c
                    </span>
                  </label>

                  <label
                    onClick={() => setTasks((p) => ({ ...p, t1_execute: !p.t1_execute }))}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        tasks.t1_execute ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                      }`}
                    >
                      {tasks.t1_execute && <Check className="w-3 h-3" />}
                    </div>
                    <span className={tasks.t1_execute ? 'text-slate-900 font-medium' : ''}>
                      Execute and verify process tree
                    </span>
                  </label>
                </div>
              </div>

              {/* Task 02: Verification using ps */}
              <div className="space-y-2.5">
                <h3 className="text-xs font-bold text-slate-900">
                  Task 02: Verification using ps
                </h3>
                <div>
                  <label
                    onClick={() => setTasks((p) => ({ ...p, t2_verify: !p.t2_verify }))}
                    className="flex items-center gap-2.5 text-xs text-slate-700 cursor-pointer select-none"
                  >
                    <div
                      className={`w-4 h-4 rounded flex items-center justify-center transition-colors ${
                        tasks.t2_verify ? 'bg-[#2563EB] text-white' : 'border border-slate-300'
                      }`}
                    >
                      {tasks.t2_verify && <Check className="w-3 h-3" />}
                    </div>
                    <span className={tasks.t2_verify ? 'text-slate-900 font-medium' : ''}>
                      Verify process tree using ps command
                    </span>
                  </label>
                </div>
              </div>
            </div>

            {/* Bottom Help note */}
            <div className="pt-4 border-t border-slate-100 text-[11px] text-slate-400">
              Need assistance? Check KTU syllabus instructions or execute <code className="bg-slate-100 text-blue-600 px-1 py-0.5 rounded font-mono">cat Makefile</code> in the terminal.
            </div>
          </motion.div>
        )}

        {/* Collapsed Toggle Button when pane is closed */}
        {!leftPaneOpen && (
          <button
            onClick={handleTogglePane}
            className="absolute top-4 left-4 z-20 p-2 rounded-xl bg-slate-800 text-slate-200 hover:bg-slate-700 shadow-xl border border-slate-700"
            title="Expand Instructions"
          >
            <ChevronRight className="w-4 h-4" />
          </button>
        )}

        {/* Right Main Terminal (Image 5) */}
        <div className="flex-1 flex flex-col bg-[#0B1120] min-w-0 overflow-hidden">
          <div className="flex-1 w-full h-full p-2 overflow-hidden relative">
            <div ref={terminalRef} className="w-full h-full terminal-container" />
          </div>

          {/* Bottom Terminal Status Bar (Image 5) */}
          <footer className="h-8 bg-[#0F172A] border-t border-[#1E293B] px-4 flex items-center justify-between text-[11px] text-slate-400 font-mono">
            <span>PTY 100×30 | Non-root isolated container</span>
            <button
              onClick={resetTerminal}
              className="flex items-center gap-1.5 text-slate-400 hover:text-white transition-colors"
            >
              <RotateCcw className="w-3 h-3" />
              <span>Reset Terminal</span>
            </button>
          </footer>
        </div>
      </div>

      {/* Submission Confirmation Modal */}
      {submissionModalOpen && (
        <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
          <motion.div
            initial={{ scale: 0.95, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            className="w-full max-w-md bg-white rounded-2xl p-6 text-slate-900 shadow-2xl border border-slate-200 space-y-4"
          >
            <div className="flex items-center justify-between border-b border-slate-100 pb-3">
              <h3 className="font-bold text-base text-slate-900">Confirm Lab Submission</h3>
              <button
                onClick={() => setSubmissionModalOpen(false)}
                className="text-slate-400 hover:text-slate-600"
              >
                <X className="w-4 h-4" />
              </button>
            </div>

            <p className="text-xs text-slate-600 leading-relaxed">
              You are about to submit <strong>Exp 04: Process Scheduling &amp; Fork System Calls</strong>. The automated evaluation test suite will verify process hierarchy and runtime output.
            </p>

            <div className="p-3 rounded-xl bg-slate-50 border border-slate-200 text-xs font-mono text-slate-700 space-y-1">
              <div>✓ process_tree.c (Uploaded)</div>
              <div>✓ Output verification logs</div>
              <div>✓ Isolated container snapshot</div>
            </div>

            <div className="flex items-center justify-end gap-3 pt-2">
              <button
                onClick={() => setSubmissionModalOpen(false)}
                className="px-4 py-2 rounded-xl text-xs font-bold text-slate-600 hover:bg-slate-100"
              >
                Cancel
              </button>
              <button
                onClick={handleConfirmSubmit}
                disabled={isSubmitting}
                className="px-5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20"
              >
                {isSubmitting ? 'Evaluating...' : 'Confirm & Submit'}
              </button>
            </div>
          </motion.div>
        </div>
      )}
    </div>
  );
}
