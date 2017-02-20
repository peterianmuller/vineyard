import express from 'express';

import alertsController from '../../db/controllers/alerts';

const router = express.Router();

// === ALERTS ROUTING ===

router.route('/')
  // CREATE NEW ALERT
  .post((req, res, next) => {
    const params = {
      text: req.body.text,
      location: req.body.location,
      alertTime: req.body.alertTime
    };
    return alertsController.newAlert(params)
    .then((alert) => {
      if (alert) {
        res.json(alert);
      } else {
        next();
      }
    }).catch((err) => {
      console.log('could not add alert ', err);
    });
});

export default router;
