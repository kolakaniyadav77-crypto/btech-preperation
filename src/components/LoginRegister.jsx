import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPages.css';

export default function LoginRegister() {
  const [isLogin, setIsLogin] = useState(true);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [fullName, setFullName] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasUpperCase: false,
    hasSpecialChar: false,
    hasMinLength: false
  });

  const navigate = useNavigate();
  const { signIn, signUp } = useAuth();

  // Validate password requirements
  const validatePassword = (pwd) => {
    const hasUpperCase = /[A-Z]/.test(pwd);
    const hasSpecialChar = /[!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?]/.test(pwd);
    const hasMinLength = pwd.length >= 8;
    
    setPasswordRequirements({
      hasUpperCase,
      hasSpecialChar,
      hasMinLength
    });

    return hasUpperCase && hasSpecialChar && hasMinLength;
  };

  // Validate email format
  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');
    setLoading(true);

    try {
      if (isLogin) {
        // Handle Sign In
        if (!email || !password) {
          setError('Please fill in all fields');
          setLoading(false);
          return;
        }

        if (!validateEmail(email)) {
          setError('❌ Please enter a valid email address');
          setLoading(false);
          return;
        }

        const result = await signIn(email, password);
        if (result?.error) {
          setError('❌ Incorrect email or password');
        } else {
          setSuccess('✓ Login successful! Redirecting...');
          localStorage.removeItem('education_path_welcome_seen');
          setTimeout(() => navigate('/'), 1500);
        }
      } else {
        // Handle Sign Up
        if (!email || !password || !fullName) {
          setError('Please fill in all fields');
          setLoading(false);
          return;
        }

        if (!validateEmail(email)) {
          setError('❌ Please enter a valid email address');
          setLoading(false);
          return;
        }

        if (!validatePassword(password)) {
          setError('❌ Password must be at least 8 characters with 1 uppercase letter and 1 special character (!@#$%^&* etc)');
          setLoading(false);
          return;
        }

        if (fullName.trim().length < 3) {
          setError('❌ Full name must be at least 3 characters');
          setLoading(false);
          return;
        }

        const result = await signUp(email, password, fullName);
        if (result?.error) {
          setError('❌ ' + result.error.message);
        } else {
          setSuccess('✓ Account created! Redirecting to welcome page...');
          localStorage.removeItem('education_path_welcome_seen');
          setTimeout(() => navigate('/'), 1500);
        }
      }
    } catch (err) {
      setError('❌ ' + (err.message || 'An error occurred'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      {/* Background Gradient */}
      <div className="auth-background">
        <div className="auth-shape auth-shape-1"></div>
        <div className="auth-shape auth-shape-2"></div>
        <div className="auth-shape auth-shape-3"></div>
      </div>

      {/* Main Card */}
      <div className="auth-card">
        {/* Header */}
        <div className="auth-header">
          <div className="auth-logo">⚡</div>
          <h1 style={{ fontFamily: 'Arial', fontSize: '28px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>EDUCATION PATHWAY</h1>
          <p>Master Your Tech Career</p>
        </div>

        {/* Form Container */}
        <div className="auth-form-container">
          {/* Toggle Buttons */}
          <div className="auth-toggle">
            <button
              className={`toggle-btn ${isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(true);
                setError('');
                setSuccess('');
              }}
            >
              Sign In
            </button>
            <button
              className={`toggle-btn ${!isLogin ? 'active' : ''}`}
              onClick={() => {
                setIsLogin(false);
                setError('');
                setSuccess('');
              }}
            >
              Sign Up
            </button>
          </div>

          {/* Error Message */}
          {error && (
            <div className="auth-alert error-alert">
              {error}
            </div>
          )}

          {/* Success Message */}
          {success && (
            <div className="auth-alert success-alert">
              {success}
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleSubmit} className="auth-form">
            {/* Full Name (Register Only) */}
            {!isLogin && (
              <div className="form-group">
                <label htmlFor="fullName">Full Name</label>
                <input
                  id="fullName"
                  type="text"
                  placeholder="Enter your full name"
                  value={fullName}
                  onChange={(e) => setFullName(e.target.value)}
                  disabled={loading}
                  className="form-input"
                />
              </div>
            )}

            {/* Email */}
            <div className="form-group">
              <label htmlFor="email">Email Address</label>
              <input
                id="email"
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                disabled={loading}
                className="form-input"
              />
              {!isLogin && email && !validateEmail(email) && (
                <p className="form-hint" style={{ color: '#ef4444' }}>❌ Invalid email format</p>
              )}
            </div>

            {/* Password */}
            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder={isLogin ? '••••••••' : 'Min 8 chars, 1 Upper, 1 Special'}
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (!isLogin) validatePassword(e.target.value);
                }}
                disabled={loading}
                className="form-input"
              />
              {!isLogin && password && (
                <div style={{ marginTop: '8px', display: 'grid', gap: '4px' }}>
                  <div style={{
                    fontSize: '12px',
                    color: passwordRequirements.hasMinLength ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {passwordRequirements.hasMinLength ? '✓' : '✕'} At least 8 characters
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: passwordRequirements.hasUpperCase ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {passwordRequirements.hasUpperCase ? '✓' : '✕'} Starts with CAPITAL letter
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: passwordRequirements.hasSpecialChar ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {passwordRequirements.hasSpecialChar ? '✓' : '✕'} Contains special character (!@#$%^&*)
                  </div>
                </div>
              )}
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading || (!isLogin && !validatePassword(password) && password.length > 0)}
              className="auth-submit-btn"
            >
              {loading ? (
                <span className="spinner"></span>
              ) : (
                isLogin ? '🔓 Sign In' : '🚀 Create Account'
              )}
            </button>
          </form>

          {/* Demo Credentials */}
          <div className="demo-section">
            <p className="demo-title">Demo Credentials:</p>
            <div className="demo-creds">
              <span>📧 demo@example.com</span>
              <span>🔐 Demo@123!</span>
            </div>
          </div>
        </div>

        {/* Footer */}
        <div className="auth-footer">
          <p>
            {isLogin ? "Don't have an account? " : 'Already have an account? '}
            <button
              type="button"
              onClick={() => {
                setIsLogin(!isLogin);
                setError('');
                setSuccess('');
              }}
              className="footer-link"
            >
              {isLogin ? 'Sign Up' : 'Sign In'}
            </button>
          </p>
        </div>
      </div>

      {/* Side Features */}
      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon">🎯</span>
          <h3>Career Guidance</h3>
          <p>Personalized learning paths for your goals</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💼</span>
          <h3>Job Opportunities</h3>
          <p>Connect with top companies and startups</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🚀</span>
          <h3>Fast Track Success</h3>
          <p>Accelerate your tech career journey</p>
        </div>
      </div>
    </div>
  );
}
