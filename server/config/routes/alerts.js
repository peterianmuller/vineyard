import express from 'express';
import { createAlert } from '../../controllers/alerts';

const router = express.Router();

// === ALERTS ROUTING ===

// CREATE NEW ALERT
router.route('/').post(createAlert);

export default router;
