import React from 'react';
import { Link } from 'react-router-dom';
import './SignUp.css';

export default function SignUp() {
  return (
    <div className="signup-wrapper">
      <div className="signup-container">
        <h2 className="signup-title">📝 Sign Up</h2>
        <p className="signup-subtitle">Create your account to get started!</p>

        <form className="signup-form">
          <label className="signup-label" htmlFor="name">Full Name</label>
          <input
            type="text"
            id="name"
            placeholder="John Doe"
            className="signup-input"
            required
          />

          <label className="signup-label" htmlFor="email">Email</label>
          <input
            type="email"
            id="email"
            placeholder="you@example.com"
            className="signup-input"
            required
          />

          <label className="signup-label" htmlFor="password">Password</label>
          <input
            type="password"
            id="password"
            placeholder="••••••••"
            className="signup-input"
            required
          />

          <label className="signup-label" htmlFor="confirm-password">Confirm Password</label>
          <input
            type="password"
            id="confirm-password"
            placeholder="••••••••"
            className="signup-input"
            required
          />

          <div className="signup-button-wrapper">
  <Link to="/login">
    <button type="submit" className="signup-button">Create Account</button>
  </Link>
</div>



          <div className="divider">or</div>

          <button className="google-signup">
            <img
              src="https://www.svgrepo.com/show/475656/google-color.svg"
              alt="Google"
              className="google-icon"
            />
            Sign up with Google
          </button>
        </form>

        <div className="signup-footer">
          <span className="login-text">
            Already have an account? <a href="/login" className="login-link">Log in</a>
          </span>
          <p className="terms-text">
            By signing up, you agree to our <a href="#">Terms</a> & <a href="#">Privacy Policy</a>.
          </p>
        </div>
      </div>
    </div>
  );
}
