import React from "react";
import "./contactus.css"
import { useState } from "react";
import "./loader.css";
const ContactUs = () => {

  let [name,set_name] = useState("");
  let [email,set_email] = useState("");
  let [date,set_date] = useState("");
  let [load,set_load] = useState(0);

  let send = async()=>{

    set_load(1);
    let op = await fetch('http://localhost:8000/send_consultation',
      {
          method: 'POST',
          headers: {
              'Content-Type': 'application/json',
          },
          body : JSON.stringify({email:email,date:date,name:name}),
          
      }
  );

    let ans = await op.json();

    console.log(ans);

    if(ans.message == "successful"){
      set_load(2);
    }

  }

  if(load == 2){
    return(
      <div>
        <p>THANK YOU FOR CONSULTATION</p>
      </div>
    );
  }

  if(load == 1){
    return (
      <div>
          <div className="loader-container">
              <div className="loader"></div>
          </div>
      </div>
  );
  }
    return (
        <div>
            <div>
                <h4 class="serWhatclients">Contact Us:</h4>
            </div>
            <section className="serconsultation">\
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
                value={name} // Binds state to input
                onChange={(e) => set_name(e.target.value)} // Updates state
                required
            />

            <label htmlFor="email">EMAIL ADDRESS</label>
            <input
                type="email"
                id="email"
                placeholder="Enter your email"
                value={email} // Binds state to input
                onChange={(e) => set_email(e.target.value)} // Updates state
                required
            />

            <label htmlFor="date">DATE</label>
            <input
                type="date"
                id="date"
                value={date} // Binds state to input
                onChange={(e) => set_date(e.target.value)} // Updates state
                required
            />

                            <button >Scheduling A Consultation</button>
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
export default ContactUs;