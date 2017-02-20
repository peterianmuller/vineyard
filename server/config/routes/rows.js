import express from 'express';

import rowsController from '../../db/controllers/rows';

const router = express.Router();

// === ROWS ROUTING ===

router.route('/')
  // CREATE NEW ROW
  .post((req, res, next) => {
    const params = {
      number: req.body.number,
      point1: req.body.point1,
      point2: req.body.point2,
      clone: req.body.clone,
      varietal: req.body.varietal,
      rootStock: req.body.rootStock,
      status: req.body.status
    };
    return rowsController.newRow(params)
    .then((row) => {
      if (row) {
        res.json(row);
      } else {
        next();
      }
    }).catch((err) => {
      console.log('could not add row ', err);
    });
});

export default router;
