import React, { useState } from 'react'
import './navbar.css'
import logo from '../../assets/icons/prodmanLogo.png'
import { Link } from 'react-router-dom'


const Navbar = ({ onBookNow }) => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  return (
    // Header Section
  <header className="header">
    <div className="nav-container">
      <a href="/studio"><img src={logo} alt="prodmanLogo" className="logo"  /></a> 

      {/* Hamburger Menu Button */}
      <button className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu} aria-label="Toggle menu">
        <span></span>
        <span></span>
        <span></span>
      </button>

      <nav className={`nav-links ${isMenuOpen ? 'active' : ''}`}>
        <Link to="/studio" onClick={closeMenu}>Home</Link>
        <a href="#howItWorks" onClick={closeMenu}>How it works</a>
        <a href="#studios" onClick={closeMenu}>Studios</a>
        <a href="#packages" onClick={closeMenu}>Packages</a>
        <Link to="/studio/contact" onClick={closeMenu}>Contact Us</Link>
        
        {/* Book Now button inside mobile menu */}
        <button className="btn-primary mobile-book" onClick={() => { onBookNow(); closeMenu(); }}>Book Now</button>
      </nav>

      {/* Desktop Book Now button */}
      <button className="btn-primary desktop-book" onClick={onBookNow}>Book Now</button>
    </div>

    {/* Overlay for mobile menu */}
    {isMenuOpen && <div className="menu-overlay" onClick={closeMenu}></div>}
  </header>
  )
}

export default Navbar
