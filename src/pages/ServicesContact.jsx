
import React from "react";
import "../styles/contactUs.css";
import DesignHeader from "../servicewebpage/DesignHeader";
import DesignFooter from "../servicewebpage/DesignFooter";

const ServicesContact = () => {
  return (
    <>
      <DesignHeader />

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

      <DesignFooter />
    </>
  );
};

export default ServicesContact;
