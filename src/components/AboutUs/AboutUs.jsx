import React, { useState, useEffect } from "react";
import "./aboutUs.css";

const testimonialData = [
  {
    id: 1,
    name: "Satabdi",
    role: "Client",
    quote: "Very smooth and well-organized studio shoot. The commitment level is impressive, and the team has a fresh, modern approach to design. Great quality work at a very reasonable price.",
    image: "https://i.pravatar.cc/150?img=47"
  },
  {
    id: 2,
    name: "Swareena",
    role: "Client",
    quote: "Amazing experience with the studio shoot. The team is new yet highly professional, creative, and detail-oriented. Definitely value for money and worth recommending.",
    image: "https://i.pravatar.cc/150?img=45"
  },
  {
    id: 3,
    name: "Diya",
    role: "Marketing Team Lead",
    quote: "I and the team had an opportunity to shoot at the studio and we were quite impressed. The set and props were great, the whole ambiance for that matter. Even the staff was amicable and sweet.",
    image: "https://i.pravatar.cc/150?img=38"
  },
  {
    id: 4,
    name: "Sikander",
    role: "Client",
    quote: "Studio shooting experience was top-notch. Team was very professional and committed to timelines. Being a new team, their creativity and design sense really stood out. Totally value for money.",
    image: "https://i.pravatar.cc/150?img=12"
  },
];

const AboutUs = () => {
  const [activeTestimonial, setActiveTestimonial] = useState(0);
  const [isPaused, setIsPaused] = useState(false);

  useEffect(() => {
    if (isPaused) return;
    
    // Auto-rotate testimonials every 5 seconds
    const interval = setInterval(() => {
      setActiveTestimonial((prev) => (prev + 1) % testimonialData.length);
    }, 5000);

    return () => clearInterval(interval);
  }, [isPaused]);

  return (
    <section className="about-us-section" id="about-us">
      <div className="wwc-container">
        {/* HEADER */}
        <h2 className="wwc-title reveal">
          What<span className="chooseUs"> They Say</span> About Us
        </h2>

        {/* TESTIMONIAL CARDS */}
        <div className="wwc-cards">
          {testimonialData.map((testimonial, index) => (
            <div
              key={testimonial.id}
              className={`wwc-card testimonial-card ${index === activeTestimonial ? "active" : ""}`}
              onMouseEnter={() => {
                setActiveTestimonial(index);
                setIsPaused(true);
              }}
              onMouseLeave={() => setIsPaused(false)}
            >
              <div className="testimonial-content">
                <h3 className="testimonial-name">{testimonial.name}</h3>
                <p className="testimonial-role">{testimonial.role}</p>
                <p className="testimonial-quote">"{testimonial.quote}"</p>
              </div>
            </div>
          ))}
        </div>

        {/* DOTS INDICATOR */}
        <div className="video-dots">
          {testimonialData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeTestimonial ? "active" : ""}`}
              onClick={() => setActiveTestimonial(index)}
              aria-label={`View testimonial ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
