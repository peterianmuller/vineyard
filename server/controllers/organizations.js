import organizationsController from '../db/controllers/organizations';

export function createOrganization(req, res, next) {
  const params = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    tier: req.body.tier
  };
  return organizationsController.newOrganization(params)
  .then((organization) => {
    if (organization) {
      res.json(organization);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add organization ', err);
  });
}
