import { PrismaClient, Product } from "@prisma/client";

const prisma = new PrismaClient();

export class ProductRepository {
  async findAll(): Promise<Product[]> {
    return prisma.product.findMany();
  }

  async findById(id: number): Promise<Product | null> {
    return prisma.product.findUnique({ where: { id } });
  }

  async create(data: { name: string; price: number; category: string; inStock?: boolean }): Promise<Product> {
    return prisma.product.create({ data });
  }

  async update(id: number, data: Partial<Product>): Promise<Product | null> {
    try {
      return await prisma.product.update({
        where: { id },
        data
      });
    } catch {
      return null;
    }
  }

  async delete(id: number): Promise<boolean> {
    try {
      await prisma.product.delete({ where: { id } });
      return true;
    } catch {
      return false;
    }
  }
}