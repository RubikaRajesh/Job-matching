import React, { useState } from 'react';
import { Search } from 'lucide-react';

const JobSearch: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [jobs, setJobs] = useState<any[]>([]);

  const handleSearch = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to backend for job search
    const mockJobs = [
      { id: 1, title: 'Software Engineer', company: 'Tech Co', location: 'San Francisco, CA' },
      { id: 2, title: 'Data Scientist', company: 'AI Innovations', location: 'New York, NY' },
      { id: 3, title: 'Product Manager', company: 'StartUp Inc', location: 'Austin, TX' },
    ];
    setJobs(mockJobs);
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Find Your Perfect Job</h1>
      <form onSubmit={handleSearch} className="mb-8">
        <div className="flex">
          <input
            type="text"
            placeholder="Enter job title, skills, or keywords"
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="flex-grow p-2 border border-gray-300 rounded-l-md focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
          <button type="submit" className="bg-blue-600 text-white p-2 rounded-r-md hover:bg-blue-700">
            <Search size={24} />
          </button>
        </div>
      </form>
      <div className="space-y-4">
        {jobs.map((job) => (
          <div key={job.id} className="bg-white p-4 rounded-md shadow">
            <h2 className="text-xl font-semibold">{job.title}</h2>
            <p className="text-gray-600">{job.company}</p>
            <p className="text-gray-500">{job.location}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default JobSearch;