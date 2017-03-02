//React requirements
import { browserHistory } from 'react-router';

//update the state of the object at that key
// 

export function addDataToArray(key, prop, value) {
  var toReturn = { value, key };
  toReturn.type = "SET_DATA_INPUT_" + prop.toUpperCase();
  return toReturn;
}

export function addRowToTable() {
  return {
  	type: "ADD_ROW"
  }
}

