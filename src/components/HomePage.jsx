import React from 'react';
import './HomePage.css';
import { Link } from 'react-router-dom'; // Importing Link for navigation

import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const sliderSettings = {
  dots: true,
  infinite: true,
  speed: 500,
  slidesToShow: 1,
  slidesToScroll: 1,
  autoplay: true,        // Enables auto-slide
  autoplaySpeed: 3000,   // 3 seconds per slide
  arrows: true           // Navigation arrows
};


const HomePage = () => {
  return (
    <>


      <section className="home-section">
        <div className="container">
          <div className="row">
            <div className="col-12">
              <h1>Welcome to Crediflow Finance</h1>
              <p>Your trusted partner for financial growth and security.</p>
              <div className="home-buttons">
                <Link to="/slider" className="btn-primary">
                  Get Started
                </Link>
                <Link to="/slider" className="learn-more-btn">
                  Learn More
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="slider-section">
  <Slider {...sliderSettings}>
    <div>
      <img src="/images/fam4.jpg" alt="Banner 1" />
    </div>
    <div>
      <img src="/images/fam5.jpg" alt="Banner 2" />
    </div>
    <div>
      <img src="/images/fam3.jpg" alt="Banner 3" />
    </div>
  </Slider>
</section>


      <section className="services-section">
        <div className="container">
          <h2>Our Services</h2>
          <div className="row">
            <div className="col-md-4">
              <i className="fas fa-piggy-bank"></i>
              <h3>Savings Accounts</h3>
              <p>Secure your savings with high interest rates and easy accessibility.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-hand-holding-usd"></i>
              <h3>Loans</h3>
              <p>Flexible loan plans tailored to your needs with low interest rates.</p>
            </div>
            <div className="col-md-4">
              <i className="fas fa-chart-line"></i>
              <h3>Investment Planning</h3>
              <p>Grow your wealth with expert investment advice and strategies.</p>
            </div>
          </div>
        </div>
      </section>

      <section className="testimonials-section">
        <div className="container">
          <h2>What Our Clients Say</h2>
          <div className="row">
            <div className="col-md-4">
              <blockquote>
                "Crediflow Finance helped me secure a loan for my business quickly and efficiently."
                <cite>- Jerin Joy</cite>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                "Thanks to their investment guidance, my portfolio is thriving."
                <cite>- Jane Smith</cite>
              </blockquote>
            </div>
            <div className="col-md-4">
              <blockquote>
                "The team is professional and always ready to help with my financial needs."
                <cite>- David Wilson</cite>
              </blockquote>
            </div>
          </div>
        </div>
      </section>

      <section className="cta-section">
        <div className="container text-center">
          <h2>Ready to take control of your finances?</h2>
          <p>Join Crediflow Finance today and enjoy secure, reliable financial solutions.</p>
          {/* <Link to="/register" className="btn-primary">
            Sign Up Now
          </Link> */}
        </div>
      </section>

      <section className="stats-section">
        <div className="container">
          <div className="row">
            <div className="col-md-3">
              <h3>10,000+</h3>
              <p>Happy Clients</p>
            </div>
            <div className="col-md-3">
              <h3>$1B+</h3>
              <p>Funds Managed</p>
            </div>
            <div className="col-md-3">
              <h3>500+</h3>
              <p>Loans Approved</p>
            </div>
            <div className="col-md-3">
              <h3>25+</h3>
              <p>Years of Experience</p>
            </div>
          </div>
        </div>
      </section>

      {/* <section className="faq-section">
        <div className="container">
          <h2>Frequently Asked Questions</h2>
          <div className="accordion">
            <div className="accordion-item">
              <h3>How can I apply for a loan?</h3>
              <p>You can apply for a loan online through our portal or visit our nearest branch.</p>
            </div>
            <div className="accordion-item">
              <h3>What is the interest rate for savings accounts?</h3>
              <p>Our interest rates vary based on the account type. Contact us for details.</p>
            </div>
          </div>
        </div>
      </section> */}
    </>
  );
};

export default HomePage;
