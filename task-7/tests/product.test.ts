import request from "supertest";
import app from "../src/app";
import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

describe("Product API - Integration Tests", () => {
  // Clean database before each test
  beforeEach(async () => {
    await prisma.product.deleteMany();
  });

  afterAll(async () => {
    await prisma.$disconnect();
  });

  // ======================
  // CREATE
  // ======================
  it("should create a new product", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({
        name: "Laptop",
        price: 1200,
        category: "Electronics",
        inStock: true
      });

    expect(res.status).toBe(201);
    expect(res.body.success).toBe(true);
    expect(res.body.data).toHaveProperty("id");
    expect(res.body.data.name).toBe("Laptop");
  });

  it("should return 400 if required fields are missing", async () => {
    const res = await request(app)
      .post("/api/products")
      .send({ name: "Laptop" });

    expect(res.status).toBe(400);
    expect(res.body.success).toBe(false);
  });

  // ======================
  // GET ALL
  // ======================
  it("should return all products", async () => {
    await prisma.product.create({
      data: { name: "Mouse", price: 25, category: "Electronics", inStock: true }
    });

    const res = await request(app).get("/api/products");

    expect(res.status).toBe(200);
    expect(res.body.success).toBe(true);
    expect(res.body.data.length).toBe(1);
  });

  // ======================
  // GET BY ID
  // ======================
  it("should return a product by id", async () => {
    const product = await prisma.product.create({
      data: { name: "Keyboard", price: 80, category: "Electronics", inStock: true }
    });

    const res = await request(app).get(`/api/products/${product.id}`);

    expect(res.status).toBe(200);
    expect(res.body.data.name).toBe("Keyboard");
  });

  it("should return 404 if product not found", async () => {
    const res = await request(app).get("/api/products/9999");

    expect(res.status).toBe(404);
    expect(res.body.success).toBe(false);
  });

  // ======================
  // UPDATE
  // ======================
  it("should update a product", async () => {
    const product = await prisma.product.create({
      data: { name: "Monitor", price: 300, category: "Electronics", inStock: true }
    });

    const res = await request(app)
      .put(`/api/products/${product.id}`)
      .send({ price: 280, inStock: false });

    expect(res.status).toBe(200);
    expect(res.body.data.price).toBe(280);
    expect(res.body.data.inStock).toBe(false);
  });

  // ======================
  // DELETE
  // ======================
  it("should delete a product", async () => {
    const product = await prisma.product.create({
      data: { name: "Headphones", price: 100, category: "Electronics", inStock: true }
    });

    const res = await request(app).delete(`/api/products/${product.id}`);

    expect(res.status).toBe(200);
    expect(res.body.message).toBe("Product deleted successfully");
  });
});