import React, { useState } from 'react';
import { Outlet, Link, useLocation } from 'react-router-dom';
import Logout from './PatientLogout';
import './PatientDashboard.css';

const PatientDashboard = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div className="patient-dashboard">
      <header className="dashboard-header">
        <div className="hamburger" onClick={toggleMenu}>
          <div className="line"></div>
          <div className="line"></div>
          <div className="line"></div>
        </div>
        <h1>Patient Dashboard</h1>
        <Logout />
      </header>
      <div className="dashboard-content">
        <aside className={`dashboard-sidebar ${isMenuOpen ? 'open' : ''}`}>
          <nav>
            <ul>
              <li>
                <Link 
                  to="/patient-dashboard/profile" 
                  className={location.pathname.includes('/profile') ? 'active' : ''}
                >
                  Profile
                </Link>
              </li>
              <li>
                <Link 
                  to="/patient-dashboard/appointments" 
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

export default PatientDashboard;
