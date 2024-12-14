import express from 'express';
import { createUser ,getUserPosts } from '../controllers/userController.js';

const router = express.Router();

router.post('/', createUser);
router.get('/:userId/posts', getUserPosts);

export default router;
