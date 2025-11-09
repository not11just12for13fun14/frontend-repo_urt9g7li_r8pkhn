import { Activity, Timer, BarChart2, Brain, BookOpen, CheckCircle2, TrendingUp } from "lucide-react";

function Stat({ icon: Icon, label, value, trend }) {
  return (
    <div className="flex items-center gap-3 p-4 bg-white/5 border border-white/10 rounded-xl text-white">
      <div className="p-2 rounded-lg bg-blue-500/20 text-blue-300">
        <Icon className="h-5 w-5" />
      </div>
      <div className="flex-1 min-w-0">
        <div className="text-sm text-slate-300">{label}</div>
        <div className="text-lg font-semibold">{value}</div>
      </div>
      {trend && (
        <div className={`flex items-center gap-1 text-sm ${trend > 0 ? "text-emerald-400" : "text-rose-400"}`}>
          <TrendingUp className="h-4 w-4" />
          <span>{Math.abs(trend)}%</span>
        </div>
      )}
    </div>
  );
}

function Ring({ value, color }) {
  const dash = 282.743; // circumference for r=45
  const progress = (value / 100) * dash;
  return (
    <svg viewBox="0 0 100 100" className="h-24 w-24">
      <circle cx="50" cy="50" r="45" stroke="rgba(148,163,184,0.25)" strokeWidth="8" fill="none" />
      <circle cx="50" cy="50" r="45" stroke={color} strokeWidth="8" fill="none" strokeLinecap="round" strokeDasharray={`${progress} ${dash - progress}`} transform="rotate(-90 50 50)" />
      <text x="50" y="54" textAnchor="middle" className="fill-white text-sm font-semibold">{value}%</text>
    </svg>
  );
}

export default function DashboardCards() {
  return (
    <section className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
      <div className="col-span-1 md:col-span-2 xl:col-span-2 p-4 bg-slate-900/60 border border-white/10 rounded-2xl text-white">
        <div className="flex items-center justify-between mb-4">
          <h3 className="font-semibold">Real-Time Class Summary</h3>
        </div>
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
          <Stat icon={UsersIcon} label="Total Students" value="28" />
          <Stat icon={Brain} label="ADHD Indicators" value="6" trend={-2} />
          <Stat icon={BookOpen} label="Dyslexia Patterns" value="4" trend={-1} />
          <Stat icon={Activity} label="Engagement Score" value="82%" trend={3} />
        </div>
        <div className="mt-6 grid grid-cols-1 sm:grid-cols-3 gap-6">
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-4">
            <Ring value={82} color="#60a5fa" />
            <div className="mt-2 text-slate-300 text-sm">Class Engagement</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-4">
            <Ring value={64} color="#34d399" />
            <div className="mt-2 text-slate-300 text-sm">Average Reading Time</div>
          </div>
          <div className="flex flex-col items-center justify-center bg-white/5 border border-white/10 rounded-xl p-4">
            <Ring value={71} color="#a78bfa" />
            <div className="mt-2 text-slate-300 text-sm">Task Completion</div>
          </div>
        </div>
      </div>

      <div className="col-span-1 p-4 bg-slate-900/60 border border-white/10 rounded-2xl text-white">
        <h3 className="font-semibold mb-3">AI Learning Insights</h3>
        <div className="space-y-3">
          {[
            { name: "Liam Chen", issue: "Low focus", conf: 92 },
            { name: "Ava Patel", issue: "Reading difficulty", conf: 87 },
            { name: "Noah Smith", issue: "Attention fluctuation", conf: 81 },
          ].map((s) => (
            <div key={s.name} className="flex items-center justify-between bg-white/5 border border-white/10 rounded-xl p-3">
              <div>
                <div className="font-medium">{s.name}</div>
                <div className="text-xs text-slate-400">{s.issue}</div>
              </div>
              <div className={`text-sm font-semibold ${s.conf > 90 ? "text-rose-400" : s.conf > 85 ? "text-amber-300" : "text-emerald-400"}`}>{s.conf}%</div>
            </div>
          ))}
        </div>
      </div>

      <div className="col-span-1 p-4 bg-slate-900/60 border border-white/10 rounded-2xl text-white">
        <h3 className="font-semibold mb-3">Reading & Attention</h3>
        <div className="space-y-4">
          <MiniChart label="Focus (24h)" color="#60a5fa" />
          <MiniChart label="Reading Curve" color="#a78bfa" />
          <MiniChart label="Attention Oscillation" color="#34d399" />
        </div>
      </div>
    </section>
  );
}

function UsersIcon(props){return (<svg viewBox="0 0 24 24" width="20" height="20" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" {...props}><path d="M16 21v-2a4 4 0 0 0-4-4H6a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M22 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>)}

function MiniChart({ label, color }) {
  const points = Array.from({ length: 20 }, (_, i) => {
    const x = (i / 19) * 100;
    const y = 50 + Math.sin(i * 0.7) * 20 + (Math.random() - 0.5) * 6;
    return `${x},${y}`;
  }).join(" ");

  return (
    <div className="bg-white/5 border border-white/10 rounded-xl p-3">
      <div className="text-sm text-slate-300 mb-2">{label}</div>
      <svg viewBox="0 0 100 60" className="w-full h-20">
        <defs>
          <linearGradient id={`grad-${label}`} x1="0" x2="0" y1="0" y2="1">
            <stop offset="0%" stopColor={color} stopOpacity="0.6" />
            <stop offset="100%" stopColor={color} stopOpacity="0" />
          </linearGradient>
        </defs>
        <polyline points={points} fill="none" stroke={color} strokeWidth="2" />
        <polygon points={`0,60 ${points} 100,60`} fill={`url(#grad-${label})`} />
      </svg>
    </div>
  );
}
