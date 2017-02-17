import Alerts from '../models/alerts';

const newAlert = (params) => {
  return Alerts.create({
    text: params.text,
    location: params.location,
    alertTime: params.alertTime
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
  updateAlert,
  deleteAlert
};
