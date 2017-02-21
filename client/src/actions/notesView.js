import axios from 'axios';

export function getNotes(){
  console.log('inside getNotes');
  return dispatch => axios.get('/api/note')
  .then(resp => {
    console.log('inside');
    console.log('this is', resp.data);
    return dispatch(setNotes(resp.data));
  })
  .catch(err => {
    console.log('inside catch');
    console.log(err);
  });
}

export function setNotes(data){
  console.log('data is', data);
  return {
    type: 'GET_NOTES',
    value: data
  }
};