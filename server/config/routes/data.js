import express from 'express';
//data route controllers not yet written
import { addNewData, getDataByRowId, getAllData } from '../../controllers/data';

const router = express.Router();

router.route('/').post(addNewData);
router.route('/').get(getDataByRowId);
router.route('/all').get(getAllData);

export default router; 