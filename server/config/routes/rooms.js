import express from 'express';
import { newRoom } from '../../controllers/rooms';

const router = express.Router();

router.route('/').post(newRoom);

export default router;

