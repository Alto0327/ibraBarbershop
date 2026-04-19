import './Hiring.css';
import hiringBg from '../assets/LookingForbarbers.JPG';

function Hiring() {
  const scrollToContact = () => {
    const contactSection = document.getElementById('contact');
    if (contactSection) {
      contactSection.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <section
      id="hiring"
      className="hiring"
      style={{ backgroundImage: `url(${hiringBg})` }}
      aria-labelledby="hiring-heading"
    >
      <div className="hiring-overlay" />
      <div className="hiring-content">
        <h2 id="hiring-heading" className="hiring-title">We’re Hiring Barbers and Nail Technicians</h2>
        <p className="hiring-copy">
          Join a growing barbershop in Hamilton. Build your clientele and work in a professional, high-traffic environment.
        </p>

        <button
            type="button"
            className="hiring-cta"
            onClick={() => window.open("https://form.jotform.com/261075916536058", "_blank")}
        >
            Apply Now
        </button>
      </div>
    </section>
  );
}

export default Hiring;
