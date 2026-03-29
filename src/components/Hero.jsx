import './Hero.css';
import heroBg from '../assets/hero-background.jpg';

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content" aria-label="Featured barber service">
        <h1 className="hero-title">Hamilton Barber Shop for Men’s Haircuts, Fades & Beard Trim</h1>
        <p className="hero-subtitle">Ibra Barbershop delivers Hamilton haircuts, fade haircuts, men’s grooming, and beard lineup services today.</p>
        <a href="#book" className="hero-cta" aria-label="Book now at Ibra Barbershop">Book Your Session</a>
      </div>
    </section>
  );
}

export default Hero;
