import React, { useState } from 'react';
import { Award, FileText, CheckCircle2, Download, ChevronDown } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { MOCK_CIA_RESULT } from '../../data/mockData';
import { useToast } from '../../app/ToastProvider';

export default function ResultsPage() {
  const [selectedSemester, setSelectedSemester] = useState('Semester 4 (Current)');
  const { showToast } = useToast();

  const handleDownloadPdf = () => {
    showToast('Generating official KTU 2024 Scheme Lab Grade Card PDF...', 'info');
    setTimeout(() => {
      showToast('Grade Card PDF downloaded successfully!');
    }, 1200);
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      <Topbar
        title={
          <div>
            <h1 className="text-2xl font-black text-slate-900 tracking-tight">
              My Lab Results • KTU 2024 CSE
            </h1>
          </div>
        }
        showSearch={false}
      />

      <div className="p-8 max-w-7xl w-full mx-auto space-y-8">
        {/* Subheader with Semester Dropdown & Download Button (Image 7) */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
          <p className="text-xs text-slate-500 font-medium">
            Continuous Internal Assessment (CIA) &amp; Lab Performance
          </p>

          <div className="flex items-center gap-3">
            <div className="relative">
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="appearance-none bg-white border border-[#E2E8F0] text-xs font-bold text-slate-700 py-2.5 pl-4 pr-9 rounded-xl shadow-sm focus:outline-none focus:border-[#2563EB]"
              >
                <option>Semester 4 (Current)</option>
                <option>Semester 3</option>
                <option>Semester 2</option>
                <option>Semester 1</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-3 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              onClick={handleDownloadPdf}
              className="px-5 py-2.5 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-2 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Report PDF</span>
            </button>
          </div>
        </div>

        {/* Top 3 KPI Cards (Image 7) */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Card 1: Semester Lab SGPA */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Semester Lab SGPA</span>
              <Award className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-black text-slate-900 tracking-tight">
                {MOCK_CIA_RESULT.sgpa}
              </span>
              <span className="px-2 py-0.5 rounded-md text-xs font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                {MOCK_CIA_RESULT.gradeLetter}
              </span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">Outstanding performance!</p>
          </div>

          {/* Card 2: Total CIA Score */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Total CIA Score</span>
              <FileText className="w-5 h-5 text-blue-500" />
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {MOCK_CIA_RESULT.totalCiaScore}{' '}
              <span className="text-lg text-slate-400 font-bold">/ {MOCK_CIA_RESULT.maxCiaScore}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">Internal evaluation completed</p>
          </div>

          {/* Card 3: Experiments Passed */}
          <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-2">
              <span className="text-xs font-semibold text-slate-500">Experiments Passed</span>
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            </div>
            <div className="text-3xl font-black text-slate-900 tracking-tight">
              {MOCK_CIA_RESULT.experimentsPassed}{' '}
              <span className="text-lg text-slate-400 font-bold">/ {MOCK_CIA_RESULT.totalExperiments}</span>
            </div>
            <p className="text-xs text-slate-400 mt-2 font-medium">All prerequisite tests passed</p>
          </div>
        </div>

        {/* Course Rubric Breakdown Cards (Image 7) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {MOCK_CIA_RESULT.courseResults.map((c) => {
            const isEmerald = c.gradeLetter === 'S';
            const badgeBg = isEmerald ? 'bg-[#ECFDF5]' : 'bg-[#EFF6FF]';
            const badgeBorder = isEmerald ? 'border-[#A7F3D0]' : 'border-[#BFDBFE]';
            const badgeText = isEmerald ? 'text-[#065F46]' : 'text-[#1D4ED8]';
            const barBg = isEmerald ? 'bg-[#10B981]' : 'bg-[#2563EB]';

            return (
              <div
                key={c.courseCode}
                className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm flex flex-col justify-between space-y-5"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-xs font-mono font-bold text-slate-400 block">
                      {c.courseCode}
                    </span>
                    <h3 className="text-base font-bold text-slate-900">
                      {c.courseTitle}
                    </h3>
                  </div>
                  <span
                    className={`px-3 py-1 rounded-xl text-xs font-bold border ${badgeBg} ${badgeBorder} ${badgeText}`}
                  >
                    Grade: {c.gradeLetter} • {c.ciaScore}/{c.maxScore} CIA
                  </span>
                </div>

                <div className="space-y-4 pt-2">
                  {c.rubrics.map((r, i) => {
                    const pct = (r.obtainedScore / r.maxScore) * 100;
                    return (
                      <div key={i} className="space-y-1.5">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>{r.name}</span>
                          <span className="font-mono">
                            {r.obtainedScore}/{r.maxScore}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-2 overflow-hidden">
                          <div
                            className={`${barBg} h-2 rounded-full transition-all duration-500`}
                            style={{ width: `${pct}%` }}
                          />
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            );
          })}
        </div>

        {/* Recent Submissions & Scores Table (Image 7) */}
        <div className="bg-white rounded-2xl border border-[#E2E8F0] p-6 shadow-sm space-y-4">
          <h3 className="text-base font-bold text-slate-900 tracking-tight">
            Recent Submissions &amp; Scores
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider">
                  <th className="pb-3 font-semibold">Experiment Title</th>
                  <th className="pb-3 font-semibold">Course</th>
                  <th className="pb-3 font-semibold">CIA Score</th>
                  <th className="pb-3 font-semibold">Grade</th>
                  <th className="pb-3 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {MOCK_CIA_RESULT.recentSubmissions.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-3.5 text-slate-900 font-bold">{row.experimentTitle}</td>
                    <td className="py-3.5 text-slate-500 font-mono">• {row.courseCode}</td>
                    <td className="py-3.5 text-slate-900 font-mono font-bold">
                      {row.ciaScore} / {row.maxScore}
                    </td>
                    <td className="py-3.5">
                      <span
                        className={`px-2 py-0.5 rounded text-xs font-black ${
                          row.grade === 'S'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {row.grade}
                      </span>
                    </td>
                    <td className="py-3.5">
                      <span className="inline-flex items-center gap-1.5 text-xs text-slate-700 font-medium">
                        <span className="w-2 h-2 rounded-full bg-emerald-500" />
                        {row.status}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}
