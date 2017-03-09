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
        console.log('parse string to number', parseInt(data_point.date))
        return [parseInt(data_point.date), data_point.result]
    })
}

export const getAnalysis = (vineyardInfo) => {
	console.log('inside get Analysis')
	return dispatch => axios.get('/api/data', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      data: vineyardInfo
    }
  })
  .then((res) => {
  	console.log('res from the get Analysis route on the client: ', res.data);
  	let parsedData = parseData(res.data);
  	dispatch(displayDataResults(parsedData));
  })
  .catch((err) => {
  	if(err) {
  		console.log('error getting data, catch block in data vis actions: ', err);
  	}
  })
}