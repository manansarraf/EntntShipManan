// components/Dashboard/RecentJobsTable.jsx - Recent Jobs Table Component
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useJobs } from '../../contexts/JobsContext';
import { useShips } from '../../contexts/ShipsContext';
import { useComponents } from '../../contexts/ComponentsContext';

const RecentJobsTable = () => {
  const { jobs } = useJobs();
  const { ships } = useShips();
  const { components } = useComponents();
  
  // Get most recent jobs
  const recentJobs = [...jobs]
    .sort((a, b) => new Date(b.scheduledDate) - new Date(a.scheduledDate))
    .slice(0, 5);

  // Helper functions to get ship and component names
  const getShipName = (shipId) => {
    const ship = ships.find(s => s.id === shipId);
    return ship ? ship.name : 'Unknown Ship';
  };
  
  const getComponentName = (componentId) => {
    const component = components.find(c => c.id === componentId);
    return component ? component.name : 'Unknown Component';
  };

  // State for expanded job row
  const [expandedJobId, setExpandedJobId] = useState(null);

  const toggleRow = (jobId) => {
    setExpandedJobId(expandedJobId === jobId ? null : jobId);
  };

  // Badge classes
  const statusBadgeClass = (status) => {
    switch(status) {
      case 'Completed': return 'bg-green-100 text-green-800';
      case 'In Progress': return 'bg-yellow-100 text-yellow-800';
      case 'Cancelled': return 'bg-gray-100 text-gray-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  const priorityBadgeClass = (priority) => {
    switch(priority) {
      case 'High': return 'bg-red-100 text-red-800';
      case 'Medium': return 'bg-yellow-100 text-yellow-800';
      case 'Low': return 'bg-green-100 text-green-800';
      default: return 'bg-blue-100 text-blue-800';
    }
  };

  return (
    <div className="mt-8 bg-white shadow rounded-lg overflow-hidden">
      <div className="px-6 py-4 border-b border-gray-200">
        <h3 className="text-lg font-medium text-gray-900">Recent Maintenance Jobs</h3>
      </div>
      <div className="overflow-x-auto">
        <table className="min-w-full divide-y divide-gray-200">
          <thead className="bg-gray-50">
            <tr>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                Job Type
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                Scheduled Date
              </th>
              <th className="px-6 py-3 text-left text-xs font-medium text-gray-500 uppercase tracking-wider cursor-pointer">
                Status
              </th>
            </tr>
          </thead>
          <tbody className="bg-white divide-y divide-gray-200">
            {recentJobs.length === 0 ? (
              <tr>
                <td colSpan="3" className="px-6 py-4 text-center text-sm text-gray-500">
                  No jobs found
                </td>
              </tr>
            ) : recentJobs.map((job) => (
              <React.Fragment key={job.id}>
                <tr 
                  className="hover:bg-gray-50 cursor-pointer"
                  onClick={() => toggleRow(job.id)}
                  aria-expanded={expandedJobId === job.id}
                >
                  <td className="px-6 py-4 whitespace-nowrap text-sm font-medium text-gray-900">{job.type}</td>
                  <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-500">{new Date(job.scheduledDate).toLocaleDateString()}</td>
                  <td className="px-6 py-4 whitespace-nowrap">
                    <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${statusBadgeClass(job.status)}`}>
                      {job.status}
                    </span>
                  </td>
                </tr>
                {expandedJobId === job.id && (
                  <tr className="bg-gray-50">
                    <td colSpan="3" className="px-6 py-3 text-sm text-gray-700">
                      <div className="flex flex-col sm:flex-row sm:space-x-12">
                        <div><strong>Ship:</strong> <Link to={`/ships/${job.shipId}`} className="text-blue-600 hover:underline">{getShipName(job.shipId)}</Link></div>
                        <div><strong>Component:</strong> {getComponentName(job.componentId)}</div>
                        <div>
                          <strong>Priority:</strong>{' '}
                          <span className={`inline-flex px-2 py-1 text-xs font-semibold rounded ${priorityBadgeClass(job.priority)}`}>
                            {job.priority}
                          </span>
                        </div>
                      </div>
                    </td>
                  </tr>
                )}
              </React.Fragment>
            ))}
          </tbody>
        </table>
      </div>
      {recentJobs.length > 0 && (
        <div className="px-6 py-4 border-t border-gray-200">
          <Link
            to="/jobs"
            className="text-sm font-medium text-blue-600 hover:text-blue-500"
          >
            View all jobs
          </Link>
        </div>
      )}
    </div>
  );
};

export default RecentJobsTable;

