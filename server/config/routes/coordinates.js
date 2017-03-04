import express from 'express';

import { addNewCoordinate } from '../../controllers/coordinates';

const router = express.Router();

router.route('/').post(addNewCoordinate);
// router.route('/').get();

export default router;