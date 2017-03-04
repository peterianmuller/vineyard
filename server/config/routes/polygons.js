import express from 'express';

import { insertNewPolygon } from '../../controllers/polygons';

const router = express.Router();

router.route('/').post(insertNewPolygon);
// router.route('/').get();


export default router;
