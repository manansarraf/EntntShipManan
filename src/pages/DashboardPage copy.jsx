// pages/DashboardPage.jsx - Dashboard Page Component
// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import KPICards from '../components/Dashboard/KPICards';
// import Charts from '../components/Dashboard/Charts';
// import RecentJobsTable from '../components/Dashboard/RecentJobsTable';
// import { Link } from 'react-router-dom';

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalShips: 0,
//     overdueComponents: 0,
//     jobsInProgress: 0,
//     completedJobs: 0,
//   });

//   const [recentJobs, setRecentJobs] = useState([]);

//   useEffect(() => {
//     // Load ships
//     const ships = JSON.parse(localStorage.getItem('ships')) || [];
    
//     // Load components
//     const components = JSON.parse(localStorage.getItem('components')) || [];
    
//     // Load jobs
//     const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

//     // Calculate stats
//     const overdueComponents = components.filter(comp => {
//       const lastMaintenance = new Date(comp.lastMaintenanceDate);
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
//       return lastMaintenance < threeMonthsAgo;
//     }).length;

//     const jobsInProgress = jobs.filter(job => job.status === 'In Progress').length;
//     const completedJobs = jobs.filter(job => job.status === 'Completed').length;

//     setStats({
//       totalShips: ships.length,
//       overdueComponents,
//       jobsInProgress,
//       completedJobs,
//     });

//     // Get recent jobs
//     const sortedJobs = [...jobs]
//       .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate))
//       .slice(0, 5);
//     setRecentJobs(sortedJobs);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center mb-8">
//         <h1 className="text-2xl font-bold text-gray-900 mb-4 sm:mb-0">Dashboard</h1>
//         <div className="bg-white px-4 py-2 rounded-lg shadow-sm">
//           <p className="text-sm text-gray-600">
//             Welcome back, <span className="font-medium">{user?.role}</span> <span className="font-semibold">{user?.email.split('@')[0]}</span>
//           </p>
//         </div>
//       </div>
      
//       {/* KPI Cards */}
//       <KPICards stats={stats} />
      
//       {/* Charts */}
//       <Charts />
      
//       {/* Recent Jobs Table */}
//       <RecentJobsTable recentJobs={recentJobs} />

//       {/* Quick Actions */}
//       <div className="bg-white p-6 rounded-lg shadow-md mt-8">
//         <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
//         <div className="space-y-4">
//           <Link 
//             to="/ships/new" 
//             className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//           >
//             Add New Ship
//           </Link>
//           <Link 
//             to="/jobs/new" 
//             className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
//           >
//             Create Maintenance Job
//           </Link>
//           <Link 
//             to="/calendar" 
//             className="block w-full text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
//           >
//             View Maintenance Calendar
//           </Link>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default DashboardPage;


// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import KPICards from '../components/Dashboard/KPICards';
// import Charts from '../components/Dashboard/Charts';
// import RecentJobsTable from '../components/Dashboard/RecentJobsTable';
// import { Link } from 'react-router-dom';

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalShips: 0,
//     overdueComponents: 0,
//     jobsInProgress: 0,
//     completedJobs: 0,
//   });

//   const [recentJobs, setRecentJobs] = useState([]);

//   useEffect(() => {
//     const ships = JSON.parse(localStorage.getItem('ships')) || [];
//     const components = JSON.parse(localStorage.getItem('components')) || [];
//     const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

//     const overdueComponents = components.filter(comp => {
//       const lastMaintenance = new Date(comp.lastMaintenanceDate);
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
//       return lastMaintenance < threeMonthsAgo;
//     }).length;

//     const jobsInProgress = jobs.filter(job => job.status === 'In Progress').length;
//     const completedJobs = jobs.filter(job => job.status === 'Completed').length;

//     setStats({
//       totalShips: ships.length,
//       overdueComponents,
//       jobsInProgress,
//       completedJobs,
//     });

//     const sortedJobs = [...jobs]
//       .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate))
//       .slice(0, 5);
//     setRecentJobs(sortedJobs);
//   }, []);

//   return (
//     <div className="px-6 py-10 bg-gray-50 min-h-screen">
//       {/* Header */}
//       <div className="flex flex-col md:flex-row justify-between items-start md:items-center gap-4 mb-10">
//         <div>
//           <h1 className="text-3xl font-semibold text-slate-800">Your Dashboard</h1>
//           <p className="text-gray-500 text-sm mt-1">
//             Hello <span className="font-bold text-indigo-600">{user?.email.split('@')[0]}</span>, welcome back!
//           </p>
//         </div>
//         <div className="bg-indigo-100 px-5 py-2 rounded-md shadow">
//           <span className="text-sm font-medium text-indigo-800">Logged in as: {user?.role}</span>
//         </div>
//       </div>

//       {/* KPI Cards */}
//       <section className="mb-10">
//         <KPICards stats={stats} />
//       </section>

//       {/* Charts Section */}
//       <section className="mb-10 bg-white rounded-xl shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Statistics Overview</h2>
//         <Charts />
//       </section>

//       {/* Recent Jobs */}
//       <section className="mb-10 bg-white rounded-xl shadow-md p-6">
//         <h2 className="text-lg font-semibold text-gray-700 mb-4">Recent Maintenance Jobs</h2>
//         <RecentJobsTable recentJobs={recentJobs} />
//       </section>

//       {/* Quick Actions */}
//       <section className="grid md:grid-cols-3 gap-5">
//         <Link
//           to="/ships/new"
//           className="bg-blue-500 text-white text-center py-3 rounded-lg shadow hover:bg-blue-600 transition duration-200"
//         >
//           ➕ Add New Ship
//         </Link>
//         <Link
//           to="/jobs/new"
//           className="bg-green-500 text-white text-center py-3 rounded-lg shadow hover:bg-green-600 transition duration-200"
//         >
//           🛠 Create Job
//         </Link>
//         <Link
//           to="/calendar"
//           className="bg-purple-500 text-white text-center py-3 rounded-lg shadow hover:bg-purple-600 transition duration-200"
//         >
//           📅 Maintenance Calendar
//         </Link>
//       </section>
//     </div>
//   );
// };

// export default DashboardPage;



// import React, { useState, useEffect } from 'react';
// import { useAuth } from '../contexts/AuthContext';
// import KPICards from '../components/Dashboard/KPICards';
// import Charts from '../components/Dashboard/Charts';
// import RecentJobsTable from '../components/Dashboard/RecentJobsTable';
// import { Link } from 'react-router-dom';

// const DashboardPage = () => {
//   const { user } = useAuth();
//   const [stats, setStats] = useState({
//     totalShips: 0,
//     overdueComponents: 0,
//     jobsInProgress: 0,
//     completedJobs: 0,
//   });

//   const [recentJobs, setRecentJobs] = useState([]);

//   useEffect(() => {
//     const ships = JSON.parse(localStorage.getItem('ships')) || [];
//     const components = JSON.parse(localStorage.getItem('components')) || [];
//     const jobs = JSON.parse(localStorage.getItem('jobs')) || [];

//     const overdueComponents = components.filter(comp => {
//       const lastMaintenance = new Date(comp.lastMaintenanceDate);
//       const threeMonthsAgo = new Date();
//       threeMonthsAgo.setMonth(threeMonthsAgo.getMonth() - 3);
//       return lastMaintenance < threeMonthsAgo;
//     }).length;

//     const jobsInProgress = jobs.filter(job => job.status === 'In Progress').length;
//     const completedJobs = jobs.filter(job => job.status === 'Completed').length;

//     setStats({
//       totalShips: ships.length,
//       overdueComponents,
//       jobsInProgress,
//       completedJobs,
//     });

//     const sortedJobs = [...jobs]
//       .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate))
//       .slice(0, 5);
//     setRecentJobs(sortedJobs);
//   }, []);

//   return (
//     <div className="flex h-screen bg-gray-100">
//       {/* Sidebar */}
//       <aside className="w-64 bg-white shadow-md">
//         <div className="p-6">
//           <h2 className="text-2xl font-bold text-gray-800">Dashboard</h2>
//           <nav className="mt-6">
//             <ul>
//               <li>
//                 <Link to="/ships" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Ships</Link>
//               </li>
//               <li>
//                 <Link to="/jobs" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Jobs</Link>
//               </li>
//               <li>
//                 <Link to="/calendar" className="block py-2 px-4 text-gray-600 hover:bg-gray-200 rounded-md">Calendar</Link>
//               </li>
//             </ul>
//           </nav>
//         </div>
//       </aside>

//       {/* Main Content */}
//       <main className="flex-1 p-6 overflow-y-auto">
//         <header className="flex justify-between items-center mb-6 flex-wrap">
//           <h1 className="text-3xl font-bold text-gray-900 mb-2 sm:mb-0">Welcome, {user?.email.split('@')[0]}</h1>
//           <div className="bg-gray-200 px-4 py-2 rounded-lg">
//             <p className="text-sm text-gray-600">Role: <span className="font-semibold">{user?.role}</span></p>
//           </div>
//         </header>

//         {/* KPI Cards */}
//         <KPICards stats={stats} />

//         {/* Charts */}
//         <Charts />

//         {/* Recent Jobs Table */}
//         <RecentJobsTable recentJobs={recentJobs} />

//         {/* Quick Actions */}
//         <section className="bg-white p-6 rounded-lg shadow-md mt-8">
//           <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
//           <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
//             <Link 
//               to="/ships/new" 
//               className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
//             >
//               Add New Ship
//             </Link>
//             <Link 
//               to="/jobs/new" 
//               className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
//             >
//               Create Maintenance Job
//             </Link>
//             <Link 
//               to="/calendar" 
//               className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
//             >
//               View Maintenance Calendar
//             </Link>
//           </div>
//         </section>
//       </main>
//     </div>
//   );
// };

// export default DashboardPage;

import React, { useState, useEffect } from 'react';
import { useAuth } from '../contexts/AuthContext';
import KPICards from '../components/Dashboard/KPICards';
import RecentJobsTable from '../components/Dashboard/RecentJobsTable';
import { Link } from 'react-router-dom';

const PieChart = ({ data }) => {
  const total = data.reduce((acc, item) => acc + item.value, 0);
  let cumulativePercent = 0;

  const createArc = (percent, radius = 80) => {
    const startAngle = cumulativePercent * 2 * Math.PI;
    const endAngle = (cumulativePercent + percent) * 2 * Math.PI;

    const startX = radius + radius * Math.sin(startAngle);
    const startY = radius - radius * Math.cos(startAngle);
    const endX = radius + radius * Math.sin(endAngle);
    const endY = radius - radius * Math.cos(endAngle);

    const largeArcFlag = percent > 0.5 ? 1 : 0;
    const pathData = [
      `M ${radius} ${radius}`,
      `L ${startX} ${startY}`,
      `A ${radius} ${radius} 0 ${largeArcFlag} 1 ${endX} ${endY}`,
      'Z',
    ].join(' ');

    cumulativePercent += percent;
    return pathData;
  };

  cumulativePercent = 0;

  return (
    <svg width="200" height="200" viewBox="0 0 160 160" className="mx-auto" role="img" aria-label="Pie chart">
      {data.map((slice, index) => {
        const percent = slice.value / total;
        const path = createArc(percent);
        return <path key={index} d={path} fill={slice.color} />;
      })}
      <circle cx="80" cy="80" r="40" fill="white" />
    </svg>
  );
};

const DashboardPage = () => {
  const { user } = useAuth();
  const [stats, setStats] = useState({
    totalShips: 0,
    overdueComponents: 0,
    jobsInProgress: 0,
    completedJobs: 0,
  });

  const [recentJobs, setRecentJobs] = useState([]);

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

  const pieData = [
    { label: 'In Progress', value: stats.jobsInProgress, color: '#3b82f6' },
    { label: 'Completed', value: stats.completedJobs, color: '#10b981' },
    { label: 'Other', value: Math.max(0, (stats.totalShips - stats.jobsInProgress - stats.completedJobs)), color: '#6b7280' },
  ];

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
        {/* KPI Cards */}
        <KPICards stats={stats} />

        {/* Pie Chart */}
        <section className="bg-white p-6 rounded-lg shadow-md my-6 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4 text-center">Jobs Status Overview</h2>
          <PieChart data={pieData} />
          <ul className="mt-4 flex justify-center space-x-6 text-sm font-medium">
            {pieData.map(slice => (
              <li key={slice.label} className="flex items-center space-x-2">
                <span className="block w-4 h-4 rounded-sm" style={{ backgroundColor: slice.color }}></span>
                <span>{slice.label} ({slice.value})</span>
              </li>
            ))}
          </ul>
        </section>

        {/* Recent Jobs Table */}
        <RecentJobsTable recentJobs={recentJobs} />

        {/* Quick Actions */}
        <section className="bg-white p-6 rounded-lg shadow-md mt-8 max-w-md mx-auto">
          <h2 className="text-xl font-semibold mb-4">Quick Actions</h2>
          <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
            <Link 
              to="/ships/new" 
              className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-blue-600 hover:bg-blue-700"
            >
              Add New Ship
            </Link>
            <Link 
              to="/jobs/new" 
              className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-green-600 hover:bg-green-700"
            >
              Create Maintenance Job
            </Link>
            <Link 
              to="/calendar" 
              className="block text-center py-2 px-4 border border-transparent rounded-md shadow-sm text-sm font-medium text-white bg-purple-600 hover:bg-purple-700"
            >
              View Maintenance Calendar
            </Link>
          </div>
        </section>
      </main>
    </div>
  );
};

export default DashboardPage;


