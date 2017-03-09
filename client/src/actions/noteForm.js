//React requirements
import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';

/**
 * Post request to retrieve weather info from Weather underground API.
 * @function getWeather
 * @param {object} note - Note object from user input.
 * @param {boolean} noteCheck - Checks note format?
 * @description Initializes a post request to Weather API based on note's latitude and longitude.
 * memberOf noteForm Actions
 */
export function getWeather(note, noteCheck) {
  var cb = noteCheck ? setNoteWeather : setHomePageWeather;
  return dispatch => axios.post('/api/weather/byLatLon', {
    'lat': note.lat,
    'lon': note.lon
  }, { headers: { 'Authorization': 'JWT ' + localStorage.getItem('token') }
  }).then(resp => dispatch(cb(resp)))
    .catch(err => {
      console.log(err);
    });
}

export function setHomePageWeather(value) {
  return {
    type: "UPDATE_TEMP",
    value: value.data.current_observation
  };
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
  return {
    type: "UPDATE_WEATHER",
    value: {temp: value.data.current_observation.temp_f +'F, ' + value.data.current_observation.temp_c + 'C' , humidity: value.data.current_observation.relative_humidity}
  };
}

export function appendNoteFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "APPEND_NOTE_FORM_" + item.toUpperCase();

  return toReturn;
}

//add in rest of cols in schema

/**
 * Post request to retrieve weather info from Weather underground API.
 * @function postNote
 * @param {object} note - Note object from user input.
 * @param {boolean} noteCheck - Checks note format?
 * @description Initializes a post request to Weather API based on note's latitude and longitude.
 */
export function postNote(note) {
  
  return dispatch => axios.post('/api/note', {
    title: note.title,
    text: note.textArea,
    date_time: note.date,
    latitude: note.lat,
    longitude: note.lon,
    image_url: note.uploadedImgUrl,
    note_author_id: note.username
  }, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
  .then(() => {
    dispatch(clearNoteFields());
    browserHistory.push('/home');

    })
  .catch((err) => {
    console.log(err);
  })
}

export function clearNoteFields() {
  return {
    type: "CLEAR_NOTE_FIELDS"
  };
}


/**
 * Upload Image to Imgur
 * @function uploadImgToImgur
 * @param {string} image - Note object from user input.
 * @description Formats image string and sends post request to add image to imgur API.
 */
export function uploadImgToImgur(image) {
  if (image !== '') {
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
  } else {
    browserHistory.push('/formValidation');
  }
}

export function setSelectedImage(value) {
  return {
    type: "SET_SELECTED_IMG",
    value
  };
}
