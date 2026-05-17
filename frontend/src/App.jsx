import AnalyticsChart from "./components/AnalyticsChart";
import CpuCard from "./components/CpuCard";
import LiveLogs from "./components/LiveLogs";
import MemoryCard from "./components/MemoryCard";
import Navbar from "./components/Navbar";
import NodesTable from "./components/NodesTable";
import Sidebar from "./components/Sidebar";
import { useSystemMetrics } from "./hooks/useSystemMetrics";

export default function App() {
  const metrics = useSystemMetrics();

  return (
    <div className="min-h-screen bg-[#0f1319] text-white">
      <Sidebar />
      <div className="min-h-screen md:pl-16">
        <Navbar now={metrics.now} />

        <main className="px-4 pb-20 pt-5 lg:px-6">
          <div className="grid grid-cols-1 gap-5 xl:grid-cols-3">
            <CpuCard cpu={metrics.cpu} history={metrics.cpuHistory} />
            <MemoryCard memory={metrics.memory} />
            <LiveLogs logs={metrics.logs} />
            <NodesTable nodes={metrics.nodes} />
            <AnalyticsChart data={metrics.throughput} />
          </div>
        </main>
      </div>

      <footer className="fixed inset-x-0 bottom-0 z-40 border-t border-slate-800 bg-[#0b0f15]/95 px-4 py-2 text-xs text-slate-400 backdrop-blur md:left-16">
        <div className="flex flex-col gap-2 sm:flex-row sm:items-center sm:justify-between">
          <span>Mock WebSocket stream active · Ready for native WebSocket/API polling replacement</span>
          <div className="flex gap-4 font-semibold text-emerald-300">
            <span>🟢 Network: Strong</span>
            <span>🟢 DB Status: OK</span>
          </div>
        </div>
      </footer>
    </div>
  );
}
