import notesController from '../db/controllers/notes';

export function createNote(req, res, next) {
  const params = {
    title: req.body.title,
    text: req.body.text,
    location: req.body.location,
    image: req.body.image
  };
  return notesController.newNote(params)
  .then((note) => {
    if (note) {
      res.json(note);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add note ', err);
  });
}

export function getAllNotes(req, res, next) {
  return notesController.getAllNotes()
  .then((notes) => {
    if (notes) {
      res.json(notes);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not retrieve all notes ', err);
  });
}
