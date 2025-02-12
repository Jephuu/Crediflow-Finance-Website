import React, { useState } from 'react';
import './ApplyNowForm.css';

const ApplyNowForm = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    address: '',
    loanType: 'personal',
    amount: '',
    duration: '',
    employer: '',
    income: '',
    agree: false,
  });

  const handleChange = (e) => {
    const { name, value, type, checked } = e.target;
    setFormData({
      ...formData,
      [name]: type === 'checkbox' ? checked : value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // You can handle the form submission logic here
    console.log('Form submitted:', formData);
  };

  return (
    <div className="form-container">
      <h1>Loan Application Form</h1>
      <form onSubmit={handleSubmit}>
        {/* Personal Information Section */}
        <section>
          <h2>Personal Information</h2>
          <label htmlFor="name">Full Name:</label>
          <input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
            placeholder="Enter your full name"
          />

          <label htmlFor="email">Email Address:</label>
          <input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
            placeholder="Enter your email"
          />

          <label htmlFor="phone">Phone Number:</label>
          <input
            type="tel"
            id="phone"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            required
            placeholder="Enter your phone number"
          />

          <label htmlFor="address">Residential Address:</label>
          <textarea
            id="address"
            name="address"
            value={formData.address}
            onChange={handleChange}
            required
            placeholder="Enter your residential address"
          />
        </section>

        {/* Loan Type Section */}
        <section>
          <h2>Loan Type</h2>
          <label htmlFor="loan-type">Select Loan Type:</label>
          <select
            id="loan-type"
            name="loanType"
            value={formData.loanType}
            onChange={handleChange}
            required
          >
            <option value="personal">Personal Loan</option>
            <option value="home">Home Loan</option>
            <option value="car">Car Loan</option>
            <option value="education">Education Loan</option>
          </select>
        </section>

        {/* Loan Amount and Duration Section */}
        <section>
          <h2>Loan Details</h2>
          <label htmlFor="amount">Loan Amount:</label>
          <input
            type="number"
            id="amount"
            name="amount"
            value={formData.amount}
            onChange={handleChange}
            required
            placeholder="Enter loan amount"
            min="1000"
            step="100"
          />

          <label htmlFor="duration">Loan Duration (Years):</label>
          <input
            type="number"
            id="duration"
            name="duration"
            value={formData.duration}
            onChange={handleChange}
            required
            placeholder="Enter loan duration in years"
            min="1"
            max="30"
          />
        </section>

        {/* Employment Details Section */}
        <section>
          <h2>Employment Details</h2>
          <label htmlFor="employer">Employer Name:</label>
          <input
            type="text"
            id="employer"
            name="employer"
            value={formData.employer}
            onChange={handleChange}
            required
            placeholder="Enter your employer's name"
          />

          <label htmlFor="income">Monthly Income:</label>
          <input
            type="number"
            id="income"
            name="income"
            value={formData.income}
            onChange={handleChange}
            required
            placeholder="Enter your monthly income"
            min="1000"
            step="100"
          />
        </section>

        {/* Terms and Agreement Section */}
        <section>
          <h2>Agreement</h2>
          <label>
            <input
              type="checkbox"
              id="agree"
              name="agree"
              checked={formData.agree}
              onChange={handleChange}
              required
            />{' '}
            I agree to the terms and conditions
          </label>
        </section>

        {/* Submit Button */}
        <button type="submit">Submit Application</button>
      </form>
    </div>
  );
};

export default ApplyNowForm;


