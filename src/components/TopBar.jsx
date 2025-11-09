import { Bell, Search, User } from "lucide-react";

export default function TopBar() {
  return (
    <header className="flex items-center justify-between w-full bg-slate-900/60 backdrop-blur-xl border-b border-white/10 px-4 md:px-6 py-3 text-white">
      <div className="flex items-center gap-3 min-w-0">
        <div className="hidden sm:flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-2 text-sm text-slate-300">
          <Search className="h-4 w-4" />
          <input
            placeholder="Search students, reports, insights..."
            className="bg-transparent outline-none placeholder:text-slate-400 w-64"
          />
        </div>
      </div>
      <div className="flex items-center gap-3">
        <button className="relative p-2 rounded-lg hover:bg-white/10 transition">
          <Bell className="h-5 w-5" />
          <span className="absolute -top-1 -right-1 h-2.5 w-2.5 bg-blue-500 rounded-full" />
        </button>
        <div className="flex items-center gap-2 bg-white/5 border border-white/10 rounded-xl px-3 py-1.5">
          <User className="h-5 w-5" />
          <span className="text-sm">Ms. Parker</span>
        </div>
      </div>
    </header>
  );
}
