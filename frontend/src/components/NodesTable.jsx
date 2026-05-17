const nodes = [
  {
    name: "Express API",
    status: "Online",
    uptime: "14d 3h",
    latency: "25ms"
  },
  {
    name: "Python Analytics",
    status: "Online",
    uptime: "14d 3h",
    latency: "41ms"
  },
  {
    name: "Redis Cache",
    status: "Online",
    uptime: "14d 3h",
    latency: "18ms"
  }
];

export default function NodesTable() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Active Nodes Table
      </h2>

      <table className="w-full">
        <thead>
          <tr className="text-left text-gray-400">
            <th>Name</th>
            <th>Status</th>
            <th>Uptime</th>
            <th>Latency</th>
          </tr>
        </thead>

        <tbody>
          {nodes.map((node, index) => (
            <tr key={index} className="border-t border-gray-700">
              <td className="py-3">{node.name}</td>

              <td>
                <span className="bg-green-600 px-3 py-1 rounded-lg text-sm">
                  {node.status}
                </span>
              </td>

              <td>{node.uptime}</td>

              <td>{node.latency}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}