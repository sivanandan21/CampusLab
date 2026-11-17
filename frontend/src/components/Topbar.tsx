import React from 'react';
import { Search, Bell, ChevronDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useAuth } from '../app/AuthContext';
import { ASSETS } from '../assets';

interface TopbarProps {
  title?: React.ReactNode;
  subtitle?: string;
  showSearch?: boolean;
  searchPlaceholder?: string;
  onSearchChange?: (val: string) => void;
  searchValue?: string;
}

export default function Topbar({
  title,
  subtitle,
  showSearch = true,
  searchPlaceholder = 'Search labs, submissions...',
  onSearchChange,
  searchValue = '',
}: TopbarProps) {
  const { user } = useAuth();

  return (
    <header className="h-18 bg-white border-b border-[#E2E8F0] px-8 flex items-center justify-between shrink-0 z-20">
      {/* Left: Dynamic Greeting or Page Title */}
      <div className="flex items-center gap-4">
        {title ? (
          <div>{title}</div>
        ) : (
          <div className="flex items-center gap-3">
            <h1 className="text-lg font-bold text-slate-900 tracking-tight flex items-center gap-2">
              Hey {user?.name?.split(' ')[0] || 'Adarsh'}! Ready for today's lab?
              <span className="text-lg">👋</span>
            </h1>
            <span className="px-2.5 py-0.5 rounded-full text-xs font-semibold bg-[#EFF6FF] text-[#2563EB] border border-[#DBEAFE]">
              {user?.currentSemester || 'S4'} • B.Tech CSE
            </span>
          </div>
        )}
      </div>

      {/* Right: Search + Notifications + User Chip */}
      <div className="flex items-center gap-4">
        {showSearch && (
          <div className="relative w-64 md:w-72">
            <Search className="w-4 h-4 text-slate-400 absolute left-3.5 top-1/2 -translate-y-1/2 pointer-events-none" />
            <input
              type="text"
              placeholder={searchPlaceholder}
              value={searchValue}
              onChange={(e) => onSearchChange?.(e.target.value)}
              className="w-full pl-9 pr-4 py-2 bg-[#F8FAFC] border border-[#E2E8F0] rounded-xl text-xs text-slate-800 placeholder-slate-400 focus:outline-none focus:border-[#2563EB] focus:ring-1 focus:ring-[#2563EB] transition-all"
            />
          </div>
        )}

        {/* Notification Bell */}
        <button
          className="relative p-2 text-slate-500 hover:text-slate-800 hover:bg-slate-100 rounded-xl transition-colors"
          title="Notifications"
        >
          <Bell className="w-4 h-4" />
          <span className="absolute top-1.5 right-1.5 w-2 h-2 rounded-full bg-rose-500 ring-2 ring-white" />
        </button>

        {/* User Chip */}
        <Link
          to="/settings"
          className="flex items-center gap-2.5 pl-2 pr-3 py-1.5 rounded-full hover:bg-slate-100 transition-colors border border-transparent hover:border-slate-200"
        >
          <div className="w-8 h-8 rounded-full overflow-hidden bg-blue-100 border border-blue-300 shrink-0 shadow-sm">
            <img src={ASSETS.avatars.student} alt={user?.name || 'Student'} className="w-full h-full object-cover" />
          </div>
          <span className="text-xs font-semibold text-slate-700 hidden sm:inline">
            Hi, {user?.name?.split(' ')[0] || 'Student'}!
          </span>
          <ChevronDown className="w-3.5 h-3.5 text-slate-400" />
        </Link>
      </div>
    </header>
  );
}
