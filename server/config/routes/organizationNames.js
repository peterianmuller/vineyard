import express from 'express';
import { getAllOrgsFrom } from '../../controllers/allOrgs';

const router = express.Router();

router.route('/allorgs').get(getAllOrgsFrom);

export default router;