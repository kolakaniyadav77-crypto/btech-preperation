import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPages.css';

export default function SignUp() {
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');
  const [passwordRequirements, setPasswordRequirements] = useState({
    hasUpperCase: false,
    hasSpecialChar: false,
    hasMinLength: false
  });

  const navigate = useNavigate();
  const { signUp } = useAuth();

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

  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const handleSignUp = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
    if (!fullName.trim()) {
      setError('❌ Full name is required');
      return;
    }

    if (fullName.trim().length < 3) {
      setError('❌ Full name must be at least 3 characters');
      return;
    }

    if (!email) {
      setError('❌ Email is required');
      return;
    }

    if (!validateEmail(email)) {
      setError('❌ Please enter a valid email address');
      return;
    }

    if (!password) {
      setError('❌ Password is required');
      return;
    }

    if (!validatePassword(password)) {
      setError('❌ Password must be 8+ characters with 1 uppercase letter and 1 special character');
      return;
    }

    if (password !== confirmPassword) {
      setError('❌ Passwords do not match');
      return;
    }

    setLoading(true);

    try {
      const result = await signUp(email, password, fullName);
      
      if (result?.error) {
        setError('❌ ' + result.error.message);
      } else {
        setSuccess('✓ Account created successfully! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setError('❌ ' + (err.message || 'Sign up failed'));
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="auth-container">
      <div className="auth-background">
        <div className="auth-shape auth-shape-1"></div>
        <div className="auth-shape auth-shape-2"></div>
        <div className="auth-shape auth-shape-3"></div>
      </div>

      <div className="auth-card">
        <div className="auth-header">
          <div className="auth-logo">🚀</div>
          <h1 style={{ fontFamily: 'Arial', fontSize: '28px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>EDUCATION PATHWAY</h1>
          <p>Create Your Account</p>
        </div>

        <div className="auth-form-container">
          {error && <div className="auth-alert error-alert">{error}</div>}
          {success && <div className="auth-alert success-alert">{success}</div>}

          <form onSubmit={handleSignUp} className="auth-form">
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
              {email && !validateEmail(email) && (
                <p className="form-hint" style={{ color: '#ef4444' }}>❌ Invalid email format</p>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="password">Password</label>
              <input
                id="password"
                type="password"
                placeholder="Min 8 chars, 1 Upper, 1 Special"
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  if (e.target.value) validatePassword(e.target.value);
                }}
                disabled={loading}
                className="form-input"
              />
              {password && (
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
                    {passwordRequirements.hasUpperCase ? '✓' : '✕'} At least 1 uppercase letter
                  </div>
                  <div style={{
                    fontSize: '12px',
                    color: passwordRequirements.hasSpecialChar ? '#10b981' : '#ef4444',
                    display: 'flex',
                    alignItems: 'center',
                    gap: '6px'
                  }}>
                    {passwordRequirements.hasSpecialChar ? '✓' : '✕'} At least 1 special character (!@#$%^&*)
                  </div>
                </div>
              )}
            </div>

            <div className="form-group">
              <label htmlFor="confirmPassword">Confirm Password</label>
              <input
                id="confirmPassword"
                type="password"
                placeholder="Confirm your password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                disabled={loading}
                className="form-input"
              />
              {confirmPassword && password !== confirmPassword && (
                <p className="form-hint" style={{ color: '#ef4444' }}>❌ Passwords do not match</p>
              )}
            </div>

            <button
              type="submit"
              disabled={loading || !password || !email || !fullName}
              className="auth-submit-btn"
            >
              {loading ? <span className="spinner"></span> : '🚀 Create Account'}
            </button>
          </form>

          <div className="auth-footer">
            <p>
              Already have an account? 
              <Link to="/login" className="footer-link"> Sign In</Link>
            </p>
          </div>
        </div>
      </div>

      <div className="auth-features">
        <div className="feature-item">
          <span className="feature-icon">🎯</span>
          <h3>Career Guidance</h3>
          <p>Personalized learning paths</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">💼</span>
          <h3>Job Opportunities</h3>
          <p>Connect with top companies</p>
        </div>
        <div className="feature-item">
          <span className="feature-icon">🚀</span>
          <h3>Fast Track Success</h3>
          <p>Accelerate your career</p>
        </div>
      </div>
    </div>
  );
}
