import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import {
  Play,
  ArrowRight,
  Clock,
  MoreHorizontal,
  SlidersHorizontal,
  TrendingUp,
} from 'lucide-react';
import Topbar from '../../components/Topbar';
import ProgressRing from '../../components/ProgressRing';
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
      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Continue Lab Hero Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-[#1D4ED8] via-[#1E40AF] to-[#0F172A] p-5 sm:p-6 text-white shadow-md shadow-blue-900/10 border border-blue-600/30">
          <div className="absolute top-0 right-0 -mt-10 -mr-10 w-80 h-80 rounded-full bg-blue-400/20 blur-3xl pointer-events-none" />

          <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-center relative z-10">
            <div className="lg:col-span-8 space-y-2.5">
              <span className="text-[10px] font-bold uppercase tracking-wider text-blue-200 bg-blue-500/20 border border-blue-400/30 px-2.5 py-0.5 rounded-full inline-block">
                ACTIVE SESSION
              </span>

              <h2 className="text-xl sm:text-2xl font-extrabold tracking-tight text-white leading-tight">
                Continue Lab: PCCSL407 Operating Systems Lab
              </h2>

              <p className="text-xs font-medium text-blue-100/90">
                S4 CSE • Batch A
              </p>

              {/* Status pills row */}
              <div className="flex flex-wrap items-center gap-2 pt-0.5">
                <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                  <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                  READY • 42m left
                </span>
                <span className="text-[11px] font-semibold text-blue-200 bg-blue-900/40 border border-blue-400/20 px-2.5 py-0.5 rounded-full">
                  Exp 04: Process Scheduling (SJF)
                </span>
              </div>

              {/* CTA Button */}
              <div className="pt-2">
                <button
                  onClick={() => navigate('/workspace/s4-cse-os-lab')}
                  className="px-4 py-2 rounded-xl bg-white hover:bg-blue-50 text-[#1D4ED8] font-bold text-xs shadow-md shadow-black/20 flex items-center gap-2 transition-all transform hover:scale-[1.02] active:scale-[0.99]"
                >
                  <Play className="w-3.5 h-3.5 fill-[#1D4ED8]" />
                  <span>Resume Lab</span>
                </button>
              </div>
            </div>

            {/* Right Side Illustration */}
            <div className="lg:col-span-4 hidden lg:flex justify-end">
              <div className="relative w-64 h-36 rounded-xl bg-slate-900/90 border border-blue-400/30 p-3.5 shadow-xl backdrop-blur-md flex flex-col justify-between">
                <div className="flex items-center justify-between border-b border-slate-800 pb-1.5">
                  <div className="flex items-center gap-1">
                    <span className="w-2 h-2 rounded-full bg-rose-500" />
                    <span className="w-2 h-2 rounded-full bg-amber-500" />
                    <span className="w-2 h-2 rounded-full bg-emerald-500" />
                  </div>
                  <span className="text-[9px] font-mono text-blue-300">s4-os-terminal</span>
                </div>
                <div className="font-mono text-[11px] text-blue-200 space-y-0.5">
                  <p className="text-emerald-400">&gt; OS Process Tree</p>
                  <p className="text-slate-400">PID: 12450 (Active)</p>
                  <p className="text-cyan-300">CPU Burst: 4.2ms</p>
                </div>
                <div className="text-[9px] font-mono text-slate-500 flex justify-between">
                  <span>Ubuntu 24.04</span>
                  <span className="text-emerald-400">● Live</span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Section: Up Next for You */}
        <div className="space-y-3">
          <div className="flex items-center justify-between">
            <h3 className="text-base font-bold text-slate-900 tracking-tight">Up Next for You</h3>
            <Link to="/labs" className="text-xs font-bold text-[#2563EB] hover:underline flex items-center gap-1">
              <span>View All</span>
              <ArrowRight className="w-3 h-3" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            {/* Card 1: PCCSL408 DBMS Lab */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-24 sm:h-28 w-full bg-slate-900 overflow-hidden">
                <img
                  src={ASSETS.labs.PCCSL408}
                  alt="DBMS Lab"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#FEF2F2] text-[#B91C1C] border border-[#FECACA]">
                  Due Tomorrow
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    PCCSL408 DBMS Lab
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Exp 05: Triggers &amp; Procedures
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/labs/PCCSL408/dbms-exp-05')}
                    className="px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors"
                  >
                    Start Lab
                  </button>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    Est. 1.5 hrs
                  </span>
                </div>
              </div>
            </div>

            {/* Card 2: PBCST404 Computer Org & Arch */}
            <div className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-shadow flex flex-col">
              <div className="relative h-24 sm:h-28 w-full bg-slate-900 overflow-hidden">
                <img
                  src={ASSETS.labs.PBCST404}
                  alt="Computer Org & Arch"
                  className="w-full h-full object-cover"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <span className="absolute top-2.5 right-2.5 px-2 py-0.5 rounded text-[10px] font-bold bg-[#EFF6FF] text-[#1D4ED8] border border-[#BFDBFE]">
                  Due in 5 Days
                </span>
              </div>
              <div className="p-4 flex-1 flex flex-col justify-between">
                <div>
                  <h4 className="text-sm font-bold text-slate-900 mb-0.5">
                    PBCST404 Computer Org &amp; Arch
                  </h4>
                  <p className="text-xs text-slate-500 font-medium mb-3">
                    Lab Task: ALU Design &amp; Simulation
                  </p>
                </div>
                <div className="flex items-center justify-between pt-2 border-t border-slate-100">
                  <button
                    onClick={() => navigate('/labs')}
                    className="px-3 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold transition-colors"
                  >
                    Open Task
                  </button>
                  <span className="text-xs font-semibold text-slate-500 flex items-center gap-1">
                    <Clock className="w-3 h-3 text-slate-400" />
                    Est. 2 hrs
                  </span>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom 2-Card Row: Progress & Latest Feedback */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left: S4 Lab Progress */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-900">S4 Lab Progress</h4>
              <button className="text-slate-400 hover:text-slate-600">
                <MoreHorizontal className="w-4 h-4" />
              </button>
            </div>

            <div className="flex items-center gap-5 py-1">
              <ProgressRing percentage={60} size={88} strokeWidth={8} />
              <div className="space-y-2">
                <div>
                  <div className="text-xl font-black text-slate-900 tracking-tight">12/20</div>
                  <div className="text-xs font-medium text-slate-500">Labs Completed</div>
                </div>
                <div>
                  <div className="text-base font-bold text-slate-900 flex items-center gap-1.5">
                    <span>45.5/50</span>
                    <span className="text-[10px] text-emerald-600 font-bold bg-emerald-50 px-1 py-0.5 rounded flex items-center gap-0.5">
                      <TrendingUp className="w-2.5 h-2.5" />
                      CIA Avg
                    </span>
                  </div>
                  <div className="text-[10px] text-slate-400">Current Internal Assessment</div>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Latest Grade & Feedback */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-3">
              <h4 className="text-sm font-bold text-slate-900">Latest Grade &amp; Feedback</h4>
              <button className="text-slate-400 hover:text-slate-600">
                <SlidersHorizontal className="w-3.5 h-3.5" />
              </button>
            </div>

            <div>
              <div className="flex items-center justify-between mb-3">
                <span className="text-xs font-bold text-slate-800">
                  PCCSL407 Exp 03 • Shell Programming
                </span>
                <span className="px-2.5 py-0.5 rounded-lg text-xs font-black bg-blue-50 text-blue-700 border border-blue-200">
                  46/50 (S)
                </span>
              </div>

              <div className="p-3 rounded-lg bg-slate-50 border border-slate-200/80 flex items-start gap-2.5">
                <div className="w-7 h-7 rounded-full overflow-hidden bg-slate-200 border border-slate-300 shrink-0">
                  <img
                    src="https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?auto=format&fit=crop&w=120&q=80"
                    alt="Dr. Priya K."
                    className="w-full h-full object-cover"
                  />
                </div>
                <div className="text-xs text-slate-600 leading-relaxed">
                  <p className="italic text-[11px]">
                    "Excellent logic and code documentation. Watch out for edge cases in input handling!"
                  </p>
                  <p className="text-[10px] font-bold text-slate-800 mt-1">
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
