import React, { useState, useEffect, useRef } from 'react';
import { useAuth } from '../contexts/AuthContext';
import RecentJobsTable from '../components/Dashboard/RecentJobsTable';
import { Link } from 'react-router-dom';
import { Pie } from 'react-chartjs-2';
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
} from 'chart.js';

ChartJS.register(ArcElement, Tooltip, Legend);

const quickActionsData = [
  {
    id: 'addShip',
    label: 'Add New Ship',
    route: '/ships/new',
    icon: '🛳️',
    fromColor: 'from-blue-500',
    toColor: 'to-blue-700',
  },
  {
    id: 'createJob',
    label: 'Create Maintenance Job',
    route: '/jobs/new',
    icon: '🛠️',
    fromColor: 'from-green-500',
    toColor: 'to-green-700',
  },
  {
    id: 'viewCalendar',
    label: 'View Maintenance Calendar',
    route: '/calendar',
    icon: '📅',
    fromColor: 'from-purple-500',
    toColor: 'to-purple-700',
  },
];

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalShips: 0,
    overdueComponents: 0,
    jobsInProgress: 0,
    completedJobs: 0,
  });

  const [recentJobs, setRecentJobs] = useState([]);

  // State to toggle quick actions menu visibility
  const [quickActionsOpen, setQuickActionsOpen] = useState(false);

  // Ref to detect outside clicks
  const quickActionsRef = useRef(null);

  useEffect(() => {
    const ships = JSON.parse(localStorage.getItem('ships')) || [];
    const components = JSON.parse(localStorage.getItem('components')) || [];
    const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

    const overdueComponents = components.filter(comp => {
      const lastMaintenance = new Date(comp.lastMaintenanceDate);
      const threeMonthsAgo = new Date();
      threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
      return lastMaintenance < threeMonthsAgo;
    }).length;

    const jobsInProgress = jobs.filter(job => job.status === 'In Progress').length;
    const completedJobs = jobs.filter(job => job.status === 'Completed').length;

    setStats({
      totalShips: ships.length,
      overdueComponents,
      jobsInProgress,
      completedJobs,
    });

    const sortedJobs = [...jobs]
      .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate))
      .slice(0, 5);
    setRecentJobs(sortedJobs);
  }, []);

  // Close quick actions menu if clicking outside
  useEffect(() => {
    function handleClickOutside(event) {
      if (
        quickActionsRef.current &&
        !quickActionsRef.current.contains(event.target)
      ) {
        setQuickActionsOpen(false);
      }
    }
    if (quickActionsOpen) {
      document.addEventListener('mousedown', handleClickOutside);
    } else {
      document.removeEventListener('mousedown', handleClickOutside);
    }
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [quickActionsOpen]);

  // Pie chart data & options
  const pieData = {
    labels: ['Overdue Components', 'Jobs In Progress', 'Completed Jobs'],
    datasets: [
      {
        data: [stats.overdueComponents, stats.jobsInProgress, stats.completedJobs],
        backgroundColor: ['#ef4444', '#ca8a04', '#22c55e'], // red, yellow, green
        hoverBackgroundColor: ['#f87171', '#eab308', '#4ade80'],
      },
    ],
  };

  const pieOptions = {
    plugins: {
      legend: {
        position: 'bottom',
        labels: {
          font: { size: 14 },
        },
      },
      tooltip: { enabled: true },
    },
    maintainAspectRatio: false,
  };

  return (
    <div className="flex h-screen bg-gray-100">
      {/* Sidebar */}
      <aside className="w-64 bg-white shadow-md flex flex-col">
        <div className="p-6 border-b border-gray-200">
          <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
        </div>
        <nav className="p-6 flex-1">
          <ul>
            <li>
              <Link to="/ships" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Ships</Link>
            </li>
            <li>
              <Link to="/jobs" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Jobs</Link>
            </li>
            <li>
              <Link to="/calendar" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Calendar</Link>
            </li>
          </ul>
        </nav>
        <div className="p-6 border-t border-gray-200 bg-gray-50">
          <p className="text-sm text-gray-600">
            Welcome, <span className="font-semibold">{user?.email.split('@')[0]}</span><br />
            Role: <span className="font-semibold">{user?.role}</span>
          </p>
        </div>
      </aside>

      {/* Main Content */}
      <main className="flex-1 p-6 overflow-y-auto">
        {/* Statistics Cards */}
        <section className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 mb-6">
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Total Ships</h3>
            <p className="text-4xl font-extrabold text-blue-600">{stats.totalShips}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Overdue Components</h3>
            <p className="text-4xl font-extrabold text-red-600">{stats.overdueComponents}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Jobs In Progress</h3>
            <p className="text-4xl font-extrabold text-yellow-600">{stats.jobsInProgress}</p>
          </div>
          <div className="bg-white p-6 rounded-lg shadow-md hover:shadow-xl transition-shadow duration-300 flex flex-col justify-center items-center">
            <h3 className="text-lg font-semibold text-gray-700 mb-2">Completed Jobs</h3>
            <p className="text-4xl font-extrabold text-green-600">{stats.completedJobs}</p>
          </div>
        </section>

        {/* Pie Chart Section */}
        <section className="bg-white p-6 rounded-lg shadow-md mb-6 max-w-md mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">Jobs & Components Overview</h2>
          <div style={{ height: '300px' }}>
            <Pie data={pieData} options={pieOptions} />
          </div>
        </section>

        {/* Recent Jobs Table */}
        <section className="bg-white p-6 rounded-lg shadow-md">
          <h2 className="text-2xl font-semibold text-gray-800 mb-4">Recent Maintenance Jobs</h2>
          <RecentJobsTable recentJobs={recentJobs} />
        </section>

        {/* Floating Quick Actions Button */}
        <div
          ref={quickActionsRef}
          className="fixed bottom-8 right-8 z-50 flex flex-col items-center"
        >
          {/* Main Button */}
          <button
            aria-label="Quick Actions"
            onClick={() => setQuickActionsOpen(prev => !prev)}
            className="w-14 h-14 rounded-full bg-blue-600 text-white shadow-lg flex items-center justify-center text-2xl transform transition-transform duration-300 hover:scale-110 focus:outline-none focus:ring-4 focus:ring-blue-300"
            type="button"
          >
            ⚙️
          </button>

          {/* Quick Action Options */}
          <div
            className={`mt-3 w-48 bg-white rounded-lg shadow-lg ring-1 ring-black ring-opacity-5 origin-bottom-right transform transition-all duration-200 ${
              quickActionsOpen ? 'scale-100 opacity-100' : 'scale-95 opacity-0 pointer-events-none'
            }`}
          >
            <ul className="divide-y divide-gray-100">
              {quickActionsData.map(({ id, label, route, icon, fromColor, toColor }) => (
                <li key={id}>
                  <Link
                    to={route}
                    onClick={() => setQuickActionsOpen(false)}
                    className={`flex items-center gap-3 px-4 py-3 text-gray-700 hover:${fromColor} hover:${toColor} hover:text-white bg-gradient-to-r cursor-pointer transition-colors duration-200 rounded-tl-lg rounded-tr-lg`}
                  >
                    <span className="text-xl">{icon}</span>
                    <span className="font-medium">{label}</span>
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </main>
    </div>
  );
};

export default DashboardPage;

