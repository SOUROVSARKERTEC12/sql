import express from 'express';
import { createPost, getAllPosts } from '../controllers/postController.js';

const router = express.Router();

// Route to create a new post
router.post('/', createPost);

// Route to get all posts (with user information)
router.get('/', getAllPosts);

export default router;
