import Vineyards from '../models/vineyards';

const newVineyard = (params) => {
  return new Vineyards ({
    name: params.name,
    phoneNumber: params.phoneNumber,
    appellation: params.appellation
  });
};

const getVineyard = (params) => {
  return new Vineyards({name: params.name}).fetch();
};


// /*==================need to refactor to BS/KNX=======================*/
// const getVineyards = (req, res, next) => {
//   return Vineyards.findAll()
//   .then((vineyards) => {
//     if (vineyards) {
//       // QUESTION: BETTER TO USE RES.SEND?
//       res.json(vineyards);
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not find vineyards ', err);
//   });
// };
// // TODO: BUILD OUT UPDATEVINEYARD
// const updateVineyard = (req, res, next) => {};

// const deleteVineyard = (req, res, next) => {
//   return Vineyards.find({
//     where: {
//       name: req.body.name
//     }
//   })
//   .then((vineyard) => {
//     if (vineyard) {
//       vineyard.destroy();
//       console.log('vineyard deleted');
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not delete vineyard ', err);
//   });
// };

/*==================need to refactor to BS/KNX=======================*/

export default {
  newVineyard,
  getVineyard
  // getVineyards,
  // updateVineyard,
  // deleteVineyard
};
