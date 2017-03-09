//AJAX
import axios from 'axios';

export function addEvent(event) {
  return {
    type: "ADD_NOTES",
    value: event
  };
}

export function getNotes() {
  return dispatch => axios.get('/api/note', {
    headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
  })
  .then(resp => {
    return dispatch(setNotes(resp.data));
  })
  .catch(err => {
    console.log('error getting notes: ', err);
  });
}

export function setNotes(data) {
  return {
    type: "GET_NOTES",
    value: data
  };
}

