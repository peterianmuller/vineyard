//AJAX
import axios from 'axios';

export function addEvent(event) {
  return {
    type: "ADD_NOTES",
    value: event
  };
}

/**
 * Retrieve notes from database.
 * @function getNodes
 * @param {} 
 * @description Get request to retrieve notes then dispatches action to add notes to the store.
 * @memberOf notesView Actions
 */
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

export function setLoading() {
  return {
    type: 'GET_NOTES'
  };
}

export function setNotes(data) {
  return {
    type: "SET_NOTES",
    value: data
  };
}

