import React from "react";
import "./wldServicesScope.css";
import wldScope from '../../../assets/image/wldScope.jpg';
import { FiArrowUpRight } from "react-icons/fi";
 // <-- your image

const WldServicesScope = () => {
  return (
    <section className="wld-scope">
      <div className="wld-scope-inner">

        {/* Top meta row */}
        <div className="wld-scope-meta">
          <div className="wld-meta-left">
            <div className="wld-meta-block">
              <span className="wld-meta-label">SCOPE</span>
              <div className="wld-meta-tags">
                <span>Website</span>
                <span>Ecommerce</span>
                <span>Journal</span>
              </div>
            </div>

            <div className="wld-meta-block">
              <span className="wld-meta-label">INDUSTRY</span>
              <div className="wld-meta-tags">
                <span>Ecommerce</span>
                <span>D2C Brand</span>
              </div>
            </div>

            <div className="wld-meta-block">
              <span className="wld-meta-label">TIME DURATION</span>
              <div className="wld-meta-tags">
                <span>3 Months</span>
              </div>
            </div>
          </div>

          <a className="visit-btn" href="https://www.worklifedesks.com/" target="_blank" rel="noopener noreferrer">
            Visit Website <span className="arrowS"><FiArrowUpRight size={22} /></span>
          </a>
        </div>

        {/* Title */}
        <h2 className="wld-scope-title">OUR SCOPE</h2>

        {/* Image */}
        <div className="wld-scope-image-wrap">
          <img src={wldScope} alt="Project Scope" />
        </div>

      </div>
    </section>
  );
};

export default WldServicesScope;
