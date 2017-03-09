import { newAddress, getAddressById } from '../db/controllers/addresses';

export function createAddress(req, res, next) {
  const params = {
    street: req.body.street,
    street2: req.body.street2,
    city: req.body.city,
    state: req.body.state,
    zip: req.body.zip,
    country: req.body.country
  };
  return newAddress(params)
  .then((address) => {
    if (address) {
      res.json(address);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('error adding address ', err);
  });
}


export function findAddressById(req, res, next) {
  console.log(' inside findAddressById ', req.query);
  const params = {
    id: req.query.id
  };
  return getAddressById(params)
  .then((address) => {
    //console.log('this is the addy', address);
    if (address) {
      res.json(address);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('error adding address ', err);
  });
}
