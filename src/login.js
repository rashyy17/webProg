import React from "react";
import "./login.css";
import { Link } from "react-router-dom";

const Login = () => {
  return (
    <div className="containerl">

      {/* Login Section */}
      <main className="main-content">
        <div classname="loginwith-block">
        <div className="login-container">
          <div className="social-login">
            <button className="facebook">Log in using Facebook</button>
            <button className="google">Log in using Google</button>
            <button className="apple">Sign in with Apple</button>
          </div>
          <p>or login with Email</p>
          <form>
            <input type="email" placeholder="Your Email" required />
            <input type="password" placeholder="Password" required />
            <button type="submit" className="submit-btn">Log In</button>
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
            <p>Building Dreams , Securing Futures</p>
            
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

export default Login;