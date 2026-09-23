import { Product } from "../models/product.model";
import { IProductRepository } from "../types/repository.interface";

export class ProductService {
  // Dependency Injection via constructor
  constructor(private readonly productRepository: IProductRepository) {}

  getAllProducts(): Product[] {
    return this.productRepository.findAll();
  }

  getProductById(id: number): Product | undefined {
    return this.productRepository.findById(id);
  }

  createProduct(name: string, price: number, category: string, inStock: boolean): Product {
    return this.productRepository.create({ name, price, category, inStock });
  }

  updateProduct(id: number, data: Partial<Product>): Product | null {
    return this.productRepository.update(id, data);
  }

  deleteProduct(id: number): boolean {
    return this.productRepository.delete(id);
  }
}