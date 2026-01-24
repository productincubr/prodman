import React from "react";
import "./wldServicesExperience.css";

import wldServicesLeft from "../../../assets/image/wldServices.png";
import wldServicesRight from "../../../assets/image/wldServices2.png";
import arrowImg from "../../../assets/icons/cruveArrowEthi.png";

const WldServicesExperience = () => {
  return (
    <section className="wld-exp">
      <div className="wld-exp-inner">

        {/* TOP TEXT */}
        <p className="wld-exp-top-text">
          Our work included structuring the website layout, designing key sections
          such as services, process flow and testimonials and ensuring a seamless
          user journey from discovery to inquiry. The design aimed to balance
          visual appeal with functionality, making it easy for users to understand
          the services and get started quickly.
        </p>

        {/* MAIN GRID */}
        <div className="wld-exp-grid">

          {/* LEFT IMAGE */}
          <div className="wld-exp-left">
            <img src={wldServicesLeft} alt="Mobile layout design" loading="lazy" />
          </div>

          {/* RIGHT SIDE */}
          <div className="wld-exp-right">

            <img
              src={wldServicesRight}
              alt="Desktop layout design"
              className="wld-exp-right-img"
            />

            <div className="wld-exp-text">
              <img src={arrowImg} alt="Arrow" />
              <p>
                The design focused on a clean, modern layout with clear structure
                and easy navigation. The final design enhances brand credibility
                and supports effective lead generation.
              </p>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};

export default WldServicesExperience;
