import React from 'react';
import './PatientAppointments.css'; // Create the corresponding CSS file

const PatientAppointments = () => {
  const appointments = [
    { id: 1, doctorName: 'Dr. John Doe', date: '2024-10-10', time: '10:00 AM' },
    { id: 2, doctorName: 'Dr. Jane Smith', date: '2024-10-11', time: '11:00 AM' },
    // Add more appointment data as needed
  ];

  return (
    <div className="appointments">
      <h2>Your Appointments</h2>
      <div className="appointments-grid">
        {appointments.map(app => (
          <div key={app.id} className="appointment-card">
            <h3>{app.doctorName}</h3>
            <p><strong>Date:</strong> {app.date}</p>
            <p><strong>Time:</strong> {app.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PatientAppointments;
