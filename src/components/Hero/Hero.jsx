import React from 'react'
import './hero.css'
import arrowRight from '../../assets/icons/Arrow-right-circle.png'
import banner from '../../assets/image/bannerProd.png'

const Hero = () => {
    return (
        <section className="hero" id="home">
            <div className="hero-container">
                {/* <!-- LEFT CONTENT --> */}
                <div className="hero-content">
                    <span className="weRent">We Rent</span>
                    <h1>
                        <span className="highlight">Podcast</span> and<br />
                        Shooting <span className="highlight">Studios</span>
                    </h1>

                    <p>
                        B2B • Production-Ready • Professionally Designed
                    </p>

                    <a href="#studios" className="btn-outline">
                        Explore Now <img src={arrowRight} alt="" />
                    </a>
                </div>

                {/* <!-- RIGHT IMAGE PLACEHOLDER --> */}
                <div className="hero-placeholder">
                    <img src={banner} alt="Studio Banner" className="hero-banner-img" />
                </div>

                {/* STATS CARDS */}
                <div className="hero-stats">

                    <div className="stat-card">
                        {/* <h3>10</h3> */}
                        <p>Customized<br />Sets</p>
                    </div>

                    <div className="stat-card">
                        <p>Built to suit<br />the brands</p>
                    </div>

                    <div className="stat-card">
                        <p>Concierge<br />like services</p>
                    </div>

                </div>
            </div>
        </section>
    )
}

export default Hero