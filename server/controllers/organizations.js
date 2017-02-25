import { newOrganization, getOrganization, getAllOrgs } from '../db/controllers/organizations';

export function createOrganization(req, res, next) {
  const params = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    tier: req.body.tier
  };
  return newOrganization(params)
  .then((organization) => {
    if (organization) {
      res.json(organization);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('error adding organization: ', err);
  });
}


