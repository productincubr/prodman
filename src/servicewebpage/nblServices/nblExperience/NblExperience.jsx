import React from "react";
import "./nblExperience.css";

import bigMockup from '../../../assets/image/nblServicesImg.png' // left tall image
import card1 from "../../../assets/image/nblS1.png";
import card2 from "../../../assets/image/nblS2.png";
import card3 from "../../../assets/image/nblS3.png";
// import curveArrow from "../../../assets/icons/curveArrowEthi.png";
import curveArrow from '../../../assets/icons/cruveArrowEthi.png'


const NblExperience = () => {
  return (
    <section className="case-study-redesign">

      {/* TOP TEXT */}
      <p className="cs-top-text">
        We worked on simplifying the information architecture, improving visual
        hierarchy, and refining the overall design to ensure clarity,
        consistency, and ease of use across the website, while aligning the
        interface with the brand’s wellness-driven identity.
      </p>

      <div className="cs-container">

        {/* LEFT BIG IMAGE */}
        <div className="cs-left">
          <img src={bigMockup} alt="App redesign mockup" loading="lazy" />
        </div>

        {/* RIGHT SIDE */}
        <div className="cs-right">

          {/* STACKED CARDS */}
          <div className="cs-cards">
            <img src={card1} alt="Clinical Assessment" />
            <img src={card2} alt="Nutrition Built on Science" />
            <img src={card3} alt="Practical & Lifestyle Friendly" />
          </div>

          {/* TEXT + ARROW */}
          <div className="cs-text">
            <img src={curveArrow} alt="" className="cs-arrow" />
            <p>
              The redesign was guided by <strong>user-centric principles</strong>,
              with emphasis on clear visual hierarchy, consistent typography and
              balanced use of color. By streamlining layouts and reducing
              cognitive load, we aimed to create a seamless journey that supports
              users in making informed decisions about their nutrition and
              wellness.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default NblExperience;
