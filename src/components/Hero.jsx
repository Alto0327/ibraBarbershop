import './Hero.css';
import heroBg from '../assets/hero-background.jpg';

function Hero() {
  return (
    <section id="home" className="hero" style={{ backgroundImage: `url(${heroBg})` }}>
      <div className="hero-overlay" />
      <div className="hero-content">
        <h1 className="hero-title">Elevate Your Grooming, Elevate Your Presence</h1>
        <p className="hero-subtitle">Modern cuts, expert craftsmanship, premium service.</p>
        <a href="#book" className="hero-cta">Book Your Session</a>
      </div>
    </section>
  );
}

export default Hero;
