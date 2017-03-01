import express from 'express';
import { postMessage } from '../../controllers/messages';

const router = express.Router();

router.route('/').post(postMessage);

export default router;
