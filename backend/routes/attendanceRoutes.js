import express from 'express';
import { isAuth } from '../middlewares/isAuth.js';
import { addAttendance, clearAttendance, getAllAttendance } from '../controllers/attendanceController.js';
const router = express.Router();

router.get("/get-attendance",isAuth,getAllAttendance);
router.post('/add-attendance',isAuth,addAttendance);
router.delete('/delete-attendance',isAuth,clearAttendance);

export default router;
