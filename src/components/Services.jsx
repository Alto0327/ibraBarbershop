import './Services.css';

function Services() {
  const categories = [
    {
      id: 'haircuts',
      title: 'Haircuts',
      description: 'Barber-quality haircuts and fades for men in Hamilton, tuned to your personal style.',
      services: [
        { name: 'Classic Cut', price: '$35', description: 'Hamilton barber classic with clean edges and polished finish.' },
        { name: 'Skin Fade', price: '$42', description: 'Sharp skin fade with crisp transitions and haircut detail in Hamilton.' },
        { name: 'Taper Fade', price: '$40', description: 'Modern taper fade designed for polished daily wear.' },
      ],
    },
    {
      id: 'eyebrows',
      title: 'Eyebrows',
      description: 'Detailed eyebrow grooming to complete your look after a Hamilton haircut or beard trim.',
      services: [
        { name: 'Eyebrow Cleanup', price: '$15', description: 'Neat eyebrow cleanup to sharpen your profile.' },
        { name: 'Eyebrow Threading', price: '$15', description: 'Precise threading for crisp, natural brow lines.' },
        { name: 'Eyebrow Shaping', price: '$20', description: 'Fine shaping for balanced proportions and clean style.' },
      ],
    },
    {
      id: 'beard',
      title: 'Beard',
      description: 'Hamilton beard trim and lineup services that reinforce your haircut with a sharp, masculine finish.',
      services: [
        { name: 'Beard Trim', price: '$22', description: 'Detailed beard trim for clean length and texture.' },
        { name: 'Beard Line Up', price: '$28', description: 'Barber-precise edges and neckline cleanup.' },
        { name: 'Hot Towel Beard Service', price: '$35', description: 'Relaxing warm towel, conditioning, and precision shading.' },
      ],
    },
    {
      id: 'combo',
      title: 'Combo',
      description: 'Bundle your Hamilton barber visit with multiple services for a consistent premium grooming experience.',
      services: [
        { name: 'Haircut + Beard', price: '$60', description: 'Complete package for haircut and beard trim in one appointment.' },
        { name: 'Haircut + Eyebrows', price: '$57', description: 'Haircut with eyebrow grooming for a polished, refined look.' },
        { name: 'Full Grooming Package', price: '$95', description: 'Haircut, beard, eyebrows, and a premium finish for full grooming control.' },
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
