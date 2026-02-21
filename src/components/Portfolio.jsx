import './Portfolio.css';

const projects = [
  { img: 'https://images.unsplash.com/photo-1600210492486-724fe5c67fb0?w=1200&auto=format&fit=crop', label: 'Living Room · Brooklyn Heights', title: 'The Calloway Residence', featured: true },
  { img: 'https://images.unsplash.com/photo-1556909114-f6e7ad7d3136?w=800&auto=format&fit=crop', label: 'Kitchen · Upper West Side', title: 'Madison Townhouse' },
  { img: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=800&auto=format&fit=crop', label: 'Bedroom · Tribeca', title: 'The Mercer Loft' },
  { img: 'https://images.unsplash.com/photo-1600566753190-17f0baa2a6c3?w=800&auto=format&fit=crop', label: 'Dining · Park Slope', title: 'The Park Brownstone' },
  { img: 'https://images.unsplash.com/photo-1583847268964-b28dc8f51f92?w=800&auto=format&fit=crop', label: 'Primary Bath · Hamptons', title: 'Ocean Road Retreat' },
  { img: 'https://images.unsplash.com/photo-1600607687644-c7171b42498b?w=800&auto=format&fit=crop', label: 'Home Office · Westchester', title: 'The Ridgewood Estate' },
];

export default function Portfolio() {
  return (
    <section id="portfolio" className="portfolio">
      <div className="portfolio__header">
        <div>
          <span className="tag">Selected Work</span>
          <h2><em>Projects</em></h2>
        </div>
        <a href="#contact" className="btn-outline">Inquire</a>
      </div>
      <div className="portfolio__grid">
        {projects.map((p, i) => (
          <div key={i} className={`portfolio__item ${p.featured ? 'portfolio__item--featured' : ''}`}>
            <img src={p.img} alt={p.title} />
            <div className="portfolio__overlay">
              <div className="portfolio__label">
                <span>{p.label}</span>
                <h3>{p.title}</h3>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
