export default function CpuCard() {
  const cpu = 74;

  return (
    <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">CPU Usage Card</h2>

      <div className="flex flex-col items-center">
        <div className="text-5xl font-bold text-cyan-400">
          {cpu}%
        </div>

        <p className="text-gray-400 mt-2">UTILIZED</p>
      </div>
    </div>
  );
}