import { useState } from 'react';
import './Navbar.css';
import IbraLogo from '../assets/IbraLogo.jpeg';

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const closeMenu = () => {
    setIsMenuOpen(false);
  };

  const handleNavClick = (e) => {
    const href = e.currentTarget.getAttribute('href');
    if (href && href.startsWith('#')) {
      closeMenu();
    }
  };

  return (
    <nav className="navbar">
      <div className="navbar-container">
        <div className="navbar-brand">
          <a href="#home" onClick={handleNavClick} className="brand-link">
            <img src={IbraLogo} alt="Ibra Barbershop Logo" className='brand-icon'/>
            <span className="brand-name">Ibra Barbershop</span>
          </a>
        </div>

        <button
          className={`hamburger ${isMenuOpen ? 'active' : ''}`}
          onClick={toggleMenu}
          aria-label="Toggle navigation menu"
          aria-expanded={isMenuOpen}
        >
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
          <span className="hamburger-line"></span>
        </button>

        <ul className={`nav-menu ${isMenuOpen ? 'active' : ''}`}>
          <li>
            <a href="#about" onClick={handleNavClick} className="nav-link">
              About
            </a>
          </li>
          <li>
            <a href="#services" onClick={handleNavClick} className="nav-link">
              Services
            </a>
          </li>
          <li>
            <a href="#gallery" onClick={handleNavClick} className="nav-link">
              Gallery
            </a>
          </li>
          <li>
            <a href="#contact" onClick={handleNavClick} className="nav-link">
              Contact
            </a>
          </li>
          <li>
            <a href="https://booksy.com/en-ca/19139_ibra-barbershop_barbershop_780237_hamilton#ba_s=sh_1" target='_blank' rel="noopener noreferrer" onClick={handleNavClick} className="nav-link nav-link-cta">
              Book Now
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}

export default Navbar;
