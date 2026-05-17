import {
  AreaChart,
  Area,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer
} from "recharts";

const data = [
  { time: "08:00", requests: 400 },
  { time: "10:00", requests: 900 },
  { time: "12:00", requests: 500 },
  { time: "14:00", requests: 1300 },
  { time: "16:00", requests: 1000 }
];

export default function AnalyticsChart() {
  return (
    <div className="bg-[#111827] p-5 rounded-2xl shadow-lg">
      <h2 className="text-xl font-semibold mb-4">
        Analytics Chart
      </h2>

      <div className="h-72">
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={data}>
            <XAxis dataKey="time" />
            <YAxis />
            <Tooltip />

            <Area
              type="monotone"
              dataKey="requests"
              stroke="#06b6d4"
              fill="#0891b2"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
}