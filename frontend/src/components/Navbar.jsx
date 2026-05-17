import { Settings, Wifi } from "lucide-react";

export default function Navbar({ now }) {
  const formattedTime = now.toLocaleString("en-US", {
    weekday: "short",
    month: "short",
    day: "2-digit",
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

  return (
    <header className="sticky top-0 z-20 flex flex-col gap-4 border-b border-slate-800/80 bg-[#0f1319]/90 px-4 py-4 backdrop-blur-xl sm:flex-row sm:items-center sm:justify-between lg:px-6">
      <div>
        <p className="text-xs font-semibold uppercase tracking-[0.32em] text-cyan-300/70">Distributed Infrastructure Console</p>
        <h1 className="mt-1 text-xl font-black tracking-tight text-white sm:text-2xl lg:text-3xl">
          SYSTEM MONITORING <span className="text-cyan-300">| RESOURCE HUB</span>
        </h1>
      </div>

      <div className="flex items-center gap-3 text-sm text-slate-300">
        <div className="flex items-center gap-2 rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-2 text-emerald-200">
          <Wifi size={16} />
          <span className="hidden sm:inline">Live</span>
          <span>{formattedTime}</span>
        </div>
        <button
          aria-label="Open settings"
          className="rounded-full border border-slate-700 bg-slate-900 p-2 text-slate-300 transition hover:border-cyan-400/40 hover:text-cyan-200"
          type="button"
        >
          <Settings size={18} />
        </button>
      </div>
    </header>
  );
}
