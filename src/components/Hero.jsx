import { useState, useEffect } from 'react';
import './Hero.css';

const slides = [
  {
    img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1800&auto=format&fit=crop',
    alt: 'Modern Living Room'
  },
  {
    img: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace?w=1800&auto=format&fit=crop',
    alt: 'Kitchen Design'
  },
  {
    img: 'https://images.unsplash.com/photo-1618221195710-dd6b41faaea6?w=1800&auto=format&fit=crop',
    alt: 'Primary Bedroom'
  },
  {
    img: 'https://images.unsplash.com/photo-1600607687939-ce8a6c25118c?w=1800&auto=format&fit=crop',
    alt: 'Dining Room'
  },
];

export default function Hero() {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrent(c => (c + 1) % slides.length);
    }, 5000);
    return () => clearInterval(timer);
  }, []);

  return (
    <section className="hero" id="home">
      <div className="hero__slides">
        {slides.map((s, i) => (
          <div key={i} className={`hero__slide ${i === current ? 'hero__slide--active' : ''}`}>
            <img src={s.img} alt={s.alt} />
          </div>
        ))}
      </div>
      <div className="hero__overlay" />

      <div className="hero__content">
        <p className="hero__eyebrow">Full-Service Interior Design · NYC</p>
        <h1 className="hero__title">
          We build beautiful homes<br />for <em>thoughtful people</em>
        </h1>
        <a href="#portfolio" className="hero__btn">View Projects</a>
      </div>

      <div className="hero__dots">
        {slides.map((_, i) => (
          <button
            key={i}
            className={`hero__dot ${i === current ? 'hero__dot--active' : ''}`}
            onClick={() => setCurrent(i)}
            aria-label={`Slide ${i + 1}`}
          />
        ))}
      </div>
    </section>
  );
}
