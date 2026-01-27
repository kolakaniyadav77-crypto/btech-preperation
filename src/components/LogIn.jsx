import React, { useState } from 'react';
import { useNavigate, Link } from 'react-router-dom';
import { useAuth } from '../context/AuthContext';
import '../styles/AuthPages.css';

export default function LogIn() {
  const [email, setEmail] = useState('demo@example.com');
  const [password, setPassword] = useState('Demo@123!');
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');
  const [success, setSuccess] = useState('');

  const navigate = useNavigate();
  const { signIn } = useAuth();

  const validateEmail = (emailStr) => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(emailStr);
  };

  const handleSignIn = async (e) => {
    e.preventDefault();
    setError('');
    setSuccess('');

    // Validation
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

    setLoading(true);

    try {
      const result = await signIn(email, password);
      
      if (result?.error) {
        setError('❌ Invalid email or password');
      } else {
        setSuccess('✓ Login successful! Redirecting...');
        setTimeout(() => {
          navigate('/');
        }, 1500);
      }
    } catch (err) {
      setError('❌ ' + (err.message || 'Login failed'));
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
          <div className="auth-logo">🔓</div>
          <h1 style={{ fontFamily: 'Arial', fontSize: '28px', fontWeight: '900', letterSpacing: '2px', textTransform: 'uppercase' }}>EDUCATION PATHWAY</h1>
          <p>Welcome Back</p>
        </div>

        <div className="auth-form-container">
          {error && <div className="auth-alert error-alert">{error}</div>}
          {success && <div className="auth-alert success-alert">{success}</div>}

          <form onSubmit={handleSignIn} className="auth-form">
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
                placeholder="••••••••"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                disabled={loading}
                className="form-input"
              />
            </div>

            <button
              type="submit"
              disabled={loading || !email || !password}
              className="auth-submit-btn"
            >
              {loading ? <span className="spinner"></span> : '🔓 Sign In'}
            </button>
          </form>

          <div className="demo-section">
            <p className="demo-title">Demo Credentials:</p>
            <div className="demo-creds">
              <span>📧 demo@example.com</span>
              <span>🔐 Demo@123!</span>
            </div>
          </div>

          <div className="auth-footer">
            <p>
              Don't have an account? 
              <Link to="/signup" className="footer-link"> Sign Up</Link>
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
