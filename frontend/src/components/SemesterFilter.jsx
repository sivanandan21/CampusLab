import React from 'react';
import { SEMESTERS } from '../data/labsData';

export default function SemesterFilter({ selectedSemester, onSelectSemester }) {
  return (
    <div className="flex items-center gap-2 overflow-x-auto pb-2 scrollbar-none">
      {SEMESTERS.map((sem) => {
        const isActive = selectedSemester === sem.id;
        return (
          <button
            key={sem.id}
            onClick={() => onSelectSemester(sem.id)}
            className={`whitespace-nowrap px-4 py-2 rounded-xl text-sm font-medium transition-all duration-200 flex items-center gap-2 ${
              isActive
                ? 'bg-indigo-600 text-white shadow-lg shadow-indigo-600/25 ring-2 ring-indigo-500/50'
                : 'bg-slate-900/80 text-slate-400 hover:text-slate-200 hover:bg-slate-800/80 border border-slate-800/80'
            }`}
          >
            <span>{sem.name}</span>
            <span
              className={`text-xs px-2 py-0.5 rounded-full ${
                isActive
                  ? 'bg-indigo-700 text-indigo-100'
                  : 'bg-slate-800 text-slate-500'
              }`}
            >
              {sem.count}
            </span>
          </button>
        );
      })}
    </div>
  );
}
