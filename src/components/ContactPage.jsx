import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
  return (
    <div className="contact-page">
      {/* Banner Section */}
      <div className="contact-banner">
        <img 
          src="/images/contact2.jpg" 
          alt="Contact Us Banner" 
          className="contact-banner-image" 
        />
        <div className="contact-banner-text">
          <h1>Contact Us</h1>
          <p>We'd love to hear from you. Feel free to get in touch!</p>
        </div>
      </div>

      {/* Contact Form Section */}
      <div className="contact-form-section">
        <h2>Get in Touch</h2>
        <form className="contact-form">
          <label htmlFor="name">Name</label>
          <input type="text" id="name" placeholder="Your Name" required />

          <label htmlFor="email">Email</label>
          <input type="email" id="email" placeholder="Your Email" required />

          <label htmlFor="message">Message</label>
          <textarea id="message" rows="6" placeholder="Your Message" required></textarea>

          <button type="submit">Send Message</button>
        </form>
      </div>

      {/* Contact Information Section */}
      <div className="contact-info">
        <div className="contact-item">
          <h3>Write to us</h3>
          <p>
            <i className="fas fa-envelope icon"></i>
            <a href="mailto:info@ourfinance.com">info@ourfinance.com</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Call on toll-free number</h3>
          <p>
            <i className="fas fa-phone icon"></i>
            1800 123 4567
          </p>
        </div>
        <div className="contact-item">
          <h3>Regd. Office Address</h3>
          <p>
            1<sup>st</sup> Floor, ABC Building, Financial Hub, Bandra East, Mumbai - 400051, India<br />
            <small>(9:30 AM - 6:30 PM, Monday to Saturday)</small>
          </p>
        </div>
        <div className="contact-item">
          <h3>Chat with us</h3>
          <p>
            <i className="fab fa-whatsapp icon"></i>
            Message "Hi" to +91 9876543210 on WhatsApp or Click below <br />
            <a href="https://wa.me/919876543210" className="whatsapp-button">Chat on WhatsApp</a>
          </p>
        </div>
        <div className="contact-item">
          <h3>Mumbai Office</h3>
          <p>
            2<sup>nd</sup> Floor, XYZ Tower, Tech City, Navi Mumbai - 400709<br />
            <small>(9:30 AM - 6:30 PM, Monday to Friday including 3rd, 4th, and 5th Saturdays)</small>
          </p>
        </div>
      </div>

      {/* Map Section */}
      <div className="map-section">
        <h2>Our Location</h2>
        <div className="map-container">
          <iframe
            title="Google Map Location"
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3770.012774404501!2d72.82509671542572!3d19.051215087098836!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3be7ce74ec63ec8d%3A0x6784dbb5ae4b27fc!2sBandra%20Kurla%20Complex!5e0!3m2!1sen!2sin!4v1690000000000!5m2!1sen!2sin"
            width="100%"
            height="450"
            style={{ border: 0 }}
            allowFullScreen=""
            loading="lazy"
          ></iframe>
        </div>
      </div>
    </div>
  );
};

export default ContactPage;
