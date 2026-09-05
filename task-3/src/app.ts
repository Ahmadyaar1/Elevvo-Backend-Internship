import express from "express";
import { observabilityMiddleware } from "./middleware/observability.middleware";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(express.json());
app.use(observabilityMiddleware);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Elevvo Task 3 - Modular Express API",
    endpoints: [
      "GET    /api/users",
      "GET    /api/users/:id",
      "POST   /api/users",
      "PUT    /api/users/:id",
      "DELETE /api/users/:id"
    ]
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;
