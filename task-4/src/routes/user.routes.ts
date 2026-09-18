import { Router } from "express";
import { UserController } from "../controllers/user.controller";
import { authenticateToken, authorizeRole } from "../middleware/auth.middleware";

const router = Router();

// Protected route - any logged in user
router.get("/profile", authenticateToken, UserController.getProfile);

// Admin only route
router.get("/", authenticateToken, authorizeRole("ADMIN"), UserController.getAllUsers);

export default router;