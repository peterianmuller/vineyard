import Rows from '../models/rows';

const newRow = (req, res, next) => {
  return Rows.create({
    number: req.body.number,
    point1: req.body.point1,
    point2: req.body.point2,
    clone: req.body.clone,
    varietal: req.body.varietal,
    rootStock: req.body.rootStock,
    status: req.body.status
  })
  .then((row) => {
    if (row) {
      res.json(row);
    }
    next();
  }).catch((err) => {
    console.log('could not add row ', err);
  });
};
// TODO: FIGURE OUT HOW TO SEARCH BY ANY PARAMETER BY WHICH WE'RE LOOKING FOR A ROW, EITHER BY LOCATION, NUMBER, ROOTSTOCK
const getRow = (req, res, next) => {
  return Rows.find({
    where: {

    }
  })
};
// WILL WE EVER BE GETTING ALL ROWS? OR SIMPLY ALL ROWS WITHIN A GIVEN BLOCK OR VINEYARD, OR EVEN ALL ROWS BY VARIETAL OR ROOTSTOCK, ETC.
const getRows = (req, res, next) => {
  return Rows.findAll()
  .then((rows) => {

  })
};
const updateRow = (req, res, next) => {};
const deleteRow = (req, res, next) => {};

export default {
  newRow,
  getRow,
  getRows,
  updateRow,
  deleteRow
}
