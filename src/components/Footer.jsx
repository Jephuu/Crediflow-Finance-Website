import React from "react";
import { Container, Row, Col } from "react-bootstrap";
import "./Footer.css";

const Footer = () => {
  return (
    <footer className="footer py-4">
      <Container>
        <Row className="footer-container">
          <Col md={4} sm={12} className="footer-section">
            <h4 className="footer-title">Quick Links</h4>
            <ul>
              <li><a href="/">Home</a></li>
              <li><a href="/services">Services</a></li>
              <li><a href="/about">About</a></li>
              <li><a href="/contact">Contact</a></li>
            </ul>
          </Col>
          <Col md={4} sm={12} className="footer-section">
            <h4 className="footer-title">Contact Us</h4>
            <p>Email: info@crediflow.com</p>
            <p>Phone: +123 456 7890</p>
          </Col>
          <Col md={4} sm={12} className="footer-section social-media">
            <h4 className="footer-title">Follow Us</h4>
            <a href="#" className="social-icon"><i className="fab fa-facebook-f"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-twitter"></i></a>
            <a href="#" className="social-icon"><i className="fab fa-instagram"></i></a>
            <a href="https://wa.me/1234567890" className="social-icon" target="_blank" rel="noopener noreferrer">  
            <i className="fab fa-whatsapp"></i>
            </a>       
             </Col>
        </Row>
        <div className="footer-bottom text-center mt-4">
          <p>&copy; 2024 Crediflow Finance. All Rights Reserved.</p>
        </div>
      </Container>
    </footer>
  );
};

export default Footer;
