import React, { useState } from 'react';
import Headline from '../components/Headline';
import Footer from '../components/Footer';

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Here you can handle form submission, like sending an email or saving the form data
    console.log('Form Data Submitted:', formData);
    // Reset the form after submission
    setFormData({
      name: '',
      email: '',
      message: '',
    });
  };

  return (
    <div>
      {/* Headline */}
      <section className="headline-section">
        <Headline />
      </section>

      {/* Contact Information */}
      <div className="contact-page">
        <h2>Contact Me</h2>
        <p>
          Feel free to reach out to me via this form or through my social media channels. I'm always open to discussing
          new projects, creative ideas, or opportunities to be a part of your vision.
        </p>
        <form className="contact-form" onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea
              id="message"
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
            />
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>

      {/* Footer */}
      <Footer />
    </div>
  );
};

export default Contact;
