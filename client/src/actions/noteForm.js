import axios from 'axios';
import { browserHistory } from 'react-router';

export function getWeather(note) {
  console.log(note);
  return dispatch => axios.post('/api/weather/byLatLon', {
    'lat': note.lat,
    'lon': note.lon
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

function setNoteWeather(value) {
  console.log('in set note weather');
  console.log(value);
  return {
    type: "IDKMAN"
  };
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

export function uploadImgToImgur(image) {
  return {
    type: "SET_UPLOADED_IMG_URL",
    payload: {
      promise: axios.post('https://api.imgur.com/3/image', 
        { 
          image: image.split(',')[1],
          type: 'base64'
        }, 
        {
          headers: {
            Authorization: 'Client-ID d945621dec69149',
            Accept: 'application/json'
          } 
        }).then(resp => { 
          browserHistory.push('/formValidation'); 
          return resp.data.data.link;
        }).catch(err => { 
          console.log('this is err', err); 
        })
    }
  }
}

export function setSelectedImage(value) {
  return {
    type: "SET_SELECTED_IMG",
    value
  };
}
