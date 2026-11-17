import React from 'react';
import { useLocation, Link } from 'react-router-dom';
import {
  LayoutDashboard,
  FolderClosed,
  ClipboardList,
  BarChart3,
  BookOpen,
  LogOut,
  FlaskConical,
} from 'lucide-react';
import { useAuth } from '../app/AuthContext';
import { ASSETS } from '../assets';

export default function Sidebar() {
  const { user, logout } = useAuth();
  const location = useLocation();

  const navItems = [
    { label: 'Dashboard', path: '/dashboard', icon: LayoutDashboard },
    { label: 'Semester Labs', path: '/labs', icon: FolderClosed },
    { label: 'My Submissions', path: '/submissions', icon: ClipboardList },
    { label: 'Results', path: '/results', icon: BarChart3 },
    { label: 'KTU Syllabus', path: '/syllabus', icon: BookOpen },
  ];

  return (
    <aside className="w-64 bg-[#0F172A] border-r border-[#1E293B] flex flex-col justify-between shrink-0 select-none z-30">
      {/* Brand Header */}
      <div>
        <div className="h-20 flex items-center px-6 gap-3.5 border-b border-[#1E293B]/80">
          <Link to="/dashboard" className="flex items-center gap-3 group">
            <div className="w-10 h-10 rounded-xl bg-gradient-to-tr from-blue-600 to-indigo-600 p-1 flex items-center justify-center shadow-lg shadow-blue-500/25 group-hover:scale-105 transition-transform shrink-0">
              <img
                src={ASSETS.brand.logo}
                alt="CampusLab"
                className="w-full h-full object-contain"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                }}
              />
              <FlaskConical className="w-5 h-5 text-white hidden group-only-fallback" />
            </div>
            <div className="flex flex-col min-w-0">
              <span className="font-extrabold text-xl tracking-tight text-white flex items-center gap-1.5 leading-none mb-1">
                CampusLab
              </span>
              <span className="text-xs font-medium text-slate-400 leading-tight">
                KTU 2024 • B.Tech CSE
              </span>
            </div>
          </Link>
        </div>

        {/* Navigation Items */}
        <nav className="p-4 space-y-2 mt-2">
          {navItems.map((item) => {
            const Icon = item.icon;
            const isActive =
              location.pathname === item.path ||
              (item.path === '/labs' && location.pathname.startsWith('/labs'));

            return (
              <Link
                key={item.path}
                to={item.path}
                className={`relative flex items-center gap-3.5 px-4 py-3 rounded-xl text-sm font-semibold transition-all duration-200 group ${
                  isActive
                    ? 'text-white bg-[#2563EB] shadow-lg shadow-blue-600/30'
                    : 'text-slate-400 hover:text-slate-100 hover:bg-[#1E293B]/70'
                }`}
              >
                <Icon className={`w-5 h-5 shrink-0 ${isActive ? 'text-white' : 'text-slate-400 group-hover:text-slate-200'}`} />
                <span>{item.label}</span>
              </Link>
            );
          })}
        </nav>
      </div>

      {/* Bottom Student Profile Card */}
      <div className="p-4 border-t border-[#1E293B]">
        <div className="flex items-center justify-between p-2.5 rounded-xl bg-[#1E293B]/50 hover:bg-[#1E293B]/90 transition-colors">
          <Link to="/settings" className="flex items-center gap-3 flex-1 min-w-0 group">
            <div className="w-9 h-9 rounded-full bg-blue-600/20 border border-blue-500/40 flex items-center justify-center font-bold text-xs text-blue-300 shrink-0 overflow-hidden">
              {user?.avatar ? (
                <img src={user.avatar} alt={user.name} className="w-full h-full object-cover" />
              ) : (
                'AS'
              )}
            </div>
            <div className="flex flex-col min-w-0">
              <span className="text-sm font-semibold text-white truncate group-hover:text-blue-400 transition-colors leading-tight">
                {user?.name || 'Adarsh S'}
              </span>
              <span className="text-xs text-slate-400 truncate leading-tight">
                {user?.currentSemester || 'S4'} • B.Tech CSE
              </span>
            </div>
          </Link>

          <button
            onClick={logout}
            title="Sign Out"
            className="p-2 text-slate-400 hover:text-rose-400 hover:bg-rose-500/10 rounded-lg transition-colors ml-1"
          >
            <LogOut className="w-4 h-4" />
          </button>
        </div>
      </div>
    </aside>
  );
}
