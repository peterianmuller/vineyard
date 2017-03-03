import Vineyards from '../models/vineyards';

const newVineyard = (params) => {
  return new Vineyards ({
    name: params.name,
    phoneNumber: params.phoneNumber,
    appellation: params.appellation
  });
};

const allVineyards = (params) => {
  return Vineyards.forge().orderBy('date_time','DESC').fetchAll();
};

export default {
  newVineyard,
  allVineyards
  // updateVineyard,
  // deleteVineyard
};
