import express from 'express';
import { createOrganization } from '../../controllers/organizations';

const router = express.Router();

router.route('/').post(createOrganization);
router.route('/').get();

export default router;
