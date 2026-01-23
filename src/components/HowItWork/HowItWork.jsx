import { useState, useEffect } from "react";
import { motion } from "framer-motion";
import "./howItWork.css";

const steps = [
  {
    id: "01",
    title: "CHOOSE A SET",
    desc: "Pick a ready set or customize your own studio setup."
  },
  {
    id: "02",
    title: "SHARE YOUR VIBE",
    desc: "Tell us about your brand, mood and creative references."
  },
  {
    id: "03",
    title: "BOOK YOUR SLOT",
    desc: "Select your preferred date and time slot for shooting."
  },
  {
    id: "04",
    title: "COME WITH CREW",
    desc: "Arrive with your team and all necessary equipment."
  },
  {
    id: "05",
    title: "CHILL & SHOOT",
    desc: "Relax and create amazing content with our support team."
  },
];

const HowItWorks = () => {
  const [active, setActive] = useState(0);
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActive((prev) => (prev + 1) % steps.length);
      setProgress(0); // Reset progress when moving to next card
    }, 4000); // Change card every 4 seconds

    return () => clearInterval(interval);
  }, []);

  useEffect(() => {
    const progressInterval = setInterval(() => {
      setProgress((prev) => Math.min(prev + 2, 100)); // Slower, smoother progress
    }, 80); // Update progress every 80ms

    return () => clearInterval(progressInterval);
  }, []);

  return (
    <section className="how-it-works" id="howItWorks">
      <h2>
        How <span>It Works</span>
      </h2>
      <div className="hiw-grid">
        {steps.map((step, index) => {
          const isActive = index === active;

          return (
            <div
              key={step.id}
              className={`hiw-item ${isActive ? "active" : ""}`}
            >
              <span className="hiw-num">{step.id}</span>
              <h3>{step.title}</h3>
              <p className="hiw-desc">{step.desc}</p>

              {/* Underline within each card */}
              {isActive && (
                <motion.div
                  className="hiw-underline"
                  initial={{ width: 0, left: 20 }}
                  animate={{
                    width: `${20 + (progress * 0.6)}px`,
                    left: 20
                  }}
                  transition={{
                    duration: 0.1,
                    ease: "linear"
                  }}
                />
              )}
            </div>
          );
        })}
      </div>
    </section>
  );
};

export default HowItWorks;