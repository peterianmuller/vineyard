import vineyardsController from '../db/controllers/vineyards';

export function createVineyard(req, res, next) {
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
}
