import { Home, Users, Brain, BarChart3, Share2, Settings } from "lucide-react";

function NavItem({ icon: Icon, label, active }) {
  return (
    <button
      className={`flex items-center gap-3 w-full px-4 py-3 rounded-xl transition-colors duration-200 text-sm font-medium ${
        active
          ? "bg-blue-600/20 text-blue-300"
          : "text-slate-300 hover:bg-white/5 hover:text-white"
      }`}
    >
      <Icon className="h-5 w-5" />
      <span>{label}</span>
    </button>
  );
}

export default function Sidebar() {
  return (
    <aside className="hidden md:flex md:flex-col md:w-64 shrink-0 bg-slate-900/70 backdrop-blur-xl border-r border-white/10 text-white p-4 gap-2">
      <div className="px-2 py-3">
        <div className="text-lg font-semibold tracking-tight">EduSense</div>
        <div className="text-xs text-slate-400">AI Classroom Suite</div>
      </div>
      <nav className="mt-2 space-y-1">
        <NavItem icon={Home} label="Overview" active />
        <NavItem icon={Users} label="Students" />
        <NavItem icon={Brain} label="AI Insights" />
        <NavItem icon={BarChart3} label="Progress Reports" />
        <NavItem icon={Share2} label="Collaboration" />
      </nav>
      <div className="mt-auto">
        <NavItem icon={Settings} label="Settings" />
      </div>
    </aside>
  );
}
