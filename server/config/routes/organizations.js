import express from 'express';
import { createOrganization, fetchAllOrgs } from '../../controllers/organizations';

const router = express.Router();

router.route('/').post(createOrganization);
router.route('/').get(fetchAllOrgs);

export default router;
