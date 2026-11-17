import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play,
  ArrowRight,
  Clock,
  CheckCircle2,
  MoreHorizontal,
  SlidersHorizontal,
  Sparkles,
  TrendingUp,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import ProgressRing from '../../components/ProgressRing';
import StatusPill from '../../components/StatusPill';
import { ASSETS } from '../../assets';

export default function DashboardPage() {
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      {/* Topbar */}
      <Topbar
        searchValue={searchVal}
        onSearchChange={setSearchVal}
        searchPlaceholder="Search labs, submissions..."
      />

      {/* Main Dashboard Canvas */}
      <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
        {/* Continue Lab Hero Banner */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-r from-[#1D4ED8] via-[#1E40AF] to-[#0F172A] p-8 sm:p-10 text-white shadow-xl shadow-blue-900/10 border border-blue-600/30">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-96 h-96 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center relative z-10">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-[11px] font-bold uppercase tracking-widest text-blue-200 bg-blue-500/20 border border-blue-400/30 px-3 py-1 rounded-full inline-block">
                ACTIVE SESSION
              </span>

              <h2 className="text-2xl sm:text-3xl font-extrabold tracking-tight text-white leading-tight">
                Continue Lab: PCCSL407 Operating Systems Lab
              </h2>

              <p className="text-sm font-medium text-blue-100/90">
                S4 CSE • Batch A
              </p>

              {/* Status pills row */}
              <div className="flex flex-wrap items-center gap-3 pt-1">
                <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                  <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                  READY • 42m left
                </span>
                <span className="text-xs font-semibold text-blue-200 bg-blue-900/40 border border-blue-400/20 px-3 py-1 rounded-full">
                  Exp 04: Process Scheduling (SJF)
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-3">
                <button
                  onClick={() => navigate('/workspace/s4-cse-os-lab')}
                  className="px-6 py-3 rounded-xl bg-white hover:bg-blue-50 text-[#1D4ED8] font-bold text-sm shadow-lg shadow-black/20 flex items-center gap-2.5 transition-all transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  <Play className="w-4 h-4 fill-[#1D4ED8]" />
                  <span>Resume Lab</span>
                </button>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="relative w-72 h-44 rounded-2xl bg-slate-900/90 border border-blue-400/30 p-4 shadow-2xl backdrop-blur-md flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-2">
                  <div className="flex items-center gap-1.5">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[10px] font-mono text-blue-300">s4-os-terminal</span>
                </div>
                <div className="font-mono text-xs text-blue-200 space-y-1">
                  <p className="text-emerald-400">&gt; OS Process Tree</p>
                  <p className="text-slate-400">PID: 12450 (Active)</p>
                  <p className="text-cyan-300">CPU Burst: 4.2ms</p>
                </div>
                <div className="text-[10px] font-mono text-slate-500 flex justify-between">
                  <span>Ubuntu 24.04</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Up Next for You */}
        <div className="space-y-4">
          <div className="flex items-center justify-between">
            <h3 className="text-lg font-bold text-slate-900 tracking-tight">Up Next for You</h3>
            <Link to="/labs" className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Card 1: PCCSL408 DBMS Lab */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-32 w-full bg-slate-900 overflow-hidden">
                <img
                  src={ASSETS.labs.PCCSL408}
                  alt="DBMS Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#FEF2F2] text-[#B91C1C] border border-[#FECACA]">
                  Due Tomorrow
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    PCCSL408 DBMS Lab
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    Exp 05: Triggers & Procedures
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/labs/PCCSL408/dbms-exp-05')}
                    className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors"
                  >
                    Start Lab
                  </button>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Est. 1.5 hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: PBCST404 Computer Org & Arch */}
            <div className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-32 w-full bg-slate-900 overflow-hidden">
                <img
                  src={ASSETS.labs.PBCST404}
                  alt="Computer Org & Arch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-3 right-3 px-2.5 py-1 rounded-md text-[11px] font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                  Due in 5 Days
                </span>
              </div>
              <div className="p-5 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-base font-bold text-slate-900 mb-1">
                    PBCST404 Computer Org & Arch
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-4">
                    Lab Task: ALU Design & Simulation
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/labs')}
                    className="px-4 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors"
                  >
                    Open Task
                  </button>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3.5 h-3.5 text-slate-400" />
                    Est. 2 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2-Card Row: Progress & Latest Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {/* Left: S4 Lab Progress */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-slate-900">S4 Lab Progress</h4>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-5 h-5" />
              </button>
            </div>

            <div className="flex items-center gap-6 py-2">
              <ProgressRing percentage={60} size={110} strokeWidth={10} />
              <div className="space-y-3">
                <div>
                  <div className="text-2xl font-black text-slate-900 tracking-tight">12/20</div>
                  <div className="text-xs font-medium text-slate-500">Labs Completed</div>
                </div>
                <div>
                  <div className="text-lg font-bold text-slate-900 flex items-center gap-1.5">
                    <span>45.5/50</span>
                    <span className="text-xs text-emerald-600 font-bold bg-emerald-50 px-1.5 py-0.5 rounded flex items-center gap-0.5">
                      <TrendingUp className="w-3 h-3" />
                      CIA Avg
                    </span>
                  </div>
                  <div className="text-[11px] text-slate-400">Current Internal Assessment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Latest Grade & Feedback */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-4">
              <h4 className="text-base font-bold text-slate-900">Latest Grade & Feedback</h4>
              <button className="text-slate-400 hover:text-slate-600">
                <SlidersHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-4">
                <span className="text-sm font-bold text-slate-800">
                  PCCSL407 Exp 03 • Shell Programming
                </span>
                <span className="px-3 py-1 rounded-xl text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                  46/50 (S)
                </span>
              </div>

              <div className="p-4 rounded-xl bg-slate-50 border border-slate-200/80 flex items-start gap-3">
                <div className="w-8 h-8 rounded-full overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Dr. Priya K."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="italic">
                    "Excellent logic and code documentation. Watch out for edge cases in input handling!"
                  </p>
                  <p className="text-[11px] font-bold text-slate-800 mt-1">
                    — Dr. Priya K. (Associate Professor, CSE)
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
