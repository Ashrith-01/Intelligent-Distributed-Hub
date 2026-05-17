import { Activity } from "lucide-react";
import { Area, AreaChart, CartesianGrid, Legend, ResponsiveContainer, Tooltip, XAxis, YAxis } from "recharts";

export default function AnalyticsChart({ data }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#161b22] p-5 shadow-2xl shadow-black/20 lg:col-span-2">
      <div className="mb-5 flex flex-col gap-3 sm:flex-row sm:items-center sm:justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Analytics Chart</p>
          <h2 className="text-lg font-bold text-slate-50">System Throughput & Network IO (24 Hours)</h2>
        </div>
        <div className="flex items-center gap-2 rounded-full border border-blue-400/20 bg-blue-400/10 px-3 py-2 text-sm text-blue-200">
          <Activity size={16} /> dual-axis telemetry
        </div>
      </div>

      <div className="h-80 rounded-2xl border border-slate-800/80 bg-slate-950/40 p-3">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data} margin={{ top: 16, right: 12, left: -12, bottom: 0 }}>
            <defs>
              <linearGradient id="requestsGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#38bdf8" stopOpacity={0.45} />
                <stop offset="95%" stopColor="#38bdf8" stopOpacity={0.02} />
              </linearGradient>
              <linearGradient id="networkGradient" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#22c55e" stopOpacity={0.4} />
                <stop offset="95%" stopColor="#22c55e" stopOpacity={0.02} />
              </linearGradient>
            </defs>
            <CartesianGrid stroke="#1e293b" strokeDasharray="3 8" vertical={false} />
            <XAxis dataKey="time" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="left" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <YAxis yAxisId="right" orientation="right" tick={{ fill: "#94a3b8", fontSize: 12 }} axisLine={false} tickLine={false} />
            <Tooltip
              contentStyle={{ background: "#020617", border: "1px solid #334155", borderRadius: 14, color: "#e2e8f0" }}
              labelStyle={{ color: "#bae6fd" }}
            />
            <Legend iconType="circle" wrapperStyle={{ color: "#cbd5e1", fontSize: 12 }} />
            <Area yAxisId="left" name="Requests/sec" type="monotone" dataKey="requests" stroke="#38bdf8" strokeWidth={3} fill="url(#requestsGradient)" activeDot={{ r: 5 }} />
            <Area yAxisId="right" name="Data In/Out" type="monotone" dataKey="network" stroke="#22c55e" strokeWidth={3} fill="url(#networkGradient)" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
