import React from 'react';

interface StatusPillProps {
  status: 'READY' | 'CONNECTED' | 'RECONNECTING' | 'EXPIRED' | 'ACTIVE' | 'GRADED' | 'DUE';
  label?: string;
  pulse?: boolean;
}

export default function StatusPill({ status, label, pulse = true }: StatusPillProps) {
  const getStyle = () => {
    switch (status) {
      case 'READY':
      case 'CONNECTED':
      case 'GRADED':
      case 'ACTIVE':
        return {
          bg: 'bg-[#ECFDF5]',
          border: 'border-[#A7F3D0]',
          text: 'text-[#065F46]',
          dot: 'bg-[#10B981]',
        };
      case 'RECONNECTING':
      case 'DUE':
        return {
          bg: 'bg-[#FFFBEB]',
          border: 'border-[#FDE68A]',
          text: 'text-[#92400E]',
          dot: 'bg-[#F59E0B]',
        };
      case 'EXPIRED':
        return {
          bg: 'bg-[#FEF2F2]',
          border: 'border-[#FECACA]',
          text: 'text-[#991B1B]',
          dot: 'bg-[#EF4444]',
        };
      default:
        return {
          bg: 'bg-slate-100',
          border: 'border-slate-300',
          text: 'text-slate-700',
          dot: 'bg-slate-400',
        };
    }
  };

  const style = getStyle();

  return (
    <span
      className={`inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-xs font-semibold border ${style.bg} ${style.border} ${style.text}`}
    >
      <span className={`w-2 h-2 rounded-full ${style.dot} ${pulse ? 'animate-pulse' : ''}`} />
      <span>{label || status}</span>
    </span>
  );
}
