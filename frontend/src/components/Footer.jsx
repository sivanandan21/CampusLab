import React from 'react';
import { Heart, Terminal, Layers, Code2, Globe } from 'lucide-react';

export default function Footer() {
  return (
    <footer className="mt-20 border-t border-slate-800/80 bg-slate-950/90 text-slate-400 py-12">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col md:flex-row items-center justify-between gap-6">
          <div className="flex items-center gap-3">
            <div className="w-8 h-8 rounded-lg overflow-hidden bg-slate-900 border border-slate-800 p-1">
              <img src="/assets/brand/campuslab-logo.png" alt="CampusLab" className="w-full h-full object-cover rounded" />
            </div>
            <div>
              <span className="font-bold text-white text-base">CampusLab</span>
              <p className="text-xs text-slate-500">Comprehensive Engineering Laboratories & Curriculum Portal</p>
            </div>
          </div>

          <div className="flex items-center gap-6 text-xs text-slate-400">
            <span>Frontend: React 19 + Vite + Tailwind CSS</span>
            <span>•</span>
            <span>Ready for Backend Integration</span>
          </div>

          <div className="text-xs text-slate-500 flex items-center gap-1">
            Built with modern web standards for students & faculty
          </div>
        </div>
      </div>
    </footer>
  );
}
