import Blocks from '../models/blocks';

const newBlock = (params) => {
  return new Blocks({
    number: params.number,
    vineyard: params.vineyard
  })
};

const getBlock = (params) => {
  return new Blocks({number: params.number, vineyard: params.vineyard}).fetch();
};

/*==================need to refactor to BS/KNX=======================*/
// const getBlocks = (req, res, next) => {
//   return Blocks.findAll()
//   .then((blocks) => {
//     if (blocks) {
//       res.json(blocks);
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not find blocks ', err);
//   });
// };
// // TODO: BUILD UPDATEBLOCK
// const updateBlock = (req, res, next) => {};

// const deleteBlock = (req, res, next) => {
//   return Blocks.find({
//     where: {
//       number: req.body.number
//     }
//   })
//   .then((block) => {
//     if (block) {
//       block.destroy();
//       console.log('block deleted');
//     }
//     next();
//   }).catch((err) => {
//     console.log('could not delete block', err);
//   });
// };
/*==================need to refactor to BS/KNX=======================*/

export default {
  newBlock,
  getBlock
  // getBlock,
  // updateBlock,
  // deleteBlock
};
