import { Router } from "express";
import { AuthController } from "../controllers/auth.controller";
import rateLimit from "express-rate-limit";

const router = Router();

const loginLimiter = rateLimit({
  windowMs: 15 * 60 * 1000,
  max: 5,
  message: {
    success: false,
    message: "Too many login attempts. Please try again after 15 minutes."
  }
});

router.post("/register", AuthController.register);
router.post("/login", loginLimiter, AuthController.login);

export default router;