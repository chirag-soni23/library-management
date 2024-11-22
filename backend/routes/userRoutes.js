import express from 'express';
import { deleteUser, editUser, getAllUsers, loginUser, logout, myProfile, registerUser } from '../controllers/userController.js';
import { isAuth } from '../middlewares/isAuth.js';
const router = express.Router();

router.post("/register",registerUser);
router.post("/login",loginUser);
router.get("/me",isAuth,myProfile);
router.get("/logout",isAuth,logout);
router.get("/getallusers",isAuth,getAllUsers);
router.put("/edit/:id",isAuth,editUser);
router.delete("/delete/:id",isAuth,deleteUser);
export default router;