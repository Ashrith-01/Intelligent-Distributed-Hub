export default function Navbar() {
  return (
    <div className="flex justify-between items-center p-4 border-b border-gray-800">
      <h1 className="text-2xl font-bold text-cyan-400">
        SYSTEM MONITORING | RESOURCE HUB
      </h1>

      <div className="text-gray-400">
        {new Date().toLocaleString()}
      </div>
    </div>
  );
}