import ServiceCard from './ServiceCard';
import './Services.css';

function Services() {
  const services = [
    {
      id: 1,
      name: 'Classic Haircut',
      description: 'Traditional fade, taper, or scissor cut with expert precision and finishing touches.',
      price: '$30.97',
    },
    {
      id: 2,
      name: 'Haircut & Beard Trim',
      description: 'Complete grooming package with a stylish haircut and a well-defined beard trim.', 
      price: '$40',
    },
    {
      id: 3,
      name: 'Buzz cut',
      description: 'Low-maintenance, all-over clipper cut for a clean and sharp look.',
      price: '$25',
    },
    {
      id: 4,
      name: 'Beard Trim & Line Up',
      description: 'Expert beard shaping and detailing with clean lines and a polished finish.',
      price: '$20',
    },
    {
      id: 5,
      name: 'Kids Fade Haircut',
      description: 'Friendly and fun haircuts for children with patience and care.',
      price: '$20',
    },
    {
      id: 6,
      name: 'Hot Towel Shave',
      description: 'Classic straight razor shave with hot towel treatment and premium aftercare.',
      price: '$25',
    },
    {
      id: 7,
      name: 'Senior Haircut',
      description: 'Discounted haircuts for seniors with the same attention to detail and style.',
      price: '$26',
    },
    {
      id: 8,
      name: 'Student Haircut',
      description: 'Affordable haircuts for students with the same quality and attention to detail.',
      price: '$27.43',
    }
  ];

  return (
    <section id="services" className="services">
      <div className="services-container">
        <h2 className="sections-title">Our Services</h2>
        <p className="section-subtitle">
          Premium grooming services tailored to your needs
        </p>
        <div className="services-grid">
          {services.map((service) => (
            <ServiceCard key={service.id} service={service} />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
