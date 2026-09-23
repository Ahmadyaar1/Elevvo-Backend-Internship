import { Request, Response } from "express";
import { ProductService } from "../services/product.service";

export class ProductController {
  constructor(private readonly productService: ProductService) {}

  getAll = async (req: Request, res: Response) => {
    const products = await this.productService.getAllProducts();
    res.status(200).json({ success: true, data: products });
  };

  getById = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const product = await this.productService.getProductById(id);

    if (!product) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: product });
  };

  create = async (req: Request, res: Response) => {
    const { name, price, category, inStock } = req.body;

    if (!name || price === undefined || !category) {
      return res.status(400).json({
        success: false,
        message: "name, price and category are required"
      });
    }

    const product = await this.productService.createProduct(name, price, category, inStock ?? true);
    res.status(201).json({ success: true, data: product });
  };

  update = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const updated = await this.productService.updateProduct(id, req.body);

    if (!updated) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, data: updated });
  };

  delete = async (req: Request, res: Response) => {
    const id = parseInt(req.params.id as string);
    const deleted = await this.productService.deleteProduct(id);

    if (!deleted) {
      return res.status(404).json({ success: false, message: "Product not found" });
    }

    res.status(200).json({ success: true, message: "Product deleted successfully" });
  };
}