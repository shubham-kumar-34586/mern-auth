import express from "express";
import {
  register,
  login,
  logout,
  isAuthenticated,
  sendVerifyOtp,
  verifyEmail,
  sendResetOtp,
  resetPassword,
} from "../controllers/authController.js";

import userAuth from "../middleware/userAuth.js";

const authRouter = express.Router();

// Auth
authRouter.post("/register", register);
authRouter.post("/login", login);
authRouter.post("/logout", userAuth, logout);

// Auth status
authRouter.get("/is-auth", userAuth, isAuthenticated);

// Email verification
authRouter.post("/send-verify-otp", userAuth, sendVerifyOtp);
authRouter.post("/verify-account", userAuth, verifyEmail);

// Password reset
authRouter.post("/send-reset-otp", sendResetOtp);
authRouter.post("/reset-password", resetPassword);

export default authRouter;
