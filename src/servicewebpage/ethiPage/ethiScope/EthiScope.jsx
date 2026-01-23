import React from "react";
import "./ethiScope.css";
import scopeImage from '../../../assets/image/ethiScopeImg.jpg';
import { FiArrowUpRight } from "react-icons/fi";
 // <-- your image

const EthiScope = () => {
  return (
    <section className="case-scope">
      <div className="case-scope-inner">

        {/* Top meta row */}
        <div className="scope-meta">
          <div className="meta-left">
            <div className="meta-block">
              <span className="meta-label">SCOPE</span>
              <div className="meta-tags">
                <span>Website</span>
                <span>Ecommerce</span>
                <span>Journal</span>
              </div>
            </div>

            <div className="meta-block">
              <span className="meta-label">INDUSTRY</span>
              <div className="meta-tags">
                <span>Ecommerce</span>
                <span>D2C Brand</span>
              </div>
            </div>

            <div className="meta-block">
              <span className="meta-label">TIME DURATION</span>
              <div className="meta-tags">
                <span>3 Months</span>
              </div>
            </div>
          </div>

          <a className="visit-btn" href="https://ethi.in/" target="_blank" rel="noopener noreferrer">
            Visit Website <span className="arrowS"><FiArrowUpRight size={22} /></span>
          </a>
        </div>

        {/* Title */}
        <h2 className="scope-title">OUR SCOPE</h2>

        {/* Image */}
        <div className="scope-image-wrap">
          <img src={scopeImage} alt="Project Scope" />
        </div>

      </div>
    </section>
  );
};

export default EthiScope;
