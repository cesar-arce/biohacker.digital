'use client';

export default function PrintButton({ label = '⬇ Save as PDF' }: { label?: string }) {
  return (
    <button
      onClick={() => window.print()}
      className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-green-400 text-zinc-950 font-bold rounded-xl hover:bg-green-300 transition-colors text-sm"
    >
      {label}
    </button>
  );
}
