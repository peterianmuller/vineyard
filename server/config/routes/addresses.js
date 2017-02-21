import express from 'express';

import addressesController from '../../db/controllers/addresses';

const router = express.Router();

// === ADDRESSES ROUTING ===

router.route('/')
  // CREATE NEW ADDRESS
  .post((req, res, next) => {
    const params = {
      street: req.body.street,
      street2: req.body.street2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country
    };
    return addressesController.newAddress(params)
    .then((address) => {
      if (address) {
        res.json(address);
      } else {
        next();
      }
    }).catch((err) => {
      console.log('error adding address ', err);
    });
});

export default router;
