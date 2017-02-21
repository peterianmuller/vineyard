import express from 'express';

import vineyardsController from '../../db/controllers/vineyards';

const router = express.Router();

// === VINEYARD ROUTING ===

router.route('/')
  // CREATE NEW VINEYARD
  .post((req, res, next) => {
    const params = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      appellation: req.body.appellation
    };
    return vineyardsController.newVineyard(params)
    .then((vineyard) => {
      if (vineyard) {
        res.json(vineyard);
      } else {
        next();
      }
    }).catch((err) => {
      console.log('could not add vineyard ', err);
    });
});

// router.route('/')
//   .get()

export default router;
