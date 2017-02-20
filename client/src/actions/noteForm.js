import axios from 'axios';

export function getWeather(note) {
  return dispatch => axios.post('/api/weather', {
    lat: note.lat,
    lon: note.lon
  }).then(resp => dispatch(setNoteWeather(resp)))
    .catch(err => {
      console.log(err);
    });
}

export function setCurrentlyRecording(value) {
  return {
    type: "SET_CURRENTLY_RECORDING",
    value
  };
}

export function setNoteFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "SET_NOTE_FORM_" + item.toUpperCase();

  return toReturn;
}

export function appendNoteFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "APPEND_NOTE_FORM_" + item.toUpperCase();

  return toReturn;
}

//add in rest of cols in schema 
export function postNote(note) {
  return dispatch => axios.post('/api/note', {
    title: note.title,
    text: note.textArea,
    location: '3',
    image: ''
  })
  .then(() => dispatch(clearNoteFields()))
  .catch((err) => {
    console.log(err);
  })
}

function clearNoteFields() {
  return {
    type: "CLEAR_NOTE_FIELDS"
  };
}
