import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <a href="#home" className="footer__logo">Interiors by Naisha</a>
      <nav className="footer__links">
        <a href="#portfolio">Projects</a>
        <a href="#services">Services</a>
        <a href="#about">About</a>
        <a href="#contact">Contact</a>
        <a href="mailto:info@interiorsbynaisha.com">info@interiorsbynaisha.com</a>
      </nav>
      <p>© {new Date().getFullYear()} Interiors by Naisha. All rights reserved.</p>
    </footer>
  );
}
