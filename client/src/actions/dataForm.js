//React requirements
import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';

//other actions 
import { addToDataArray } from './dataArray';


export function appendDataFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "APPEND_DATA_FORM_" + item.toUpperCase();

  return toReturn;
}

// export function postNoteExample(note) {
//   console.log('inside postNote on the front end', note, 'then something else');
  
//   return dispatch => axios.post('/api/note', {
//     title: note.title,
//     text: note.textArea,
//     date_time: note.date,
//     latitude: note.lat,
//     longitude: note.lon,
//     image_url: note.uploadedImgUrl,
//     note_author_id: note.username
//   }, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
//   .then(() => {
//     dispatch(clearNoteFields());
//     browserHistory.push('/home');

//     })
//   .catch((err) => {
//     console.log(err);
//   })
// } 

export function postData(data) {
  // add to data array on client-side	
  console.log(data);	
  return addToDataArray(data);
  //return clearDataFormFields();
};



function clearDataFormFields() {
  return {
    type: "CLEAR_DATA_FORM_FIELDS"
  };
}





