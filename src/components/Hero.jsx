import './Hero.css';
import heroBg from '../assets/hero-background.jpg';

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content" aria-label="Featured barber service">
        <h1 className="hero-title">Hamilton Barber Shop for Men’s Haircuts, Fades & Beard Trim</h1>
        <p className="hero-subtitle">Premium local barber in Hamilton for haircuts, fades and beard trims.</p>
        <a href="tel:+12268983836" className="hero-cta" aria-label="Call Ibra Barbershop to book your session">Book Your Session</a>
      </div>
    </section>
  );
}

export default Hero;
