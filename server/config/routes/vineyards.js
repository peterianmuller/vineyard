import express from 'express';
import { createVineyard } from '../../controllers/vineyards';

const router = express.Router();

router.route('/').post(createVineyard);

export default router;
