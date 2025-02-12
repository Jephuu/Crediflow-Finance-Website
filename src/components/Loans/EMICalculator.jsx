import React, { useState } from 'react';
import './LoanPage.css'; // Ensure styles for EMI Calculator are included here
import { Link } from 'react-router-dom';

const EMICalculator = () => {
  const [loanAmount, setLoanAmount] = useState(50000);
  const [loanTenure, setLoanTenure] = useState(1);
  const [interestRate, setInterestRate] = useState(4);

  const calculateEMI = () => {
    const monthlyInterestRate = interestRate / (12 * 100);
    const emi =
      loanTenure === 1
        ? loanAmount + (loanAmount * interestRate) / 100
        : (loanAmount * monthlyInterestRate * Math.pow(1 + monthlyInterestRate, loanTenure)) /
          (Math.pow(1 + monthlyInterestRate, loanTenure) - 1);
    const totalPayment = emi * loanTenure;
    const totalInterest = totalPayment - loanAmount;
    return { emi: emi.toFixed(2), totalPayment: totalPayment.toFixed(2), totalInterest: totalInterest.toFixed(2) };
  };

  const { emi, totalPayment, totalInterest } = calculateEMI();

  return (
    <div className="emi-calculator">
      <h2>EMI CALCULATOR</h2>
      <div className="calculator-container">
        <div className="inputs">
          <div className="input-group">
            <label>Loan Amount:</label>
            <div className="loan-amount-input">
              <input
                type="range"
                min="50000"
                max="20000000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="50000"
                max="20000000"
                step="500"
                value={loanAmount}
                onChange={(e) => setLoanAmount(parseInt(e.target.value))}
                className="number-input transparent-input"
              />
            </div>
            <span>₹{loanAmount.toLocaleString()}</span>
          </div>

          <div className="input-group">
            <label>Loan Tenure:</label>
            <div className="loan-tenure-input">
              <input
                type="range"
                min="1"
                max="360"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="1"
                max="360"
                step="1"
                value={loanTenure}
                onChange={(e) => setLoanTenure(parseInt(e.target.value))}
                className="number-input transparent-input"
              />
            </div>
            <span>{loanTenure} Months</span>
          </div>

          <div className="input-group">
            <label>Interest Rate:</label>
            <div className="interest-rate-input">
              <input
                type="range"
                min="4"
                max="16"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="slider"
              />
              <input
                type="number"
                min="4"
                max="16"
                step="0.1"
                value={interestRate}
                onChange={(e) => setInterestRate(parseFloat(e.target.value))}
                className="number-input transparent-input"
              />
            </div>
            <span>{interestRate}%</span>
          </div>
        </div>

        <div className="results">
          <h3>EMI Breakdown</h3>
          <div className="breakdown">
            <div className="result-row r1">
              <span>Monthly EMI:</span>
              <span>₹{emi}</span>
            </div>
            <div className="result-row r2">
              <span>Principal Amount:</span>
              <span>₹{loanAmount.toLocaleString()}</span>
            </div>
            <div className="result-row r3">
              <span>Interest Amount:</span>
              <span>₹{parseFloat(totalInterest).toLocaleString()}</span>
            </div>
            <div className="result-row r4">
              <span>Total Amount Payable:</span>
              <span>₹{parseFloat(totalPayment).toLocaleString()}</span>
            </div>
          </div>
        </div>
      </div>
      {/* Apply Now Button linking to dynamic loan type page */}
      <Link to="/apply">
        <button className="apply-now">Apply Now</button>
      </Link>
    </div>
  );
};

export default EMICalculator;
