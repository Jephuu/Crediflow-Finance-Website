import React, { useState } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import "./ServicePage.css";
import { FaHome, FaHandHoldingUsd, FaCarAlt, FaCheckCircle, FaDigitalTachograph, FaPercent, FaClock, FaClipboardCheck, FaRegClock, FaBolt, FaUserTie, FaEye, FaPhoneAlt, FaLock, FaListAlt, FaCreditCard, FaUsers } from "react-icons/fa";
import { PiBuildingApartmentFill, PiStudentFill } from "react-icons/pi";
import { AiFillGolden } from "react-icons/ai";
import { FaChevronDown, FaChevronUp } from "react-icons/fa";
import { Link } from "react-router-dom";

const ServicePage = () => {
  const loanServices = [
    { icon: <FaHome />, title: "Housing Loan", description: "Turn your dream home into reality with easy housing loans.", link: "/housing-loan" },
    { icon: <FaUserTie />, title: "Personal Loan", description: "Quick and hassle-free loans for your urgent needs.", link: "/personal-loan" },
    { icon: <FaCarAlt />, title: "Vehicle Loan", description: "Own your desired vehicle with simple financing options.", link: "/vehicle-loan" },
    { icon: <PiStudentFill />, title: "Education Loan", description: "Fund your education dreams with minimal documentation.", link: "/education-loan" },
    { icon: <AiFillGolden />, title: "Gold Loan", description: "Instant cash for your gold, with flexible repayment plans.", link: "/gold-loan" },
    { icon: <PiBuildingApartmentFill />, title: "Loans Against Property", description: "Leverage your property to access high-value funds.", link: "/property-loan" },
  ];

  const sliderSettings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
  };

  const [faqState, setFaqState] = useState({});

  const toggleAnswer = (index) => {
    setFaqState((prevState) => ({
      ...prevState,
      [index]: !prevState[index],
    }));
  };

  const faqData = [
    { question: "How do I apply for a loan?", answer: "You can apply for a loan online or visit our nearest branch." },
    { question: "What documents are required?", answer: "Basic identification documents and income proof are required." },
    { question: "What is the loan repayment tenure?", answer: "The repayment tenure depends on the type of loan chosen." },
    { question: "Are there any prepayment charges?", answer: "Prepayment charges vary based on the loan agreement." },
  ];

  return (
    <div className="services-container">
      {/* Slider Section */}
      <section className="services-slider">
        <Slider {...sliderSettings}>
          <div>
            <img src="/images/fam.jpg" alt="Service Slide 1" className="slider-image" />
          </div>
          <div>
            <img src="/images/home.jpg" alt="Service Slide 2" className="slider-image" />
          </div>
          <div>
            <img src="/images/services.png" alt="Service Slide 3" className="slider-image" />
          </div>
        </Slider>
      </section>

      {/* Introduction Section */}
      <section className="services-intro">
  <h2>Introducing Loans by Crediflow Finance</h2>
  <p>Explore our wide range of loan options tailored to meet your needs.</p>
  <p>Whether you're planning to buy your dream home, start a new business, or consolidate debt, we have the right financial solution for you.</p>
  <p>Our easy application process, competitive rates, and flexible terms ensure that you get the support you need to achieve your financial goals.</p>
  <p>With Crediflow Finance, securing a loan is hassle-free, and we're here to guide you every step of the way.</p>
</section>

      {/* Loan Services Cards */}
     
      <section className="services-cards">
        
        {loanServices.map((service, index) => (
          <div className="service-card" key={index}>
            <div className="service-icon">{service.icon}</div>
            <Link to={service.link} className="service-title">
              <h3>{service.title}</h3>
            </Link>
            <p className="service-description">{service.description}</p>
            <Link to={service.link}>
              <button className="service-btn">Explore More</button>
            </Link>
          </div>
        ))}
      </section>
     
     {/* Why Choose Crediflow Finance Section */}
     {/* <div className="why-choose-section">
        <h2 className="section-title">Why Choose Crediflow Finance for Loans?</h2>
        <p className="section-description">
          Crediflow Finance offers tailored loan solutions to meet your needs with reliability and ease.
        </p>
        <ul className="why-choose-list">
          <li className="why-choose-item">
            <FaCheckCircle className="icon" />
            Flexible repayment options to suit your financial situation.
          </li>
          <li className="why-choose-item">
            <FaCheckCircle className="icon" />
            Transparent processes with no hidden charges.
          </li>
          <li className="why-choose-item">
            <FaCheckCircle className="icon" />
            Quick loan approval and disbursement.
          </li>
          <li className="why-choose-item">
            <FaCheckCircle className="icon" />
            Personalized customer support at every step.
          </li>
        </ul>
      </div> */}

<div className="why-choose-container">
      <h2 className="why-choose-title">Why Choose Crediflow Finance for Loans?</h2>
      <div className="why-choose-items">

        <div className="why-choose-card">
          <div className="icon-container">
            <FaRegClock />
          </div>
          <p>Fast Loan Approvals</p>
        </div>


        <div className="why-choose-card">
          <div className="icon-container">
            <FaUserTie />
          </div>
          <p>Personalized Loan Offers</p>
        </div>

        <div className="why-choose-card">
          <div className="icon-container">
            <FaEye/>
          </div>
          <p>Transparent Processes </p>
        </div>

        <div className="why-choose-card">
          <div className="icon-container">
            <FaPhoneAlt/>
          </div>
          <p>24/7 Customer Support</p>
        </div>

        <div className="why-choose-card">
          <div className="icon-container">
            <FaLock/>
          </div>
          <p>Secure Transactions</p>
        </div>

        <div className="why-choose-card">
          <div className="icon-container">
            <FaListAlt/>
          </div>
          <p>Wide Range of Loan Options</p>
        </div>

        <div className="why-choose-card">
          <div className="icon-container">
            <FaCreditCard/>
          </div>
          <p>Flexible EMI Plans</p>
        </div>

        
        <div className="why-choose-card">
          <div className="icon-container">
            <FaUsers/>
          </div>
          <p>Trusted by Thousands</p>
        </div>


      </div>
    </div>
    






      {/* Testimonials Section */}
      <section className="testimonials-section">
        <h2>What Our Customers Say</h2>
        <div className="testimonial">
          <p>"The loan process was so smooth and quick. Highly recommend!"</p>
          <span>- Jane Doe</span>
        </div>
        <div className="testimonial">
          <p>"Great service and transparent communication. Thank you!"</p>
          <span>- John Smith</span>
        </div>
      </section>

{/* FAQ Section */}
<div className="faq-section">
      <h2>Frequently Asked Questions</h2>
      {faqData.map((faq, index) => (
        <div className="faq-item" key={index}>
          <div className="faq-question" onClick={() => toggleAnswer(index)}>
            <h4>{faq.question}</h4>
            {faqState[index] ? <FaChevronUp /> : <FaChevronDown />}
          </div>
          {faqState[index] && <p className="faq-answer">{faq.answer}</p>}
        </div>
      ))}
    </div>
{/* <section className="faq-section">
  <h2 className="faq-title">Frequently Asked Questions</h2>
  <div className="faq-container">
    <div className="faq-item">
      <h4 className="faq-question">How do I apply for a loan?</h4>
      <p className="faq-answer">You can apply for a loan online or visit our nearest branch.</p>
    </div>
    <div className="faq-item">
      <h4 className="faq-question">What documents are required?</h4>
      <p className="faq-answer">Basic identification documents and income proof are required.</p>
    </div>
    <div className="faq-item">
      <h4 className="faq-question">Can I prepay my loan?</h4>
      <p className="faq-answer">Yes, loans can be prepaid, subject to terms and conditions.</p>
    </div>
    <div className="faq-item">
      <h4 className="faq-question">How do I check my loan status?</h4>
      <p className="faq-answer">You can track your loan status online or contact our support team.</p>
    </div>
  </div>
</section> */}

      {/* Call-to-Action Section */}
      <section className="cta-section">
        <h2>Ready to Take the Next Step?</h2>
        <p>Contact us today or apply online to get started with your loan process.</p>
        <button className="cta-button">Get Started</button>
      </section>
    </div>
  );
};

export default ServicePage;