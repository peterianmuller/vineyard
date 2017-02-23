import alertsController from '../db/controllers/alerts';

export function createAlert(req, res, next) {
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
}
