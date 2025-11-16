import { User, UserWithPassword } from '@/types';
import bcrypt from 'bcryptjs';

// In-memory database
export const users: UserWithPassword[] = [];

// Helper functions
export function findUserByEmail(email: string): UserWithPassword | undefined {
  return users.find(u => u.email === email);
}

export function findUserById(id: string): User | undefined {
  const userWithPassword = users.find(u => u.id === id);
  if (!userWithPassword) return undefined;
  
  // Return user without password
  const { password, ...user } = userWithPassword;
  return user;
}

export async function createUser(name: string, email: string, password: string): Promise<User> {
  const hashedPassword = await bcrypt.hash(password, 10);
  
  const user: UserWithPassword = {
    id: `user_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
    name,
    email,
    password: hashedPassword,
    createdAt: new Date().toISOString(),
  };

  users.push(user);
  
  // Return user without password
  const { password: _, ...userWithoutPassword } = user;
  return userWithoutPassword;
}

export async function verifyPassword(password: string, hashedPassword: string): Promise<boolean> {
  return bcrypt.compare(password, hashedPassword);
}

// Add some sample users for testing
(async () => {
  if (users.length === 0) {
    await createUser('John Doe', 'john@example.com', 'password123');
    await createUser('Jane Smith', 'jane@example.com', 'password123');
  }
})();