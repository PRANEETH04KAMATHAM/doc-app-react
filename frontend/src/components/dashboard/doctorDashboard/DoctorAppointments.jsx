import React from 'react';
import './DoctorAppointments.css'; // Ensure this CSS file exists

const DoctorAppointments = () => {
  const appointments = [
    { id: 1, patientName: 'John Doe', date: '2024-10-10', time: '10:00 AM' },
    { id: 2, patientName: 'Jane Smith', date: '2024-10-11', time: '11:00 AM' },
    { id: 3, patientName: 'Emily Johnson', date: '2024-10-12', time: '09:00 AM' },
    { id: 4, patientName: 'Michael Brown', date: '2024-10-13', time: '02:00 PM' },
    { id: 5, patientName: 'Sarah Davis', date: '2024-10-14', time: '03:30 PM' },
    { id: 6, patientName: 'David Wilson', date: '2024-10-15', time: '01:00 PM' },
    { id: 7, patientName: 'Sophia Miller', date: '2024-10-16', time: '11:30 AM' },
    { id: 8, patientName: 'James Taylor', date: '2024-10-17', time: '10:15 AM' },
    { id: 9, patientName: 'Olivia Anderson', date: '2024-10-18', time: '12:00 PM' },
    { id: 10, patientName: 'William Thomas', date: '2024-10-19', time: '04:00 PM' },
  ];

  return (
    <div className="appointments">
      <h2>Appointments</h2>
      <div className="appointments-grid">
        {appointments.map(app => (
          <div key={app.id} className="appointment-card">
            <h3>{app.patientName}</h3>
            <p><strong>Date:</strong> {app.date}</p>
            <p><strong>Time:</strong> {app.time}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default DoctorAppointments;