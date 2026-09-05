export interface User {
  id: number;
  name: string;
  email: string;
  role: string;
}

let users: User[] = [
  { id: 1, name: "Ahmad Yaar", email: "ahmad@example.com", role: "Intern" },
  { id: 2, name: "Sara Khan", email: "sara@example.com", role: "Mentor" },
  { id: 3, name: "Elevvo Admin", email: "admin@elevvo.tech", role: "Admin" }
];

let nextId = 4;

export const UserService = {
  getAll(): User[] {
    return users;
  },

  getById(id: number): User | undefined {
    return users.find(user => user.id === id);
  },

  create(name: string, email: string, role: string): User {
    const newUser: User = { id: nextId++, name, email, role };
    users.push(newUser);
    return newUser;
  },

  update(id: number, name?: string, email?: string, role?: string): User | null {
    const user = users.find(u => u.id === id);
    if (!user) return null;

    if (name) user.name = name;
    if (email) user.email = email;
    if (role) user.role = role;

    return user;
  },

  delete(id: number): boolean {
    const index = users.findIndex(u => u.id === id);
    if (index === -1) return false;
    users.splice(index, 1);
    return true;
  }
};
