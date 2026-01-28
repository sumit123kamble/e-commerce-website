import React from 'react';
import './Contact.css';

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Support</h1>
      <p>Have a question about your cart or an order? We're here to help!</p>

      <div className="contact-grid">
        {/* Contact Info */}
        <div className="contact-info">
          <h3>Direct Contact</h3>
          <p>📧 Email: sumitkamble2001@gmail.com</p>
          <p>📞 Phone: +91 7972292772</p>
          <p>🕒 Hours: Mon-Fri, 9am - 5pm EST</p>
        </div>

        {/* Contact Form */}
        <form className="contact-form" onSubmit={(e) => e.preventDefault()}>
          <div className="form-group">
            <label>Name</label>
            <input type="text" placeholder="Your Name" />
          </div>
          <div className="form-group">
            <label>Order Number (Optional)</label>
            <input type="text" placeholder="#12345" />
          </div>
          <div className="form-group">
            <label>Message</label>
            <textarea placeholder="How can we help?"></textarea>
          </div>
          <button type="submit" className="btn-submit">Send Message</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;