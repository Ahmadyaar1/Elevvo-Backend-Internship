import { Request, Response, NextFunction } from "express";

const VALID_API_KEY = "elevvo-secret-key-123";

export const requireAPIKey = (
  req: Request,
  res: Response,
  next: NextFunction
) => {
  const apiKey = req.headers["x-api-key"];

  if (!apiKey || apiKey !== VALID_API_KEY) {
    return res.status(401).json({
      success: false,
      message: "Unauthorized: Invalid or missing x-api-key header"
    });
  }

  next();
};
