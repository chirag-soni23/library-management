import mongoose from 'mongoose';

const attendanceSchema = new mongoose.Schema({
  date: { 
    type: String, 
    required: true, 
  },
  user: { 
    type: mongoose.Schema.Types.ObjectId, 
    ref: 'User', // Reference to the User model
    required: true,
  },
});

export const Attendance = mongoose.model("Attendance", attendanceSchema);
