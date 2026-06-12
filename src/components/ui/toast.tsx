'use client';

import * as React from 'react';
import { cn } from '@/lib/utils';

interface ToastProps {
  message: string;
  type?: 'success' | 'error' | 'info';
  onClose: () => void;
}

export function Toast({ message, type = 'success', onClose }: ToastProps) {
  React.useEffect(() => {
    const timer = setTimeout(onClose, 4000);
    return () => clearTimeout(timer);
  }, [onClose]);

  return (
    <div
      className={cn(
        'fixed bottom-24 right-6 z-50 flex items-center gap-3 px-5 py-3.5 rounded-xl border shadow-2xl shadow-black/40 text-sm font-medium animate-in slide-in-from-bottom-4 fade-in duration-300',
        type === 'success' && 'bg-zinc-900 border-green-400/40 text-white',
        type === 'error' && 'bg-zinc-900 border-red-400/40 text-white',
        type === 'info' && 'bg-zinc-900 border-zinc-600 text-white',
      )}
    >
      <span>
        {type === 'success' ? '✅' : type === 'error' ? '❌' : 'ℹ️'}
      </span>
      <span>{message}</span>
      <button
        onClick={onClose}
        className="ml-2 text-zinc-500 hover:text-white transition-colors"
      >
        ✕
      </button>
    </div>
  );
}

// ── useToast hook ──────────────────────────────────────────────────────────
type ToastState = { message: string; type: 'success' | 'error' | 'info' } | null;

export function useToast() {
  const [toast, setToast] = React.useState<ToastState>(null);

  const show = React.useCallback((message: string, type: 'success' | 'error' | 'info' = 'success') => {
    setToast({ message, type });
  }, []);

  const hide = React.useCallback(() => setToast(null), []);

  const ToastComponent = toast ? (
    <Toast message={toast.message} type={toast.type} onClose={hide} />
  ) : null;

  return { show, ToastComponent };
}
