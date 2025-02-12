import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css';  // Make sure to import the CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const EducationLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/edu1.jpg',
    '/images/edu2.jpg', // Replace with actual image paths
    '/images/edu4.jpg',
  ];

  const faqData = [
    { question: "What is an education loan?", answer: "An education loan is a type of loan provided to students to help finance their education, including tuition fees, books, accommodation, and other related expenses." },
    { question: "How much can I borrow for an education loan?", answer: "The loan amount depends on the cost of the course, the institution, and your eligibility. Generally, banks and financial institutions offer loans up to the full cost of education." },
    { question: "What is the interest rate for an education loan?", answer: "Interest rates on education loans vary depending on the lender and the country. Generally, they range between 7% to 14% per annum." },
    { question: "Is there a collateral required for an education loan?", answer: "For loans up to a certain amount (usually ₹7.5 lakhs in India), no collateral is required. For higher amounts, a collateral may be needed, such as property or fixed deposits." },
    { question: "What is the repayment tenure for an education loan?", answer: "Repayment tenure for education loans typically ranges from 5 to 15 years, depending on the loan amount and the lender’s terms." },
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
          alt="Education Loan"
          className="banner-image fade-in" />

        <div className="banner-text">
          <h1>Invest in Your Future with Crediflow Education Loan</h1>
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
        <h1>About Crediflow Education Loan</h1>
        <p>At Crediflow, we understand the importance of education in shaping your future. Our Education Loan is designed to help students pursue their dream education without financial concerns. With easy access to funds, low-interest rates, and flexible repayment terms, Crediflow Education Loan ensures that you have the support you need to focus on your studies.</p>
      </div>

      <EMICalculator loanType="/education-loan" />

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

export default EducationLoan;
