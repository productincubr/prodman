import React, { useEffect } from 'react'
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';
import '../styles/landingFirst.css';
import prodmanIcon from '../assets/image/prodmanIcon.png';

const LandingFirst = () => {
    useEffect(() => {
        document.querySelectorAll(".btn").forEach((btn) => {
            btn.addEventListener("mouseenter", () => {
                btn.style.boxShadow = "0 12px 35px rgba(244,166,64,0.8)";
            });

            btn.addEventListener("mouseleave", () => {
                btn.style.boxShadow = "0 10px 30px rgba(244,166,64,0.6)";
            });
        });

        // Mobile touch effect for dot circle glow
        const handleTouch = (e) => {
            const logoWrapper = document.querySelector('.logo-wrapper');
            
            // Check if touch is not on a button
            if (!e.target.closest('.btnL') && !e.target.closest('a')) {
                if (logoWrapper) {
                    logoWrapper.classList.add('touched');
                    setTimeout(() => {
                        logoWrapper.classList.remove('touched');
                    }, 600);
                }
            }
        };

        // Add touch and click listeners for mobile and desktop testing
        document.addEventListener('touchstart', handleTouch);
        document.addEventListener('click', handleTouch);

        return () => {
            document.removeEventListener('touchstart', handleTouch);
            document.removeEventListener('click', handleTouch);
        };
    }, []);

    return (
        <div className='landingPage'>
            <Helmet>
                <title>Welcome to Prodman - Studio & Design Services</title>
                <meta name="description" content="Choose between our professional photography studio and creative design services. Professional spaces and expert solutions for your creative needs." />
            </Helmet>
            
            {/* <!-- Animated Background --> */}
            <div className="animated-bg">
                <div className="floating-shape shape-1"></div>
                <div className="floating-shape shape-2"></div>
                <div className="floating-shape shape-3"></div>
                <div className="floating-shape shape-4"></div>
                <div className="floating-shape shape-5"></div>

                {/* <!-- Moving Arrows --> */}
                <div className="arrow-container">
                    <svg className="moving-arrow arrow-1" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="rgba(244, 166, 64, 0.3)" stroke-width="2" />
                    </svg>
                    <svg className="moving-arrow arrow-2" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="rgba(244, 166, 64, 0.25)" stroke-width="2" />
                    </svg>
                    <svg className="moving-arrow arrow-3" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="rgba(244, 166, 64, 0.2)" stroke-width="2" />
                    </svg>
                    <svg className="moving-arrow arrow-4" viewBox="0 0 24 24" fill="none">
                        <path d="M5 12h14m-7-7l7 7-7 7" stroke="rgba(244, 166, 64, 0.15)" stroke-width="2" />
                    </svg>
                </div>

                {/* <!-- Particles --> */}
                <div className="particles">
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                    <span className="particle"></span>
                </div>
            </div>

            {/* <!-- HERO SECTION --> */}
            <section className="heroL">
                <div className="logo-wrapper">
                    {/* <!-- Animated Dot Background --> */}
                    <div className="dot-circle"></div>

                    {/* <!-- PRODMAN SVG Logo --> */}
                    <svg className="prodman-logo" viewBox="0 0 1080 1080" xmlns="http://www.w3.org/2000/svg">
                        <defs>
                            <style dangerouslySetInnerHTML={{ __html: `.cls-1 { fill: #fff; } .cls-1, .cls-2 { stroke: #000; stroke-miterlimit: 10; }` }} />
                        </defs>
                        <polygon class="cls-1" points="1048.74 488.91 1048.74 593.43 984.4 593.43 956.06 542.96 956.06 593.43 918.79 593.43 918.79 488.91 983.77 488.91 1012.49 531.21 1012.49 488.91 1048.74 488.91" />
                        <g>
                            <polygon class="cls-1" points="753.85 593.43 799.55 593.43 807.21 576.91 845.26 576.91 850.36 593.43 908.57 593.43 862.36 488.91 798.02 488.91 753.85 593.43" />
                            <polygon class="cls-2" points="815.64 557.51 837.34 557.51 826.49 529.43 815.64 557.51" />
                        </g>
                        <polygon class="cls-1" points="588.15 488.91 588.15 593.43 627.72 593.43 627.72 541.17 648.66 593.43 677.77 593.43 698.19 540 698.19 593.43 746.19 593.43 746.19 488.91 686.7 488.91 672.15 523.3 657.09 488.91 588.15 488.91" />
                        <g>
                            <path class="cls-1" d="M451.55,593.43v-13.19s13.79-12.3,14.55-40.23c0-3.94-.51-24.11-14.55-36.11v-14.98h79.66s40.6,7.32,46.98,40.26c0,7.66,4.6,21.45-14.55,46.21-3.06,3.32-18.64,14.64-34.21,18.04h-77.87Z" />
                            <path class="cls-2" d="M499.55,520.74v39.06h17.36s13.02-5.62,13.53-19.53-12.77-19.53-12.77-19.53h-18.13Z" />
                        </g>
                        <g>
                            <path class="cls-1" d="M173,488.91v104.51h49.79v-33.62h14.04s8.94-1.53,10.21,10.47v23.15h49.53v-7.06s-15.57-14.04-14.55-38.3c-.26-4.85,2.55-29.36,12-38.3-7.68-7.88-8.44-13.8-23.11-18.11-6.37-1.87-12.99-2.74-19.63-2.74h-78.28Z" />
                            <path class="cls-2" d="M223.81,518.7v21.3h18.79c5.34,0,10.17-3.53,11.43-8.72.46-1.91.47-4.01-.4-6.19-1.57-3.93-5.53-6.39-9.77-6.39h-20.05Z" />
                        </g>
                        <g>
                            <ellipse class="cls-1" cx="372.28" cy="543.64" rx="72.38" ry="54.72" />
                            <ellipse class="cls-2" cx="373.17" cy="545.33" rx="20.94" ry="21.57" />
                        </g>
                        <g>
                            <path class="cls-1" d="M44.32,488.91v104.51h49.28v-29.02h33.16c9.12,0,18-3.56,24.22-10.23,2.69-2.88,5.23-6.55,7.21-11.21,2.3-5.62,8.94-29.62-3.83-39.83-.06-.06-1.28-1.15-1.34-1.2-9.79-9.01-21.43-13.01-34.73-13.01H44.32Z" />
                            <path class="cls-2" d="M91.55,516.06v21.62h20.52c6.12,0,11.39-4.46,12.23-10.52.01-.09.03-.19.04-.29,0-1.27.2-4.71-2.37-7.64-1.84-2.09-4.58-3.17-7.36-3.17h-23.05Z" />
                        </g>
                    </svg>


                </div>

                <p className="subtitleL">
                    From <span className="highlightL">design services</span> to production-ready<br />
                    <span className="highlightL">podcast studios. <br /> </span>
                    Built to support every stage of<br />
                    content creation.
                </p>

                <div className="btn-group">
                    <a href="/design" className="btnL" rel="noopener noreferrer">
                        Design Services <span className="arrow"><img src={prodmanIcon} alt="prodman icon"
                            className="icon-arrow" /></span>
                    </a>
                    <Link to="/studio" className="btnL">
                        Design Studio <span className="arrow"><img src={prodmanIcon} alt="prodman icon" className="icon-arrow" /></span>
                    </Link>
                </div>
            </section>
        </div>
    )
}

export default LandingFirst