import { Request, Response } from "express";
import { UserService } from "../services/user.service";

export const UserController = {
  getAll(req: Request, res: Response) {
    const users = UserService.getAll();
    res.status(200).json({ success: true, data: users });
  },

  getById(req: Request, res: Response) {
    const id = parseInt(req.params.id as string);
    const user = UserService.getById(id);

    if (!user) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: user });
  },

  create(req: Request, res: Response) {
    const { name, email, role } = req.body;

    if (!name || !email || !role) {
      return res.status(400).json({
        success: false,
        message: "name, email and role are required"
      });
    }

    const newUser = UserService.create(name, email, role);
    res.status(201).json({ success: true, data: newUser });
  },

  update(req: Request, res: Response) {
    const id = parseInt(req.params.id as string);
    const { name, email, role } = req.body;

    const updatedUser = UserService.update(id, name, email, role);

    if (!updatedUser) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, data: updatedUser });
  },

  delete(req: Request, res: Response) {
    const id = parseInt(req.params.id as string);
    const deleted = UserService.delete(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "User not found" });
    }

    res.status(200).json({ success: true, message: "User deleted successfully" });
  }
};
