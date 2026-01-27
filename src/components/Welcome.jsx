import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/Welcome.css';

export default function Welcome({ onGetStarted }) {
  const navigate = useNavigate();
  const { currentUser, isAuthenticated } = useAuth();

  // Remove forced redirect - allow anyone to access welcome page
  useEffect(() => {
    // Optional: Just load user data if authenticated, but don't block page
  }, [isAuthenticated, navigate]);

  const handleGetStarted = () => {
    // Call the parent callback if provided (for setting welcome as seen)
    if (onGetStarted) {
      onGetStarted();
    }
    // Navigate to dashboard
    navigate('/dashboard');
  };

  const handleLogout = () => {
    navigate('/login');
  };

  const userName = currentUser?.fullName?.split(' ')[0] || 'User';
  const fullName = currentUser?.fullName || 'Guest';

  return (
    <div className="welcome-container">
      {/* Background Animated Elements */}
      <div className="welcome-background">
        <div className="welcome-blob blob-1"></div>
        <div className="welcome-blob blob-2"></div>
        <div className="welcome-blob blob-3"></div>
      </div>

      {/* Main Welcome Card */}
      <div className="welcome-card">
        {/* Emoji Animation */}
        <div className="welcome-emoji">
          <span className="emoji-wave">👋</span>
        </div>

        {/* Welcome Text */}
        <div className="welcome-content">
          <h1 className="welcome-heading">
            Hi <span className="user-name">{userName}</span>!
          </h1>
          
          <p className="welcome-subtitle">
            Welcome to <span className="brand-highlight" style={{ fontFamily: 'Arial', fontSize: '24px', fontWeight: '900', letterSpacing: '1.5px', textTransform: 'uppercase' }}>EDUCATION PATHWAY</span>
          </p>

          <p className="welcome-description">
            Your ultimate destination to master coding, prepare for interviews, and accelerate your tech career. Let's transform your aspirations into achievements! 🚀
          </p>

          {/* Stats Section */}
          <div className="welcome-stats">
            <div className="stat-item">
              <span className="stat-icon">📚</span>
              <div>
                <p className="stat-value">10+</p>
                <p className="stat-label">Learning Modules</p>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">💼</span>
              <div>
                <p className="stat-value">100+</p>
                <p className="stat-label">Job Opportunities</p>
              </div>
            </div>
            <div className="stat-item">
              <span className="stat-icon">🎯</span>
              <div>
                <p className="stat-value">30+</p>
                <p className="stat-label">Career Paths</p>
              </div>
            </div>
          </div>

          {/* Features Grid */}
          <div className="welcome-features">
            <div className="feature">
              <span className="feature-emoji">💻</span>
              <h3>DSA Practice</h3>
              <p>Master Data Structures & Algorithms</p>
            </div>
            <div className="feature">
              <span className="feature-emoji">🏢</span>
              <h3>Company Prep</h3>
              <p>Company-specific interview guides</p>
            </div>
            <div className="feature">
              <span className="feature-emoji">🎓</span>
              <h3>Entrance Exams</h3>
              <p>Prepare for competitive exams</p>
            </div>
            <div className="feature">
              <span className="feature-emoji">📝</span>
              <h3>Resume Builder</h3>
              <p>Create professional resumes</p>
            </div>
            <div className="feature">
              <span className="feature-emoji">🎯</span>
              <h3>Career Guidance</h3>
              <p>Personalized learning paths</p>
            </div>
            <div className="feature">
              <span className="feature-emoji">💼</span>
              <h3>Job Search</h3>
              <p>Find your dream job</p>
            </div>
          </div>

          {/* Action Buttons */}
          <div className="welcome-actions">
            <button 
              onClick={handleGetStarted}
              className="btn btn-primary"
            >
              🚀 Get Started
            </button>
            <button 
              onClick={handleLogout}
              className="btn btn-secondary"
            >
              👋 Logout
            </button>
          </div>

          {/* User Info */}
          <div className="welcome-user-info">
            <p>Logged in as: <strong>{fullName}</strong></p>
          </div>
        </div>
      </div>

      {/* Floating Cards Animation */}
      <div className="floating-cards">
        <div className="float-card card-1">
          <span>🎯</span>
          <p>Goal-Oriented</p>
        </div>
        <div className="float-card card-2">
          <span>📊</span>
          <p>Track Progress</p>
        </div>
        <div className="float-card card-3">
          <span>🏆</span>
          <p>Achieve Success</p>
        </div>
      </div>
    </div>
  );
}
