import { Product } from "../models/product.model";

export interface IProductRepository {
  findAll(): Product[];
  findById(id: number): Product | undefined;
  create(product: Omit<Product, "id">): Product;
  update(id: number, data: Partial<Product>): Product | null;
  delete(id: number): boolean;
}