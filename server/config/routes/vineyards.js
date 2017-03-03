import express from 'express';
import { createVineyard, getAllVineyards } from '../../controllers/vineyards';

const router = express.Router();

router.route('/').post(createVineyard);
//need to send the current user's organization id as a param
router.route('/').get(getAllVineyards)

export default router;
