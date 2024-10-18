import React, { useState } from 'react';

const CandidateProfile: React.FC = () => {
  const [profile, setProfile] = useState({
    fullName: '',
    title: '',
    location: '',
    skills: '',
    experience: '',
    education: '',
  });

  const handleInputChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setProfile((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    // TODO: Implement profile update logic
    console.log('Updated profile:', profile);
    alert('Profile updated successfully!');
  };

  return (
    <div>
      <h1 className="text-3xl font-bold mb-6">Candidate Profile</h1>
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="fullName" className="block mb-1">Full Name</label>
          <input
            type="text"
            id="fullName"
            name="fullName"
            value={profile.fullName}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="title" className="block mb-1">Professional Title</label>
          <input
            type="text"
            id="title"
            name="title"
            value={profile.title}
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
          <label htmlFor="skills" className="block mb-1">Skills (comma-separated)</label>
          <input
            type="text"
            id="skills"
            name="skills"
            value={profile.skills}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="experience" className="block mb-1">Work Experience</label>
          <textarea
            id="experience"
            name="experience"
            value={profile.experience}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="education" className="block mb-1">Education</label>
          <textarea
            id="education"
            name="education"
            value={profile.education}
            onChange={handleInputChange}
            className="w-full p-2 border border-gray-300 rounded-md"
            rows={4}
            required
          ></textarea>
        </div>
        <button type="submit" className="bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Update Profile
        </button>
      </form>
    </div>
  );
};

export default CandidateProfile;