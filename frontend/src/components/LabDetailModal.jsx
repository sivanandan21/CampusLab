import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { X, Terminal, CheckCircle2, Copy, Check, FileCode, Play, ExternalLink, BookOpen } from 'lucide-react';

export default function LabDetailModal({ lab, onClose }) {
  const [copied, setCopied] = useState(false);
  const [activeTab, setActiveTab] = useState('experiments');

  if (!lab) return null;

  const sampleExperiments = [
    { num: 1, title: 'Environment Setup, Toolchain Verification & Hello World', status: 'Completed' },
    { num: 2, title: 'Input/Output Operations, Control Structures and Conditional Logic', status: 'Completed' },
    { num: 3, title: 'Data Structures, Memory Operations & Exception Handling', status: 'In Progress' },
    { num: 4, title: 'Modular Architecture, Functions, Recursion and Standard Libraries', status: 'Pending' },
    { num: 5, title: 'Advanced File I/O, Serialization and Stream Processing', status: 'Pending' },
    { num: 6, title: 'Final Project Implementation and Performance Benchmarking', status: 'Pending' },
  ];

  const handleCopyCode = () => {
    setCopied(true);
    setTimeout(() => setCopied(false), 2000);
  };

  return (
    <AnimatePresence>
      <div className="fixed inset-0 z-50 flex items-center justify-center p-4 sm:p-6 bg-black/80 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, scale: 0.95, y: 20 }}
          animate={{ opacity: 1, scale: 1, y: 0 }}
          exit={{ opacity: 0, scale: 0.95, y: 20 }}
          transition={{ duration: 0.2 }}
          className="relative w-full max-w-3xl max-h-[90vh] bg-slate-900 border border-slate-800 rounded-2xl shadow-2xl overflow-hidden flex flex-col"
        >
          {/* Header Banner */}
          <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
            <img
              src={lab.image}
              alt={lab.title}
              className="w-full h-full object-cover"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/60 to-transparent" />
            
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 rounded-full bg-slate-900/80 text-slate-300 hover:text-white hover:bg-slate-800 border border-slate-700 transition-colors"
            >
              <X className="w-5 h-5" />
            </button>

            <div className="absolute bottom-4 left-6 right-6">
              <div className="flex items-center gap-2 mb-1">
                <span className="px-2 py-0.5 rounded text-xs font-semibold bg-indigo-500/20 text-indigo-300 border border-indigo-500/30">
                  {lab.semesterLabel}
                </span>
                <span className="px-2 py-0.5 rounded text-xs font-mono bg-slate-800 text-slate-300 border border-slate-700">
                  {lab.code}
                </span>
              </div>
              <h2 className="text-2xl font-bold text-white tracking-tight">{lab.title}</h2>
            </div>
          </div>

          {/* Nav Tabs */}
          <div className="flex border-b border-slate-800 px-6 bg-slate-950/40">
            <button
              onClick={() => setActiveTab('experiments')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'experiments'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Experiments & Lab Manual
            </button>
            <button
              onClick={() => setActiveTab('code')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'code'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Starter Code
            </button>
            <button
              onClick={() => setActiveTab('overview')}
              className={`py-3 px-4 text-sm font-medium border-b-2 transition-colors ${
                activeTab === 'overview'
                  ? 'border-indigo-500 text-indigo-400'
                  : 'border-transparent text-slate-400 hover:text-slate-200'
              }`}
            >
              Syllabus & Info
            </button>
          </div>

          {/* Modal Body */}
          <div className="p-6 overflow-y-auto space-y-4 flex-1">
            {activeTab === 'experiments' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400 mb-2">
                  <span>Showing core laboratory assignments</span>
                  <span>Total: {lab.experimentsCount} experiments</span>
                </div>
                {sampleExperiments.map((exp) => (
                  <div
                    key={exp.num}
                    className="p-3.5 rounded-xl bg-slate-950/60 border border-slate-800/80 flex items-center justify-between hover:border-slate-700 transition-colors"
                  >
                    <div className="flex items-center gap-3">
                      <span className="w-7 h-7 rounded-lg bg-indigo-500/10 text-indigo-400 font-mono text-xs flex items-center justify-center border border-indigo-500/20">
                        0{exp.num}
                      </span>
                      <span className="text-sm font-medium text-slate-200">{exp.title}</span>
                    </div>
                    <span className={`text-[11px] px-2.5 py-1 rounded-full font-medium ${
                      exp.status === 'Completed'
                        ? 'bg-emerald-500/10 text-emerald-400 border border-emerald-500/20'
                        : exp.status === 'In Progress'
                        ? 'bg-amber-500/10 text-amber-400 border border-amber-500/20'
                        : 'bg-slate-800 text-slate-400'
                    }`}>
                      {exp.status}
                    </span>
                  </div>
                ))}
              </div>
            )}

            {activeTab === 'code' && (
              <div className="space-y-3">
                <div className="flex items-center justify-between text-xs text-slate-400">
                  <span className="font-mono">starter_template.{lab.tags[0]?.toLowerCase() === 'python' ? 'py' : lab.tags[0]?.toLowerCase() === 'java' ? 'java' : 'c'}</span>
                  <button
                    onClick={handleCopyCode}
                    className="flex items-center gap-1.5 px-2.5 py-1 rounded bg-slate-800 hover:bg-slate-700 text-slate-300 transition-colors"
                  >
                    {copied ? <Check className="w-3.5 h-3.5 text-emerald-400" /> : <Copy className="w-3.5 h-3.5" />}
                    <span>{copied ? 'Copied!' : 'Copy Code'}</span>
                  </button>
                </div>
                <pre className="p-4 rounded-xl bg-slate-950 border border-slate-800 font-mono text-xs text-indigo-200 overflow-x-auto leading-relaxed">
{`/* CampusLab - ${lab.title} (${lab.code})
 * Experiment 01: Initial Template
 */

#include <stdio.h>

int main() {
    printf("Welcome to CampusLab - ${lab.title}\\n");
    printf("Lab Code: ${lab.code}\\n");
    return 0;
}`}
                </pre>
              </div>
            )}

            {activeTab === 'overview' && (
              <div className="space-y-4 text-sm text-slate-300 leading-relaxed">
                <p>{lab.description}</p>
                <div className="p-4 rounded-xl bg-slate-950/70 border border-slate-800 space-y-2">
                  <h4 className="font-semibold text-white">Course Objectives:</h4>
                  <ul className="list-disc list-inside space-y-1 text-slate-400 text-xs">
                    <li>Understand underlying hardware & architectural constraints</li>
                    <li>Develop production-grade problem-solving techniques</li>
                    <li>Perform automated unit testing and validation</li>
                  </ul>
                </div>
              </div>
            )}
          </div>

          {/* Footer Action */}
          <div className="p-4 bg-slate-950 border-t border-slate-800 flex items-center justify-between">
            <span className="text-xs text-slate-400">
              CampusLab Academic Curriculum
            </span>
            <div className="flex items-center gap-3">
              <button
                onClick={onClose}
                className="px-4 py-2 rounded-xl text-sm font-medium text-slate-400 hover:text-white hover:bg-slate-900 transition-colors"
              >
                Close
              </button>
              <button
                onClick={() => alert(`Starting interactive lab environment for ${lab.title}`)}
                className="px-4 py-2 rounded-xl text-sm font-semibold bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-600/30 flex items-center gap-2 transition-all"
              >
                <Play className="w-4 h-4 fill-white" />
                Launch Lab Environment
              </button>
            </div>
          </div>
        </motion.div>
      </div>
    </AnimatePresence>
  );
}
