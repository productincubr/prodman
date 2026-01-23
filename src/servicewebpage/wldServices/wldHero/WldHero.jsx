import React from "react";
import "./wldHero.css";
import wldLogo from "../../../assets/image/wld-logo.png"
import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const WldHero = () => {
  return (
    <section className="wld-case-hero">
      <div className="case-hero-inner">

        {/* Back link */}
        <Link to="/design/portfolio" className="wld-case-back">
          <span className="back-arrow"><FiArrowUpLeft /></span>
          <span>Back to all projects</span>
        </Link>

        {/* Logo */}
        <div className="wld-case-logo">
          <img src={wldLogo} alt="Ethi logo" />
          {/* <p className="case-tagline">Everything Health Inspired</p> */}
        </div>

        {/* Description */}
        <p className="wld-case-description">
        At Work Life Desks, we manage every detail from workspace design and fit-out to daily operations. Our focus is on creating functional, comfortable, and efficient work environments. This allows teams to move in and start working seamlessly from day one.
        </p>

      </div>
    </section>
  );
};

export default WldHero;
