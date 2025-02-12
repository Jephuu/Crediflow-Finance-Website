import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css';  // Make sure to import the CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PersonalLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/personal1.jpg',
    '/images/personal2.jpg', // Replace with actual image paths
    '/images/personal3.jpg',
  ];

  const faqData = [
    { question: "What is a personal loan?", answer: "A personal loan is an unsecured loan for personal use." },
    { question: "How do I apply for a personal loan?", answer: "You can apply online through our website." },
    { question: "What is the interest rate for a personal loan?", answer: "Interest rates vary based on your eligibility and loan amount." },
    { question: "What is the loan repayment period?", answer: "The repayment period varies from 6 months to 5 years, depending on the loan amount and terms." },
    { question: "Are there any prepayment penalties?", answer: "No, we do not charge any prepayment penalties. You can pay off your loan early without any extra cost." },

    // Add more FAQ data here as needed
  ];

  useEffect(() => {
    // Initialize FAQ state based on number of FAQs
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
      {/* Banner */}
      <div className="loan-banner">
        <img
          src={images[currentIndex]}
          alt="Personal Loan"
          className="banner-image fade-in" />
        
        <div className="banner-text">
          <h1>Empower Your Dreams with Crediflow Personal Loans</h1>
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
        <h1>About Crediflow Personal Loan</h1>
        <p>
          Life comes with unexpected opportunities and challenges, and we're here to help you make the most of them. 
          Crediflow Personal Loan offers a quick and hassle-free way to access funds for your immediate needs. 
          Whether it's funding your dream vacation, managing a medical emergency, or any personal expense, 
          we provide competitive interest rates, flexible repayment options, and minimal documentation to make the process seamless. 
          Trust Crediflow to support your aspirations every step of the way.
        </p>
      </div>

      <EMICalculator loanType="/personal-loan" />

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

export default PersonalLoan;
