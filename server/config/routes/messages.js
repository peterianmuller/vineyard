import express from 'express';
import { postMessage, getAllMessagesByRoom } from '../../controllers/messages';

const router = express.Router();

router.route('/').post(postMessage);
router.route('/byRoomId/:id').get(getAllMessagesByRoom);

export default router;
