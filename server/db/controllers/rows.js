import Rows from '../models/rows';

export const newRow = (params) => {
  return new Rows({
    number: params.number,
    point1: params.point1,
    point2: params.point2,
    clone: params.clone,
    varietal: params.varietal,
    rootStock: params.rootStock,
    status: params.status,
    block: params.block
  })
  .save();
};
// TODO: FIGURE OUT HOW TO SEARCH BY ANY PARAMETER BY WHICH WE'RE LOOKING FOR A ROW, EITHER BY LOCATION, NUMBER, ROOTSTOCK
// const getRow = (req, res, next) => {
// return new Rows( {/*TBD*/} )
// };
// // WILL WE EVER BE GETTING ALL ROWS? OR SIMPLY ALL ROWS WITHIN A GIVEN BLOCK OR VINEYARD, OR EVEN ALL ROWS BY VARIETAL OR ROOTSTOCK, ETC.
// const getRows = (req, res, next) => {
//   return Rows.findAll()
//   .then((rows) => {

//   })
// };
// const updateRow = (req, res, next) => {};
// const deleteRow = (req, res, next) => {};
