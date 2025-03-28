import React from "react";
import PropTypes from "prop-types";
import "./contactus.css";
import { useState } from "react";
import "./loader.css";

const ContactUs = ({ initialName, initialEmail, initialDate }) => {
  let [name, set_name] = useState(initialName || "");
  let [email, set_email] = useState(initialEmail || "");
  let [date, set_date] = useState(initialDate || "");

  return (
    <div>
      <div>
        <h4 className="serWhatclients">Contact Us:</h4>
      </div>
      <section className="serconsultation">
        <div className="sercontent">
          <div className="serimage">
            <img src="/Services/scheduleconsulatance.png" alt="House Image" />
          </div>
          <div className="serform-container">
            <form>
              <label htmlFor="name">NAME</label>
              <input
                type="text"
                id="name"
                placeholder="Enter your name"
                value={name}
                onChange={(e) => set_name(e.target.value)}
                required
              />

              <label htmlFor="email">EMAIL ADDRESS</label>
              <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email}
                onChange={(e) => set_email(e.target.value)}
                required
              />

              <label htmlFor="date">DATE</label>
              <input
                type="date"
                id="date"
                value={date}
                onChange={(e) => set_date(e.target.value)}
                required
              />

              <button>Scheduling A Consultation</button>
            </form>
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
ContactUs.propTypes = {
  initialName: PropTypes.string,
  initialEmail: PropTypes.string,
  initialDate: PropTypes.string
};


export default ContactUs;