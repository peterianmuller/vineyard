//To do : make get request to populate state of notes
import axios from 'axios';

export function getNotes(){
  return dispatch => axios.get('/api/notes', {
    //get notes data from db
  })
  .then(resp => dispatch(setNotes(resp)))
  .catch(err => {
    console.log(err);
  });
}

export function setNotes(data){
  return;
};