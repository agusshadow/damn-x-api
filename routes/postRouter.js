import express from 'express';
import * as postController from '../controllers/postController.js'

const router = express.Router();

router.get('/', postController.getPosts);

router.get('/:id', postController.getPostById);
 
router.post('/', postController.createPost);

router.delete('/:id', );

router.put('/:id', );

export default router;