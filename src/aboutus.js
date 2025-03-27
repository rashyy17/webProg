import React from 'react';
import './aboutus.css';
import ReviewCard from "./reviewcard";
import CompanyPartners from "./CompanyPartners";

const AboutUs = () => {
    const milestones = [
        { month: 'May', description: 'Team Formation and Initial Planning' },
        { month: 'June', description: 'MVP Development Kickoff' },
        { month: 'July', description: 'Strategic Partnerships' },
        { month: 'August', description: 'MVP Testing Phase' },
        { month: 'September', description: 'Beta Launch with Core Features' },
        { month: 'October', description: 'Marketing and User Acquisition' },
    ];

    const partners = [
        { name: "Timeslotter pvt Ltd", logo: "Rectangle 349.png" },
        { name: "PSAssociates", logo: "Rectangle 352.png" },
        { name: "Paramjyoti pvt Ltd", logo: "Rectangle 355.png" },
        { name: "Ealth technologies", logo: "Rectangle 358.png" },
        { name: "Softwave", logo: "Rectangle 358(1).png" },
      ];

    return (
        <div className="about-section">
            <div className="about-contentaboveheader">
            <h2>Who We Are :</h2>
            </div>
            <div class="about-content">
        <img src="_0001.png" alt="Character" class="character-img" />
        <div class="about-text">
            <p>
                <strong>So We Are Homesi</strong>, Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.
            </p>
        </div>
        </div>
            <div className="mission-hea">
                <h2>Connecting People with Perfect Properties and Smart Investments</h2>
            </div>
            
            <div className="mission-vision">
    <div className="left-column">
        <div className="card mission">
            <h3>Our Mission</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cill
            </p>
        </div>
        <div className="card vision">
            <h3>Our Vision</h3>
            <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillu
            </p>
        </div>
    </div>
    <div className="right-column">
        <div className="card center-card">
            <p><strong>Homesi</strong> Simplifies Real Estate with Seamless Transactions, Investments, and Property Monetization</p>
            <img src="houseas.png" alt="Building" className="center-img" />
            <button>Contact Us</button>
        </div>
    </div>
</div>


            {/* Milestones Section */}
            <div className="milestones-header">
                <h3>Milestones and Future Plans:</h3>
            </div>
            <section className="milestones">
      <div className="timeline">
        {milestones.map((milestone, index) => (
          <React.Fragment key={index}>
            <div className="timeline-item">
              <div className="timeline-star">
                <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                  <path d="M12 .587l3.668 7.425L24 9.748l-6 5.853 1.417 8.257L12 19.771l-7.417 4.087L6 15.601 0 9.748l8.332-1.736z" />
                </svg>
              </div>
              <div className="timeline-month">{milestone.month}</div>
              <div className="timeline-description">{milestone.description}</div>
            </div>
            {index < milestones.length - 1 && (
              <div className="timeline-connector">
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
                <span className="dot"></span>
              </div>
            )}
          </React.Fragment>
        ))}
      </div>
    </section>

            
    <div class="asserWhatclients">
    <h2>What Our Clients Say</h2>
    </div>        
     <div class="serreviewcards">
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     </div>

    <div classname ="mapsabove-header">
        <h1>Geographic Reach :</h1>
     </div>
     <div className="aboutusmap-section">
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

  

    <div>
        <h3 classname = "formhead-container">Contact Us:</h3>
    </div>
    <div>
    <section className="aboutusserconsultation">
                <div className="aboutussercontent">
                    <div className="aboutusserimage">
                    <img src="/Services/scheduleconsulatance.png" alt="House Image" />
                    </div>
                    <div className="aboutusserform-container">
                    <form>
                        <label htmlFor="name">NAME</label>
                        <input type="text" id="name" placeholder="Enter your name" required />
                        
                        <label htmlFor="email">EMAIL ADDRESS</label>
                        <input type="email" id="email" placeholder="Enter your email" required />
                        
                        <label htmlFor="date">DATE</label>
                        <input type="date" id="date" required />
                        
                        <button type="submit">Scheduling A Consultation</button>
                </form>
            </div>
        </div>
    </section>
    </div>

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

export default AboutUs;
