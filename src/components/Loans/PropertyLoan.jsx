import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css';  // Make sure to import the CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const PropertyLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/property1.jpg',
    '/images/property4.jpg', // Replace with actual image paths
    '/images/property5.jpg',
    '/images/property2.jpg',
    '/images/property3.jpg',
  ];
  const faqData = [
    { question: "What is a property loan?", answer: "A property loan is a type of loan provided to individuals to purchase, construct, or renovate residential or commercial properties. The loan is secured against the property being financed." },
    { question: "How much can I borrow for a property loan?", answer: "The loan amount you can borrow depends on your income, credit score, property value, and repayment capacity. Typically, you can borrow up to 80-90% of the property's market value." },
    { question: "What is the interest rate for a property loan?", answer: "The interest rate for property loans varies depending on the lender and loan type. Rates typically range from 7% to 10%, with options for fixed or floating rates." },
    { question: "What is the maximum tenure for a property loan?", answer: "The maximum tenure for a property loan is generally up to 30 years, depending on your age, financial profile, and the loan amount." },
    { question: "Can I prepay my property loan?", answer: "Yes, you can prepay your property loan, but some lenders may charge a penalty fee for early repayment, depending on the loan agreement." },
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
          <h1>Own Your Dream Property with Ease and Confidence</h1>
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
  <h1>About Crediflow Property Loan</h1>
  <p>
    At Crediflow, we understand that owning a property is one of life’s 
    most significant milestones. That's why we offer a Property Loan designed
    to make this dream come true. Whether you're purchasing your first home,
    upgrading to a larger space, or investing in commercial property, we’re here
     to guide you every step of the way.
  </p>
  <p>
    Our Property Loan comes with flexible repayment options, competitive interest rates,
     and fast approval processes. With our hassle-free documentation and transparent terms, 
     securing your property has never been easier. Take control of your future with a loan that 
     fits your financial goals.
  </p>

</div>
      {/* EMI Calculator */}
      <EMICalculator loanType="/property-loan" />

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
        ))}
      </div>
    </div>
  );
};

export default PropertyLoan;
