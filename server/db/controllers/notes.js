import Notes from '../models/notes';

export const newNote = (params) => {
  return new Notes({
    title: params.title,
    text: params.text,
    date_time: params.date_time,
    latitude: params.latitude,
    longitude: params.longitude,
    image_url: params.image_url,
    note_author_id: params.note_author_id
  }).save();
};

export const getAllNotes = () => {
  return Notes.forge().orderBy('date_time','DESC').fetchAll();
};

const deleteNote = (params) => {
  return new Note({title: params.title})
  .fetch()
  .destroy()
};

export default {
  newNote,
  getAllNotes,
  deleteNote
}
