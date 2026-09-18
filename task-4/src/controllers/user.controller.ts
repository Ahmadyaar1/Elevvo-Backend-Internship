import { Response } from "express";
import { UserService } from "../services/user.service";
import { AuthRequest } from "../middleware/auth.middleware";

export const UserController = {
  getProfile(req: AuthRequest, res: Response) {
    const user = UserService.findById(req.user!.id);

    if (!user) {
      return res.status(404).json({
        success: false,
        message: "User not found"
      });
    }

    res.status(200).json({
      success: true,
      data: user
    });
  },

  getAllUsers(req: AuthRequest, res: Response) {
    const users = UserService.getAll();
    res.status(200).json({
      success: true,
      data: users
    });
  }
};