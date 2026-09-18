import bcrypt from "bcrypt";
import { User, SafeUser } from "../types/user.types";

let users: User[] = [];
let nextId = 1;

// Seed an admin user
(async () => {
  const hashedPassword = await bcrypt.hash("admin123", 10);
  users.push({
    id: nextId++,
    name: "Elevvo Admin",
    email: "admin@elevvo.tech",
    password: hashedPassword,
    role: "ADMIN"
  });
})();

export const UserService = {
  async register(name: string, email: string, password: string, role: "USER" | "ADMIN" = "USER"): Promise<SafeUser> {
    const existing = users.find(u => u.email === email);
    if (existing) {
      throw new Error("Email already registered");
    }

    const hashedPassword = await bcrypt.hash(password, 10);
    const newUser: User = {
      id: nextId++,
      name,
      email,
      password: hashedPassword,
      role
    };

    users.push(newUser);

    return {
      id: newUser.id,
      name: newUser.name,
      email: newUser.email,
      role: newUser.role
    };
  },

  async login(email: string, password: string): Promise<User | null> {
    const user = users.find(u => u.email === email);
    if (!user) return null;

    const isMatch = await bcrypt.compare(password, user.password);
    if (!isMatch) return null;

    return user;
  },

  findById(id: number): SafeUser | undefined {
    const user = users.find(u => u.id === id);
    if (!user) return undefined;

    return {
      id: user.id,
      name: user.name,
      email: user.email,
      role: user.role
    };
  },

  getAll(): SafeUser[] {
    return users.map(u => ({
      id: u.id,
      name: u.name,
      email: u.email,
      role: u.role
    }));
  }
};