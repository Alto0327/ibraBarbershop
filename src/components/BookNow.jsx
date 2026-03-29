import './BookNow.css';

function BookNow() {
  const handleBooking = () => {
    window.scrollTo({
      top: document.getElementById('contact').offsetTop - 80,
      behavior: 'smooth',
    });
  };

  return (
    <section id="book" className="book-now">
      <div className="book-container">
        <h2 className="book-title">Ready to Look Sharp?</h2>
        <p className="book-subtitle">
          Book your appointment today and experience premium barbering
        </p>
        
        <div className="book-options">
          <div className="book-option">
            <div className="option-icon"></div>
            <h3>Call Us</h3>
            <p>(226) 898-3836</p>
            <a href="tel:+12268983836" className="option-link">
              Call Now
            </a>
          </div>

          <div className="book-option">
            <div className="option-icon"></div>
            <h3>Email</h3>
            <p>ibrahemhejo3@gmail.com</p>
            <a href="mailto:ibrahemhejo3@gmail.com" className="option-link">
              Send Email
            </a>
          </div>
        </div>

        <div className="book-features">
          <div className="feature">
            <span className="feature-icon">•</span>
            <span>Online Booking Available</span>
          </div>
          <div className="feature">
            <span className="feature-icon">•</span>
            <span>Walk-ins Welcome</span>
          </div>
          <div className="feature">
            <span className="feature-icon">•</span>
            <span>Flexible Scheduling</span>
          </div>
          <div className="feature">
            <span className="feature-icon">•</span>
            <span>Expert Barbers</span>
          </div>
        </div>
      </div>
    </section>
  );
}

export default BookNow;
