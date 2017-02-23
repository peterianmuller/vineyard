import blocksController from '../db/controllers/blocks';

export function createBlock(req, res, next) {
  const params = {
    number: req.body.number
  };
  return blocksController.newBlock(params)
  .then((block) => {
    if (block) {
      res.json(block);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add block ', err);
  });
}
