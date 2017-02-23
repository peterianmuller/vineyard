import express from 'express';
import { createUser, getUserByUsername, getUserById } from '../../controllers/users';

const router = express.Router();

router.route('/').post();
router.route('/').get();

export default router;
