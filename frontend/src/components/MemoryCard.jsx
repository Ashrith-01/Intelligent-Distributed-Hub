export default function MemoryCard() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Memory Usage Card
      </h2>

      <div className="text-4xl font-bold text-green-400">
        5.9 GB
      </div>

      <p className="text-gray-400 mt-2">
        / 8 GB USED
      </p>
    </div>
  );
}