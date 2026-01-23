import React from "react";
import "./ourServices.css";
import icon from '../assets/icons/ContainerIcon.png' // replace with your icon
// import containerIcon from "../../assets/icons/ContainerIcon.png";

const services = [
  {
    title: "Product Packaging Design and Strategy",
    desc: "Crafting captivating designs and strategic solutions to make your products stand out on shelves and in consumers' minds.",
  },
  {
    title: "Branding, Positioning and Strategy",
    desc: "Building strong brand identities, strategically positioning businesses in their market, and devising effective strategies to drive growth and recognition.",
  },
  {
    title: "Web Dev and UX UI",
    desc: "Creating seamless and visually appealing digital experiences through expert web development and intuitive UX/UI design.",
  },
  {
    title: "Social Media Creatives",
    desc: "Designing eye-catching and engaging visuals tailored to enhance your brand's presence and engagement across social media platforms.",
  },
];

const OurServices = () => {
  return (
    <section id="services" className="services-section">
      <div className="services-container">
        <h2 className="services-title">Our Services</h2>

        <p className="services-subtitle">
          We work hard to bring you top-tier creative talent and ensure stellar
          execution until you say – Dude, Thank You!
        </p>

        <div className="services-grid">
          {services.map((service, index) => (
            <div className="service-card" key={index}>
              <div className="service-icon">
                <img src={icon} alt="service icon" />
              </div>
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurServices;
