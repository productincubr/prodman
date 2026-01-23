import React from 'react'
import './DesignHero.css'
import arrow from '../assets/icons/arrow.png'

const DesignHero = () => {
    return (
        <section className="creative-section">
      <div className="creative-container">
        <h1 className="creative-title">
          WEBSITE, BRANDING,
          <br />
          PACKAGING & EVERYTHING
          <br />
          CREATIVE
        </h1>

        <p className="creative-desc">
          We're a creative team with diverse skills around design and
          development. We are passionate and obsessed to leverage our acumen to
          bring maximum value to our clients.
        </p>

        <p className="creative-desc">
          We work with integrity, focus and commitment. It would be great to
          explore business with you.
        </p>

        <a href='#portfolio' className="creative-btn">
          Start Your Project
          <img src={arrow} className="btn-arrow" alt="arrow icon" />
        </a>
      </div>
    </section>
    )
}

export default DesignHero