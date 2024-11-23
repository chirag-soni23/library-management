import React, { createContext, useContext, useState, useEffect } from 'react';
import axios from 'axios';
import { toast } from 'react-toastify';

const AttendanceContext = createContext();

export const useAttendance = () => useContext(AttendanceContext);

const AttendanceProvider = ({ children }) => {
  const [attendanceHistory, setAttendanceHistory] = useState([]);

  // Fetch attendance history
  const fetchAttendanceHistory = async () => {
    try {
      const response = await axios.get('/api/attendance/get-attendance');
      setAttendanceHistory(response.data.map((record) => record.date));
    } catch (error) {
      console.error('Failed to fetch attendance records.');
    }
  };

  // Mark attendance
  const markAttendance = async (date) => {
    try {
      const response = await axios.post('/api/attendance/add-attendance', { date });

      if (response.status === 201) {
        toast.success('Attendance marked for today!');
        setAttendanceHistory((prev) => [...prev, date]);
      }
    } catch (error) {
      toast.info(error.response?.data?.error || 'Failed to mark attendance.');
    }
  };

  // Clear attendance history
  const clearAttendanceHistory = async () => {
    try {
      await axios.delete('/api/attendance/delete-attendance');
      setAttendanceHistory([]);
      toast.success('Attendance history cleared!');
    } catch (error) {
      toast.error('Failed to clear attendance history.');
    }
  };

  useEffect(() => {
    fetchAttendanceHistory();
  }, []);

  return (
    <AttendanceContext.Provider
      value={{ attendanceHistory, fetchAttendanceHistory, markAttendance, clearAttendanceHistory }}
    >
      {children}
    </AttendanceContext.Provider>
  );
};

export default AttendanceProvider;
