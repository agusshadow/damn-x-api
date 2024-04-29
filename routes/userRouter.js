import express from 'express';
import * as userController from '../controllers/userController.js'

const router = express.Router();

router.get('/', userController.getUsers);

router.get('/:id', userController.getUserById);
 
router.post('/', userController.createUser);

router.delete('/:id', );

router.put('/:id', );

export default router;