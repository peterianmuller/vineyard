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

export function postData(data) {
  console.log(data);	
  return addToDataArray(data);
};



function clearDataFormFields() {
  return {
    type: "CLEAR_DATA_FORM_FIELDS"
  };
}





