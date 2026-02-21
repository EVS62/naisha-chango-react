import { useState } from 'react';
import './Contact.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', type: '', message: '' });

  const handle = e => setForm({ ...form, [e.target.name]: e.target.value });

  return (
    <section id="contact" className="contact">
      <div className="contact__image">
        <img src="https://images.unsplash.com/photo-1616137466211-f939a420be84?w=900&auto=format&fit=crop" alt="Studio" />
      </div>
      <div className="contact__form-wrap">
        <span className="tag" style={{ color: 'var(--accent)' }}>Start a Project</span>
        <h2>Let's <em>create</em> something remarkable</h2>
        <form onSubmit={e => e.preventDefault()}>
          <div className="form-row">
            <input name="name" value={form.name} onChange={handle} placeholder="Your Name" required />
          </div>
          <div className="form-row">
            <input name="email" type="email" value={form.email} onChange={handle} placeholder="Email Address" required />
          </div>
          <div className="form-row">
            <input name="phone" value={form.phone} onChange={handle} placeholder="Phone Number" />
          </div>
          <div className="form-row">
            <input name="type" value={form.type} onChange={handle} placeholder="Project Type (e.g. Full Renovation, Staging)" />
          </div>
          <div className="form-row">
            <textarea name="message" value={form.message} onChange={handle} placeholder="Tell us about your project" />
          </div>
          <a href={`mailto:info@interiorsbynaisha.com?subject=Project Inquiry - ${form.name}&body=${form.message}`} className="contact__btn">
            Send Inquiry
          </a>
        </form>
      </div>
    </section>
  );
}
