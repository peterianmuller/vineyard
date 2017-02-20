import express from 'express';

import organizationsController from '../../db/controllers/organizations';

const router = express.Router();

// === OGRANIZATION ROUTING ===

router.route('/')
  // CREATE NEW ORGANIZATION
  .post((req, res, next) => {
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
});
//
// app.route('/')
// .get()

export default router;
