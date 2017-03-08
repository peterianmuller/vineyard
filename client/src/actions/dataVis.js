import axios from 'axios';


export function setAnalysisItem (item, value) {
  var toReturn = { value };

  toReturn.type = "SET_" + item.toUpperCase();

  return toReturn;
}

// export function getAnalysis() {
//   console.log('inside getNotes');
//   return dispatch => axios.get('/api/data', {
//     headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
//   })
//   .then(resp => {
//     console.log('inside');
//     console.log('this is', resp.data);
//     return dispatch(setAnalysis(resp.data));
//   })
//   .catch(err => {
//     console.log('inside catch');
//     console.log(err);
//   });
// }

// export function setAnaylsis(data) {
//   return {
//     type: "GET_ANALYSIS",
//     value: data
//   };
// }