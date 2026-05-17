import { ChevronDown, Database } from "lucide-react";
import Gauge from "./Gauge";

export default function MemoryCard({ memory }) {
  const usedPercent = Math.round((memory.used / memory.total) * 100);
  const maxSegment = Math.max(...memory.segments.map((segment) => segment.value));

  return (
    <section className="rounded-3xl border border-slate-800 bg-[#161b22] p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between gap-3">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Memory Usage Card</p>
          <h2 className="text-lg font-bold text-slate-50">System RAM Allocation</h2>
        </div>
        <button className="flex items-center gap-2 rounded-full border border-slate-700 bg-slate-950 px-3 py-2 text-sm text-slate-200 transition hover:border-emerald-400/50" type="button">
          <Database size={15} /> Memory <ChevronDown size={15} />
        </button>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.95fr_1.05fr]">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3">
          <Gauge value={usedPercent} label={`${memory.used} GB`} sublabel={`/ ${memory.total}.0 GB Used`} color="#22c55e" />
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
          <div className="flex h-40 items-end justify-center gap-5 border-b border-slate-800 pb-4">
            {memory.segments.map((segment) => (
              <div key={segment.name} className="flex h-full w-12 flex-col items-center justify-end gap-2">
                <div className="text-xs font-bold text-slate-300">{segment.value}GB</div>
                <div
                  className="w-full rounded-t-xl shadow-lg transition-all duration-700"
                  style={{ height: `${(segment.value / maxSegment) * 100}%`, background: `linear-gradient(180deg, ${segment.color}, rgba(15,23,42,0.35))` }}
                />
              </div>
            ))}
          </div>
          <div className="mt-4 flex flex-wrap gap-3">
            {memory.segments.map((segment) => (
              <div key={segment.name} className="flex items-center gap-2 text-xs text-slate-300">
                <span className="h-2.5 w-2.5 rounded-full" style={{ backgroundColor: segment.color }} />
                {segment.name}: {segment.value}GB
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
