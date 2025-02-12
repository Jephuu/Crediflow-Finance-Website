import React, { useState } from 'react';
import './LoanDetails.css'; // Add your CSS here
import { TiTick } from "react-icons/ti";

const LoanDetails = () => {
  const [activeSection, setActiveSection] = useState('features');

  const sections = {
    features: [
      'Flexible repayment options',
      'Loan amount up to ₹50 Lakhs',
      'Low processing fees',
      'Quick approval process',
      
    ],
    eligibility: [
      'Indian residents aged 21-60 years',
      'Minimum income as per loan criteria',
      'CIBIL score above 750 preferred',
      'Stable employment or business history',
    ],
    interestRates: [
      'Interest Rate: 7.5% p.a.',
      'Floating and fixed rates available',
      'No prepayment penalties for floating rate loans',
      'Attractive rates for salaried individuals',
    ],
    documents: [
      'Identity proof (Aadhar, PAN, Passport)',
      'Address proof (Utility bill, Rent agreement)',
      'Income proof (Salary slips, ITR)',
      'Property documents (Agreement to sell, Title deeds)',
    ],
  };

  return (
    <div className="loan-details-section">
      {/* Buttons Row */}
      <div className="button-row">

        <button
          className={activeSection === 'features' ? 'active' : ''}
          onClick={() => setActiveSection('features')}
          
        >
          Features
        </button>
        <button
          className={activeSection === 'eligibility' ? 'active' : ''}
          onClick={() => setActiveSection('eligibility')}
        >
          Eligibility
        </button>
        <button
          className={activeSection === 'interestRates' ? 'active' : ''}
          onClick={() => setActiveSection('interestRates')}
        >
          Interest Rates and Fees
        </button>
        <button
          className={activeSection === 'documents' ? 'active' : ''}
          onClick={() => setActiveSection('documents')}
        >
          Documents
        </button>
      </div>

      {/* Details Section */}
      <div className="details-content">
        <ul>
          {sections[activeSection].map((point, index) => (
            <li key={index}>{point}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default LoanDetails;
