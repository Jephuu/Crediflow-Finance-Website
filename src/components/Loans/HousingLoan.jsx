import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css'; // Import your CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const HousingLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/fam.jpg',
    '/images/sweethome.jpg', // Replace with actual image paths
    '/images/home2.jpg',
  ];

  const faqData = [
    { question: "What is a housing loan?", answer: "A housing loan is a loan used to purchase, construct, or renovate a home. It is secured against the property you are buying or building." },
    { question: "How much can I borrow for a housing loan?", answer: "The loan amount depends on your income, repayment capacity, and property value. Typically, you can borrow up to 80-90% of the property's value." },
    { question: "What is the interest rate for a housing loan?", answer: "Interest rates for housing loans vary based on the lender and the type of loan, but generally range from 7% to 9% per annum." },
    { question: "What is the maximum tenure for a housing loan?", answer: "The maximum tenure for a housing loan is usually 30 years, depending on your age, eligibility, and loan amount." },
    { question: "Can I prepay my housing loan?", answer: "Yes, you can prepay your housing loan without any penalty, although some lenders may charge a fee for early repayment depending on the loan agreement." },
  ];

  useEffect(() => {
    // Initialize FAQ state based on the number of FAQs
    setFaqState(new Array(faqData.length).fill(false));

    // Scroll to the top of the page when the component mounts
    window.scrollTo(0, 0);
  }, [faqData.length]);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
    }, 3000); // Change image every 3 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  const handleIndicatorClick = (index) => {
    setCurrentIndex(index);
  };

  const toggleAnswer = (index) => {
    const updatedFaqState = [...faqState];
    updatedFaqState[index] = !updatedFaqState[index];  // Toggle the FAQ answer visibility
    setFaqState(updatedFaqState);
  };

  return (
    <div className='home-loan'>
      {/* Banner Section with Cycling Images */}
      <div className="loan-banner">
        <img
          src={images[currentIndex]}
          alt="Housing Loan"
          className="banner-image fade-in" />
        
        <div className="banner-text">
          <h1>Unlock Your Dream Home</h1>
        </div>
        {/* Carousel Indicators */}
        <div className="carousel-indicators">
          {images.map((_, index) => (
            <span
              key={index}
              className={`indicator ${currentIndex === index ? 'active' : ''}`}
              onClick={() => handleIndicatorClick(index)}
            />
          ))}
        </div>
      </div>

      {/* Loan Details Section */}
      <div className="loan-details">
        <h1>About Crediflow Housing Loan</h1>
        <p>
          At Crediflow, we make your dream of owning a home come true. Our Housing Loan offers easy repayment plans and competitive interest rates. Whether you're buying your first home or upgrading, we’re here to help you through every step of the process. With our clear terms and friendly support, Crediflow makes homeownership simple and stress-free.
        </p>
        <p>
          Our team at Crediflow is dedicated to providing you with the best loan experience. We work with you to find the loan option that suits your needs, ensuring that you can make the right decision for your future. With quick approval and transparent processes, getting a housing loan has never been easier.
        </p>
      </div>

      {/* EMI Calculator */}
      <EMICalculator /> {/* Pass the loan type here */}
      
      {/* Loan Details Component */}
      <LoanDetails />

      {/* FAQ Section */}
      <div className="faq-section">
        <h2>Frequently Asked Questions</h2>
        {faqData.map((faq, index) => (
          <div className="faq-item" key={index}>
            <div className="faq-question" onClick={() => toggleAnswer(index)}>
              <h4>{faq.question}</h4>
              <div className={`icon ${faqState[index] ? 'icon-up' : ''}`}>
                {faqState[index] ? <FaChevronUp /> : <FaChevronDown />}
              </div>
            </div>
            {faqState[index] && <p className="faq-answer">{faq.answer}</p>}
          </div>
        ))}
      </div>
    </div>
  );
};

export default HousingLoan;