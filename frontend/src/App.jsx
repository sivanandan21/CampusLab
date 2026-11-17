import React, { useState, useMemo } from 'react';
import Navbar from './components/Navbar';
import SemesterFilter from './components/SemesterFilter';
import LabCard from './components/LabCard';
import LabDetailModal from './components/LabDetailModal';
import StatsBanner from './components/StatsBanner';
import Footer from './components/Footer';
import { LABS_DATA } from './data/labsData';
import { Sparkles, Terminal, BookOpen, Layers, ArrowRight } from 'lucide-react';
import { motion, AnimatePresence } from 'framer-motion';

export default function App() {
  const [selectedSemester, setSelectedSemester] = useState('all');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLabModal, setActiveLabModal] = useState(null);

  // Filter labs by semester and search query
  const filteredLabs = useMemo(() => {
    return LABS_DATA.filter((lab) => {
      const matchesSemester =
        selectedSemester === 'all' || lab.semester === selectedSemester;
      
      const query = searchQuery.trim().toLowerCase();
      const matchesSearch =
        !query ||
        lab.title.toLowerCase().includes(query) ||
        lab.code.toLowerCase().includes(query) ||
        lab.category.toLowerCase().includes(query) ||
        lab.description.toLowerCase().includes(query) ||
        lab.tags.some((tag) => tag.toLowerCase().includes(query));

      return matchesSemester && matchesSearch;
    });
  }, [selectedSemester, searchQuery]);

  return (
    <div className="min-h-screen bg-[#030712] text-slate-100 flex flex-col font-sans selection:bg-indigo-500 selection:text-white">
      {/* Navbar */}
      <Navbar
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        selectedSemester={selectedSemester}
        setSelectedSemester={setSelectedSemester}
      />

      <main className="flex-1 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full pt-8 pb-16">
        {/* Hero Section */}
        <div className="relative rounded-3xl overflow-hidden border border-slate-800/80 bg-gradient-to-b from-indigo-950/30 via-slate-900/60 to-slate-950/80 p-6 sm:p-10 lg:p-12 mb-10 shadow-2xl shadow-indigo-950/30">
          <div className="absolute top-0 right-0 -mt-12 -mr-12 w-96 h-96 rounded-full bg-indigo-600/10 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-12 -ml-12 w-96 h-96 rounded-full bg-purple-600/10 blur-3xl pointer-events-none" />

          <div className="relative max-w-3xl">
            <div className="inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-indigo-500/10 border border-indigo-500/20 text-indigo-400 text-xs font-semibold mb-6">
              <Sparkles className="w-3.5 h-3.5" />
              <span>Interactive Engineering Laboratory Portal</span>
            </div>

            <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black text-white tracking-tight leading-[1.1] mb-6">
              Master Practical Engineering with{' '}
              <span className="bg-gradient-to-r from-indigo-400 via-purple-300 to-pink-400 bg-clip-text text-transparent">
                CampusLab
              </span>
            </h1>

            <p className="text-base sm:text-lg text-slate-300 leading-relaxed mb-8 max-w-2xl">
              From foundational C & Python programming to OS kernels, Database systems, Computer Networks, and Machine Learning. Access semester-wise laboratory manuals, starter code, and experiment guides.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <button
                onClick={() => setSelectedSemester('all')}
                className="px-6 py-3 rounded-xl bg-indigo-600 hover:bg-indigo-500 text-white font-semibold text-sm shadow-lg shadow-indigo-600/25 flex items-center gap-2 transition-all"
              >
                <BookOpen className="w-4 h-4" />
                Browse All 16 Labs
              </button>
              <button
                onClick={() => setSelectedSemester('projects')}
                className="px-6 py-3 rounded-xl bg-slate-900 hover:bg-slate-800 text-slate-200 border border-slate-700 font-semibold text-sm flex items-center gap-2 transition-all"
              >
                <span>View Capstone Projects</span>
                <ArrowRight className="w-4 h-4" />
              </button>
            </div>
          </div>
        </div>

        {/* Stats Metrics */}
        <StatsBanner />

        {/* Filter Bar & Header */}
        <div className="space-y-4 mb-8">
          <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
            <div>
              <h2 className="text-2xl font-bold text-white tracking-tight">Curriculum Laboratories</h2>
              <p className="text-xs text-slate-400 mt-1">
                Showing {filteredLabs.length} of {LABS_DATA.length} available lab courses
              </p>
            </div>
          </div>

          <SemesterFilter
            selectedSemester={selectedSemester}
            onSelectSemester={setSelectedSemester}
          />
        </div>

        {/* Lab Grid */}
        {filteredLabs.length > 0 ? (
          <motion.div
            layout
            className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6"
          >
            <AnimatePresence>
              {filteredLabs.map((lab) => (
                <LabCard
                  key={lab.id}
                  lab={lab}
                  onSelectLab={setActiveLabModal}
                />
              ))}
            </AnimatePresence>
          </motion.div>
        ) : (
          <div className="text-center py-20 rounded-2xl border border-dashed border-slate-800 bg-slate-900/30">
            <Terminal className="w-12 h-12 text-slate-600 mx-auto mb-3" />
            <h3 className="text-lg font-semibold text-slate-300">No labs matched your search</h3>
            <p className="text-sm text-slate-500 mt-1">
              Try adjusting your search terms or clearing the semester filter.
            </p>
            <button
              onClick={() => {
                setSearchQuery('');
                setSelectedSemester('all');
              }}
              className="mt-4 px-4 py-2 rounded-xl text-sm font-medium bg-slate-800 hover:bg-slate-700 text-indigo-400"
            >
              Reset Filters
            </button>
          </div>
        )}
      </main>

      {/* Lab Detail Modal */}
      <LabDetailModal
        lab={activeLabModal}
        onClose={() => setActiveLabModal(null)}
      />

      {/* Footer */}
      <Footer />
    </div>
  );
}
