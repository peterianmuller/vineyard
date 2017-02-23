import express from 'express';
import { createAddress } from '../../controllers/addresses';


const router = express.Router();

// === ADDRESSES ROUTING ===

// CREATE NEW ADDRESS
router.route('/').post(createAddress);

export default router;
