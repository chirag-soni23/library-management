import { Attendance } from "../models/attendanceModel.js";
import { User } from "../models/userModel.js"; // Import User model

// Add attendance for logged-in user
export const addAttendance = async (req, res) => {
  const { date } = req.body;

  try {
    // Check if the user has already marked attendance for the given date
    const existingAttendance = await Attendance.findOne({ date, user: req.user._id });
    if (existingAttendance) {
      return res.status(400).json({ message: "Attendance for this date already marked by you." });
    }

    // Add attendance for the logged-in user
    const newAttendance = new Attendance({
      date,
      user: req.user._id,
    });
    await newAttendance.save();

    res.status(201).json({ message: "Attendance marked successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to mark attendance." });
  }
};

// Get all attendance records for the logged-in user
export const getAllAttendance = async (req, res) => {
  try {
    // Fetch all attendance records for the logged-in user
    const attendanceRecords = await Attendance.find({ user: req.user._id });

    // Manually add the user's name and email to each record
    const user = await User.findById(req.user._id);
    const attendanceWithUserInfo = attendanceRecords.map(record => ({
      _id: record._id,
      date: record.date,
      user: {
        name: user.name,
        email: user.email,
      },
    }));

    res.status(200).json(attendanceWithUserInfo);
  } catch (error) {
    res.status(500).json({ error: "Failed to fetch attendance records." });
  }
};

// Clear attendance records for the logged-in user
export const clearAttendance = async (req, res) => {
  try {
    // Delete all attendance records for the logged-in user
    await Attendance.deleteMany({ user: req.user._id });

    res.status(200).json({ message: "Attendance history cleared." });
  } catch (error) {
    res.status(500).json({ error: "Failed to clear attendance history." });
  }
};
