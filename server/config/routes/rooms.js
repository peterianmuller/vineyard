import express from 'express';
import { addUserToRoom, newRoom, freshestRoom, getRoomById, getUsersInRoom } from '../../controllers/rooms';

const router = express.Router();

router.route('/').post(newRoom);
router.route('/addUserToRoom/').post(addUserToRoom);
router.route('/mostRecent').post(freshestRoom);
router.route('/id/:id').get(getRoomById);
router.route('/id/:id/getUsers').get(getUsersInRoom);

export default router;

