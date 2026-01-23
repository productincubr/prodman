import React, { useState, useEffect, useRef } from "react";
import "./aboutUs.css";

const videoData = [
  {
    id: 1,
    videoUrl: "/src/assets/videos/video1.mp4", // Replace with your actual video paths
  },
  {
    id: 2,
    videoUrl: "/src/assets/videos/video2.mp4",
  },
  {
    id: 3,
    videoUrl: "/src/assets/videos/video3.mp4",
  },
  {
    id: 4,
    videoUrl: "/src/assets/videos/video4.mp4",
  },
];

const AboutUs = () => {
  const [activeVideo, setActiveVideo] = useState(0);
  const videoRefs = useRef([]);

  useEffect(() => {
    // Play the active video
    const currentVideo = videoRefs.current[activeVideo];
    if (currentVideo) {
      currentVideo.play();
    }

    // Pause all other videos
    videoRefs.current.forEach((video, index) => {
      if (video && index !== activeVideo) {
        video.pause();
        video.currentTime = 0;
      }
    });
  }, [activeVideo]);

  const handleVideoEnd = () => {
    // Move to next video when current video ends
    setActiveVideo((prev) => (prev + 1) % videoData.length);
  };

  return (
    <section className="about-us-section" id="about-us">
      <div className="wwc-container">
        {/* HEADER */}
        <h2 className="wwc-title reveal">
          What<span className="chooseUs"> They Say</span> About Us
        </h2>

        {/* <p className="wwc-desc reveal">
          We work hard to bring you top-tier creative talent and ensure stellar execution
          <span> — until you say "Dude, Thank You!"</span>
        </p> */}

        {/* VIDEO CARDS */}
        <div className="wwc-cards">
          {videoData.map((video, index) => (
            <div
              key={video.id}
              className={`wwc-card video-card ${index === activeVideo ? "active" : ""}`}
            >
              <video
                ref={(el) => (videoRefs.current[index] = el)}
                className="card-video"
                onEnded={handleVideoEnd}
                muted
                playsInline
              >
                <source src={video.videoUrl} type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          ))}
        </div>

        {/* DOTS INDICATOR */}
        <div className="video-dots">
          {videoData.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === activeVideo ? "active" : ""}`}
              onClick={() => setActiveVideo(index)}
              aria-label={`Play video ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default AboutUs;
