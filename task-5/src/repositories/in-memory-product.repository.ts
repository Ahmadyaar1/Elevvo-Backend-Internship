import { Product } from "../models/product.model";
import { IProductRepository } from "../types/repository.interface";

export class InMemoryProductRepository implements IProductRepository {
  private products: Product[] = [
    { id: 1, name: "Laptop", price: 1200, category: "Electronics", inStock: true },
    { id: 2, name: "Headphones", price: 150, category: "Electronics", inStock: true },
    { id: 3, name: "Notebook", price: 5, category: "Stationery", inStock: false }
  ];
  private nextId = 4;

  findAll(): Product[] {
    return this.products;
  }

  findById(id: number): Product | undefined {
    return this.products.find(p => p.id === id);
  }

  create(data: Omit<Product, "id">): Product {
    const product: Product = { id: this.nextId++, ...data };
    this.products.push(product);
    return product;
  }

  update(id: number, data: Partial<Product>): Product | null {
    const product = this.products.find(p => p.id === id);
    if (!product) return null;

    Object.assign(product, data);
    return product;
  }

  delete(id: number): boolean {
    const index = this.products.findIndex(p => p.id === id);
    if (index === -1) return false;
    this.products.splice(index, 1);
    return true;
  }
}