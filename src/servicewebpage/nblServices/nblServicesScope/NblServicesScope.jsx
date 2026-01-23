import React from "react";
import "./nblServicesScope.css";
import nblscopeImage from '../../../assets/image/nblScopeImg.jpg';
import { FiArrowUpRight } from "react-icons/fi";
 // <-- your image

const EthiScope = () => {
  return (
    <section className="nbl-scope">
      <div className="nbl-scope-inner">

        {/* Top meta row */}
        <div className="nbl-scope-meta">
          <div className="nbl-meta-left">
            <div className="nbl-meta-block">
              <span className="nbl-meta-label">SCOPE</span>
              <div className="nbl-meta-tags">
                <span>Website</span>
                <span>Ecommerce</span>
                <span>Journal</span>
              </div>
            </div>

            <div className="nbl-meta-block">
              <span className="nbl-meta-label">INDUSTRY</span>
              <div className="nbl-meta-tags">
                <span>Ecommerce</span>
                <span>D2C Brand</span>
              </div>
            </div>

            <div className="nbl-meta-block">
              <span className="nbl-meta-label">TIME DURATION</span>
              <div className="nbl-meta-tags">
                <span>3 Months</span>
              </div>
            </div>
          </div>

          <a className="visit-btn" href="https://lovneet.com/" target="_blank" rel="noopener noreferrer">
            Visit Website <span className="arrowS"><FiArrowUpRight size={22} /></span>
          </a>
        </div>

        {/* Title */}
        <h2 className="nbl-scope-title">OUR SCOPE</h2>

        {/* Image */}
        <div className="nbl-scope-image-wrap">
          <img src={nblscopeImage} alt="Project Scope" />
        </div>

      </div>
    </section>
  );
};

export default EthiScope;
