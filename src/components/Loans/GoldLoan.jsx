
import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css';  // Make sure to import the CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const GoldLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/gold1.jpg',
    '/images/gold2.jpg', // Replace with actual image paths
    '/images/gold3.jpg',
  ];

  const faqData = [
    { question: "What is a Gold Loan?", answer: "A Gold Loan is a secured loan where you pledge your gold items (jewelry, coins, bars) as collateral to borrow funds. It's a quick and easy way to get funds without a credit check." },
    { question: "How much can I borrow with a Gold Loan?", answer: "You can borrow up to 75-80% of the market value of your gold, depending on the lender’s policies and the value of the gold you pledge." },
    { question: "What documents are required for a Gold Loan?", answer: "For a Gold Loan, you typically need to provide proof of identity (Aadhaar card, passport), and proof of ownership of the gold. Some lenders may require additional documentation." },
    { question: "What is the interest rate on a Gold Loan?", answer: "Gold Loan interest rates typically range from 10% to 20%, depending on the loan amount, repayment tenure, and the lender’s policies." },
    { question: "How long does it take to get a Gold Loan?", answer: "Gold Loans are processed quickly, and the funds are typically disbursed within a few hours to a day, depending on the lender." },
    { question: "Can I repay my Gold Loan in installments?", answer: "Yes, most lenders offer flexible repayment options. You can repay your Gold Loan in easy EMIs or full repayment at the end of the tenure." },
    { question: "What happens if I can’t repay my Gold Loan?", answer: "If you default on repayment, the lender may auction the gold pledged as collateral to recover the loan amount." },
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
          <h1>Unlock the Value of Your Gold</h1>
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
        <h1>About Crediflow Gold Loan</h1>
        <p>
          At Crediflow, we understand that your gold is more than just precious metal – it’s a valuable asset that can unlock the funds you need during emergencies, business expansion, or personal growth. Our Gold Loan offers you an easy way to access funds without the need for a credit score check or lengthy documentation.
        </p>
        <p>
          With Crediflow Gold Loan, you can avail a loan against your gold jewelry, coins, or bars at attractive interest rates, with loan amounts up to 75-80% of the market value of your gold. We offer flexible repayment options ranging from a few months to several years, ensuring that you can repay your loan comfortably.
        </p>
        <p>
          Whether you need quick cash for an urgent requirement or are looking to invest in a new opportunity, a gold loan from Crediflow is an easy and secure way to get the funds you need.
        </p>
        <p>
          Apply today and unlock the power of your gold with Crediflow’s trusted Gold Loan service.
        </p>
      </div>

      
      <EMICalculator loanType="/gold-loan" />

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

export default GoldLoan;
