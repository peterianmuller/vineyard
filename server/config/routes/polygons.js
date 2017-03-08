import express from 'express';

import { insertNewPolygon, findPolygonIds } from '../../controllers/polygons';

const router = express.Router();

router.route('/').post(insertNewPolygon);
//get all polygons that currently exist (rn not selecting by org id)
router.route('/').get(findPolygonIds);


export default router;
