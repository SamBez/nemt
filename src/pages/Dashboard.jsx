import React, { useState, useEffect } from 'react';
import moment from 'moment'; // Optional for date handling

const  Dashboard = () => {

  const [appointments, setAppointments] = useState([
    { id: 1, title: 'Doctor Appointment', date: '2024-09-20' },
    { id: 2, title: 'Team Meeting', date: '2024-08-10' },
    { id: 3, title: 'Client Presentation', date: '2024-09-15' },
    { id: 4, title: 'Dentist Appointment', date: '2024-09-01' },
  ]);

  const [scheduledAppointments, setScheduledAppointments] = useState([]);
  const [passedAppointments, setPassedAppointments] = useState([]);

  // Separate appointments into scheduled and passed
  useEffect(() => {
    const now = moment(); // Get the current date

    const scheduled = appointments.filter((appointment) =>
      moment(appointment.date).isAfter(now)
    );

    const passed = appointments.filter((appointment) =>
      moment(appointment.date).isBefore(now)
    );

    setScheduledAppointments(scheduled);
    setPassedAppointments(passed);
  }, [appointments]);

  return (
    <div className="min-h-screen justify-center  flex flex-wrap flex-col  p-6 bg-gray-100">
    
      <div className="container mx-auto mt-6">
        {/* Scheduled Appointments */}
        <div className="mb-8">
          <h2 className="text-xl font-semibold mb-4">Scheduled Appointments</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {scheduledAppointments.length > 0 ? (
              scheduledAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border-b last:border-none p-2"
                >
                  <p className="font-bold">{appointment.title}</p>
                  <p>{moment(appointment.date).format('MMMM Do YYYY')}</p>
                </div>
              ))
            ) : (
              <p>No upcoming appointments.</p>
            )}
          </div>
        </div>

        {/* Passed Appointments */}
        <div>
          <h2 className="text-xl font-semibold mb-4">Passed Appointments</h2>
          <div className="bg-white p-4 rounded-lg shadow">
            {passedAppointments.length > 0 ? (
              passedAppointments.map((appointment) => (
                <div
                  key={appointment.id}
                  className="border-b last:border-none p-2"
                >
                  <p className="font-bold">{appointment.title}</p>
                  <p>{moment(appointment.date).format('MMMM Do YYYY')}</p>
                </div>
              ))
            ) : (
              <p>No passed appointments.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  
     );
}

export default Dashboard;