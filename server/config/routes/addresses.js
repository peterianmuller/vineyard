import express from 'express';
import { createAddress, findAddressById  } from '../../controllers/addresses';


const router = express.Router();

// === ADDRESSES ROUTING ===

// CREATE NEW ADDRESS
router.route('/').post(createAddress);
router.route('/').get(findAddressById);


export default router;
