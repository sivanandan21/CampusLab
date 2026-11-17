import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion, AnimatePresence } from 'framer-motion';
import { Terminal, Shield, ArrowRight, BookOpen, Layers } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { SemesterId, Course } from '../../types/lab';
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
      {/* Topbar matching Image 3 */}
      <Topbar
        title={
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg bg-blue-50 border border-blue-200 flex items-center justify-center text-blue-600">
              <Shield className="w-5 h-5 fill-blue-600/20" />
            </div>
            <h1 className="text-xl font-bold text-slate-900 tracking-tight">
              KTU 2024 Scheme • B.Tech CSE
            </h1>
          </div>
        }
        searchValue={searchVal}
        onSearchChange={setSearchVal}
        searchPlaceholder="Search courses, codes..."
      />

      <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
        {/* Horizontal S1-S8 Semester Pill Selector */}
        <div className="flex items-center justify-between gap-2 overflow-x-auto pb-2 scrollbar-none">
          <div className="flex items-center gap-3">
            {SEMESTERS.map((sem) => {
              const isSelected = selectedSemester === sem;
              return (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`relative px-7 py-2.5 rounded-full text-sm font-bold transition-all ${
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

        {/* Active Session Banner (Image 3) */}
        <div className="bg-white rounded-2xl border border-blue-200 p-6 shadow-sm flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
          <div className="space-y-1">
            <span className="text-xs font-semibold text-slate-400">Active Session</span>
            <div className="flex items-center gap-3">
              <h3 className="text-lg font-bold text-slate-900">
                PCCSL407 Operating Systems Lab
              </h3>
              <span className="inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-bold bg-[#ECFDF5] text-[#065F46] border border-[#A7F3D0]">
                <span className="w-2 h-2 rounded-full bg-[#10B981] animate-pulse" />
                READY
              </span>
            </div>
          </div>

          <button
            onClick={() => navigate('/workspace/s4-cse-os-lab')}
            className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-600/20 flex items-center gap-2 transition-all"
          >
            <span>Resume Terminal</span>
            <Terminal className="w-3.5 h-3.5" />
          </button>
        </div>

        {/* Responsive Grid of Illustrated Lab Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <AnimatePresence mode="popLayout">
            {filteredCourses.map((course) => (
              <motion.div
                key={course.code}
                layout
                initial={{ opacity: 0, y: 15 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, scale: 0.95 }}
                className="bg-white rounded-2xl border border-[#E2E8F0] overflow-hidden shadow-sm hover:shadow-md transition-all flex flex-col group"
              >
                {/* 16:9 Banner Image with Overlay and Info */}
                <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
                  <img
                    src={ASSETS.labs[course.code] || ASSETS.labs.PCCSL407}
                    alt={course.title}
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent" />

                  {/* Header badges inside image */}
                  <div className="absolute top-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-2.5 py-1 rounded-md text-xs font-mono font-bold bg-slate-900/80 text-white backdrop-blur-md border border-slate-700">
                      {course.code}
                    </span>
                    <span className="px-2.5 py-1 rounded-md text-xs font-semibold bg-blue-600/90 text-white">
                      {course.credits} Cr
                    </span>
                  </div>

                  <div className="absolute bottom-3 left-4 right-4 flex items-center justify-between text-white">
                    <h4 className="font-extrabold text-lg text-white drop-shadow-md">
                      {course.title}
                    </h4>
                    <span className="text-sm font-black text-blue-300">
                      {course.progressPercentage}%
                    </span>
                  </div>
                </div>

                {/* Card Content & Progress */}
                <div className="p-5 flex-1 flex flex-col justify-between space-y-4">
                  {/* Progress Bar */}
                  <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                    <div
                      className="bg-[#2563EB] h-2 rounded-full transition-all duration-500"
                      style={{ width: `${course.progressPercentage}%` }}
                    />
                  </div>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-xs font-semibold text-slate-500">
                      {course.completedExperiments}/{course.experimentsCount} Experiments Completed
                    </span>

                    <button
                      onClick={() => {
                        const firstExpId = course.experiments[0]?.id || 'exp-04';
                        navigate(`/labs/${course.code}/${firstExpId}`);
                      }}
                      className="px-4 py-2 rounded-xl bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold shadow-sm transition-colors"
                    >
                      Open Lab
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}

            {/* Upcoming Next Semester Card (Image 3) */}
            {selectedSemester === 'S4' && (
              <div className="relative rounded-2xl border border-dashed border-slate-300 overflow-hidden bg-gradient-to-br from-slate-100 to-slate-200/50 p-6 flex flex-col justify-between min-h-[260px] opacity-80 hover:opacity-100 transition-opacity">
                <div className="flex items-center justify-between">
                  <span className="px-3 py-1 rounded-full text-xs font-bold bg-slate-800 text-white">
                    S5
                  </span>
                  <span className="px-3 py-1 rounded-full text-xs font-semibold bg-white text-slate-600 border border-slate-300">
                    Upcoming
                  </span>
                </div>

                <div className="my-auto py-6">
                  <h4 className="text-lg font-bold text-slate-800 mb-1">
                    PCCSL507 Networks Lab &amp; PCCSL508 ML Lab
                  </h4>
                  <p className="text-xs text-slate-500">
                    Curriculum scheduled for Academic Session 2026–2027. S5 sandbox images provisioned.
                  </p>
                </div>

                <div className="pt-4 border-t border-slate-200 text-xs text-slate-500 font-medium flex justify-between items-center">
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
