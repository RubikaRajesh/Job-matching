import React, { useState } from 'react';
import { Loader2 } from 'lucide-react';

const JobPosting: React.FC = () => {
  const [jobDetails, setJobDetails] = useState({
    title: '',
    company: '',
    location: '',
    description: '',
  });
  const [isGenerating, setIsGenerating] = useState(false);

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setJobDetails((prev) => ({ ...prev, [name]: value }));
  };

  const generateDescription = async () => {
    setIsGenerating(true);
    try {
      // TODO: Replace this with an actual API call to your AI service
      const response = await new Promise<string>((resolve) => {
        setTimeout(() => {
          resolve(`We are seeking a talented ${jobDetails.title} to join our team at ${jobDetails.company} in ${jobDetails.location}. 
          The ideal candidate will have strong problem-solving skills, excellent communication abilities, and a passion for innovation. 
          Responsibilities include collaborating with cross-functional teams, developing and maintaining high-quality code, and contributing to the overall success of our products. 
          If you're excited about making a significant impact in a dynamic work environment, we'd love to hear from you!`);
        }, 2000); // Simulating API delay
      });

      setJobDetails((prev) => ({ ...prev, description: response }));
    } catch (error) {
      console.error('Error generating description:', error);
      alert('Failed to generate description. Please try again.');
    } finally {
      setIsGenerating(false);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement API call to backend for posting the job
    console.log('Posting job:', jobDetails);
    alert('Job posted successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Post a Job</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="title" className="block mb-1">Job Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={jobDetails.title}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="company" className="block mb-1">Company</label>
          <input
            type="text"
            id="company"
            name="company"
            value={jobDetails.company}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="location" className="block mb-1">Location</label>
          <input
            type="text"
            id="location"
            name="location"
            value={jobDetails.location}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Job Description</label>
          <textarea
            id="description"
            name="description"
            value={jobDetails.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={6}
            required
          ></textarea>
        </div>
        <div className="flex space-x-4">
          <button
            type="button"
            onClick={generateDescription}
            disabled={isGenerating}
            className="bg-green-600 text-white py-2 px-4 rounded-md hover:bg-green-700 disabled:bg-green-400 disabled:cursor-not-allowed flex items-center"
          >
            {isGenerating ? (
              <>
                <Loader2 className="animate-spin mr-2" size={20} />
                Generating...
              </>
            ) : (
              'Generate AI Description'
            )}
          </button>
          <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
            Post Job
          </button>
        </div>
      </form>
    </div>
  );
};

export default JobPosting;