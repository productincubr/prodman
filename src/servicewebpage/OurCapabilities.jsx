import React from "react";
import "./OurCapabilities.css";

const capabilities = [
  {
    title: "Renowned, Award-Winning Web Design",
    desc: "We combine human-centered design with conversion-driven practices to create stunning websites. By integrating intuitive UI/UX with robust SEO optimization, we ensure your brand not only looks exceptional but also achieves high visibility. We collaborate closely with you throughout the process to bring your exact vision to life."
  },
  {
    title: "Proven Digital Marketing Strategy & Execution",
    desc: "Our team collaborates with you to craft and execute tailored marketing strategies that align with your business objectives. Driven by deep research and analysis, we leverage SEO, content, paid ads, and social media to generate high-quality leads, drive conversions, and foster sustainable long-term growth."
  },
  {
    title: "Comprehensive and Cohesive Brand Solutions",
    desc: "Partner with us to ignite your brand's potential. We listen closely to your goals to build robust, holistic brand strategies that serve as the bedrock for all your marketing initiatives. Our cohesive approach ensures your business is positioned for enduring success and scalable growth."
  },
  {
    title: "Innovative & Future-Proof Web Development",
    desc: "Using cutting-edge technologies and industry best practices, we bring your designs to life with flawless front-end and back-end experiences. We build robust, conversion-optimized websites that provide the functionality you need today, while remaining highly scalable and adaptable for tomorrow."
  }
];

const OurCapabilities = () => {
  return (
    <section className="capabilities-section">
      <div className="capabilities-container">
        <h2 className="capabilities-title">Our Capabilities</h2>
        <div className="capabilities-grid">
          {capabilities.map((cap, index) => (
            <div key={index} className="capability-card">
              <h3>{cap.title}</h3>
              <p>{cap.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default OurCapabilities;