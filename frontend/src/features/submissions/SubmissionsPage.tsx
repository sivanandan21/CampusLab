import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  ClipboardList,
  Award,
  CheckCircle2,
  FileCode,
  X,
  ExternalLink,
  MessageSquare,
  Sparkles,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import { MOCK_SUBMISSIONS } from '../../data/mockData';
import { Submission } from '../../types/submission';
import { useToast } from '../../app/ToastProvider';

export default function SubmissionsPage() {
  const [selectedSub, setSelectedSub] = useState<Submission | null>(null);
  const [modalMode, setModalMode] = useState<'report' | 'code' | null>(null);
  const { showToast } = useToast();

  const handleOpenReport = (sub: Submission) => {
    setSelectedSub(sub);
    setModalMode('report');
  };

  const handleOpenCode = (sub: Submission) => {
    setSelectedSub(sub);
    setModalMode('code');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      <Topbar
        title={
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              My Submissions
            </h1>
            <p className="text-xs font-semibold text-slate-500">
              KTU 2024 CSE • Current Semester
            </p>
          </div>
        }
        showSearch={false}
      />

      <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
        {/* Friendly Subtitle Banner (Image 6) */}
        <div>
          <p className="text-sm font-medium text-slate-600">
            Keep up the great work, Adarsh! 👍 Track your lab progress and feedback.
          </p>
        </div>

        {/* Top 3 KPI Summary Cards (Image 6) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Labs Completed */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-slate-100 flex items-center justify-center text-slate-600">
                <ClipboardList className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Labs Completed</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight">12/20</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-slate-500 h-2 rounded-full" style={{ width: '60%' }} />
            </div>
          </div>

          {/* Card 2: Current CIA Score */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-emerald-50 flex items-center justify-center text-emerald-600">
                <Award className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Current CIA Score</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight">45/50</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#10B981] h-2 rounded-full" style={{ width: '90%' }} />
            </div>
          </div>

          {/* Card 3: Auto-Checks Passed */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center gap-3 mb-3">
              <div className="w-10 h-10 rounded-xl bg-blue-50 flex items-center justify-center text-blue-600">
                <CheckCircle2 className="w-5 h-5" />
              </div>
              <div>
                <span className="text-xs font-semibold text-slate-500 block">Auto-Checks Passed</span>
                <span className="text-2xl font-black text-slate-900 tracking-tight">100%</span>
              </div>
            </div>
            <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
              <div className="bg-[#2563EB] h-2 rounded-full" style={{ width: '100%' }} />
            </div>
          </div>
        </div>

        {/* Recent Submissions Section (Image 6) */}
        <div className="space-y-4">
          <h3 className="text-lg font-bold text-slate-900 tracking-tight">
            Recent Submissions
          </h3>

          <div className="space-y-6">
            {MOCK_SUBMISSIONS.map((sub) => (
              <div
                key={sub.id}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between space-y-4"
              >
                {/* Header row with badges and code thumbnail */}
                <div className="flex flex-col sm:flex-row items-start justify-between gap-4">
                  <div className="space-y-2">
                    <h4 className="text-base font-bold text-slate-900">
                      {sub.experimentTitle}
                    </h4>

                    <div className="flex flex-wrap items-center gap-2">
                      <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                        Graded • {sub.score}/{sub.maxScore}
                      </span>
                      {sub.autoCheckPassed && (
                        <span className="px-3 py-0.5 rounded-full text-xs font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                          Auto-Check Passed
                        </span>
                      )}
                    </div>

                    <p className="text-xs text-slate-400">
                      Submitted {sub.submittedAt} • {sub.fileCount} File{sub.fileCount > 1 ? 's' : ''}
                    </p>
                  </div>

                  {/* Code Thumbnail Preview on right */}
                  <div className="w-48 h-20 rounded-xl bg-slate-950 p-2.5 font-mono text-[9px] text-emerald-400 overflow-hidden border border-slate-800 shadow-inner hidden sm:block">
                    <pre className="opacity-80 leading-tight">
                      {sub.codeSnippetPreview?.substring(0, 110)}...
                    </pre>
                  </div>
                </div>

                {/* Faculty Feedback Bubble (Image 6) */}
                {sub.facultyFeedback && (
                  <div className="p-3.5 rounded-xl bg-slate-50 border border-slate-200/80 flex items-center gap-2.5 text-xs text-slate-700">
                    <MessageSquare className="w-4 h-4 text-blue-600 shrink-0" />
                    <span>
                      <strong className="text-slate-900">Faculty Feedback: </strong>
                      {sub.facultyFeedback.comment}
                    </span>
                  </div>
                )}

                {/* Bottom Actions Row */}
                <div className="pt-2 flex items-center justify-end gap-3">
                  <button
                    onClick={() => handleOpenReport(sub)}
                    className="px-5 py-2.5 rounded-xl bg-[#0F172A] hover:bg-slate-800 text-white text-xs font-bold transition-colors"
                  >
                    View Report
                  </button>

                  <button
                    onClick={() => handleOpenCode(sub)}
                    className="px-4 py-2.5 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-700 text-xs font-bold transition-colors"
                  >
                    Code Review
                  </button>

                  <button
                    onClick={() => {
                      showToast(`Submission details for ${sub.experimentTitle}`);
                    }}
                    className="px-3 py-2 text-xs font-semibold text-slate-500 hover:text-slate-800"
                  >
                    Details
                  </button>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Modal for View Report / Code Review */}
      <AnimatePresence>
        {modalMode && selectedSub && (
          <div className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-black/75 backdrop-blur-sm">
            <motion.div
              initial={{ scale: 0.95, opacity: 0 }}
              animate={{ scale: 1, opacity: 1 }}
              exit={{ scale: 0.95, opacity: 0 }}
              className="w-full max-w-2xl bg-white rounded-2xl p-6 text-slate-900 shadow-2xl border border-slate-200 space-y-4"
            >
              <div className="flex items-center justify-between border-b border-slate-100 pb-3">
                <div>
                  <h3 className="font-bold text-base text-slate-900">
                    {modalMode === 'report' ? 'Evaluation Report & Rubrics' : 'Submitted Code Review'}
                  </h3>
                  <span className="text-xs text-slate-500 font-mono">
                    {selectedSub.experimentTitle}
                  </span>
                </div>
                <button
                  onClick={() => setModalMode(null)}
                  className="text-slate-400 hover:text-slate-600"
                >
                  <X className="w-5 h-5" />
                </button>
              </div>

              {modalMode === 'report' ? (
                <div className="space-y-4 py-2">
                  <div className="grid grid-cols-2 gap-4">
                    <div className="p-4 rounded-xl bg-blue-50 border border-blue-200 text-center">
                      <span className="text-xs text-blue-600 font-bold block uppercase">Total Score</span>
                      <span className="text-3xl font-black text-blue-900">{selectedSub.score} / {selectedSub.maxScore}</span>
                    </div>
                    <div className="p-4 rounded-xl bg-emerald-50 border border-emerald-200 text-center">
                      <span className="text-xs text-emerald-600 font-bold block uppercase">Grade Awarded</span>
                      <span className="text-3xl font-black text-emerald-900">{selectedSub.grade} (Outstanding)</span>
                    </div>
                  </div>

                  <div className="space-y-3 pt-2">
                    <h4 className="text-xs font-bold text-slate-700 uppercase tracking-wider">Evaluation Rubric Breakdown</h4>
                    {selectedSub.rubrics?.map((r, i) => (
                      <div key={i} className="p-3 rounded-xl bg-slate-50 border border-slate-200 flex justify-between items-center text-xs">
                        <span className="font-semibold text-slate-800">{r.name}</span>
                        <span className="font-mono font-bold text-slate-900">{r.obtainedScore} / {r.maxScore}</span>
                      </div>
                    ))}
                  </div>
                </div>
              ) : (
                <div className="space-y-3 py-2">
                  <div className="flex items-center justify-between text-xs text-slate-500 font-mono">
                    <span>source_solution.{selectedSub.language || 'c'}</span>
                    <span>Syntax: {selectedSub.language?.toUpperCase() || 'C'}</span>
                  </div>
                  <pre className="p-4 rounded-xl bg-slate-950 text-emerald-300 font-mono text-xs overflow-x-auto leading-relaxed max-h-72">
                    {selectedSub.codeSnippetPreview}
                  </pre>
                </div>
              )}

              <div className="pt-3 border-t border-slate-100 flex justify-end">
                <button
                  onClick={() => setModalMode(null)}
                  className="px-5 py-2.5 rounded-xl bg-[#2563EB] text-white text-xs font-bold shadow-md shadow-blue-500/20"
                >
                  Close
                </button>
              </div>
            </motion.div>
          </div>
        )}
      </AnimatePresence>
    </div>
  );
}
