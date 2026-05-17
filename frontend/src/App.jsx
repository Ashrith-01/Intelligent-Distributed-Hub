import Navbar from "./components/Navbar";
import CpuCard from "./components/CpuCard";
import MemoryCard from "./components/MemoryCard";
import LiveLogs from "./components/LiveLogs";
import NodesTable from "./components/NodesTable";
import AnalyticsChart from "./components/AnalyticsChart";

export default function App() {
  return (
    <div className="min-h-screen bg-[#050816] text-white p-4">
      <Navbar />

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-5 mt-5">
        <CpuCard />
        <MemoryCard />
        <LiveLogs />
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-5 mt-5">
        <NodesTable />
        <AnalyticsChart />
      </div>
    </div>
  );
}