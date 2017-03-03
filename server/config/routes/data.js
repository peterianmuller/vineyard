import express from 'express';
//data route controllers not yet written
import { addNewData } from '../../controllers/data';

const router = express.Router();

router.route('/').post(addNewData);
// router.route('/').get(getData)

export default router; 