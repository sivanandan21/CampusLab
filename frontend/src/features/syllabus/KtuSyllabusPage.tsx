import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Download, ArrowUpRight } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { KTU_2024_CSE_COURSES } from '../../data/ktu2024CseLabs';
import { SemesterId } from '../../types/lab';
import { useToast } from '../../app/ToastProvider';

const SEMESTERS: SemesterId[] = ['S1', 'S2', 'S3', 'S4', 'S5', 'S6', 'S7', 'S8'];

export default function KtuSyllabusPage() {
  const [selectedSemester, setSelectedSemester] = useState<SemesterId>('S4');
  const [searchVal, setSearchVal] = useState('');
  const navigate = useNavigate();
  const { showToast } = useToast();

  const semesterCourses = KTU_2024_CSE_COURSES.filter((c) => c.semester === selectedSemester);

  const filteredCourses = semesterCourses.filter((course) => {
    if (!searchVal.trim()) return true;
    const q = searchVal.toLowerCase();
    return (
      course.code.toLowerCase().includes(q) ||
      course.title.toLowerCase().includes(q) ||
      course.topics.some((t) => t.toLowerCase().includes(q))
    );
  });

  const handleDownloadSyllabus = () => {
    showToast('Downloading official APJ Abdul Kalam Technological University B.Tech CSE 2024 Scheme Syllabus...', 'info');
    setTimeout(() => {
      showToast('KTU_2024_CSE_Syllabus.pdf downloaded!');
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      {/* Header */}
      <Topbar
        title={
          <div className="flex items-center gap-2.5">
            <h1 className="text-base font-bold text-slate-900 tracking-tight">
              KTU 2024 Scheme Syllabus
            </h1>
            <span className="px-2 py-0.5 rounded-full text-[10px] font-semibold bg-slate-200 text-slate-700">
              B.Tech CSE
            </span>
          </div>
        }
        searchValue={searchVal}
        onSearchChange={setSearchVal}
        searchPlaceholder="Search course code or lab topic..."
      />

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Horizontal Semester Pills with Download Button */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <div className="flex items-center gap-2 overflow-x-auto pb-1 scrollbar-none">
            {SEMESTERS.map((sem) => {
              const isSelected = selectedSemester === sem;
              return (
                <button
                  key={sem}
                  onClick={() => setSelectedSemester(sem)}
                  className={`px-5 py-1.5 rounded-full text-xs font-bold transition-all ${
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

          <button
            onClick={handleDownloadSyllabus}
            className="px-3.5 py-1.5 rounded-lg bg-white hover:bg-slate-50 border border-slate-300 text-slate-800 text-xs font-bold shadow-sm flex items-center gap-1.5 self-start sm:self-auto shrink-0 transition-colors"
          >
            <Download className="w-3 h-3" />
            <span>Official PDF</span>
          </button>
        </div>

        {/* Section Heading */}
        <div>
          <h2 className="text-sm font-bold text-slate-900 tracking-tight">
            Semester {selectedSemester.replace('S', '')} Syllabus &amp; Lab Directory
          </h2>
        </div>

        {/* 3-Column Syllabus Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {filteredCourses.map((course) => (
            <div
              key={course.code}
              className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-4 hover:shadow-md transition-shadow"
            >
              <div className="space-y-3">
                {/* Course Title and Code */}
                <div>
                  <h3 className="text-sm font-bold text-slate-900">
                    {course.code} • {course.title}
                  </h3>
                </div>

                {/* Badges Row */}
                <div className="flex flex-wrap items-center gap-1.5">
                  <span className="px-2 py-0.5 rounded text-[10px] font-bold bg-[#2563EB] text-white">
                    {course.credits} Credits
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
                    {course.ltpr}
                  </span>
                  <span className="px-2 py-0.5 rounded text-[10px] font-medium bg-slate-100 text-slate-700">
                    {course.evaluation}
                  </span>
                </div>

                {/* Topics List */}
                <div className="pt-1 space-y-1.5">
                  <h4 className="text-[10px] font-bold text-slate-700 uppercase tracking-wider">
                    Topics
                  </h4>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {course.topics.map((topic, i) => (
                      <li key={i} className="flex items-start gap-2">
                        <span className="w-1 h-1 rounded-full bg-slate-400 mt-1.5 shrink-0" />
                        <span>{topic}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              {/* Bottom CTA Button */}
              <div className="pt-3 border-t border-slate-100">
                <button
                  onClick={() => {
                    const firstExp = course.experiments[0]?.id || `${course.code.toLowerCase()}-exp01`;
                    navigate(`/labs/${course.code}/${firstExp}`);
                  }}
                  className="w-full py-2 px-3 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center justify-center gap-1.5 transition-colors"
                >
                  <span>Open Lab Explorer</span>
                  <ArrowUpRight className="w-3 h-3" />
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
