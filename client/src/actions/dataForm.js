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




// export function postData(data) {
//   console.log('inside postNote on the front end', note, 'then something else');
  
//   return dispatch => axios.post('/api/data', {
// 	  vineyard: dataForm.vineyard,
// 	  block: dataForm.block,
// 	  varietal: dataForm.varietal,
// 	  clone: dataForm.clone,
// 	  pH: dataForm.pH,
// 	  brix: dataForm.brix,
// 	  NaOH: dataForm.NaOH
//   }, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
//   .then(() => {
//     dispatch(clearDataFormFields());
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





