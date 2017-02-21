import axios from 'axios';

export function getNotes(){
  console.log('inside getNotes');
  return dispatch => axios.get('/api/note')
  .then(resp => {
    console.log('inside');
    console.log(resp.data);
    return dispatch(setNotes(resp));
  })
  .catch(err => {
    console.log('inside catch');
    console.log(err);
  });
}

export function setNotes(data){
  return;
};