import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Lock, LogOut, ChevronDown } from 'lucide-react';
import Topbar from '../../components/Topbar';
import { useAuth } from '../../app/AuthContext';
import { useSettings } from '../../app/SettingsContext';
import { useToast } from '../../app/ToastProvider';

export default function UserSettingsPage() {
  const { user, logout, updateUserSemester } = useAuth();
  const { preferences, updatePreferences } = useSettings();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const [theme, setTheme] = useState(preferences.xtermTheme);
  const [fontSize, setFontSize] = useState(preferences.fontSize);
  const [autoReconnect, setAutoReconnect] = useState(preferences.autoReconnect);
  const [copyOnSelect, setCopyOnSelect] = useState(preferences.copyOnSelect);
  const [deadlineReminders, setDeadlineReminders] = useState(preferences.deadlineReminders);
  const [ciaAlerts, setCiaAlerts] = useState(preferences.ciaAlerts);
  const [currentSem, setCurrentSem] = useState(user?.currentSemester || 'S4');

  const handleSaveChanges = () => {
    updatePreferences({
      xtermTheme: theme,
      fontSize,
      autoReconnect,
      copyOnSelect,
      deadlineReminders,
      ciaAlerts,
    });
    updateUserSemester(currentSem as any);
    showToast('Preferences and profile settings saved successfully!');
  };

  const handleSignOut = () => {
    logout();
    showToast('Signed out successfully.');
    navigate('/login');
  };

  return (
    <div className="flex-1 flex flex-col bg-[#F8FAFC]">
      <Topbar
        title={
          <div>
            <h1 className="text-base font-black text-slate-900 tracking-tight">
              Profile &amp; Settings
            </h1>
          </div>
        }
        showSearch={false}
      />

      <div className="p-5 sm:p-6 max-w-7xl w-full mx-auto space-y-5">
        {/* Save Changes Header Action */}
        <div className="flex justify-end">
          <button
            onClick={handleSaveChanges}
            className="px-5 py-2 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-xs font-bold shadow-md shadow-blue-500/20 transition-all transform active:scale-95"
          >
            Save Changes
          </button>
        </div>

        {/* Top Student Identity Banner */}
        <div className="relative rounded-2xl overflow-hidden bg-gradient-to-r from-slate-200 via-slate-100 to-blue-50/50 p-5 sm:p-6 border border-slate-200 shadow-sm flex flex-col md:flex-row items-start md:items-center justify-between gap-4">
          <div className="flex items-center gap-4">
            <div className="w-13 h-13 rounded-full bg-white border-2 border-blue-200 flex items-center justify-center text-lg font-black text-blue-700 shadow-sm shrink-0">
              AS
            </div>

            <div className="space-y-1">
              <h2 className="text-xl font-black text-slate-900 tracking-tight">
                {user?.name || 'Adarsh S'}
              </h2>

              <div className="flex flex-wrap items-center gap-2">
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-mono font-bold bg-white text-slate-700 border border-slate-200 shadow-sm">
                  KTU Reg ID: {user?.ktuRegId || 'PKD24CS042'}
                </span>
                <span className="px-2.5 py-0.5 rounded-md text-[11px] font-bold bg-white text-slate-700 border border-slate-200 shadow-sm">
                  B.Tech CSE • 2024 Scheme
                </span>
              </div>
            </div>
          </div>

          {/* Current Semester Dropdown */}
          <div className="relative self-stretch sm:self-auto">
            <select
              value={currentSem}
              onChange={(e) => setCurrentSem(e.target.value as any)}
              className="w-full appearance-none bg-white border border-slate-300 text-xs font-bold text-slate-800 py-2 pl-3 pr-8 rounded-lg shadow-sm focus:outline-none focus:border-[#2563EB]"
            >
              <option value="S4">Current Semester: Semester 4 (S4)</option>
              <option value="S1">Current Semester: Semester 1 (S1)</option>
              <option value="S2">Current Semester: Semester 2 (S2)</option>
              <option value="S3">Current Semester: Semester 3 (S3)</option>
              <option value="S5">Current Semester: Semester 5 (S5)</option>
              <option value="S6">Current Semester: Semester 6 (S6)</option>
              <option value="S7">Current Semester: Semester 7 (S7)</option>
              <option value="S8">Current Semester: Semester 8 (S8)</option>
            </select>
            <ChevronDown className="w-3.5 h-3.5 text-slate-400 absolute right-2.5 top-1/2 -translate-y-1/2 pointer-events-none" />
          </div>
        </div>

        {/* 2-Column Settings Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          {/* Left Card: Terminal & Lab Preferences */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm space-y-4">
            <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5">
              Terminal &amp; Lab Preferences
            </h3>

            {/* xterm.js Theme Selector */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">xterm.js Theme</span>
              <div className="relative">
                <select
                  value={theme}
                  onChange={(e) => setTheme(e.target.value as any)}
                  className="appearance-none bg-white border border-slate-300 text-xs font-bold text-slate-800 py-1 pl-2.5 pr-7 rounded-md focus:outline-none focus:border-[#2563EB]"
                >
                  <option>Dark Navy</option>
                  <option>Monokai</option>
                  <option>Solarized Dark</option>
                  <option>Dracula</option>
                  <option>Github Dark</option>
                </select>
                <ChevronDown className="w-3 h-3 text-slate-400 absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none" />
              </div>
            </div>

            {/* Font Size Slider */}
            <div className="flex items-center justify-between gap-4">
              <span className="text-xs font-bold text-slate-700">Font Size</span>
              <div className="flex items-center gap-2.5">
                <input
                  type="range"
                  min={12}
                  max={20}
                  value={fontSize}
                  onChange={(e) => setFontSize(Number(e.target.value))}
                  className="w-28 accent-[#2563EB]"
                />
                <span className="text-xs font-mono font-bold text-slate-500 w-8 text-right">
                  {fontSize}px
                </span>
              </div>
            </div>

            {/* Auto-Reconnect Terminal Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Auto-Reconnect Terminal</span>
              <button
                type="button"
                onClick={() => setAutoReconnect(!autoReconnect)}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                  autoReconnect ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {autoReconnect ? 'ON' : 'OFF'}
              </button>
            </div>

            {/* Copy on Select Toggle */}
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-slate-700">Copy on Select</span>
              <button
                type="button"
                onClick={() => setCopyOnSelect(!copyOnSelect)}
                className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                  copyOnSelect ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-600'
                }`}
              >
                {copyOnSelect ? 'ON' : 'OFF'}
              </button>
            </div>
          </div>

          {/* Right Card: Account, Notifications & Security */}
          <div className="bg-white rounded-xl border border-[#E2E8F0] p-4 sm:p-5 shadow-sm space-y-4 flex flex-col justify-between">
            <div className="space-y-4">
              <h3 className="text-sm font-bold text-slate-900 border-b border-slate-100 pb-2.5">
                Account, Notifications &amp; Security
              </h3>

              {/* Lab Deadline Reminders Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">Lab Deadline Reminders</span>
                <button
                  type="button"
                  onClick={() => setDeadlineReminders(!deadlineReminders)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                    deadlineReminders ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {deadlineReminders ? 'ON' : 'OFF'}
                </button>
              </div>

              {/* CIA Grade Alerts Toggle */}
              <div className="flex items-center justify-between">
                <span className="text-xs font-bold text-slate-700">CIA Grade Alerts</span>
                <button
                  type="button"
                  onClick={() => setCiaAlerts(!ciaAlerts)}
                  className={`px-2.5 py-0.5 rounded-full text-[11px] font-bold transition-colors ${
                    ciaAlerts ? 'bg-[#2563EB] text-white' : 'bg-slate-200 text-slate-600'
                  }`}
                >
                  {ciaAlerts ? 'ON' : 'OFF'}
                </button>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="flex items-center justify-between pt-4 border-t border-slate-100 gap-3">
              <button
                onClick={() => showToast('Password change link sent to adarsh.s.cse24@gec.ac.in', 'info')}
                className="px-3.5 py-1.5 rounded-lg bg-blue-50 hover:bg-blue-100 text-blue-700 border border-blue-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <Lock className="w-3 h-3" />
                <span>Change Password</span>
              </button>

              <button
                onClick={handleSignOut}
                className="px-3.5 py-1.5 rounded-lg bg-rose-50 hover:bg-rose-100 text-rose-700 border border-rose-200 text-xs font-bold flex items-center gap-1.5 transition-colors"
              >
                <LogOut className="w-3 h-3" />
                <span>Sign Out</span>
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
