import React from 'react';
import { Link, Routes, Route } from 'react-router-dom';
import DoctorAppointments from './DoctorAppointments';
import DoctorProfile from './DoctorProfile';
import Logout from './Logout';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  return (
    <div className="doctor-dashboard">
      <nav>
        <ul>
          <li><Link to="appointments">Appointments</Link></li>
          <li><Link to="profile">Profile</Link></li>
          <li><Link to="logout">Logout</Link></li>
        </ul>
      </nav>
      <div className="dashboard-content">
        <Routes>
          <Route path="appointments" element={<DoctorAppointments />} />
          <Route path="profile" element={<DoctorProfile />} />
          <Route path="logout" element={<Logout />} />
        </Routes>
      </div>
    </div>
  );
};

export default DoctorDashboard;
