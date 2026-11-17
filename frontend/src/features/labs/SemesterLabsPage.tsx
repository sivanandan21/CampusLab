import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { SemesterId } from '../../types/lab';
import { ASSETS } from '../../assets';

const SEMESTERS: SemesterId[] = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];

export default function SemesterLabsPage() {
  const [selectedSemester, setSelectedSemester] = useState<SemesterId>('S4');
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();

  const semesterCourses = KTU_2024_CSE_COURSES.filter((c) => c.semester === selectedSemester);

  const filteredCourses = semesterCourses.filter((course) => {
    if (!searchVal.trim()) return true;
    const q = searchVal.toLowerCase();
    return (
      course.code.toLowerCase().includes(q) ||
      course.title.toLowerCase().includes(q) ||
      course.category.toLowerCase().includes(q)
    );
  });

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      {/* Topbar */}
      <Topbar
        title={
          <div className="flex items-center gap-2.5">
            <div className="w-7 h-7 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Shield className="w-4 h-4 fill-blue-600/20" />
            </div>
            <h1 className="text-base font-bold text-slate-900 tracking-tight">
              KTU 2024 Scheme • B.Tech CSE
            </h1>
          </div>
        }
        searchValue={searchVal}
        onSearchChange={setSearchVal}
        searchPlaceholder="Search courses, codes..."
      />

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Horizontal S1-S8 Semester Pill Selector */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-1 scrollbar-none">
          <div className="flex items-center gap-2">
            {SEMESTERS.map((sem) => {
              const isSelected = selectedSemester === sem;
              return (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`relative px-5 py-2 rounded-full text-xs font-bold transition-all ${
                    isSelected
                      ? 'bg-[#2563EB] text-white shadow-md shadow-blue-500/30'
                      : 'bg-white text-slate-700 hover:text-slate-900 hover:bg-slate-50 border border-slate-200'
                  }`}
                >
                  {sem}
                </button>
              );
            })}
          </div>
        </div>

        {/* Active Session Banner */}
        <div className="bg-white rounded-xl border border-blue-200 p-4 sm:p-5 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-3">
          <div className="space-y-0.5">
            <span className="text-[11px] font-semibold text-slate-400">Active Session</span>
            <div className="flex items-center gap-2.5">
              <h3 className="text-base font-bold text-slate-900">
                PCCSL407 Operating Systems Lab
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2 py-0.5 rounded-full text-[10px] font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                <span className="w-1.5 h-1.5 rounded-full bg-[#10B981] animate-pulse" />
                READY
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/workspace/s4-cse-os-lab')}
            className="px-4 py-2 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-1.5 transition-all"
          >
            <span>Resume Terminal</span>
            <Terminal className="w-3 h-3" />
          </button>
        </div>

        {/* Responsive Grid of Illustrated Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.code}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* Banner Image */}
                <div className="relative h-36 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={ASSETS.labs[course.code] || ASSETS.labs.PCCSL407}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Header badges inside image */}
                  <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
                    <span className="px-2 py-0.5 rounded text-[11px] font-mono font-bold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700">
                      {course.code}
                    </span>
                    <span className="px-2 py-0.5 rounded text-[11px] font-semibold bg-blue-600/90 text-white">
                      {course.credits} Cr
                    </span>
                  </div>

                  <div className="absolute bottom-2.5 left-3 right-3 flex items-center justify-between text-white">
                    <h4 className="font-extrabold text-base text-white drop-shadow-md">
                      {course.title}
                    </h4>
                    <span className="text-xs font-black text-blue-300">
                      {course.progressPercentage}%
                    </span>
                  </div>
                </div>

                {/* Card Content & Progress */}
                <div className="p-4 flex-1 flex flex-col justify-between space-y-3">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                    <div
                      className="bg-[#2563EB] h-1.5 rounded-full transition-all duration-500"
                      style={{ width: `${course.progressPercentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-1">
                    <span className="text-xs font-semibold text-slate-500">
                      {course.completedExperiments}/{course.experimentsCount} Experiments Completed
                    </span>

                    <button
                      onClick={() => {
                        const firstExpId = course.experiments[0]?.id || 'exp-04';
                        navigate(`/labs/${course.code}/${firstExpId}`);
                      }}
                      className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold shadow-sm transition-colors"
                    >
                      Open Lab
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Upcoming Next Semester Card */}
            {selectedSemester === 'S4' && (
              <div className="relative rounded-xl border border-dashed border-slate-300 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200/50 p-5 flex flex-col justify-between min-h-[220px] opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-bold bg-slate-800 text-white">
                    S5
                  </span>
                  <span className="px-2.5 py-0.5 rounded-full text-[11px] font-semibold bg-white text-slate-600 border border-slate-300">
                    Upcoming
                  </span>
                </div>

                <div className="my-auto py-3">
                  <h4 className="text-base font-bold text-slate-800 mb-0.5">
                    PCCSL507 Networks Lab &amp; PCCSL508 ML Lab
                  </h4>
                  <p className="text-xs text-slate-500">
                    Curriculum scheduled for Academic Session 2026–2027. S5 sandbox images provisioned.
                  </p>
                </div>

                <div className="pt-3 border-t border-slate-200 text-xs text-slate-500 font-medium flex justify-between items-center">
                  <span>Available after S4 ESE Evaluation</span>
                  <button
                    onClick={() => setSelectedSemester('S5')}
                    className="text-blue-600 font-bold hover:underline"
                  >
                    Preview Syllabus &rarr;
                  </button>
                </div>
              </div>
            )}
          </AnimatePresence>
        </div>
      </div>
    </div>
  );
}
