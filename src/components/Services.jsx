import './Services.css';

function Services() {
  const categories = [
    {
      id: 'haircuts',
      title: 'Haircuts',
      services: [
        { name: 'Classic Cut', price: '$35', description: 'Classic men’s haircut with clean edges and professional styling in Hamilton.' },
        { name: 'Skin Fade', price: '$42', description: 'Precision skin fade haircut with crisp linework and smooth transitions.' },
        { name: 'Taper Fade', price: '$40', description: 'Modern taper fade cut for polished, low-maintenance wear.' },
      ],
    },
    {
      id: 'eyebrows',
      title: 'Eyebrows',
      services: [
        { name: 'Eyebrow Cleanup', price: '$15', description: 'Neat shaping and grooming.' },
        { name: 'Eyebrow Threading', price: '$15', description: 'Precise hair removal for clean lines.' },
        { name: 'Eyebrow Shaping', price: '$20', description: 'Structured arch and outline.' },
      ],
    },
    {
      id: 'beard',
      title: 'Beard',
      services: [
        { name: 'Beard Trim', price: '$22', description: 'Shape and trim for a polished finish.' },
        { name: 'Beard Line Up', price: '$28', description: 'Sharp edge defining and cleanup.' },
        { name: 'Hot Towel Beard Service', price: '$35', description: 'Warm towel, conditioning, and styling.' },
      ],
    },
    {
      id: 'combo',
      title: 'Combo',
      services: [
        { name: 'Haircut + Beard', price: '$60', description: 'Complete head-to-face groom.' },
        { name: 'Haircut + Eyebrows', price: '$57', description: 'Precision styling and eyebrow sculpting.' },
        { name: 'Full Grooming Package', price: '$95', description: 'Haircut, beard, eyebrows, and luxury finish.' },
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
