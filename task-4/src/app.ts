import express from "express";
import helmet from "helmet";
import cors from "cors";
import authRoutes from "./routes/auth.routes";
import userRoutes from "./routes/user.routes";

const app = express();

app.use(helmet());
app.use(express.json());

app.use(cors({
  origin: ["http://localhost:3000", "http://localhost:5173"],
  methods: ["GET", "POST", "PUT", "DELETE"],
  credentials: true
}));

app.use("/api/auth", authRoutes);
app.use("/api/users", userRoutes);

app.get("/", (req, res) => {
  res.json({
    message: "Elevvo Task 4 - JWT Authentication & Threat Mitigation",
    endpoints: {
      public: [
        "POST /api/auth/register",
        "POST /api/auth/login"
      ],
      protected: [
        "GET /api/users/profile (any logged-in user)",
        "GET /api/users (ADMIN only)"
      ]
    }
  });
});

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;