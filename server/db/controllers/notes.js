import Notes from '../models/notes';

const newNote = (req, res, next) => {
  return Notes.create({
    text: req.body.text,
    location: req.body.location,
    image: req.body.image
  })
  .then((note) => {
    if (note) {
      res.json(note);
    }
    next();
  }).catch((err) => {
    console.log('could not add note ', err);
  });
};

const getNote = (req, res, next) => {};
const getNotes = (req, res, next) => {};
const updateNote = (req, res, next) => {};
const deleteNote = (req, res, next) => {};

export default {
  newNote,
  getNote,
  getNotes,
  updateNote,
  deleteNote
}
