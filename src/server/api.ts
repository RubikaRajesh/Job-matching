import express from 'express';
import cors from 'cors';
import { registerUser, loginUser, verifyToken } from './auth';

const app = express();
app.use(cors());
app.use(express.json());

app.post('/api/register', async (req, res) => {
  try {
    const { email, password, userType } = req.body;
    const token = await registerUser(email, password, userType);
    res.json({ token });
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
});

app.post('/api/login', async (req, res) => {
  try {
    const { email, password } = req.body;
    const token = await loginUser(email, password);
    res.json({ token });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

app.get('/api/profile', (req, res) => {
  try {
    const token = req.headers.authorization?.split(' ')[1];
    if (!token) {
      throw new Error('No token provided');
    }
    const user = verifyToken(token);
    res.json({ user });
  } catch (error) {
    res.status(401).json({ error: error.message });
  }
});

const PORT = 3001;
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});

export default app;