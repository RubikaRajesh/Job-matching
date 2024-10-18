import React from 'react';
import { BarChart, Users, Briefcase } from 'lucide-react';

const Dashboard: React.FC = () => {
  // Mock data for dashboard
  const stats = {
    applicants: 150,
    jobsPosted: 10,
    matchRate: 85,
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Dashboard</h1>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <StatCard icon={<Users size={24} />} title="Total Applicants" value={stats.applicants} />
        <StatCard icon={<Briefcase size={24} />} title="Jobs Posted" value={stats.jobsPosted} />
        <StatCard icon={<BarChart size={24} />} title="Match Rate" value={`${stats.matchRate}%`} />
      </div>
      <div className="mt-8">
        <h2 className="text-2xl font-semibold mb-4">Recent Activity</h2>
        {/* Add recent activity list or chart here */}
        <p className="text-gray-600">No recent activity to display.</p>
      </div>
    </div>
  );
};

const StatCard: React.FC<{ icon: React.ReactNode; title: string; value: string | number }> = ({ icon, title, value }) => {
  return (
    <div className="bg-white p-6 rounded-lg shadow-md">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">{title}</h3>
        <div className="text-blue-600">{icon}</div>
      </div>
      <p className="text-3xl font-bold">{value}</p>
    </div>
  );
};

export default Dashboard;