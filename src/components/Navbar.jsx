import React from 'react';
import { Link } from 'react-router-dom'; // Import Link for navigation
import './Navbar.css';
import logo from '../assets/cflow.png'; 

const Navbar = () => {
  return (
    <nav className="navbar">
      <div className="navbar-logo">
      <img src={logo} alt="Crediflow Finance Logo" className="logo" />
        <h1>Crediflow Finance</h1>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Home</Link></li>
        <li><Link to="/services">Services</Link></li> 
        <li><Link to="/about">About</Link></li>
        <li><Link to="/contact">Contact</Link></li>
        {/* <Link to="/apply-now">Apply Now</Link> */}
      </ul>
    </nav>
  );
};

export default Navbar;
