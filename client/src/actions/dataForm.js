//React requirements
import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';


export function appendDataFormItem(item, value) {
  var toReturn = { value };

  toReturn.type = "APPEND_DATA_FORM_" + item.toUpperCase();

  return toReturn;
}