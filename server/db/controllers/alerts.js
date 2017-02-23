import Alerts from '../models/alerts';

const newAlert = (params) => {
  return new Alerts({
    text: params.text,
    alert_time: params.alertTime,
    latitude: params.latitude,
    longitude: params.longitude,
    author: params.username
  });
};

/*==================need to refactor to BS/KNX=======================*/
// const getAlert = (req, res, next) => {};
// const getAlerts = (req, res, next) => {};
// const updateAlert = (req, res, next) => {};
// const deleteAlert = (req, res, next) => {};
/*==================need to refactor to BS/KNX=======================*/

export default {
  newAlert
  // getAlert,
  // getAlerts,
  // updateAlert,
  // deleteAlert
};
