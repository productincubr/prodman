// import Navbar from "../components/Navbar";
import Navbar from "../components/Navbar/Navbar";
// import "./contactUs.css";
import React from "react";
import "../styles/contactUs.css";
import Footer from "../components/Footer/Footer";

const ContactUs = () => {
  return (
    <>
      <Navbar />

      <section className="contact-page">
        <div className="contact-header">
          <h1>Contact Us</h1>
        </div>

        <div className="contact-body">
          <h2>Have Any Questions?</h2>

          <div className="contact-form-card">
            <form>
              <div className="contact-row">
                <input type="text" placeholder="First Name" />
                <input type="text" placeholder="Last Name" />
                <input type="tel" placeholder="Phone Number" />
              </div>

              <input type="email" placeholder="Email" />
              <textarea placeholder="Message" rows="4" />

              <button type="submit">Submit</button>
            </form>
          </div>
        </div>
      </section>

      <Footer />
    </>
  );
};

export default ContactUs;
