import React from 'react';
import { motion } from 'framer-motion';
import { ArrowUpRight, BookOpen, Layers, Terminal } from 'lucide-react';

export default function LabCard({ lab, onSelectLab }) {
  return (
    <motion.div
      layout
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      exit={{ opacity: 0, scale: 0.95 }}
      whileHover={{ y: -6 }}
      transition={{ duration: 0.25 }}
      onClick={() => onSelectLab(lab)}
      className="group relative bg-slate-900/70 border border-slate-800/80 hover:border-indigo-500/50 rounded-2xl overflow-hidden cursor-pointer flex flex-col shadow-lg shadow-black/40 hover:shadow-indigo-500/10 transition-all"
    >
      {/* Top Banner Image with Overlay */}
      <div className="relative h-44 w-full bg-slate-950 overflow-hidden">
        <img
          src={lab.image}
          alt={lab.title}
          className="w-full h-full object-cover object-center group-hover:scale-105 transition-transform duration-500"
          loading="lazy"
          onError={(e) => {
            e.currentTarget.src = 'https://images.unsplash.com/photo-1517694712202-14dd9538aa97?auto=format&fit=crop&w=600&q=80';
          }}
        />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-slate-900/40 to-transparent" />
        
        {/* Semester & Code Badges */}
        <div className="absolute top-3 left-3 right-3 flex items-center justify-between">
          <span className="px-2.5 py-1 rounded-lg text-xs font-semibold bg-slate-950/80 backdrop-blur-md text-indigo-300 border border-indigo-500/30">
            {lab.semesterLabel}
          </span>
          <span className="px-2 py-0.5 rounded-md text-[11px] font-mono font-medium bg-slate-900/90 text-slate-300 border border-slate-700">
            {lab.code}
          </span>
        </div>

        {/* Category Pill */}
        <div className="absolute bottom-3 left-3">
          <span className="text-[11px] font-medium text-slate-300 bg-slate-950/80 backdrop-blur-md px-2.5 py-0.5 rounded-md border border-slate-800">
            {lab.category}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-5 flex-1 flex flex-col justify-between">
        <div>
          <div className="flex items-start justify-between gap-2 mb-2">
            <h3 className="font-bold text-lg text-white group-hover:text-indigo-300 transition-colors">
              {lab.title}
            </h3>
            <div className="w-8 h-8 rounded-lg bg-slate-800/80 flex items-center justify-center text-slate-400 group-hover:text-white group-hover:bg-indigo-600 transition-colors shrink-0">
              <ArrowUpRight className="w-4 h-4" />
            </div>
          </div>

          <p className="text-slate-400 text-xs line-clamp-2 leading-relaxed mb-4">
            {lab.description}
          </p>
        </div>

        <div>
          {/* Tags */}
          <div className="flex flex-wrap gap-1.5 mb-4">
            {lab.tags.slice(0, 3).map((tag, idx) => (
              <span
                key={idx}
                className="text-[10px] font-mono px-2 py-0.5 rounded bg-slate-800/60 text-slate-400 border border-slate-800"
              >
                #{tag}
              </span>
            ))}
          </div>

          {/* Footer info inside card */}
          <div className="pt-3 border-t border-slate-800/60 flex items-center justify-between text-xs text-slate-400">
            <div className="flex items-center gap-1.5">
              <Terminal className="w-3.5 h-3.5 text-indigo-400" />
              <span>{lab.experimentsCount} Experiments</span>
            </div>
            <span className="text-indigo-400 font-medium group-hover:underline">Explore Lab &rarr;</span>
          </div>
        </div>
      </div>
    </motion.div>
  );
}
