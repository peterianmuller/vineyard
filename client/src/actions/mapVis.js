//React requirements
import { browserHistory } from 'react-router';


//update the state of the object at that key

import axios from 'axios';

export function addMapDataPoint(value) {
  return {
    type: 'ADD_MAP_POINT',
    value: value
  }  
}

export function clearDataPoints(value) {
  return {
    type: 'CLEAR_MAP_POINTS'
  }  
}

// export function postNote(note) {
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

export function testOrgs(name) {
  axios.get('/api/organization/information', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      name: name
    }
  })  
  .then((res) => {
    console.log('this is the result from the axios call: ', res);
  })
  .catch((err)=> {
    console.log(err);
  })
};

export function postMapData(data) {
  // add to data array on client-side 

  console.log('data looks like', data);
  clearDataPoints();

  // axios.post('/api/mapData', data, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
  // .then((response) => {
  //   console.log(response);
  // }) 
  // .catch((err) => {
  //   console.log(err);
  // })
};

