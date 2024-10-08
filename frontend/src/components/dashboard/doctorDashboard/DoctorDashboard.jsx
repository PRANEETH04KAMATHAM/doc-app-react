import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logout from './Logout';
import './DoctorDashboard.css';

const DoctorDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="doctor-dashboard">
      <header className="dashboard-header">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h1>Doctor Dashboard</h1>
        <Logout />
      </header>
      <div className="dashboard-content">
        <aside className={`dashboard-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li>
                <Link 
                  to="/doctor-dashboard/profile" 
                  className={location.pathname.includes('/profile') ? 'active' : ''}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/doctor-dashboard/appointments" 
                  className={location.pathname.includes('/appointments') ? 'active' : ''}
                >
                  Appointments
                </Link>
              </li>
            </ul>
          </nav>
        </aside>
        <main className="dashboard-main">
          <Outlet />
        </main>
      </div>
    </div>
  );
};

export default DoctorDashboard;