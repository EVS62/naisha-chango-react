import './Services.css';

const services = [
  { num: '01', title: 'Full-Service Design', desc: 'End-to-end design management from concept development through final installation and styling.' },
  { num: '02', title: 'Interior Renovation', desc: 'Comprehensive renovation planning including space planning, contractor coordination, and material selection.' },
  { num: '03', title: 'E-Design', desc: 'Remote design services with curated mood boards, furniture plans, and shopping lists delivered digitally.' },
  { num: '04', title: 'Styling & Staging', desc: 'Expert staging for real estate photography, model units, and short-term rental properties.' },
];

export default function Services() {
  return (
    <section id="services" className="services">
      <div className="services__inner">
        <div className="services__top">
          <h2>Designing spaces that are <em>unmistakably</em> yours</h2>
          <p>We offer a full range of services tailored to where you are in your journey — whether you're starting from scratch or refining what you already have.</p>
        </div>
        <div className="services__grid">
          {services.map((s) => (
            <div key={s.num} className="service-card">
              <div className="service-card__num">{s.num}</div>
              <h3>{s.title}</h3>
              <p>{s.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
