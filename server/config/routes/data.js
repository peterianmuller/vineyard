import express from 'express';
//data route controllers not yet written
import() from '../../controllers/data';

const router = express.Router();

router.route('/').post(createData);
// router.route('/').get(getData)

export default router;