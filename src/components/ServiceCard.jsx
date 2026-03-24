import './ServiceCard.css';

function ServiceCard({ service }) {
  return (
    <div className="service-card">
      <h3 className="service-name">{service.name}</h3>
      <p className="service-description">{service.description}</p>
      <div className="service-footer">
        <span className="service-price">{service.price}</span>
        <button className="service-btn" aria-label={`Book ${service.name}`}>
          Book
        </button>
      </div>
    </div>
  );
}

export default ServiceCard;
