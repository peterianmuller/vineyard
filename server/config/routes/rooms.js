import express from 'express';
import { newRoom, freshestRoom } from '../../controllers/rooms';

const router = express.Router();

router.route('/').post(newRoom);
router.route('/mostRecent').get(freshestRoom);

export default router;

