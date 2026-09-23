import express from "express";
import { InMemoryProductRepository } from "./repositories/in-memory-product.repository";
import { ProductService } from "./services/product.service";
import { ProductController } from "./controllers/product.controller";

const app = express();
app.use(express.json());

// ===== Dependency Injection Composition Root =====
const productRepository = new InMemoryProductRepository();
const productService = new ProductService(productRepository);
const productController = new ProductController(productService);
// ==================================================

app.get("/", (req, res) => {
  res.json({
    message: "Elevvo Task 5 - Layered Architecture & Dependency Injection",
    layers: ["Controller → Service → Repository"],
    endpoints: [
      "GET    /api/products",
      "GET    /api/products/:id",
      "POST   /api/products",
      "PUT    /api/products/:id",
      "DELETE /api/products/:id"
    ]
  });
});

app.get("/api/products", productController.getAll);
app.get("/api/products/:id", productController.getById);
app.post("/api/products", productController.create);
app.put("/api/products/:id", productController.update);
app.delete("/api/products/:id", productController.delete);

app.use((req, res) => {
  res.status(404).json({ success: false, message: "Route not found" });
});

export default app;