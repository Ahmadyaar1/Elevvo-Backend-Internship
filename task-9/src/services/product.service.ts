import { Product } from "@prisma/client";
import { ProductRepository } from "../repositories/product.repository";

export class ProductService {
  constructor(private readonly productRepository: ProductRepository) {}

  getAllProducts(): Promise<Product[]> {
    return this.productRepository.findAll();
  }

  getProductById(id: number): Promise<Product | null> {
    return this.productRepository.findById(id);
  }

  createProduct(name: string, price: number, category: string, inStock: boolean = true): Promise<Product> {
    return this.productRepository.create({ name, price, category, inStock });
  }

  updateProduct(id: number, data: Partial<Product>): Promise<Product | null> {
    return this.productRepository.update(id, data);
  }

  deleteProduct(id: number): Promise<boolean> {
    return this.productRepository.delete(id);
  }
}