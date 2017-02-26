import Notes from '../models/notes';

const newNote = (params) => {
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

const getAllNotes = () => {
  return Notes.forge().orderBy('date_time','DESC').fetchAll();
};

const deleteNote = (params) => {
  //may need to modify value for title property
  return new Note({title: params.title})
  .fetch()
  .destroy()
  //this should delete the note instance from te database
};


/*==================need to refactor to BS/KNX=======================*/
//for editing notes
// const updateNote = (params) => {};
//for deleting notes
/*==================need to refactor to BS/KNX=======================*/

export default {
  newNote,
  getAllNotes
  // updateNote,
  deleteNote
}
