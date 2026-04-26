import './Services.css';

function Services() {
  const categories = [
    {
      id: 'haircuts',
      title: 'Haircuts',
      description: 'Barber-quality haircuts and fades for men in Hamilton, tuned to your personal style.',
      services: [
        { name: 'Classic Cut', price: '$30', description: 'Hamilton barber classic with clean edges polished finished and topped off with a hairwash and facemask ' },
        { name: 'Kid\'s Cut', price: '$20', description: 'Specialized haircut for children with a fun and safe approach.' },
        { name: 'Student Haircut', price: '$27', description: 'Discounted haircut for students with a focus on style and precision.' },
        { name:  'Buzz cut', price: '$25', description: 'Low-maintenance buzz cut for a clean, sharp look.' },
      ],
    },
    {
      id: 'eyebrows',
      title: 'Eyebrows',
      description: 'Detailed eyebrow grooming to complete your look after a Hamilton haircut or beard trim.',
      services: [
        { name: 'Eyebrow Cleanup', price: '$15', description: 'Neat eyebrow cleanup to sharpen your profile.' },
        { name: 'Eyebrow Threading', price: '$15', description: 'Precise threading for crisp, natural brow lines.' },
      ],
    },
    {
      id: 'beard',
      title: 'Beard',
      description: 'Hamilton beard trim and lineup services that reinforce your haircut with a sharp, masculine finish.',
      services: [
        { name: 'Beard Trim and Line Up', price: '$15', description: 'Barber-precise edges and neckline cleanup.' },
        { name: 'Hot Towel Shave', price: '$18', description: 'Relaxing warm towel, conditioning, and precision shading.' },
      ],
    },
    {
      id: 'combo',
      title: 'Combo',
      description: 'Bundle your Hamilton barber visit with multiple services for a consistent premium grooming experience.',
      services: [
        { name: 'Haircut + Beard', price: '$40', description: 'Complete package for haircut and beard trim in one appointment.' },
        { name: 'Haircut + Eyebrows', price: '$35', description: 'Haircut with eyebrow grooming for a polished, refined look.' },
        { name: 'Full Grooming Package', price: '$45', description: 'Haircut, beard, eyebrows, and a premium finish for full grooming control.' },
      ],
    },
     {
      id: 'nails',
      title: 'Nails',
      description: 'Hamilton nail care services to complement your grooming routine with clean, polished nails.',
      services: [
        { name: 'Regular Manicure', price: '$25', description: 'Basic nail care including trimming and shaping.' },
        { name: 'Gel Shellac', price: '$20', description: 'Long-lasting gel polish for a sleek, durable finish.' },
        { name: 'Regular Polish', price: '$10', description: 'Classic nail polish application for a quick and stylish look.' },
        { name: 'Gel and False Nails', price: '$35', description: 'Full gel manicure with false nail application for added length and style. Designs available for additional cost.' },
      ],
    },
  ];

  return (
    <section id="services" className="services" aria-labelledby="services-heading">
      <div className="services-container">
        <h2 id="services-heading" className="sections-title">Our Services</h2>
        <p className="section-subtitle">Organized packages for quick decision-making.</p>
        <div className="service-category-grid" role="region" aria-label="Service offerings">
          {categories.map((category) => (
            <div key={category.id} className="service-category-card">
              <h3 className="category-title">{category.title}</h3>
              {category.description && <p className="category-description">{category.description}</p>}
              <ul className="service-list">
                {category.services.map((item) => (
                  <li key={item.name} className="service-item">
                    <div className="service-meta">
                      <span className="service-name">{item.name}</span>
                      <span className="service-price">{item.price}</span>
                    </div>
                    <p className="service-desc">{item.description}</p>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Services;
