import notesController from '../db/controllers/notes';

export function createNote(req, res, next) {
  console.log('inside create note server controller');
  console.log(req.body);
  console.log('user posting note:', req.body.note_author_id);
  console.log('this is the img url: ', req.body.image_url)
  const params = {
    title: req.body.title,
    text: req.body.text,
    date_time: req.body.date_time,
    latitude: req.body.latitude,
    longitude: req.body.longitude,
    image_url: req.body.image_url,
    note_author_id: req.body.note_author_id
  };

  return notesController.newNote(params)
    .then((note) => {
      if (note) {
        console.log('this is note in tehn', note);
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

export function deleteNote (req, res, next) {
  var params = req.body
  return notesController.deleteNote({title: params.title})
  .then(() => {
    res.json('Note delete successful');
  })
  .catch((err) => {
    console.log('could not delete note: ', err);
  })
}