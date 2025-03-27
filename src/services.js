import React from "react";
import ServicesCardComp from "./servicescardcomponent";
import "./services.css";
import ReverseServices from "./ReverseServices";
import ReviewCard from "./reviewcard";


const Services = () => {
  return (
    // <div class="belowheader">
    <div class="services">
    <div class="serviceone">
      <div class="serleftpart">
        <div class="seryellowbox">
          <h4 class="serinsidebutton">Built Dream And Securing Future</h4>
        </div>
        <h4 class="serboldmaroon">
          All-inclusive Real Estate Solutions for Buyers & Investors
        </h4>
        <h4 class="serbasiccontent">
          Helping you find the perfect property or make smart investment decisions with expert guidance.
        </h4>
        < div class="serbuttons">
        <button class="sermarooncontactus">Contact Us</button>
        <button class="seroutlineviewservices">View Sevices</button>
        </div>
      </div>
      <div >
        <img src="/services/home.png" alt="home"></img>
        </div>  
     </div>
     <div>
     
     </div>
     <div class="servicesthree">
        <h1 class="allservices">All Services:</h1>
        <h4 class="serdetails">Aarvasa Simpliflies Real Estate with Seamless Transactions, Investments, and Property Monetization</h4>
     </div>
     <div class="sercards">
      <ServicesCardComp
      heading="Comprehensive Consultancy Services :"
      text="Comprehensive Consultancy Services refers to a broad range of advisory and support services provided to businesses, organizations, or individuals. These services typically cover multiple ..."
      imageSrc="/Services/consultancy.jpeg"
      />
      <ReverseServices
      heading="AR/VR Property Tours :"
      text="AR/VR Property Tours use Augmented Reality and Virtual Reality technologies to create immersive, interactive experiences for viewing properties. These tools are becoming increasingly popular in real estate as they allow ..."
      imageSrc="/Services/arvr.png"
      />
      
     </div>
     <h4 class="serWhatclients">What Our Clients Say</h4>
     <div class="serreviewcards">
     <ReviewCard/>
     <ReviewCard/>
     <ReviewCard/>
     </div>
    <div class="serbookdemo">
      <h3 class="sertextt">Bring all Your<br></br>
     legal , Technical and Other Question Here! </h3>
      <button class="serbookdemobutton">
        <h6 class="serbuttoncontent">BOOK A DEMO</h6>
      </button>
    </div>
    <h4 class="serviceserWhatclients">Contact Us:</h4>
    <section className="serviceserconsultation">
  <div className="servicesercontent">
    <div className="serviceserimage">
      <img src="/Services/scheduleconsulatance.png" alt="House Image" />
    </div>
    <div className="serviceserform-container">
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

export default Services;
