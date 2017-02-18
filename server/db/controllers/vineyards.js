import Vineyards from '../models/vineyards';

const newVineyard = (params) => {
  return Vineyards.create({
    name: params.name,
    phoneNumber: params.phoneNumber,
    appellation: params.appellation
  })
};
// QUESTION: SHOULD WE ADD SEQUELIZE.AND FOR ORGANIZATION NAME IN CASE MULTIPLE VINEYARDS SHARE THE SAME NAME?
const getVineyard = (req, res, next) => {
  return Vineyards.find({
    where: {
      name: req.body.name
    }
  })
  .then((vineyard) => {
    if (vineyard) {
      // QUESTION: BETTER TO USE RES.SEND?
      res.json(vineyard);
    }
    next();
  }).catch((err) => {
    console.log('could not find vineyard ', err);
  });
};

const getVineyards = (req, res, next) => {
  return Vineyards.findAll()
  .then((vineyards) => {
    if (vineyards) {
      // QUESTION: BETTER TO USE RES.SEND?
      res.json(vineyards);
    }
    next();
  }).catch((err) => {
    console.log('could not find vineyards ', err);
  });
};
// TODO: BUILD OUT UPDATEVINEYARD
const updateVineyard = (req, res, next) => {};

const deleteVineyard = (req, res, next) => {
  return Vineyards.find({
    where: {
      name: req.body.name
    }
  })
  .then((vineyard) => {
    if (vineyard) {
      vineyard.destroy();
      console.log('vineyard deleted');
    }
    next();
  }).catch((err) => {
    console.log('could not delete vineyard ', err);
  });
};

export default {
  newVineyard,
  getVineyard,
  getVineyards,
  updateVineyard,
  deleteVineyard
};