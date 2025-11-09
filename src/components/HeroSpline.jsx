import Spline from '@splinetool/react-spline';

export default function HeroSpline() {
  return (
    <div className="relative w-full h-[300px] md:h-[420px] rounded-2xl overflow-hidden bg-slate-900/50 border border-white/10">
      <Spline scene="https://prod.spline.design/pDXeCthqjmzYX5Zk/scene.splinecode" style={{ width: '100%', height: '100%' }} />
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-slate-950/70 via-slate-950/10 to-transparent" />
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 p-6 flex justify-between items-end">
        <div>
          <h2 className="text-white text-2xl md:text-3xl font-semibold">Smart AI Classroom</h2>
          <p className="text-slate-300 text-sm md:text-base">Real-time insights across focus, reading, emotions, and progress</p>
        </div>
        <div className="hidden md:flex gap-2">
          <span className="h-2 w-2 rounded-full bg-blue-400 shadow-[0_0_12px_2px_rgba(56,189,248,0.7)]" />
          <span className="h-2 w-2 rounded-full bg-violet-400 shadow-[0_0_12px_2px_rgba(167,139,250,0.7)]" />
          <span className="h-2 w-2 rounded-full bg-teal-400 shadow-[0_0_12px_2px_rgba(45,212,191,0.7)]" />
        </div>
      </div>
    </div>
  );
}
