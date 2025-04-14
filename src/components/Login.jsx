import React from 'react';
import { Link } from 'react-router-dom';
import './Login.css';

export default function Login() {
  return (
    <div className="login-wrapper">
      <div className="login-container">
        <h2 className="login-title">🔐 Login</h2>
        <p className="login-subtitle">Welcome back! Please log in to continue.</p>

        <form className="login-form">
          <label className="login-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="login-input"
            required
          />

          <label className="login-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="login-input"
            required
          />

          <div className="login-options-row">
            <label className="remember-me">
              <input type="checkbox" />
              Remember me
            </label>
            <a href="#" className="forgot-password">Forgot password?</a>
          </div>

          <button type="submit" className="login-button">Login</button>

          <div className="divider">or</div>

          <button className="google-login">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="google-icon"
            />
            Login with Google
          </button>
        </form>

        <div className="login-footer">
          <span className="signup-text">
          Don’t have an account? <Link to="/signup" className="signup-link">Sign up</Link>
          </span>
          <p className="terms-text">
            By logging in, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
