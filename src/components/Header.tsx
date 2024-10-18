import React from 'react';
import { Link } from 'react-router-dom';
import { Briefcase, User } from 'lucide-react';
import { useAuth } from '../contexts/AuthContext';

const Header: React.FC = () => {
  const { token, userType, logout } = useAuth();

  return (
    <header className="bg-blue-600 text-white">
      <div className="container mx-auto px-4 py-4 flex items-center justify-between">
        <Link to="/" className="flex items-center space-x-2">
          <Briefcase size={24} />
          <span className="text-xl font-bold">AI Job Match</span>
        </Link>
        <nav>
          <ul className="flex space-x-4 items-center">
            <li><Link to="/search" className="hover:text-blue-200">Find Jobs</Link></li>
            <li><Link to="/post" className="hover:text-blue-200">Post a Job</Link></li>
            {token ? (
              <>
                <li><Link to="/dashboard" className="hover:text-blue-200">Dashboard</Link></li>
                <li>
                  <Link to={userType === 'candidate' ? '/candidate-profile' : '/company-profile'} className="flex items-center space-x-1 hover:text-blue-200">
                    <User size={20} />
                    <span>Profile</span>
                  </Link>
                </li>
                <li>
                  <button onClick={logout} className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100">
                    Logout
                  </button>
                </li>
              </>
            ) : (
              <>
                <li><Link to="/signin" className="hover:text-blue-200">Sign In</Link></li>
                <li><Link to="/signup" className="bg-white text-blue-600 px-3 py-1 rounded-md hover:bg-blue-100">Sign Up</Link></li>
              </>
            )}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;