import React from "react";
import "./App.css";
import Infocard from "./infocard";
import SearchBar from "./SearchBar";
import { useNavigate } from "react-router-dom";
function App() {

  let n = useNavigate();

return (
      <div className="container">
      {/*Hero*/}
      <main className="hero">
  <div className="hero-content">
    <h3>Welcome to Homesi</h3>
    <h1>Manage Your Property</h1>
    <p>
      Your will have everything nearby supermarkets, buses, stations, and
      more—all nearby!
    </p>
    <SearchBar />
  </div>
  <div className="hero-image">
    <img src="/Final ii 1.png" alt="Hero Image" />
  </div>

  {/* SVG Clouds */}
  <svg
    className="cloud"
    width="200"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "20px", left: "10%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="180"
    height="90"
    viewBox="0 0 64 32"
    style={{ top: "10%", left: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="130"
    height="70"
    viewBox="0 0 64 32"
    style={{ bottom: "20px", left: "15%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  
  <svg
    className="cloud"
    width="400"
    height="300"
    viewBox="0 0 64 32"
    style={{ top: "70px", right: "40%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
  <svg
    className="cloud"
    width="160"
    height="80"
    viewBox="0 0 64 32"
    style={{ top: "200px", left: "5%" }}
  >
    <ellipse cx="16" cy="16" rx="16" ry="8" />
    <ellipse cx="32" cy="16" rx="16" ry="8" />
    <ellipse cx="24" cy="12" rx="20" ry="10" />
  </svg>
</main>


{/* USP Section */}
<section className="usp">
  <h2>We’ve got properties for everyone</h2>
  <div className="usp-stats">
    <div className="stat-item">
      <img src="/image.png" alt="Owner Properties" />
      <h3>1022</h3>
      <h3>Owner Properties</h3>
      <h3 className="explore-link"><a href="#">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(3).png" alt="Projects" />
      <h3>182</h3>
      <h3>Projects</h3>
      <h3 className="explore-link"><a href="#">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(2).png" alt="Ready to Move-In" />
      <h3>2364</h3>
      <h3>Ready to move-in</h3>
      <h3 className="explore-link"><a href="#">Explore →</a></h3>
    </div>
    <div className="stat-item">
      <img src="/image(1).png" alt="Budget Homes" />
      <h3>3222</h3>
      <h3>Budget Homes</h3>
      <h3 className="explore-link"><a href="#">Explore →</a></h3>
    </div>
  </div>
</section>

{/**/}
<Infocard />


      

      {/*Bachelor's*/}
      <section className="Bachelor">
        <div className="absolute top-0 left-1/4 w-32 h-32 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute top-10 left-1/2 w-24 h-24 rounded-full bg-white opacity-10 blur-xl"></div>
        <div className="absolute -top-10 right-1/4 w-40 h-40 rounded-full bg-white opacity-10 blur-xl"></div>

        <div className="bac-box">
          
          <p>Solving the</p>
          <div className="secnd-line">Unsolvable problem</div>
          <p className="third-line">with <span className="highlight">Homesi</span></p>
          <p className="bold">Now Property Available for <strong>BACHELOR'S</strong> 
          <div className="itali">also...</div>
          </p>

          <a href="#" className="explore-link">Explore →</a>
        </div>
      </section>



    
      
       {/* Map Section */}
<div className="map-section">
<iframe
      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.0409982844603!2d79.15335867450268!3d12.969228414931406!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bad479f0ccbe067%3A0xfef222e5f36ecdeb!2sVellore%20Institute%20of%20Technology!5e0!3m2!1sen!2sin!4v1743083783340!5m2!1sen!2sin"
      width="100%"
      height="450"
      style={{
        border: "0",
        filter: "invert(90%)",
        borderRadius: "10px",
      }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="Google Map - Vellore"
    />

</div>






      {/* Newsletter Section */}
      <section className="appnewsletter">
  <div class="appcontent">
    <div class="apptext">
      <strong>Subscribe Our Newsletter</strong>
      <p>
        Lorem ipsum dolor sit amet consectetur. Feugiat ut aliquet sit pellentesque sollicitudin. 
        Egestas faucibus lacus diam in senectus consectetur. Mattis elit adipiscing quisque tellus scelerisque vehicula ante nunc.
      </p>
      <form>
        <input type="email" placeholder="Enter your email" required />
        <button type="submit">Get a Quote</button>
      </form>
    </div>
    <div class="appimage">
      <img src="/3d-rendering-isometric-fdgdf 1.png" alt="Newsletter Image" />
    </div>
  </div>
</section>

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
}

export default App;
