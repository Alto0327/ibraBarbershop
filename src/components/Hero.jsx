import './Hero.css';
import heroBg from '../assets/hero-background.jpg';

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.85)), url(${heroBg})` }}>
      <div className="hero-content">
        <h1 className="hero-title">Premium Barbering Experience</h1>
        <p className="hero-subtitle">
          Crafted grooming for the modern gentleman
        </p>
        <a href="https://booksy.com/en-ca/19139_ibra-barbershop_barbershop_780237_hamilton#ba_s=sh_1" target='_blank' rel="noopener noreferrer" className="hero-cta">
          Book Now
        </a>
      </div>
    </section>
  );
}

export default Hero;
