import { newRow } from '../db/controllers/rows';

export function createRow(req, res, next) {
  const params = {
    number: req.body.number,
    point1: req.body.point1,
    point2: req.body.point2,
    clone: req.body.clone,
    varietal: req.body.varietal,
    rootStock: req.body.rootStock,
    status: req.body.status
  };
  return newRow(params)
  .then((row) => {
    if (row) {
      res.json(row);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add row ', err);
  });
}
