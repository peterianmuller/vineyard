import { newVineyard, getVineyard } from '../db/controllers/vineyards';

export function createVineyard(req, res, next) {
  const params = {
    name: req.body.name,
    phoneNumber: req.body.phoneNumber,
    appellation: req.body.appellation,
    organization_id: req.body.organization_id,
    address_id: req.body.address_id
  };
  return newVineyard(params)
  .then((vineyard) => {
    if (vineyard) {
      res.json(vineyard);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add vineyard ', err);
  });
}

export function getAllVineyards(req, res, next) {
  params = {
    organization_id: req.body.organization_id
  }
  return vineyardsController.allVineyards()
  .then((vineyards) => {
    if(vineyards) {
      res.json(vineyards);
    } else {
      next()
    }
  }).catch((err) => {
    console.log('error getting all vineyards: ', err);
  })
}