import { CheckCircle2, Timer, AlertTriangle } from "lucide-react";

const students = [
  { name: "Liam Chen", pic: "https://i.pravatar.cc/80?img=12", engagement: 86, reading: 42, tasks: "7/9", mood: "happy", flags: ["adhd"] },
  { name: "Ava Patel", pic: "https://i.pravatar.cc/80?img=5", engagement: 63, reading: 28, tasks: "5/9", mood: "confused", flags: ["dyslexia"] },
  { name: "Noah Smith", pic: "https://i.pravatar.cc/80?img=20", engagement: 72, reading: 34, tasks: "6/9", mood: "fatigued", flags: [] },
  { name: "Mia García", pic: "https://i.pravatar.cc/80?img=9", engagement: 90, reading: 55, tasks: "9/10", mood: "happy", flags: [] },
];

function Badge({ children, color = "blue" }) {
  const map = {
    blue: "bg-blue-500/20 text-blue-300",
    violet: "bg-violet-500/20 text-violet-300",
    emerald: "bg-emerald-500/20 text-emerald-300",
    rose: "bg-rose-500/20 text-rose-300",
    amber: "bg-amber-500/20 text-amber-300",
  };
  return <span className={`px-2 py-1 rounded-lg text-xs ${map[color]}`}>{children}</span>;
}

function StudentCard({ s }) {
  const moodColor = {
    happy: "text-emerald-300",
    confused: "text-amber-300",
    fatigued: "text-rose-300",
    frustrated: "text-rose-300",
  }[s.mood] || "text-slate-300";

  return (
    <div className="bg-slate-900/60 border border-white/10 rounded-2xl p-4 text-white">
      <div className="flex items-center gap-3">
        <img src={s.pic} alt={s.name} className="h-10 w-10 rounded-full" />
        <div>
          <div className="font-medium leading-tight">{s.name}</div>
          <div className={`text-xs ${moodColor}`}>Emotion: {s.mood}</div>
        </div>
      </div>
      <div className="mt-4 grid grid-cols-3 gap-2 text-sm">
        <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
          <div className="text-slate-300 text-xs">Engagement</div>
          <div className="font-semibold">{s.engagement}%</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
          <div className="text-slate-300 text-xs">Reading</div>
          <div className="font-semibold">{s.reading}m</div>
        </div>
        <div className="bg-white/5 border border-white/10 rounded-xl p-2 text-center">
          <div className="text-slate-300 text-xs">Tasks</div>
          <div className="font-semibold">{s.tasks}</div>
        </div>
      </div>
      <div className="mt-3 flex items-center justify-between">
        <div className="flex gap-2">
          {s.flags.includes("adhd") && <Badge color="amber">ADHD</Badge>}
          {s.flags.includes("dyslexia") && <Badge color="violet">Dyslexia</Badge>}
        </div>
        <button className="inline-flex items-center gap-2 px-3 py-1.5 rounded-lg bg-blue-600 text-white text-xs hover:bg-blue-500 transition">
          <CheckCircle2 className="h-4 w-4" /> View More
        </button>
      </div>
    </div>
  );
}

export default function StudentGrid() {
  return (
    <section className="mt-6">
      <div className="flex items-center justify-between mb-3">
        <h3 className="font-semibold text-white">Students</h3>
        <button className="text-sm text-slate-300 hover:text-white">See all</button>
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-4 gap-4">
        {students.map((s) => (
          <StudentCard key={s.name} s={s} />
        ))}
      </div>
    </section>
  );
}
