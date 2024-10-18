import React from 'react';
import { Link } from 'react-router-dom';
import { Search, FileText, BarChart } from 'lucide-react';

const Home: React.FC = () => {
  return (
    <div className="text-center">
      <h1 className="text-4xl font-bold mb-6">Welcome to AI Job Match</h1>
      <p className="text-xl mb-8">Find your perfect job match with AI-powered precision</p>
      <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
        <FeatureCard
          icon={<Search size={48} />}
          title="Smart Job Search"
          description="Use AI to find jobs tailored to your skills and preferences"
          link="/search"
        />
        <FeatureCard
          icon={<FileText size={48} />}
          title="Optimized Job Postings"
          description="Create AI-generated job descriptions to attract the best candidates"
          link="/post"
        />
        <FeatureCard
          icon={<BarChart size={48} />}
          title="Insights Dashboard"
          description="Get valuable insights on your job search or hiring process"
          link="/dashboard"
        />
      </div>
    </div>
  );
};

const FeatureCard: React.FC<{ icon: React.ReactNode; title: string; description: string; link: string }> = ({ icon, title, description, link }) => {
  return (
    <Link to={link} className="bg-white p-6 rounded-lg shadow-md hover:shadow-lg transition-shadow">
      <div className="text-blue-600 mb-4">{icon}</div>
      <h2 className="text-2xl font-semibold mb-2">{title}</h2>
      <p className="text-gray-600">{description}</p>
    </Link>
  );
};

export default Home;