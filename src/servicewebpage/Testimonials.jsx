import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Vivek Mujral",
    role: "Businessman",
    quote:
      "Prodman created a brand that truly reflects our mission. We couldn’t be happier!",
  },
  {
    name: "Vivek Mujral",
    role: "Businessman",
    quote:
      "Prodman created a brand that truly reflects our mission. We couldn’t be happier!",
  },
  {
    name: "Vivek Mujral",
    role: "Businessman",
    quote:
      "Prodman created a brand that truly reflects our mission. We couldn’t be happier!",
  },
  {
    name: "Vivek Mujral",
    role: "Businessman",
    quote:
      "Prodman created a brand that truly reflects our mission. We couldn’t be happier!",
  },
];

const Testimonials = () => {
  return (
    <section className="testimonials-section">
      <div className="testimonials-container">
        <h2 className="testimonials-title">
          What <span>They Say</span> About Us
        </h2>

        <div className="testimonials-row">
          {/* track contains two identical groups for seamless looping */}
          <div className="testimonials-track">
            <div className="track-group">
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={`a-${index}`}>
                  <div className="testimonial-header">
                    <div className="avatar"></div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>

                  <p className="testimonial-text">"{item.quote}"</p>
                </div>
              ))}
            </div>

            <div className="track-group" aria-hidden="true">
              {testimonials.map((item, index) => (
                <div className="testimonial-card" key={`b-${index}`}>
                  <div className="testimonial-header">
                    <div className="avatar"></div>
                    <div>
                      <h4>{item.name}</h4>
                      <p>{item.role}</p>
                    </div>
                  </div>

                  <p className="testimonial-text">"{item.quote}"</p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
