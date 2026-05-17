import { TerminalSquare } from "lucide-react";

const levelClasses = {
  info: "text-cyan-200",
  success: "text-emerald-300",
  warning: "bg-amber-400/10 text-amber-200",
  error: "bg-red-500/10 text-red-300",
};

export default function LiveLogs({ logs }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#161b22] p-5 shadow-2xl shadow-black/20">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Event Stream</p>
          <h2 className="text-lg font-bold text-slate-50">Live Status Updates | REAL-TIME LOGS</h2>
        </div>
        <div className="rounded-2xl border border-emerald-400/20 bg-emerald-400/10 p-2 text-emerald-300">
          <TerminalSquare size={20} />
        </div>
      </div>

      <div className="h-[21rem] overflow-y-auto rounded-2xl border border-slate-800 bg-black p-4 font-mono text-sm shadow-inner shadow-black scrollbar-thin scrollbar-track-slate-950 scrollbar-thumb-slate-700">
        <div className="space-y-2">
          {logs.map((log, index) => (
            <div key={`${log.time}-${index}`} className={`rounded-lg px-2 py-1 ${levelClasses[log.level]}`}>
              <span className="text-slate-500">[{log.time}]</span> <span>{log.message}</span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
