import React from 'react';
import { BookOpen, Award, Cpu, Code2, Users2, Sparkles } from 'lucide-react';

export default function StatsBanner() {
  const stats = [
    { label: 'Engineering Labs', value: '16+', icon: BookOpen, color: 'text-indigo-400' },
    { label: 'Hands-on Experiments', value: '200+', icon: Code2, color: 'text-emerald-400' },
    { label: 'B.Tech Semesters', value: 'S1 - S6', icon: Cpu, color: 'text-amber-400' },
    { label: 'Capstone Projects', value: '25+', icon: Award, color: 'text-pink-400' },
  ];

  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 my-8">
      {stats.map((stat, i) => {
        const Icon = stat.icon;
        return (
          <div
            key={i}
            className="p-4 sm:p-5 rounded-2xl bg-slate-900/50 border border-slate-800/80 backdrop-blur-md flex items-center gap-4 hover:border-slate-700 transition-colors"
          >
            <div className={`p-3 rounded-xl bg-slate-800/60 ${stat.color}`}>
              <Icon className="w-5 h-5 sm:w-6 sm:h-6" />
            </div>
            <div>
              <div className="text-xl sm:text-2xl font-black text-white tracking-tight">{stat.value}</div>
              <div className="text-xs text-slate-400 font-medium">{stat.label}</div>
            </div>
          </div>
        );
      })}
    </div>
  );
}
