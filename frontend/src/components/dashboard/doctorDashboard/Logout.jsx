import React from 'react';
import { useNavigate } from 'react-router-dom';
import './Logout.css';

const Logout = () => {
  const navigate = useNavigate();
  
  const handleLogout = () => {
    // Perform logout logic here
    navigate('/login');
  };

  return (
    <div className="logout">
      <div className="logout-info">
        <img src="/path/to/your/profile-image.jpg" alt="Profile" className="profile-image" />
        <div className="user-details">
          <p className="username">Dr. John Doe</p>
          <p className="user-role">Cardiologist</p>
        </div>
      </div>
      <button onClick={handleLogout} className="logout-button">
        <i className="fas fa-sign-out-alt"></i> Logout
      </button>
    </div>
  );
};

export default Logout;