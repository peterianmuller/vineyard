import express from 'express';

import blocksController from '../../db/controllers/blocks';

const router = express.Router();

// === BLOCKS ROUTING ===

router.route('/')
// CREATE NEW BLOCK
  .post((req, res, next) => {
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
});

export default router;
