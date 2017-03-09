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