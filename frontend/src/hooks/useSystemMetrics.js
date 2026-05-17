import { useEffect, useMemo, useState } from "react";
import {
  initialCpuHistory,
  initialLogs,
  initialThroughput,
  memorySegments,
  nodeStatuses,
  rotatingEvents,
} from "../utils/mockData";

const clamp = (value, min, max) => Math.min(max, Math.max(min, value));
const randomDelta = (range) => (Math.random() - 0.5) * range;
const formatLogTime = (date) =>
  date.toLocaleTimeString("en-US", {
    hour12: false,
    hour: "2-digit",
    minute: "2-digit",
    second: "2-digit",
  });

export function useSystemMetrics() {
  const [cpu, setCpu] = useState(74);
  const [memoryUsed, setMemoryUsed] = useState(5.9);
  const [cpuHistory, setCpuHistory] = useState(initialCpuHistory);
  const [logs, setLogs] = useState(initialLogs);
  const [throughput, setThroughput] = useState(initialThroughput);
  const [now, setNow] = useState(new Date());

  useEffect(() => {
    let eventIndex = 0;

    const intervalId = window.setInterval(() => {
      const timestamp = new Date();
      setNow(timestamp);

      setCpu((current) => {
        const nextCpu = Math.round(clamp(current + randomDelta(8), 58, 89));
        setCpuHistory((history) => [
          ...history.slice(1),
          { time: formatLogTime(timestamp).slice(0, 5), load: nextCpu },
        ]);
        return nextCpu;
      });

      setMemoryUsed((current) => Number(clamp(current + randomDelta(0.35), 5.2, 6.8).toFixed(1)));

      setThroughput((points) =>
        points.map((point) => ({
          ...point,
          requests: Math.round(clamp(point.requests + randomDelta(130), 520, 1950)),
          network: Math.round(clamp(point.network + randomDelta(9), 28, 108)),
        })),
      );

      const event = rotatingEvents[eventIndex % rotatingEvents.length];
      eventIndex += 1;
      setLogs((currentLogs) => [
        ...currentLogs.slice(-11),
        { ...event, time: formatLogTime(timestamp) },
      ]);
    }, 2600);

    return () => window.clearInterval(intervalId);
  }, []);

  return useMemo(
    () => ({
      cpu,
      cpuHistory,
      memory: {
        used: memoryUsed,
        total: 8,
        segments: memorySegments,
      },
      logs,
      nodes: nodeStatuses,
      throughput,
      now,
    }),
    [cpu, cpuHistory, logs, memoryUsed, now, throughput],
  );
}
