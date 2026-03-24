import './Hero.css';

function Hero() {
  return (
    <section id="home" className="hero">
      <div className="hero-content">
        <h1 className="hero-title">Premium Barbering Experience</h1>
        <p className="hero-subtitle">
          Crafted grooming for the modern gentleman
        </p>
       <a href="https://booksy.com/en-ca/19139_ibra-barbershop_barbershop_780237_hamilton#ba_s=sh_1" target='_blank' rel="noopener noreferrer" className="hero-cta">
              Book Now
            </a>
      </div>
      <div className="hero-background"></div>
    </section>
  );
}

export default Hero;
