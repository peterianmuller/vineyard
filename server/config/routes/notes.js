import express from 'express';
import { createNote, getAllNotes } from '../../controllers/notes';


const router = express.Router();

router.route('/').post(createNote);
router.route('/').get(getAllNotes);

export default router;
