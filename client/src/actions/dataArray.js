//React requirements
import { browserHistory } from 'react-router';

//update the state of the object at that key

import axios from 'axios';

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

export function clearDataFields() {
  return {
    type: "CLEAR_DATA_FIELDS",
  };
}


var obj = {
    row: 1,
    date: 1488426073,
    results: {
        brix: 25.0,
        ph: 3.02,
        ta: 5.6
    }
}

/**
 * Post user-input data to database Anlysis table.
 * @function postDataArray
 * @param {array} data
 * @description Sends post request to PostgreSQL database with user-input analysis. Maps input fields into an object with relevant results, date, and row number.
 * @memberOf dataArray Actions
 */
 
export function postDataArray(data) {
  // add to data array on client-side 
  var dataToSend = data.map((experiment) => {
    return {row:experiment.row, date: experiment.date, results: {brix: experiment.brix, ph: experiment.pH, ta: experiment.titratable}};
  });
  
  return dispatch => axios.post('/api/data', 
    dataToSend, { 
      headers: {
        'Authorization': 'JWT ' + localStorage.getItem('token') 
      } 
    }).catch((err) => {
      console.log(err);
    })
};

