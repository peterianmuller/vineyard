import { dispatch } from 'react-redux';
import axios from 'axios';


export function setAnalysisItem (item, value) {
  var toReturn = { value };
  toReturn.type = "SET_" + item.toUpperCase();
  return toReturn;
}

export function displayDataResults(value) {
	return {
		type: 'SET_ANALYSIS',
		value: value
	}
}

const parseData = (input) => {
  return input.map((data_point) => {
      return [parseInt(data_point.date), data_point.result]
  })
}

export const getAnalysis = (vineyardInfo) => {
	return dispatch => axios.get('/api/data', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      data: vineyardInfo
    }
  })
  .then((res) => {
  	let parsedData = parseData(res.data);
  	dispatch(displayDataResults(parsedData));
  })
  .catch((err) => {
  	if(err) {
  		console.log('error getting data, catch block in data vis actions: ', err);
  	}
  })
}