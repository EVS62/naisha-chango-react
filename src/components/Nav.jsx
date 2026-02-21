import { useState, useEffect } from 'react';
import './Nav.css';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);

  useEffect(() => {
    const handler = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handler);
    return () => window.removeEventListener('scroll', handler);
  }, []);

  return (
    <nav className={`nav ${scrolled ? 'nav--scrolled' : ''}`}>
      <a href="#home" className="nav__logo">
    <img src="/logo.png" alt="Interiors by Naisha" className="nav__logo-img" />
  </a>

      <ul className={`nav__links ${menuOpen ? 'nav__links--open' : ''}`}>
        <li><a href="#portfolio" onClick={() => setMenuOpen(false)}>Projects</a></li>
        <li><a href="#services" onClick={() => setMenuOpen(false)}>Services</a></li>
        <li><a href="#about" onClick={() => setMenuOpen(false)}>About</a></li>
        <li><a href="#contact" onClick={() => setMenuOpen(false)}>Contact</a></li>
      </ul>

      <button className="nav__burger" onClick={() => setMenuOpen(!menuOpen)} aria-label="Menu">
        <span></span><span></span><span></span>
      </button>
    </nav>
  );
}
