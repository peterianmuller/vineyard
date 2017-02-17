import Blocks from '../models/blocks';

const newBlock = (req, res, next) => {
  return Blocks.create({
    number: req.body.number
  })
  .then((block) => {
    if (block) {
      res.json(block);
    }
    next();
  }).catch((err) => {
    console.log('could not add block ', err);
  });
};

const getBlock = (req, res, next) => {
  return Blocks.find({
    where: {
      number: req.body.number
    }
  })
  .then((block) => {
    if (block) {
      res.json(block);
    }
    next();
  }).catch((err) => {
    console.log('could not find block ', err);
  });
};

const getBlocks = (req, res, next) => {
  return Blocks.findAll()
  .then((blocks) => {
    if (blocks) {
      res.json(blocks);
    }
    next();
  }).catch((err) => {
    console.log('could not find blocks ', err);
  });
};
// TODO: BUILD UPDATEBLOCK
const updateBlock = (req, res, next) => {};

const deleteBlock = (req, res, next) => {
  return Blocks.find({
    where: {
      number: req.body.number
    }
  })
  .then((block) => {
    if (block) {
      block.destroy();
      console.log('block deleted');
    }
    next();
  }).catch((err) => {
    console.log('could not delete block', err);
  });
};

export default {
  newBlock,
  getBlock,
  getBlock,
  updateBlock,
  deleteBlock
};
