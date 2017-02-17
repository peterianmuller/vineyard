import Alerts from '../models/alerts';

const newAlert = (req, res, next) => {
  return Alerts.create({
    text: req.body.text,
    location: req.body.location,
    alertTime: req.body.alertTime
  })
  .then((alert) => {
    if (alert) {
      res.json(alert);
    }
    next();
  }).catch((err) => {
    console.log('could not add alert ', err);
  });
};

const getAlert = (req, res, next) => {};
const getAlerts = (req, res, next) => {};
const updateAlert = (req, res, next) => {};
const deleteAlert = (req, res, next) => {};

export default {
  newAlert,
  getAlert,
  getAlerts,
  updateAlerts,
  deleteAlert
};
