import React, { useState } from 'react';
import { Calendar, momentLocalizer } from 'react-big-calendar';
import moment from 'moment';
import { ToastContainer } from 'react-toastify';
import 'react-big-calendar/lib/css/react-big-calendar.css';
import 'react-toastify/dist/ReactToastify.css';
import { useAttendance } from '../context/Attendance';

const localizer = momentLocalizer(moment);

const Attendance = () => {
  const [showPopup, setShowPopup] = useState(false);
  const { attendanceHistory, markAttendance, clearAttendanceHistory } = useAttendance();

  const handleSelectSlot = ({ start }) => {
    const today = moment().startOf('day');
    const selectedDate = moment(start).startOf('day');
    const isToday = selectedDate.isSame(today);

    if (isToday) {
      markAttendance(today.format('YYYY-MM-DD'));
      setShowPopup(false);
    } else {
      setShowPopup(true);
    }
  };

  return (
    <div className="min-h-screen flex flex-col items-center justify-center p-4 bg-gray-100">
      <ToastContainer position="top-right" autoClose={3000} hideProgressBar={false} />
      <div className="bg-white shadow-md rounded-lg p-6 w-full max-w-lg mb-6 text-center">
        <h1 className="text-3xl font-bold mb-2">Welcome to Attendance Tracker</h1>
        <p className="text-gray-600">Click on today’s date to mark your attendance. Keep track of your attendance history below.</p>
      </div>

      <div className="flex flex-col md:flex-row w-full max-w-5xl">
        <div className="bg-white shadow-lg rounded-lg p-6 flex-1 mr-0 md:mr-4 mb-4 md:mb-0">
          <h2 className="text-2xl font-bold text-center mb-4">Mark Your Attendance</h2>
          <Calendar
            selectable
            localizer={localizer}
            defaultDate={new Date()}
            defaultView="month"
            style={{ height: '500px' }}
            onSelectSlot={handleSelectSlot}
          />
          {showPopup && (
            <div className="mt-4 bg-red-100 text-red-700 p-3 rounded">
              Only today’s date can be selected!
            </div>
          )}
        </div>

        <div className="bg-white shadow-lg rounded-lg p-6 w-full md:w-64">
          <h2 className="text-xl font-semibold mb-4">Attendance History</h2>
          {attendanceHistory.length > 0 ? (
            <ul className="list-disc list-inside text-left">
              {attendanceHistory.map((date, index) => (
                <li key={index} className="text-gray-700">{date}</li>
              ))}
            </ul>
          ) : (
            <p className="text-gray-600">No attendance records yet.</p>
          )}
          {attendanceHistory.length > 0 && (
            <button
              onClick={clearAttendanceHistory}
              className="mt-4 px-4 py-2 bg-red-500 text-white rounded hover:bg-red-600"
            >
              Clear Attendance History
            </button>
          )}
        </div>
      </div>
    </div>
  );
};

export default Attendance;
