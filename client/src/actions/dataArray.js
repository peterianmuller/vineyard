//React requirements
import { browserHistory } from 'react-router';

//update the state of the object at that key

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


var obj = {
    //should be row id, from the front end cache
    row: 1,
    date: 1488426073,
    results: {
        brix: 25.0,
        ph: 3.02,
        ta: 5.6
    }
}

export function postDataArray(data) {
  // add to data array on client-side 
  var dataToSend = data.map((experiment) => {
    return {row:experiment.row, date: experiment.date, results: {brix: experiment.brix, ph: experiment.pH, ta: experiment.titratable}};

    
  });

  
  console.log(dataToSend);  
  //return clearDataFormFields();
};

