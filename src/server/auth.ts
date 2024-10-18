import jwt from 'jsonwebtoken';
import bcrypt from 'bcryptjs';

const JWT_SECRET = 'your-secret-key'; // In production, use an environment variable

interface User {
  id: string;
  email: string;
  password: string;
  userType: 'candidate' | 'company';
}

const users: User[] = [];

export const registerUser = async (email: string, password: string, userType: 'candidate' | 'company'): Promise<string> => {
  const existingUser = users.find(user => user.email === email);
  if (existingUser) {
    throw new Error('User already exists');
  }

  const hashedPassword = await bcrypt.hash(password, 10);
  const newUser: User = {
    id: Date.now().toString(),
    email,
    password: hashedPassword,
    userType,
  };
  users.push(newUser);

  return generateToken(newUser);
};

export const loginUser = async (email: string, password: string): Promise<string> => {
  const user = users.find(user => user.email === email);
  if (!user) {
    throw new Error('User not found');
  }

  const isPasswordValid = await bcrypt.compare(password, user.password);
  if (!isPasswordValid) {
    throw new Error('Invalid password');
  }

  return generateToken(user);
};

const generateToken = (user: User): string => {
  return jwt.sign({ id: user.id, email: user.email, userType: user.userType }, JWT_SECRET, { expiresIn: '1h' });
};

export const verifyToken = (token: string): { id: string; email: string; userType: 'candidate' | 'company' } => {
  try {
    return jwt.verify(token, JWT_SECRET) as { id: string; email: string; userType: 'candidate' | 'company' };
  } catch (error) {
    throw new Error('Invalid token');
  }
};