import { Link } from 'react-router-dom'
import './ThankYou.css';

function ThankYou() {
  return (
    <main className="thank-you-page">
      <div className="thank-you-overlay" />
      <div className="thank-you-content" role="main" aria-labelledby="thank-you-heading">
        <h1 id="thank-you-heading">Booking Request Received</h1>
        <p className="thank-you-copy">
          Your appointment request has been submitted. We’ll contact you shortly to confirm your booking.
        </p>
        <p className="thank-you-note">If urgent, call us directly.</p>
        <Link to="/" className="thank-you-button" aria-label="Back to home">
          Back to Home
        </Link>
      </div>
    </main>
  );
}

export default ThankYou;
