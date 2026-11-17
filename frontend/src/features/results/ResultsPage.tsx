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
            <h1 className="text-base font-black text-slate-900 tracking-tight">
              My Lab Results • KTU 2024 CSE
            </h1>
          </div>
        }
        showSearch={false}
      />

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Subheader */}
        <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-3">
          <p className="text-xs text-slate-500 font-medium">
            Continuous Internal Assessment (CIA) &amp; Lab Performance
          </p>

          <div className="flex items-center gap-2.5">
            <div className="relative">
              <select
                value={selectedSemester}
                onChange={(e) => setSelectedSemester(e.target.value)}
                className="appearance-none bg-white border border-[#E2E8F0] text-xs font-bold text-slate-700 py-1.5 pl-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-[#2563EB]"
              >
                <option>Semester 4 (Current)</option>
                <option>Semester 3</option>
                <option>Semester 2</option>
                <option>Semester 1</option>
              </select>
              <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            </div>

            <button
              onClick={handleDownloadPdf}
              className="px-4 py-1.5 rounded-lg bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20 flex items-center gap-1.5 transition-all"
            >
              <Download className="w-3.5 h-3.5" />
              <span>Download Report PDF</span>
            </button>
          </div>
        </div>

        {/* Top 3 KPI Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-500">Semester Lab SGPA</span>
              <Award className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-2xl font-black text-slate-900 tracking-tight">
                {MOCK_CIA_RESULT.sgpa}
              </span>
              <span className="px-1.5 py-0.5 rounded text-[10px] font-black bg-emerald-50 text-emerald-700 border border-emerald-200">
                {MOCK_CIA_RESULT.gradeLetter}
              </span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">Outstanding performance!</p>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-500">Total CIA Score</span>
              <FileText className="w-4 h-4 text-blue-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {MOCK_CIA_RESULT.totalCiaScore}{' '}
              <span className="text-base text-slate-400 font-bold">/ {MOCK_CIA_RESULT.maxCiaScore}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">Internal evaluation completed</p>
          </div>

          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 shadow-sm flex flex-col justify-between">
            <div className="flex items-center justify-between mb-1.5">
              <span className="text-[11px] font-semibold text-slate-500">Experiments Passed</span>
              <CheckCircle2 className="w-4 h-4 text-emerald-500" />
            </div>
            <div className="text-2xl font-black text-slate-900 tracking-tight">
              {MOCK_CIA_RESULT.experimentsPassed}{' '}
              <span className="text-base text-slate-400 font-bold">/ {MOCK_CIA_RESULT.totalExperiments}</span>
            </div>
            <p className="text-[11px] text-slate-400 mt-1 font-medium">All prerequisite tests passed</p>
          </div>
        </div>

        {/* Course Rubric Breakdown Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {MOCK_CIA_RESULT.courseResults.map((c) => {
            const isEmerald = c.gradeLetter === 'S';
            const badgeBg = isEmerald ? 'bg-[#ECFDF5]' : 'bg-[#EFF6FF]';
            const badgeBorder = isEmerald ? 'border-[#A7F3D0]' : 'border-[#BFDBFE]';
            const badgeText = isEmerald ? 'text-[#065F46]' : 'text-[#1D4ED8]';
            const barBg = isEmerald ? 'bg-[#10B981]' : 'bg-[#2563EB]';

            return (
              <div
                key={c.courseCode}
                className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm flex flex-col justify-between space-y-4"
              >
                <div className="flex items-start justify-between">
                  <div>
                    <span className="text-[10px] font-mono font-bold text-slate-400 block">
                      {c.courseCode}
                    </span>
                    <h3 className="text-sm font-bold text-slate-900">
                      {c.courseTitle}
                    </h3>
                  </div>
                  <span
                    className={`px-2.5 py-0.5 rounded-lg text-[11px] font-bold border ${badgeBg} ${badgeBorder} ${badgeText}`}
                  >
                    Grade: {c.gradeLetter} • {c.ciaScore}/{c.maxScore} CIA
                  </span>
                </div>

                <div className="space-y-3 pt-1">
                  {c.rubrics.map((r, i) => {
                    const pct = (r.obtainedScore / r.maxScore) * 100;
                    return (
                      <div key={i} className="space-y-1">
                        <div className="flex items-center justify-between text-xs font-bold text-slate-700">
                          <span>{r.name}</span>
                          <span className="font-mono">
                            {r.obtainedScore}/{r.maxScore}
                          </span>
                        </div>
                        <div className="w-full bg-slate-100 rounded-full h-1.5 overflow-hidden">
                          <div
                            className={`${barBg} h-1.5 rounded-full transition-all duration-500`}
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

        {/* Recent Submissions & Scores Table */}
        <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm space-y-3">
          <h3 className="text-sm font-bold text-slate-900 tracking-tight">
            Recent Submissions &amp; Scores
          </h3>

          <div className="overflow-x-auto">
            <table className="w-full text-left text-xs">
              <thead>
                <tr className="border-b border-slate-200 text-slate-400 font-bold uppercase tracking-wider text-[10px]">
                  <th className="pb-2.5 font-semibold">Experiment Title</th>
                  <th className="pb-2.5 font-semibold">Course</th>
                  <th className="pb-2.5 font-semibold">CIA Score</th>
                  <th className="pb-2.5 font-semibold">Grade</th>
                  <th className="pb-2.5 font-semibold">Status</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-slate-100 font-medium">
                {MOCK_CIA_RESULT.recentSubmissions.map((row) => (
                  <tr key={row.id} className="hover:bg-slate-50 transition-colors">
                    <td className="py-2.5 text-slate-900 font-bold">{row.experimentTitle}</td>
                    <td className="py-2.5 text-slate-500 font-mono">• {row.courseCode}</td>
                    <td className="py-2.5 text-slate-900 font-mono font-bold">
                      {row.ciaScore} / {row.maxScore}
                    </td>
                    <td className="py-2.5">
                      <span
                        className={`px-1.5 py-0.5 rounded text-[10px] font-black ${
                          row.grade === 'S'
                            ? 'bg-emerald-50 text-emerald-700 border border-emerald-200'
                            : 'bg-blue-50 text-blue-700 border border-blue-200'
                        }`}
                      >
                        {row.grade}
                      </span>
                    </td>
                    <td className="py-2.5">
                      <span className="inline-flex items-center gap-1 text-[11px] text-slate-700 font-medium">
                        <span className="w-1.5 h-1.5 rounded-full bg-emerald-500" />
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
