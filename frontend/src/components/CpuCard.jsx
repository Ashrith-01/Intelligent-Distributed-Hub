import { ArrowUpRight, Cpu, TriangleAlert } from "lucide-react";
import { Line, LineChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";
import Gauge from "./Gauge";

export default function CpuCard({ cpu, history }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#161b22] p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">CPU Usage Card</p>
          <h2 className="text-lg font-bold text-slate-50">Core Processor Load</h2>
        </div>
        <div className="rounded-2xl border border-cyan-400/20 bg-cyan-400/10 p-2 text-cyan-300">
          <Cpu size={20} />
        </div>
      </div>

      <div className="grid gap-4 xl:grid-cols-[0.9fr_1.1fr]">
        <div className="flex flex-col items-center justify-center rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3">
          <Gauge value={cpu} label={`${cpu}%`} sublabel="Utilized" />
          <div className="-mt-2 flex items-center gap-1 rounded-full bg-amber-400/10 px-3 py-1 text-xs font-semibold text-amber-200">
            <ArrowUpRight size={14} /> Directional load rising
          </div>
        </div>

        <div className="rounded-2xl border border-slate-800/80 bg-slate-950/40 p-4">
          <div className="mb-2 flex items-center justify-between">
            <span className="text-xs font-semibold uppercase tracking-[0.2em] text-slate-400">Past 30 minutes</span>
            <span className="text-xs text-cyan-300">stream</span>
          </div>
          <div className="h-40">
            <ResponsiveContainer width="100%" height="100%">
              <LineChart data={history} margin={{ top: 10, right: 6, left: -28, bottom: 0 }}>
                <XAxis dataKey="time" tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
                <YAxis domain={[40, 100]} tick={{ fill: "#64748b", fontSize: 10 }} axisLine={false} tickLine={false} />
                <Tooltip
                  contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 12, color: "#e2e8f0" }}
                  labelStyle={{ color: "#67e8f9" }}
                />
                <Line type="monotone" dataKey="load" stroke="#22d3ee" strokeWidth={3} dot={false} />
              </LineChart>
            </ResponsiveContainer>
          </div>
        </div>
      </div>

      <footer className="mt-4 grid gap-2 text-sm sm:grid-cols-2">
        <div className="rounded-2xl border border-slate-800 bg-slate-950/40 px-4 py-3 text-slate-400">Core 0-3: 71-78%</div>
        <div className="flex items-center gap-2 rounded-2xl border border-amber-400/20 bg-amber-400/10 px-4 py-3 font-semibold text-amber-200">
          <TriangleAlert size={16} /> High-Load Warnings: 2
        </div>
      </footer>
    </section>
  );
}
