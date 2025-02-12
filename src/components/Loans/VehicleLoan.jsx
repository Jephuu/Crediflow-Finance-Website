import React, { useEffect, useState } from 'react';
import EMICalculator from './EMICalculator';
import './LoanPage.css';  // Make sure to import the CSS for styling
import LoanDetails from './LoanDetails';
import { FaChevronDown, FaChevronUp } from 'react-icons/fa';

const VehicleLoan = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [faqState, setFaqState] = useState([]);  // State to manage FAQ answer visibility

  const images = [
    '/images/veh1.jpg',
    '/images/vehicle2.jpg', // Replace with actual image paths
    '/images/vehicle3.jpg',
    '/images/vehicle4.jpg'
  ];

  const faqData = [
    { question: "What is a vehicle loan?", answer: "A vehicle loan is a loan provided by financial institutions to help you purchase a vehicle, whether it is a car, bike, or commercial vehicle. It is secured against the vehicle you are buying." },
    { question: "How much can I borrow for a vehicle loan?", answer: "The loan amount depends on your income, the type of vehicle, and the down payment. Typically, you can borrow up to 80-90% of the vehicle’s value." },
    { question: "What is the interest rate for a vehicle loan?", answer: "Interest rates for vehicle loans generally range from 9% to 14% per annum, depending on the lender, the type of vehicle, and your eligibility." },
    { question: "What is the maximum tenure for a vehicle loan?", answer: "The maximum tenure for a vehicle loan is typically 7 years, depending on your age, income, and eligibility." },
    { question: "Can I prepay my vehicle loan?", answer: "Yes, you can prepay your vehicle loan, but some lenders may charge a fee for early repayment depending on the loan agreement." },
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
          <h1>Drive Your Dream Vehicle with Ease</h1>
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
  <h1>About Crediflow Vehicle Loan</h1>
  <p>
    At Crediflow, we understand the thrill of owning a vehicle,
     whether it's your first car, your dream bike, or a commercial vehicle
      for your business. Our Vehicle Loan offers you competitive interest rates, 
      flexible repayment terms, and a smooth loan process to make your dream ride a reality.
       We aim to provide a hassle-free experience with quick approval and transparent terms, 
       ensuring you hit the road with confidence.
  </p>
  <p>
    With Crediflow’s Vehicle Loan, you can avail of up to 90%
     financing on the vehicle's on-road price, with loan tenures
      extending up to 7 years. We offer both new and used vehicle loans, 
      catering to your specific needs. Our easy documentation process and 
      rapid approval ensure that you spend less time at the bank and more time
       enjoying your new vehicle.
  </p>
  <p>
    Whether you're buying a car, bike, or a commercial vehicle, 
    Crediflow is here to assist you every step of the way. Apply now and get 
    started on your journey!
  </p>
</div>


      <EMICalculator loanType="/vehicle-loan" />

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

export default VehicleLoan;
