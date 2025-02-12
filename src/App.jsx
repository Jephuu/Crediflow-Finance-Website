import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';


// import "slick-carousel/slick/slick.css"; 
// import "slick-carousel/slick/slick-theme.css";
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import Navbar from './components/Navbar';
import HomePage from './components/HomePage';
import SliderPage from './components/SliderPage';
import ServicePage from './components/ServicePage';
import HousingLoan from './components/Loans/HousingLoan';
import PersonalLoan from './components/Loans/PersonalLoan';
import EducationLoan from './components/Loans/EducationLoan';
import GoldLoan from './components/Loans/GoldLoan';
import PropertyLoan from './components/Loans/PropertyLoan';
import VehicleLoan from './components/Loans/VehicleLoan';
import AboutPage from './components/AboutPage';
import ContactPage from './components/ContactPage';
import Footer from './components/Footer';
// import ApplyNowForm from './components/Loans/ApplyNowForm';

function App() {
    return (
      
        <div>
          
          <Router>

          <Navbar /> 
          

          <Routes>

            <Route path="/" element={ <HomePage /> }/>
            <Route path="/slider" element={ <SliderPage /> }/>
            <Route path="/services" element={ <ServicePage/> } />
            <Route path="/service" element={<ServicePage />} />
            <Route path="/housing-loan" element={<HousingLoan />} />
            <Route path="/personal-loan" element={<PersonalLoan />} />
            <Route path="/vehicle-loan" element={<VehicleLoan />} />
            <Route path="/education-loan" element={<EducationLoan />} />
            <Route path="/gold-loan" element={<GoldLoan />} />
            <Route path="/property-loan" element={<PropertyLoan />} />
            <Route path="/about" element={ <AboutPage/> } />
            <Route path="/contact" element={ <ContactPage/> } />
             {/* <Route path="/apply" element={<ApplyNowForm />} />       */}
              </Routes> 

          <Footer/>

          </Router>
            
          
        </div>
    );
}

export default App;
