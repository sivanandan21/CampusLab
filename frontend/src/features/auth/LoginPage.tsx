import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { motion } from 'framer-motion';
import { Eye, EyeOff, Terminal, Sparkles, Layers, ShieldCheck, Cpu } from 'lucide-react';
import { useAuth } from '../../app/AuthContext';
import { useToast } from '../../app/ToastProvider';
import { ASSETS } from '../../assets';

export default function LoginPage() {
  const [admissionNo, setAdmissionNo] = useState('24CS0142');
  const [password, setPassword] = useState('password123');
  const [showPassword, setShowPassword] = useState(false);
  const [rememberMe, setRememberMe] = useState(true);
  const [loading, setLoading] = useState(false);
  const { login } = useAuth();
  const { showToast } = useToast();
  const navigate = useNavigate();

  const handleSignIn = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!admissionNo.trim()) {
      showToast('Please enter your Admission Number', 'error');
      return;
    }
    setLoading(true);
    try {
      await login(admissionNo, password);
      showToast('Welcome back, Adarsh! Signed in successfully.');
      navigate('/dashboard');
    } catch {
      showToast('Login failed. Please check your credentials.', 'error');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen w-full bg-[#E2E8F0] flex items-center justify-center p-4 sm:p-6 lg:p-8 font-sans">
      <div className="w-full max-w-5xl rounded-3xl overflow-hidden shadow-2xl bg-white border border-[#CBD5E1] grid grid-cols-1 lg:grid-cols-12 min-h-[620px]">
        {/* Left Hero Panel */}
        <div className="lg:col-span-7 bg-gradient-to-br from-[#0B1528] via-[#0F2347] to-[#1D4ED8] p-8 sm:p-12 flex flex-col justify-between relative overflow-hidden text-white">
          {/* Subtle background glow circles */}
          <div className="absolute top-0 right-0 -mt-20 -mr-20 w-80 h-80 rounded-full bg-blue-500/20 blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 -mb-20 -ml-20 w-80 h-80 rounded-full bg-indigo-500/20 blur-3xl pointer-events-none" />

          {/* Top Brand */}
          <div className="relative z-10">
            <div className="flex items-center gap-3 mb-2">
              <div className="w-12 h-12 rounded-xl bg-blue-500/20 border border-blue-400/40 p-1.5 flex items-center justify-center shadow-lg shadow-blue-500/20">
                <img
                  src={ASSETS.brand.logo}
                  alt="CampusLab Logo"
                  className="w-full h-full object-contain"
                />
              </div>
              <h1 className="text-3xl font-extrabold tracking-tight text-white">CampusLab</h1>
            </div>
            <p className="text-sm font-medium text-blue-200/80">
              KTU 2024 Scheme • B.Tech CSE Practical Platform
            </p>
          </div>

          {/* Center 3D Isometric Tech Graphic Illustration */}
          <div className="relative my-6 py-2 flex items-center justify-center">
            <div className="relative w-80 h-64 sm:w-96 sm:h-72 rounded-2xl overflow-hidden shadow-2xl border border-blue-400/30 group">
              <img
                src={ASSETS.illustrations.loginTechHero}
                alt="CampusLab 3D Architecture"
                className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
              />
            </div>
          </div>

          {/* Bottom 3 Feature Pills */}
          <div className="relative z-10 flex flex-wrap items-center gap-3">
            <div className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-blue-500/30 backdrop-blur-md flex items-center gap-2 text-xs font-medium text-slate-200">
              <span>🖥️</span>
              <span>Isolated Terminals</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-blue-500/30 backdrop-blur-md flex items-center gap-2 text-xs font-medium text-slate-200">
              <span>🔬</span>
              <span>S1–S8 Labs</span>
            </div>
            <div className="px-3 py-1.5 rounded-xl bg-slate-900/60 border border-blue-500/30 backdrop-blur-md flex items-center gap-2 text-xs font-medium text-slate-200">
              <span>📝</span>
              <span>Instant Grading</span>
            </div>
          </div>
        </div>

        {/* Right Auth Card */}
        <div className="lg:col-span-5 p-8 sm:p-12 flex flex-col justify-center bg-white">
          <div className="max-w-md w-full mx-auto">
            <h2 className="text-2xl sm:text-3xl font-extrabold text-slate-900 tracking-tight mb-2">
              Student Sign In
            </h2>
            <p className="text-xs sm:text-sm text-slate-500 mb-8">
              Use your college admission number to access your labs
            </p>

            <form onSubmit={handleSignIn} className="space-y-5">
              {/* Admission Number */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Admission Number
                </label>
                <input
                  type="text"
                  placeholder="e.g. 24CS0142"
                  value={admissionNo}
                  onChange={(e) => setAdmissionNo(e.target.value)}
                  className="w-full px-4 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all placeholder:text-slate-400"
                  required
                />
              </div>

              {/* Password */}
              <div>
                <label className="block text-xs font-bold text-slate-700 uppercase tracking-wider mb-2">
                  Password
                </label>
                <div className="relative">
                  <input
                    type={showPassword ? 'text' : 'password'}
                    placeholder="••••••••"
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    className="w-full pl-4 pr-11 py-3 rounded-xl border border-slate-300 bg-white text-slate-900 text-sm font-medium focus:outline-none focus:border-[#2563EB] focus:ring-2 focus:ring-[#2563EB]/20 transition-all"
                    required
                  />
                  <button
                    type="button"
                    onClick={() => setShowPassword(!showPassword)}
                    className="absolute right-3.5 top-1/2 -translate-y-1/2 text-slate-400 hover:text-slate-600 transition-colors"
                  >
                    {showPassword ? <EyeOff className="w-4 h-4" /> : <Eye className="w-4 h-4" />}
                  </button>
                </div>
              </div>

              {/* Remember me & Forgot Password */}
              <div className="flex items-center justify-between text-xs pt-1">
                <label className="flex items-center gap-2 cursor-pointer select-none text-slate-600">
                  <input
                    type="checkbox"
                    checked={rememberMe}
                    onChange={(e) => setRememberMe(e.target.checked)}
                    className="w-4 h-4 rounded text-[#2563EB] focus:ring-[#2563EB] border-slate-300"
                  />
                  <span>Remember me</span>
                </label>
                <a href="#forgot" onClick={(e) => { e.preventDefault(); showToast('Please contact your KTU lab administrator to reset password.', 'info'); }} className="font-semibold text-slate-500 hover:text-[#2563EB] transition-colors">
                  Forgot password?
                </a>
              </div>

              {/* Sign In Button */}
              <button
                type="submit"
                disabled={loading}
                className="w-full py-3.5 px-4 rounded-xl bg-[#2563EB] hover:bg-[#1D4ED8] text-white text-sm font-bold shadow-lg shadow-blue-600/25 transition-all transform active:scale-[0.99] flex items-center justify-center gap-2"
              >
                {loading ? 'Signing In...' : 'Sign In'}
              </button>
            </form>

            {/* Faculty / Admin Login Switch */}
            <div className="mt-8 pt-6 border-t border-slate-100 text-center">
              <a
                href="#faculty"
                onClick={(e) => {
                  e.preventDefault();
                  showToast('Faculty & Admin Portal is currently under schedule.', 'info');
                }}
                className="text-xs font-semibold text-slate-500 hover:text-slate-800 transition-colors"
              >
                Faculty / Admin Login
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
