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
    Ibra Barbershop is a trusted Hamilton barber shop for men’s haircuts, fade haircuts, beard trims, beard lineups, and eyebrow grooming. We deliver premium service with consistency and sharp finish on every visit.
  </p>
  <p>
    Our team specializes in barber services for Hamilton residents and visitors looking for clean fades, classic cuts, and precise beard detailing. We aim to be the top barber near me option for local men’s grooming.
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
