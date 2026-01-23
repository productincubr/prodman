import React from 'react'

import { FiArrowUpLeft } from "react-icons/fi";
import './nblServicesHero.css'
import nblLogo from '../../../assets/image/nblLogo.png';
import { Link } from 'react-router-dom';

const NblServicesHero = () => {
  return (
    <section className="nbl-hero">
      <div className="nbl-hero-inner">

        {/* Back link */}
        <Link to="/design/portfolio" className="nbl-back">
          <span className="back-arrow"><FiArrowUpLeft /></span>
          <span>Back to all projects</span>
        </Link>

        {/* Logo */}
        <div className="nbl-logo">
          <img src={nblLogo} alt="Ethi logo" />
          {/* <p className="case-tagline">Everything Health Inspired</p> */}
        </div>

        {/* Description */}
        <p className="nbl-description">
          Nutrition by Lovneet is a personalised nutrition and wellness brand that offers science-based dietary guidance tailored to individual health goals. Led by a clinical nutritionist, the brand focuses on sustainable, food first approaches to support long term health and lifestyle improvement.
        </p>

      </div>
    </section>
  )
}

export default NblServicesHero