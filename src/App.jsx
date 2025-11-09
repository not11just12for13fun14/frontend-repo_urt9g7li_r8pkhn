import Sidebar from './components/Sidebar';
import TopBar from './components/TopBar';
import HeroSpline from './components/HeroSpline';
import DashboardCards from './components/DashboardCards';
import StudentGrid from './components/StudentGrid';

function App() {
  return (
    <div className="min-h-screen bg-gradient-to-b from-slate-950 via-slate-900 to-slate-950">
      <div className="flex">
        <Sidebar />
        <main className="flex-1 flex flex-col min-w-0">
          <TopBar />
          <div className="p-4 md:p-6 space-y-6">
            <HeroSpline />
            <DashboardCards />
            <StudentGrid />
          </div>
        </main>
      </div>
    </div>
  );
}

export default App;
