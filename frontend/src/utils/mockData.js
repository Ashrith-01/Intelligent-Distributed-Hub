export const initialCpuHistory = [
  { time: "-30m", load: 61 },
  { time: "-25m", load: 64 },
  { time: "-20m", load: 69 },
  { time: "-15m", load: 72 },
  { time: "-10m", load: 70 },
  { time: "-5m", load: 76 },
  { time: "Now", load: 74 },
];

export const initialLogs = [
  { time: "14:31:02", level: "info", message: "Express API v2.4 heartbeat acknowledged" },
  { time: "14:31:08", level: "success", message: "Redis Cache 7.0 optimization completed" },
  { time: "14:31:14", level: "warning", message: "WARN: CPU queue depth exceeded predictive threshold" },
  { time: "14:31:21", level: "error", message: "ALERT: Python Core detected high predictive load" },
  { time: "14:31:32", level: "info", message: "PostgreSQL db1 replication lag stabilized at 12ms" },
  { time: "14:31:44", level: "success", message: "Network edge telemetry stream synchronized" },
];

export const nodeStatuses = [
  { name: "Express API v2.4", status: "Online", uptime: "14d 3h", latency: "25ms" },
  { name: "Python Analytics Core", status: "Online", uptime: "14d 3h", latency: "41ms" },
  { name: "Redis Cache 7.0", status: "Online", uptime: "14d 3h", latency: "25ms" },
  { name: "PostgreSQL db1", status: "Online", uptime: "14d 3h", latency: "41ms" },
];

export const initialThroughput = [
  { time: "00:00", requests: 820, network: 42 },
  { time: "03:00", requests: 640, network: 35 },
  { time: "06:00", requests: 920, network: 51 },
  { time: "09:00", requests: 1480, network: 78 },
  { time: "12:00", requests: 1260, network: 66 },
  { time: "15:00", requests: 1760, network: 92 },
  { time: "18:00", requests: 1540, network: 81 },
  { time: "21:00", requests: 1120, network: 58 },
];

export const memorySegments = [
  { name: "Active", value: 4.2, color: "#22c55e" },
  { name: "Cache", value: 1.1, color: "#38bdf8" },
  { name: "Swap", value: 0.6, color: "#f59e0b" },
];

export const rotatingEvents = [
  { level: "info", message: "gRPC mesh route latency sampled under SLA" },
  { level: "success", message: "Container autoscaler applied warm-pool policy" },
  { level: "warning", message: "WARN: Redis eviction pressure trending upward" },
  { level: "info", message: "Node telemetry batch committed to time-series store" },
  { level: "error", message: "ALERT: Python Core detected high predictive load" },
  { level: "success", message: "PostgreSQL checkpoint completed without backpressure" },
];
