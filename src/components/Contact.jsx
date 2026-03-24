import { useState } from 'react';
import './Contact.css';

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    message: '',
  });

  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Simulate form submission
    console.log('Form submitted:', formData);
    setSubmitted(true);
    setFormData({
      name: '',
      email: '',
      phone: '',
      message: '',
    });
    // Reset success message after 3 seconds
    setTimeout(() => setSubmitted(false), 3000);
  };

  return (
    <section id="contact" className="contact">
      <div className="contact-container">
        <h2 className="section-title">Contact Us</h2>
        <p className="section-subtitle">
          Get in touch or book an appointment
        </p>

        <div className="contact-content">
          <div className="contact-info">
            <div className="info-item">
              <h3 className="info-title">Address</h3>
              <p className="info-text">
               635 Barton St E #1<br /> L8L 3A1, Hamilton, ON
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title">Phone</h3>
              <p className="info-text">
                <a href="tel:+2268983836">(226) 898-3836</a>
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title">Hours</h3>
              <p className="info-text">
                Mon-Sat: 9:00 AM - 7:00 PM<br />
                Sun: 11:00 AM - 6:00 PM
              </p>
            </div>

            <div className="info-item">
              <h3 className="info-title">Email</h3>
              <p className="info-text">
                <a href="mailto:info@ibrabarbershop.com">
                  info@ibrabarbershop.com
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Contact;
