const logs = [
  "CPU Card update sent via WebSocket",
  "Redis Cache optimization successful",
  "Python Core detected predictive load",
  "Query optimize successful"
];

export default function LiveLogs() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl shadow-lg h-full">
      <h2 className="text-xl font-semibold mb-4">
        Live Status Updates
      </h2>

      <div className="space-y-3">
        {logs.map((log, index) => (
          <div
            key={index}
            className="bg-black p-2 rounded text-sm text-green-400"
          >
            {log}
          </div>
        ))}
      </div>
    </div>
  );
}