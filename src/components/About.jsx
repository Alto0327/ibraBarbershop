import './About.css';
import background from '../assets/background.JPG';

function About() {
  return (
    <section id="about" className="about">
      <div className="about-container">
        <div className="about-content">
          <h2 className="section-title">About Ibra Barbershop</h2>
          <p className="section-subtitle">Hamilton’s local barber shop for modern haircuts and grooming</p>
          <div className="about-text">
            <p>
              Located in Hamilton, Ibra Barbershop is a real neighborhood barbershop focused on haircuts, fades, beard trims, eyebrow grooming, and combo service packages. Our crew combines tradition and fresh style to keep every client looking sharp.
            </p>
            <p>
              We deliver consistent, professional service with straightforward pricing and attention to detail. Men in Hamilton choose us for dependable fade work, exact beard lines, and a premium experience that looks and feels like a local shop, not generic filler.
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
