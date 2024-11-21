import { Attendance } from "../models/attendanceModel.js";

// Get all attendance records
export const getAllAttendance = async (req, res) => {
    try {
      const attendance = await Attendance.find();
      res.status(200).json(attendance);
    } catch (error) {
      res.status(500).json({ error: "Failed to fetch attendance records." });
    }
  };
  
  // Add a new attendance record
  export const addAttendance = async (req, res) => {
    const { date } = req.body;
    try {
      const newAttendance = new Attendance({ date });
      await newAttendance.save();
      res.status(201).json({ message: "Attendance marked successfully." });
    } catch (error) {
      res.status(400).json({ error: "Attendance for this date already exists." });
    }
  };
  
  // Clear all attendance records
  export const clearAttendance = async (req, res) => {
    try {
      await Attendance.deleteMany({});
      res.status(200).json({ message: "Attendance history cleared." });
    } catch (error) {
      res.status(500).json({ error: "Failed to clear attendance history." });
    }
  };
  