import React from 'react';
import Header from './components/header/Header';
import Footer from './components/footer/Footer';

import { Routes, Route } from 'react-router-dom';

// Importing Pages
import Home from './components/home/Home';
import Services from './components/services/Services';
import Login from './components/login/Login';
import Signup from './components/Signup/Signup';
import Contact from './components/contact/Contact';
import Doctors from './components/Doctors/Doctors';
import DoctorDetails from "./components/Doctors/DoctorDetails";
import Feedback from './components/Doctors/Feedback';
//import DoctorDashboard from './components/dashboard/doctorDashboard';


function App() {
  return (
    <div id="root">
      <Header />
      <Routes>
        {/* Home Page */}
        <Route path="/" element={<Home />} />
        <Route path="/home" element={<Home />} />

        {/* Doctors Page */}
        <Route path="/doctors" element={<Doctors />} />
        <Route path="/doctors/:id" element={<DoctorDetails />} />

        {/* Authentication Pages */}
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />

        {/* Services and Contact Pages */}
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<Contact />} />

        {/* feedback path */}
        <Route path='/feedback' element = {<Feedback />} />

        {/* Fallback Route for non-existent pages */}
        <Route path="*" element={<div>404 - Page Not Found</div>} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
