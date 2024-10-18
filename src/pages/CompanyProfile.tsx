import React, { useState } from 'react';

const CompanyProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    companyName: '',
    industry: '',
    location: '',
    description: '',
    website: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Updated company profile:', profile);
    alert('Company profile updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Company Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="companyName" className="block mb-1">Company Name</label>
          <input
            type="text"
            id="companyName"
            name="companyName"
            value={profile.companyName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="industry" className="block mb-1">Industry</label>
          <input
            type="text"
            id="industry"
            name="industry"
            value={profile.industry}
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
            value={profile.location}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="description" className="block mb-1">Company Description</label>
          <textarea
            id="description"
            name="description"
            value={profile.description}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="website" className="block mb-1">Website</label>
          <input
            type="url"
            id="website"
            name="website"
            value={profile.website}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Update Company Profile
        </button>
      </form>
    </div>
  );
};

export default CompanyProfile;