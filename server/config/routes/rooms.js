import express from 'express';
import { newRoom, freshestRoom, getRoomById } from '../../controllers/rooms';

const router = express.Router();

router.route('/').post(newRoom);
router.route('/mostRecent').get(freshestRoom);
router.route('/id/:id').get(getRoomById);

export default router;

