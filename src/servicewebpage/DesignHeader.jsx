import React, { useState } from 'react'
import './DesignHeader.css'
import logo from '../assets/icons/prodmanLogo.png'
import { Link } from 'react-router-dom'


const DesignHeader = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Header Section
  <header className="design-header">
    <div className="design-nav-container">
      <Link to="/"><img src={logo} alt="prodmanLogo" className="design-logo"  /></Link> 

      {/* Hamburger Menu Button */}
      <button className={`design-hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`design-nav-links ${isMenuOpen ? 'active' : ''}`}>
        <a href='#' onClick={closeMenu}>Services</a>
        <Link to='/design/portfolio' onClick={closeMenu}>Portfolio</Link>
        {/* <a href="#" onClick={closeMenu}>Impact</a> */}
        <Link to="/design/contact"  onClick={closeMenu}>Contact Us</Link>
        
        {/* Book Now button inside mobile menu */}
        <button className="design-btn-primary design-mobile-book" onClick={() => { onBookNow(); closeMenu(); }}>Let's Connect</button>
      </nav>

      {/* Desktop Book Now button */}
      <a href="/design#connect" style={{textDecoration: 'none'}}>
       <button className="design-btn-primary design-desktop-book" onClick={onBookNow}>Let's Connect</button>
      </a>
    </div>

    {/* Overlay for mobile menu */}
    {isMenuOpen && <div className="design-menu-overlay" onClick={closeMenu}></div>}
  </header>
  )
}

export default DesignHeader
