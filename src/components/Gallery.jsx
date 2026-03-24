import './Gallery.css';
import { useState, useRef, useEffect } from 'react';
import haircut1 from '../assets/haircut1.jpeg';
import haircut2 from '../assets/haircut2.jpeg';
import haircut3 from '../assets/haircut3.jpeg';
import haircut4 from '../assets/haircut4.jpeg';
import haircut5 from '../assets/haircut5.jpeg';
import haircut6 from '../assets/haircut6.jpeg';

function Gallery() {
  const galleryImages = [
    {
      id: 1,
      title: 'Precision Fade',
      src: haircut1,
    },
    {
      id: 2,
      title: 'Premium Cut',
      src: haircut2,
    },
    {
      id: 3,
      title: 'Barber Details',
      src: haircut3,
    },
    {
      id: 4,
      title: 'Line Work',
      src: haircut4,
    },
    {
      id: 5,
      title: 'Modern Styling',
      src: haircut5,
    },
    {
      id: 6,
      title: 'Classic Grooming',
      src: haircut6,
    },
  ];

  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const scrollToSlide = (index) => {
    if (trackRef.current) {
      const itemWidth = trackRef.current.children[0].offsetWidth;
      trackRef.current.scrollTo({
        left: index * itemWidth,
        behavior: 'smooth',
      });
      setCurrent(index);
    }
  };

  const scrollLeft = () => {
    const newIndex = current > 0 ? current - 1 : galleryImages.length - 1;
    scrollToSlide(newIndex);
  };

  const scrollRight = () => {
    const newIndex = current < galleryImages.length - 1 ? current + 1 : 0;
    scrollToSlide(newIndex);
  };

  const goToSlide = (index) => {
    scrollToSlide(index);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (trackRef.current) {
        const itemWidth = trackRef.current.children[0].offsetWidth;
        const scrollLeft = trackRef.current.scrollLeft;
        const newIndex = Math.round(scrollLeft / itemWidth);
        setCurrent(newIndex);
      }
    };

    const track = trackRef.current;
    if (track) {
      track.addEventListener('scroll', handleScroll);
      return () => track.removeEventListener('scroll', handleScroll);
    }
  }, []);

  return (
    <section id="gallery" className="gallery">
      <div className="gallery-container">
        <h2 className="section-title">Gallery</h2>
        <p className="section-subtitle">
          Showcase of signature haircuts and barber craft
        </p>
        <div className="carousel-container">
          <button className="carousel-arrow left" onClick={scrollLeft} aria-label="Previous image">
            ‹
          </button>
          <div className="carousel-track" ref={trackRef}>
            {galleryImages.map((image) => (
              <div key={image.id} className="carousel-item">
                <img src={image.src} alt={image.title} className="gallery-img" />
                <div className="gallery-overlay">
                  <span className="gallery-title">{image.title}</span>
                </div>
              </div>
            ))}
          </div>
          <button className="carousel-arrow right" onClick={scrollRight} aria-label="Next image">
            ›
          </button>
        </div>
        <div className="carousel-dots">
          {galleryImages.map((_, index) => (
            <button
              key={index}
              className={`dot ${index === current ? 'active' : ''}`}
              onClick={() => goToSlide(index)}
              aria-label={`Go to slide ${index + 1}`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}

export default Gallery;
