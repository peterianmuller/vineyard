import Notes from '../models/notes';

export const newNote = (params) => {
  console.log('inside newNote db controller');
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
  //may need to modify value for title property
  return new Note({title: params.title})
  .fetch()
  .destroy()
  //this should delete the note instance from te database
};

export default {
  newNote,
  getAllNotes,
  // updateNote,
  deleteNote
}
