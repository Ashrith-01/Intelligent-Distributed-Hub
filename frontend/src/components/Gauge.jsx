export default function Gauge({ value, max = 100, label, sublabel, color = "#22d3ee", className = "" }) {
  const radius = 72;
  const circumference = Math.PI * radius;
  const progress = Math.min(value / max, 1) * circumference;

  return (
    <div className={`relative flex h-40 w-48 items-center justify-center ${className}`}>
      <svg className="absolute h-full w-full" viewBox="0 0 180 120" aria-hidden="true">
        <path
          d="M 18 100 A 72 72 0 0 1 162 100"
          fill="none"
          stroke="#293241"
          strokeLinecap="round"
          strokeWidth="16"
        />
        <path
          d="M 18 100 A 72 72 0 0 1 162 100"
          fill="none"
          stroke={color}
          strokeDasharray={`${progress} ${circumference}`}
          strokeLinecap="round"
          strokeWidth="16"
          className="drop-shadow-[0_0_12px_rgba(34,211,238,0.35)] transition-all duration-700"
        />
      </svg>
      <div className="mt-8 text-center">
        <div className="text-3xl font-black tracking-tight text-white">{label}</div>
        <div className="mt-1 text-[0.68rem] font-bold uppercase tracking-[0.24em] text-slate-400">{sublabel}</div>
      </div>
    </div>
  );
}
