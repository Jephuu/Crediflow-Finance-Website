import React from 'react';
import './AboutPage.css'; // Style for the About page

const AboutPage = () => {
  return (
    <div className="about-page">
      {/* Banner Section */}
      <div className="about-banner">
        <img src="/images/about.jpg" alt="About Us" />
        <div className="about-banner-text">
          <h1>About Us</h1>
        </div>
      </div>
      {/* About */}
      <div className="about-crediflow">
        <h2>About Crediflow Finance</h2>
        <p>
          Crediflow Finance is a leading provider of innovative financial solutions tailored to meet the evolving needs of
          individuals and businesses. Established with the vision of making finance accessible, we have built a reputation
          for delivering reliable, transparent, and customer-focused services.
        </p>
        <p>
          Whether you're looking to secure a loan, plan your investments, or manage your financial goals, Crediflow Finance is
          here to guide you every step of the way. Our team of experienced professionals combines cutting-edge technology with
          industry expertise to offer seamless and efficient financial services.
        </p>
        <p>
          At Crediflow Finance, we believe in building lasting relationships based on trust, integrity, and mutual growth. Let us
          help you unlock the power of finance to achieve your dreams.
        </p>
      </div>

      {/* Our Vision */}
      <div className="about-vision">
        <h2>Our Vision</h2>
        <p>
          At Crediflow Finance, our vision is to empower individuals and businesses by providing seamless access to
          financial services that drive progress and prosperity. We strive to create a future where financial inclusion
          is not just a possibility but a reality for everyone.
        </p>
        <p>
          Through innovation, dedication, and a commitment to excellence, we aim to redefine the financial landscape by
          offering solutions that are transparent, efficient, and impactful. Join us as we pave the way to a brighter financial future.
        </p>
      </div>

      {/* Our Mission */}
      <div className="about-mission">
        <h2>Our Mission</h2>
        <p>
          At Crediflow Finance, our mission is to revolutionize the financial sector by delivering innovative, customer-centric
          solutions that foster growth and financial stability. We are dedicated to simplifying financial processes, enabling
          individuals and businesses to achieve their aspirations with ease and confidence.
        </p>
        <p>
          By leveraging technology and expertise, we aim to provide unmatched services that reflect our core principles of trust,
          transparency, and excellence.
        </p>
      </div>

      {/* Our Values */}
      <div className="about-values">
        <h2>Our Values</h2>
        <ul>
          <li>
            <strong>Integrity:</strong> Upholding the highest standards of honesty and ethical behavior in all our endeavors.
          </li>
          <li>
            <strong>Innovation:</strong> Continuously improving and embracing new technologies to provide cutting-edge financial solutions.
          </li>
          <li>
            <strong>Customer Focus:</strong> Placing the needs of our customers at the forefront of everything we do.
          </li>
          <li>
            <strong>Excellence:</strong> Striving for quality and efficiency in all our services to exceed customer expectations.
          </li>
          <li>
            <strong>Collaboration:</strong> Building strong relationships with stakeholders to achieve shared goals.
          </li>
        </ul>
      </div>



      {/* Description  */}
      <div className="about-description">
        <h2>Who We Are</h2>
        <p>
          At Crediflow Finance, we pride ourselves on being a trusted financial partner for individuals and businesses alike.
          With a commitment to excellence, innovation, and customer-centric solutions, we aim to simplify the world of finance
          and make your dreams come true.
        </p>

        <h2>Why Choose Us?</h2>
        <ul>
          <li>Wide range of loan options to meet diverse needs.</li>
          <li>Competitive interest rates with flexible repayment plans.</li>
          <li>Customer-first approach with personalized support.</li>
          <li>Strong ethical values and transparency in all dealings.</li>
        </ul>
      </div>

      {/* Testimonials */}
      <div className="about-testimonials">
        <h2>What Our Clients Say</h2>
        <div className="testimonial">
          <p>"Crediflow Finance helped us secure our dream home. Their team is incredibly supportive and professional!"</p>
          <p>- Jane Doe</p>
        </div>
        <div className="testimonial">
          <p>"Their investment guidance has been a game-changer for our business. Highly recommend!"</p>
          <p>- John Smith</p>
        </div>
      </div>

      {/* Call to Action */}
      <div className="about-cta">
        <h2>Ready to Begin?</h2>
        <p>Contact Crediflow Finance today to explore how we can help you achieve your financial goals.</p>
        <button className="cta-button">Get in Touch</button>
      </div>

      {/* Meet Our Team */}
      {/* <div className="about-team">
        <h2>Meet Our Team</h2>
        <div className="team-member">
          <img src="/images/team-member1.jpg" alt="John Doe" />
          <h3>John Doe</h3>
          <p>CEO & Founder</p>
        </div>
        <div className="team-member">
          <img src="/images/team-member2.jpg" alt="Jane Smith" />
          <h3>Jane Smith</h3>
          <p>Chief Financial Officer</p>
        </div>
      </div> */}






    </div>
  );
};

export default AboutPage;
