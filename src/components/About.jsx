import './About.css';

export default function About() {
  return (
    <section className="about" id="about">
      <div className="about__image-wrap">
        <img
          src="https://images.unsplash.com/photo-1631679706909-1844bbd07221?w=900&auto=format&fit=crop"
          alt="Interiors by Naisha Studio"
        />
      </div>
      <div className="about__text">
        <span className="tag">About the Studio</span>
        <h2>A design studio built on <em>personality</em> &amp; purpose</h2>
        <p>
          Interiors by Naisha is a full-service residential interior design studio dedicated to creating
          spaces that feel deeply personal — spaces that reflect who you are and how you truly live.
        </p>
        <p>
          We combine a thoughtful design process with an eye for timeless detail, guiding every client
          from initial concept through final installation. Every project starts with listening, and
          every space ends with a home that fits.
        </p>
        <p>
          Based in the New York metropolitan area, we serve clients locally and nationally on projects
          ranging from single-room refreshes to full home renovations and real estate staging.
        </p>
        <a href="#contact" className="btn-outline">Get in Touch</a>
      </div>
    </section>
  );
}
