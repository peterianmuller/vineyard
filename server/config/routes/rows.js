import express from 'express';
import { createRow } from '../../controllers/rows';

const router = express.Router();

router.route('/').post(createRow);

export default router;
