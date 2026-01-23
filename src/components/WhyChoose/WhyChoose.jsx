import React from "react";
import "./whyChoose.css";
import containerIcon from "../../assets/icons/ContainerIcon.png";

const WhyChoose = () => {
  return (
    <section className="why-choose" id="how-it-works">
      <div className="wwc-container">

        {/* HEADER */}
        <h2 className="wwc-title reveal">
          Why <span className="chooseUs">Choose Us</span>
        </h2>

        <p className="wwc-desc reveal">
          We work hard to bring you top-tier creative talent and ensure stellar execution
          <br /><span> — until you say “Dude, Thank You!”</span>
        </p>

        {/* CARDS */}
        <div className="wwc-cards">

          <div className="wwc-card reveal">
            <div className="card-icon">
              <img src={containerIcon} alt="icon" />
            </div>
            <h3>Professional equipment</h3>
            <p>
              Impeccable output.
              Professionally curated tools built for consistency, clarity, and performance.
            </p>
          </div>

          <div className="wwc-card reveal">
            <div className="card-icon">
              <img src={containerIcon} alt="icon" />
            </div>
            <h3>Concierge style service</h3>
            <p>
              Driven by customer obsession.
              A hands-on team that anticipates needs and delivers a seamless, end-to-end experience.
            </p>
          </div>

          <div className="wwc-card reveal">
            <div className="card-icon">
              <img src={containerIcon} alt="icon" />
            </div>
            <h3>In-house designed sets</h3>
            <p>
              Led by creators.
              Conceptualized by our own designers — we embrace creativity and never shy away from bold ideas.
            </p>
          </div>

          <div className="wwc-card reveal">
            <div className="card-icon">
              <img src={containerIcon} alt="icon" />
            </div>
            <h3>Built-to-suit spaces</h3>
            <p>
              With brand alignment.
              Custom environments shaped to reflect your brand’s tone, format, and intent.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default WhyChoose;
