import express from 'express';
import { createOrganization, fetchAllOrgs, fetchAllOrgVineyardData } from '../../controllers/organizations';

const router = express.Router();

router.route('/').post(createOrganization);
router.route('/').get(fetchAllOrgs);
//this should be called on data form load, then response json cached to the local storage
//axios get sent with the id paramater for the organization
router.route('/information').get(fetchAllOrgVineyardData);

export default router;
