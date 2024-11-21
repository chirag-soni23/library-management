import mongoose from 'mongoose';
const attendanceSchema = new mongoose.Schema({
    date: { 
        type: String, 
        required: true, 
        unique: true 
    }, 
});

export const Attendance = mongoose.model("Attendance", attendanceSchema);