import React from 'react';
import { BrowserRouter as Router, Route, Routes, Navigate } from 'react-router-dom';
import { AuthProvider, useAuth } from './contexts/AuthContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Home from './pages/Home';
import JobSearch from './pages/JobSearch';
import JobPosting from './pages/JobPosting';
import Dashboard from './pages/Dashboard';
import SignIn from './pages/SignIn';
import SignUp from './pages/SignUp';
import CandidateProfile from './pages/CandidateProfile';
import CompanyProfile from './pages/CompanyProfile';

const ProtectedRoute: React.FC<{ element: React.ReactElement }> = ({ element }) => {
  const { token } = useAuth();
  return token ? element : <Navigate to="/signin" />;
};

function App() {
  return (
    <AuthProvider>
      <Router>
        <div className="min-h-screen bg-gray-100 flex flex-col">
          <Header />
          <main className="flex-grow container mx-auto px-4 py-8">
            <Routes>
              <Route path="/" element={<Home />} />
              <Route path="/search" element={<JobSearch />} />
              <Route path="/post" element={<ProtectedRoute element={<JobPosting />} />} />
              <Route path="/dashboard" element={<ProtectedRoute element={<Dashboard />} />} />
              <Route path="/signin" element={<SignIn />} />
              <Route path="/signup" element={<SignUp />} />
              <Route path="/candidate-profile" element={<ProtectedRoute element={<CandidateProfile />} />} />
              <Route path="/company-profile" element={<ProtectedRoute element={<CompanyProfile />} />} />
            </Routes>
          </main>
          <Footer />
        </div>
      </Router>
    </AuthProvider>
  );
}

export default App;