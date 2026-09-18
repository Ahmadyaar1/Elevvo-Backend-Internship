import { Request, Response } from "express";
import jwt from "jsonwebtoken";
import { UserService } from "../services/user.service";
import { JWT_SECRET } from "../middleware/auth.middleware";

export const AuthController = {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, role } = req.body;

      if (!name || !email || !password) {
        return res.status(400).json({
          success: false,
          message: "name, email and password are required"
        });
      }

      const user = await UserService.register(name, email, password, role || "USER");

      res.status(201).json({
        success: true,
        message: "User registered successfully",
        data: user
      });
    } catch (error: any) {
      res.status(400).json({
        success: false,
        message: error.message
      });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password } = req.body;

      if (!email || !password) {
        return res.status(400).json({
          success: false,
          message: "email and password are required"
        });
      }

      const user = await UserService.login(email, password);

      if (!user) {
        return res.status(401).json({
          success: false,
          message: "Invalid email or password"
        });
      }

      const token = jwt.sign(
        { id: user.id, email: user.email, role: user.role },
        JWT_SECRET,
        { expiresIn: "1h" }
      );

      res.status(200).json({
        success: true,
        message: "Login successful",
        data: {
          token,
          user: {
            id: user.id,
            name: user.name,
            email: user.email,
            role: user.role
          }
        }
      });
    } catch (error) {
      res.status(500).json({
        success: false,
        message: "Internal server error"
      });
    }
  }
};