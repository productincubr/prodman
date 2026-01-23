import React from "react";
import "./ethiExperience.css";

import laptopImg from "../../../assets/image/ethiMacbook.png";
import mobileImg from "../../../assets/image/ethiServicespage.png";
import arrowImg from "../../../assets/icons/cruveArrowEthi.png";


const EthiExperience = () => {
  return (
    <section className="case-exp">
      <div className="case-exp-inner">

        {/* Top Line */}
        <p className="exp-top-text">
          It included a responsive website, journal flows, visual identity,
          and tone of voice, while excluding medical features, advanced
          analytics and full technical development.
        </p>

        {/* Visual Grid */}
        <div className="exp-visuals">

          {/* Left Image */}
          <div className="exp-image left">
            <img src={mobileImg} alt="Mobile Design" />
          </div>

          {/* Right Image */}
          <div className="exp-image right">
            <img src={laptopImg} alt="Laptop Design" />
          </div>

          {/* Text + Arrow */}
          <div className="exp-text">
            <img src={arrowImg} alt="Arrow" className="exp-arrow" />
            <p>
              With the scope defined, our focus shifted to creating an
              experience that feels calm, supportive and human. Rather than
              optimizing for performance or habit streaks, the design
              emphasizes reflection, emotional clarity and ease of use.
            </p>
          </div>

        </div>

      </div>
    </section>
  );
};

export default EthiExperience;
