import { Info, Pencil, Server } from "lucide-react";

export default function NodesTable({ nodes }) {
  return (
    <section className="rounded-3xl border border-slate-800 bg-[#161b22] p-5 shadow-2xl shadow-black/20 lg:col-span-1">
      <div className="mb-5 flex items-center justify-between">
        <div>
          <p className="text-xs font-bold uppercase tracking-[0.24em] text-slate-500">Active Nodes Table</p>
          <h2 className="text-lg font-bold text-slate-50">Distributed Nodes Status</h2>
        </div>
        <div className="rounded-2xl border border-violet-400/20 bg-violet-400/10 p-2 text-violet-300">
          <Server size={20} />
        </div>
      </div>

      <div className="overflow-x-auto">
        <table className="w-full min-w-[620px] border-separate border-spacing-y-2 text-left text-sm">
          <thead className="text-xs uppercase tracking-[0.2em] text-slate-500">
            <tr>
              <th className="px-3 pb-2 font-semibold">Node Name</th>
              <th className="px-3 pb-2 font-semibold">Status</th>
              <th className="px-3 pb-2 font-semibold">Uptime</th>
              <th className="px-3 pb-2 font-semibold">Latency</th>
              <th className="px-3 pb-2 font-semibold">Action</th>
            </tr>
          </thead>
          <tbody>
            {nodes.map((node) => (
              <tr key={node.name} className="rounded-2xl bg-slate-950/35 text-slate-200">
                <td className="rounded-l-2xl px-3 py-3 font-semibold text-white">{node.name}</td>
                <td className="px-3 py-3">
                  <span className="rounded-full border border-emerald-400/20 bg-emerald-400/10 px-3 py-1 text-xs font-bold text-emerald-300">{node.status}</span>
                </td>
                <td className="px-3 py-3 text-slate-400">{node.uptime}</td>
                <td className="px-3 py-3 text-slate-400">{node.latency}</td>
                <td className="rounded-r-2xl px-3 py-3">
                  <div className="flex gap-2">
                    <button aria-label={`Configure ${node.name}`} className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-cyan-400/50 hover:text-cyan-200" type="button">
                      <Pencil size={15} />
                    </button>
                    <button aria-label={`Info for ${node.name}`} className="rounded-lg border border-slate-700 p-2 text-slate-300 transition hover:border-violet-400/50 hover:text-violet-200" type="button">
                      <Info size={15} />
                    </button>
                  </div>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </section>
  );
}
