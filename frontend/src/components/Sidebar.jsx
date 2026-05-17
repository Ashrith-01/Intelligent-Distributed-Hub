import { Activity, BarChart3, CircleHelp, History, LogOut, Settings, Shield } from "lucide-react";

const navItems = [
  { label: "Dashboard", icon: Activity, active: true },
  { label: "Analytics", icon: BarChart3 },
  { label: "Settings", icon: Settings },
  { label: "History", icon: History },
  { label: "Help", icon: CircleHelp },
];

export default function Sidebar() {
  return (
    <aside className="fixed inset-y-0 left-0 z-30 hidden w-16 flex-col border-r border-slate-800/80 bg-[#0b0f15]/95 py-4 backdrop-blur md:flex">
      <div className="mx-auto mb-7 flex h-10 w-10 items-center justify-center rounded-2xl border border-cyan-400/20 bg-cyan-400/10 text-cyan-300 shadow-lg shadow-cyan-950/40">
        <Shield size={20} />
      </div>

      <nav className="flex flex-1 flex-col items-center gap-3">
        {navItems.map(({ label, icon: Icon, active }) => (
          <button
            key={label}
            aria-label={label}
            className={`group flex h-10 w-10 items-center justify-center rounded-xl border transition ${
              active
                ? "border-cyan-400/40 bg-cyan-400/15 text-cyan-200 shadow-lg shadow-cyan-950/30"
                : "border-transparent text-slate-500 hover:border-slate-700 hover:bg-slate-900 hover:text-slate-200"
            }`}
            type="button"
          >
            <Icon size={19} />
          </button>
        ))}
      </nav>

      <div className="flex flex-col items-center gap-3">
        <button
          aria-label="Operator profile"
          className="flex h-10 w-10 items-center justify-center rounded-full border border-emerald-400/30 bg-emerald-400/10 text-xs font-bold text-emerald-200"
          type="button"
        >
          OP
        </button>
        <button
          aria-label="Logout"
          className="flex h-10 w-10 items-center justify-center rounded-xl text-slate-500 transition hover:bg-red-500/10 hover:text-red-300"
          type="button"
        >
          <LogOut size={18} />
        </button>
      </div>
    </aside>
  );
}
