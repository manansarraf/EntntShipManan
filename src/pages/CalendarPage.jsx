// import React, { useState, useEffect } from 'react';
// import { fetchJobsFromLocalStorage } from '../utils/localStorageUtils';
// import JobCalendar from '../components/Jobs/JobCalendar';

// const CalendarPage = () => {
//   const [jobs, setJobs] = useState([]);
  
//   useEffect(() => {
//     // Fetch all jobs for all ships
//     const allJobs = fetchJobsFromLocalStorage();
//     setJobs(allJobs);
//   }, []);

//   return (
//     <div className="container mx-auto px-4 py-8">
//       <h1 className="text-3xl font-bold mb-6">Maintenance Calendar</h1>
//       <JobCalendar />
//     </div>
//   );
// };

// export default CalendarPage;



import React, { useState, useEffect } from 'react';
import { fetchJobsFromLocalStorage } from '../utils/localStorageUtils';
import JobCalendar from '../components/Jobs/JobCalendar';

const CalendarPage = () => {
  const [jobs, setJobs] = useState([]);
  
  useEffect(() => {
    // Fetch all jobs for all ships
    const allJobs = fetchJobsFromLocalStorage();
    setJobs(allJobs);
  }, []);

  return (
    <div className="flex flex-col items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white shadow-lg rounded-lg p-6 w-full max-w-3xl">
        <h1 className="text-4xl font-semibold text-center text-blue-600 mb-8">Maintenance Calendar</h1>
        <JobCalendar />
      </div>
    </div>
  );
};

export default CalendarPage;
