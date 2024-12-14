import { User } from '../models/index.js';
import { Post } from '../models/index.js';

// Create a new user
const createUser = async (req, res) => {
  const { name, email } = req.body;
  try {
    const newUser = await User.create({ name, email });
    res.status(201).json(newUser);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get a user with their posts (INNER JOIN)
const getUserPosts = async (req, res) => {
  const userId = req.params.userId;
  try {
    const userWithPosts = await User.findOne({
      where: { id: userId },
      include: Post,  // This creates an INNER JOIN to include posts
    });
    if (userWithPosts) {
      res.json(userWithPosts);
    } else {
      res.status(404).json({ message: 'User not found' });
    }
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createUser, getUserPosts };
