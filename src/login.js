import React, { useState, useEffect } from "react";
import PropTypes from "prop-types";
import "./login.css";
import { Link } from "react-router-dom";

const Login = ({ 
  onFacebookLogin, 
  onGoogleLogin, 
  onAppleLogin, 
  onEmailLogin,
  autoFocus = false,
  validateOnInit = false
}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [isFormValid, setIsFormValid] = useState(false);

  // Effect to handle auto-focus on email input
  useEffect(() => {
    if (autoFocus) {
      const emailInput = document.getElementById('email-input');
      if (emailInput) {
        emailInput.focus();
      }
    }
  }, [autoFocus]);

  // Effect to validate form on initial render if specified
  useEffect(() => {
    if (validateOnInit) {
      validateForm();
    }
  }, [email, password, validateOnInit]);

  // Form validation logic
  const validateForm = () => {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    const isValidEmail = emailRegex.test(email);
    const isValidPassword = password.length >= 6;
    setIsFormValid(isValidEmail && isValidPassword);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    validateForm();
    
    if (isFormValid && onEmailLogin) {
      onEmailLogin(email, password);
    }
  };

  const handleFacebookLogin = () => {
    if (onFacebookLogin) {
      onFacebookLogin();
    }
  };

  const handleGoogleLogin = () => {
    if (onGoogleLogin) {
      onGoogleLogin();
    }
  };

  const handleAppleLogin = () => {
    if (onAppleLogin) {
      onAppleLogin();
    }
  };

  return (
    <div className="containerl">
      {/* Login Section */}
      <main className="main-content">
        <div className="loginwith-block">
          <div className="login-container">
            <div className="social-login">
              <button 
                className="facebook" 
                onClick={handleFacebookLogin}
              >
                Log in using Facebook
              </button>
              <button 
                className="google" 
                onClick={handleGoogleLogin}
              >
                Log in using Google
              </button>
              <button 
                className="apple" 
                onClick={handleAppleLogin}
              >
                Sign in with Apple
              </button>
            </div>
            <p>or login with Email</p>
            <form onSubmit={handleSubmit}>
              <input 
                id="email-input"
                type="email" 
                placeholder="Your Email" 
                value={email}
                onChange={(e) => {
                  setEmail(e.target.value);
                  validateForm();
                }}
                required 
              />
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => {
                  setPassword(e.target.value);
                  validateForm();
                }}
                required 
              />
              <button 
                type="submit" 
                className="submit-btn"
                disabled={!isFormValid}
              >
                Log In
              </button>
              {!isFormValid && (
                <p className="error-message">
                  Please enter a valid email and password
                </p>
              )}
            </form>
          </div>
        </div>
      </main>

      {/*Footer*/}
      <footer className="footerapp">
        <div className="footerapp-section">
          <div className="logon">
            <div className="oval-bg">
              <img
                src="/AarvasaL.png"
                alt="Aarvasa Logo 1"
                className="logon-image"
              />
            </div>
          </div>
          <p>Building Dreams, Securing Futures</p>
        </div>
        <div className="footerapp-section">
          <h3 className="underlinedapp">Quick Links</h3>
          <ul>
            <li>Home</li>
            <li>About Us</li>
          </ul>
        </div>
        <div className="footerapp-section">
          <h3 className="underlinedapp">Privacy & Terms</h3>
        </div>
      </footer>
    </div>
  );
};

// PropTypes Validation
Login.propTypes = {
  onFacebookLogin: PropTypes.func,
  onGoogleLogin: PropTypes.func,
  onAppleLogin: PropTypes.func,
  onEmailLogin: PropTypes.func,
  autoFocus: PropTypes.bool,
  validateOnInit: PropTypes.bool
};

// Optional default props
Login.defaultProps = {
  onFacebookLogin: () => {},
  onGoogleLogin: () => {},
  onAppleLogin: () => {},
  onEmailLogin: () => {},
  autoFocus: false,
  validateOnInit: false
};

export default Login;