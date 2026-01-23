import React from "react";
import "./ethiHero.css";
import ethiLogo from "../../../assets/icons/ethilogo.png"
import { FiArrowUpLeft } from "react-icons/fi";
import { Link } from "react-router-dom";

const EthiHero = () => {
  return (
    <section className="case-hero">
      <div className="case-hero-inner">

        {/* Back link */}
        <Link to="/design/portfolio" className="case-back">
          <span className="back-arrow"><FiArrowUpLeft /></span>
          <span>Back to all projects</span>
        </Link>

        {/* Logo */}
        <div className="case-logo">
          <img src={ethiLogo} alt="Ethi logo" />
          {/* <p className="case-tagline">Everything Health Inspired</p> */}
        </div>

        {/* Description */}
        <p className="case-description">
          Ethi is a wellness tracker focused on everyday wellbeing, offering
          simple insights to help users understand their physical and mental
          health. This case study explores how Ethi makes wellness tracking
          feel supportive and human.
        </p>

      </div>
    </section>
  );
};

export default EthiHero;
