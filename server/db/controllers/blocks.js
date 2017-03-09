import Blocks from '../models/blocks';

export const newBlock = (params) => {
  return new Blocks({
    number: params.number,
    vineyard: params.vineyard
  })
};

export const getBlock = (params) => {
  return new Blocks({number: params.number, vineyard: params.vineyard}).fetch();
};

