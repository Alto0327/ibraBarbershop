import './Footer.css';

function Footer() {
  const currentYear = new Date().getFullYear();

  return (
    <footer className="footer">
      <div className="footer-container">
        <div className="footer-content">
          <div className="footer-section">
            <h3 className="footer-title">Ibra Barbershop</h3>
            <p className="footer-text">
              Premium grooming and barbering services for the modern gentleman.
            </p>
            <div className="social-links">
              <a href="https://www.instagram.com/ibra_barber_shop1/" aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                IG
              </a>
              <a href="https://www.tiktok.com/@ibrabarbershop0" aria-label="TikTok" target="_blank" rel="noopener noreferrer">
                TT
              </a>
            </div>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Quick Links</h4>
            <ul className="footer-links">
              <li><a href="#about">About</a></li>
              <li><a href="#services">Services</a></li>
              <li><a href="#gallery">Gallery</a></li>
              <li><a href="#contact">Contact</a></li>
            </ul>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Hours</h4>
            <p className="footer-text small">
              Mon-Sat: 9:00 AM - 7:00 PM<br />
              Sun: 11:00 AM - 6:00 PM
            </p>
          </div>

          <div className="footer-section">
            <h4 className="footer-subtitle">Contact</h4>
            <p className="footer-text small">
               <a href="tel:+2268983836">(226) 898-3836</a><br />
              <a href="mailto:ibrahemhejo3@gmail.com">ibrahemhejo3@gmail.com</a><br />
              635 Barton St E #1, L8L 3A1, Hamilton, ON
            </p>
          </div>
        </div>

        <div className="footer-bottom">
          <p>&copy; {currentYear} Ibra Barbershop. All rights reserved.</p>
          <p className="footer-credit">
            Crafted with precision and care
          </p>
        </div>
      </div>
    </footer>
  );
}

export default Footer;
