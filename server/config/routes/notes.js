import express from 'express';

import notesController from '../../db/controllers/notes';

const router = express.Router();

// === NOTES ROUTING ===

router.route('/')
  // CREATE NEW NOTE
  .post((req, res, next) => {
    console.log('inside note route controller');
    const params = {
      title: req.body.title,
      text: req.body.text,
      location: req.body.location,
      image: req.body.image
    };
    return notesController.newNote(params)
    .then((note) => {
      console.log('inside then block of notes router');
      if (note) {
        res.json(note);
      } else {
        next();
      }
    }).catch((err) => {
      console.log('could not add note ', err);
    });
});

router.route('/')
  .get((req, res, next) => {
    return notesController.getAllNotes()
    .then((notes) => {
      if (notes) {
        console.log('notes exist server');
        res.json(notes);
      } else {
        console.log('going to next');
        next();
      }
    }).catch((err) => {
      console.log('could not retrieve all notes ', err);
    });
  });

export default router;
