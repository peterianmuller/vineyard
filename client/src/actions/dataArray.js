//React requirements
import { browserHistory } from 'react-router';

export function addToDataArray(value) {
  var toReturn = { value };

  toReturn.type = "ADD_TO_DATA_ARRAY";

  return toReturn;
}

export function addRowToTable() {
  return {
  	type: "ADD_ROW"
  }
}