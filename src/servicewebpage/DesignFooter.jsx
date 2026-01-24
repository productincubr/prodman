import "./DesignFooter.css";
import prodmanLogo from '../assets/icons/ProdmanLogo.png'
import incubrLogo from "../assets/icons/incubrLogo.png";
import { FaFacebook } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLocationDot } from "react-icons/fa6";
import { FaPhone } from "react-icons/fa6";
import { TfiEmail } from "react-icons/tfi";
import { Link } from "react-router-dom";



const DesignFooter = () => {
  return (
    <footer className="footer">
      <div className="footer-top">

        <div className="footer-brand">
          <Link to="/"><img src={prodmanLogo} alt="Prodman" className="footer-logo" /></Link>
          <div className="footer-incubr">
            <img src={incubrLogo} alt="Incubr Tech Pvt Ltd" />
          </div>

          <div className="brand-underline-row">
            <div className="brand-line"></div>
            <div className="brand-right-text">Tech Pct Ltd</div>
          </div>
        </div>

        <div className="footer-contact">
          <div className="footer-location">
            <p className="loc-line"><FaLocationDot/> 740, Phase V, Udyog Vihar,</p>
            <p className="loc-line">Sector 19, Gurugram, Haryana 122016</p>
          </div>

          <div className="footer-contact-row">
            <div className="footer-item">
              <span><FaPhone /></span>
              <a href="tel:+919999988493">+91 99999 88493</a>
            </div>

            <div className="footer-item">
              <span><TfiEmail /></span>
              <a href="mailto:products@incubr.com">products@incubr.com</a>
            </div>
          </div>

          <div className="footer-social">
            <div className="social-icons">
                <a href="#" aria-label="Facebook"><FaFacebook size={18} /></a>
                <a href="#" aria-label="LinkedIn"><FaLinkedin size={18} /></a>
                <a href="#" aria-label="Instagram"><FaInstagram size={18} /></a>
            </div>
          </div>
        </div>
      </div>

      <div className="footer-divider"></div>

      <div className="footer-bottom">
        <ul className="footer-links">
          <li>Services</li>
          <li><Link to='/design/portfolio'>Portfolio</Link></li>
          <li>Impact</li>
          <li><Link to='/design/contact'>Contact Us</Link></li>
        </ul>

        <p className="footer-copy">
          Copyright © INCUBR TECH PVT LTD 2023
        </p>
      </div>
    </footer>
  );
};

export default DesignFooter;
