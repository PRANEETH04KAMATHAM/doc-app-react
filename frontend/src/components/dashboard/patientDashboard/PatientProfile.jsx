import React from 'react';
import './PatientProfile.css'; // Create the corresponding CSS file

const PatientProfile = () => {
  const profile = {
    name: 'John Doe',
    age: '30',
    medicalHistory: 'No known allergies, previous surgery in 2020...',
    bio: 'John is an avid traveler and fitness enthusiast...',
  };

  return (
    <div className="profile-card-container">
      <div className="profile-card">
        <div className="profile-info">
          <h2>Profile</h2>
          <p><strong>Name:</strong> {profile.name}</p>
          <p><strong>Age:</strong> {profile.age}</p>
          <p><strong>Medical History:</strong> {profile.medicalHistory}</p>
          <p><strong>Bio:</strong> {profile.bio}</p>
        </div>
      </div>
    </div>
  );
};

export default PatientProfile;
