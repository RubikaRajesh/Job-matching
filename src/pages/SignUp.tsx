import React, { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { useAuth } from '../contexts/AuthContext';

const SignUp: React.FC = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [userType, setUserType] = useState('candidate');
  const [error, setError] = useState('');
  const navigate = useNavigate();
  const { login } = useAuth();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setError('');
    try {
      const response = await fetch('http://localhost:3001/api/register', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ email, password, userType }),
      });
      const data = await response.json();
      if (response.ok) {
        login(data.token, userType as 'candidate' | 'company');
        navigate('/dashboard');
      } else {
        setError(data.error || 'An error occurred during sign up');
      }
    } catch (err) {
      setError('An error occurred during sign up');
    }
  };

  return (
    <div className="max-w-md mx-auto">
      <h1 className="text-3xl font-bold mb-6 text-center">Sign Up</h1>
      {error && <p className="text-red-500 mb-4">{error}</p>}
      <form onSubmit={handleSubmit} className="space-y-4">
        <div>
          <label htmlFor="email" className="block mb-1">Email</label>
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label htmlFor="password" className="block mb-1">Password</label>
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full p-2 border border-gray-300 rounded-md"
            required
          />
        </div>
        <div>
          <label className="block mb-1">I am a:</label>
          <div className="flex space-x-4">
            <label className="flex items-center">
              <input
                type="radio"
                value="candidate"
                checked={userType === 'candidate'}
                onChange={() => setUserType('candidate')}
                className="mr-2"
              />
              Job Seeker
            </label>
            <label className="flex items-center">
              <input
                type="radio"
                value="company"
                checked={userType === 'company'}
                onChange={() => setUserType('company')}
                className="mr-2"
              />
              Employer
            </label>
          </div>
        </div>
        <button type="submit" className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700">
          Sign Up
        </button>
      </form>
      <p className="mt-4 text-center">
        Already have an account? <Link to="/signin" className="text-blue-600 hover:underline">Sign In</Link>
      </p>
    </div>
  );
};

export default SignUp;