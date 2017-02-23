import express from 'express';
import { createBlock } from '../../controllers/blocks';

const router = express.Router();

// === BLOCKS ROUTING ===

// CREATE NEW BLOCK
router.route('/').post(createBlock);

export default router;
