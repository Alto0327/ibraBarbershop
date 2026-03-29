import './About.css';
import background from '../assets/background.jpeg';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Ibra Barbershop</h2>
          <p className="section-subtitle">
            Your destination for premium grooming and timeless style
          </p>
          <div className="about-text">
  <p>
    Ibra Barbershop is a fresh addition to the Hamilton community, bringing a modern approach to classic barbering. In just a few months, we've focused on delivering clean cuts, sharp details, and a consistent experience every time you sit in the chair.
  </p>
  <p>
    We’re building our name through quality work and real client satisfaction. Every haircut is treated with precision and care—because reputation isn’t claimed, it’s earned.
  </p>
</div>
        </div>
<div className="about-image">
  <img
    src={background}
    alt="Barber styling client"
    className='about-photo'
  />
</div>
      </div>
    </section>
  );
}

export default About;
