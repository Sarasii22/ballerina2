import React, { useState } from 'react';

function About() {
  const [formData, setFormData] = useState({ name: '', email: '', message: '' });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert('Form submitted! (Mocked for demo)');
    // In real app, send to backend
  };

  return (
    <div className="about-section">
      <h1>About Us</h1>
      <p>We are a team building AI solutions for compliance to help companies stay ahead of regulations.</p>
      <p>Why we built it: Manual tracking is inefficient—AI makes it seamless.</p>
      <div className="contact-form">
        <h2>Contact Us</h2>
        <form onSubmit={handleSubmit}>
          <input type="text" name="name" placeholder="Your Name" value={formData.name} onChange={handleChange} required />
          <input type="email" name="email" placeholder="Your Email" value={formData.email} onChange={handleChange} required />
          <textarea name="message" placeholder="Your Message" value={formData.message} onChange={handleChange} required />
          <button type="submit">Send Message</button>
        </form>
      </div>
    </div>
  );
}

export default About;