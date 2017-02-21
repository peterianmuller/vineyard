import Notes from '../models/notes';

const newNote = (params) => {
  return Notes.create({
    title: params.title,
    text: params.text,
    location: params.location,
    image: params.image
  });
};

const getAllNotes = () => {
    return Notes.findAll();
};
const getNote = (req, res, next) => {};
const updateNote = (req, res, next) => {};
const deleteNote = (req, res, next) => {};

export default {
  newNote,
  getNote,
  getAllNotes,
  updateNote,
  deleteNote
}
