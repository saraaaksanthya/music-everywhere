import React from 'react';
import './Contact.css'; // Optional: Add styles here

const Contact = () => {
  return (
    <div className="contact-container">
      <h1>Contact Us</h1>
      <p>We’d love to hear from you! Whether you have feedback, questions, or need assistance, feel free to reach out to us.</p>

      {/* Contact Information */}
      <div className="contact-details">
        <h3>Contact Information</h3>
        <ul>
          <li><strong>Email:</strong> support@musiceverywhere.com</li>
          <li><strong>Phone:</strong> +91 908746 6598</li>
          <li><strong>Address:</strong> 123 Music Avenue, Coimbatore, 641042</li>
        </ul>
      </div>

      {/* Social Media Links */}
      

      {/* Contact Form */}
      <div className="contact-form">
        <h3>Send Us a Message</h3>
        <form>
          <div className="form-group">
            <label htmlFor="name">Name:</label>
            <input type="text" id="name" name="name" placeholder="Enter your name" required />
          </div>
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input type="email" id="email" name="email" placeholder="Enter your email" required />
          </div>
          <div className="form-group">
            <label htmlFor="message">Message:</label>
            <textarea id="message" name="message" rows="4" placeholder="Enter your message" required></textarea>
          </div>
          <button type="submit">Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
