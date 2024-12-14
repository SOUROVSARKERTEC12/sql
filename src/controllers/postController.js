import { Post } from '../models/index.js';
import { User } from '../models/index.js';

// Create a new post
const createPost = async (req, res) => {
  const { title, content, userId } = req.body;
  console.log(userId);
  
  try {
    const newPost = await Post.create({ title, content, UserId: userId });
  
    res.status(201).json(newPost);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Get all posts with associated user info (OUTER JOIN)
const getAllPosts = async (req, res) => {
  try {
    const posts = await Post.findAll({
      include: {
        model: User, // Get associated user info for each post
        required: false, // OUTER JOIN
      },
    });
    res.json(posts);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

export { createPost, getAllPosts };
