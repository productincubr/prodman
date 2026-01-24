import React from "react";
import "./Testimonials.css";

const testimonials = [
  {
    name: "Priya Sharma",
    role: "Founder, FreshBloom Organics",
    quote:
      "Prodman transformed our packaging from ordinary to extraordinary. Their design strategy helped us stand out in the competitive organic food market. Sales increased by 40% within three months!",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    name: "Rajesh Kulkarni",
    role: "CEO, TechVista Solutions",
    quote:
      "The branding and positioning work they did for our startup was phenomenal. They understood our vision and created an identity that resonates with our target audience perfectly.",
    image: "https://i.pravatar.cc/150?img=12"
  },
  {
    name: "Ananya Reddy",
    role: "Marketing Head, Spice Route Foods",
    quote:
      "Working with Prodman on our product packaging was a game-changer. Their attention to detail and creative approach helped us create packaging that tells our brand story beautifully.",
    image: "https://i.pravatar.cc/150?img=45"
  },
  {
    name: "Vikram Desai",
    role: "Co-founder, UrbanNest Furniture",
    quote:
      "The web development and UX/UI design services exceeded our expectations. Our new website is not just beautiful but also incredibly user-friendly. Customer engagement has doubled!",
    image: "https://i.pravatar.cc/150?img=15"
  },
  {
    name: "Meera Iyer",
    role: "Brand Manager, Wellness Co.",
    quote:
      "Prodman's social media creatives have transformed our online presence. Their designs are eye-catching and perfectly aligned with our wellness brand's ethos. Highly recommended!",
    image: "https://i.pravatar.cc/150?img=38"
  },
  {
    name: "Arjun Kapoor",
    role: "Director, Heritage Handicrafts",
    quote:
      "From strategy to execution, Prodman delivered excellence at every step. They helped us rebrand our traditional handicraft business for modern consumers while maintaining our heritage.",
    image: "https://i.pravatar.cc/150?img=33"
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
                    <div className="avatar">
                      <img src={item.image} alt={item.name} />
                    </div>
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
                    <div className="avatar">
                      <img src={item.image} alt={item.name} />
                    </div>
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
