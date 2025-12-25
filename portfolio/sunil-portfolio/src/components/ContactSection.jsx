import React, { useState, forwardRef } from 'react';

const ContactSection = forwardRef((props, ref) => {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    alert(`Thank you for your message, ${formData.name}! I'll get back to you soon.`);
    setFormData({ name: '', email: '', message: '' });
  };

  return (
    <section ref={ref} className="section" id="contact">
      <div className="container">
        <h2 className="section-title">Get In Touch</h2>
        <div className="glass">
          <div className="contact-info">
            <h3>Let's Connect</h3>
            <div className="contact-details">
              <div className="contact-item">📍 Mahemdavad, Gujarat, India</div>
              <div className="contact-item">
                📧 <a href="mailto:sunilbhoi.dev@gmail.com">sunilbhoi.dev@gmail.com</a>
              </div>
              <div className="contact-item">
                📱 <a href="tel:+919737773608">+91 9737773608</a>
              </div>
            </div>
            <div className="social-links">
              <a href="https://linkedin.com/in/Sunilkumar-Bhoi" target="_blank" rel="noopener noreferrer" className="social-link">in</a>
              <a href="https://github.com/Sunilkumar-Bhoi" target="_blank" rel="noopener noreferrer" className="social-link">GH</a>
              <a href="mailto:sunilbhoi.dev@gmail.com" className="social-link">@</a>
            </div>
          </div>
          <div className="contact-form">
            <div className="form-group">
              <label htmlFor="name">Name</label>
              <input
                type="text"
                id="name"
                value={formData.name}
                onChange={(e) => setFormData({...formData, name: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="email">Email</label>
              <input
                type="email"
                id="email"
                value={formData.email}
                onChange={(e) => setFormData({...formData, email: e.target.value})}
              />
            </div>
            <div className="form-group">
              <label htmlFor="message">Message</label>
              <textarea
                id="message"
                value={formData.message}
                onChange={(e) => setFormData({...formData, message: e.target.value})}
              />
            </div>
            <button onClick={handleSubmit} className="btn btn-primary" style={{width: '100%'}}>
              Send Message
            </button>
          </div>
        </div>
      </div>
    </section>
  );
});

export default ContactSection;