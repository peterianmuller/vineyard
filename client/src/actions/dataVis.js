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

/**
 * Parse data for graphing component visualization.
 * @function
 * @param {array} input - Array of objects from the PostgreSQL query. Transforms array into a date, results pairs that can be graphed by the Highcharts.js interface.
 *
 */
const parseData = (input) => {
  return input.map((data_point) => {
      return [parseInt(data_point.date), data_point.result]
  })
}

/**
 * Requests Analytical data from the PostgreSQL database.
 * @function
 * @param {object} vineyardInfo - Search parameters for database analysis results query (vineyard, block, row, analysis method type).
 * @param {string} author - The author of the book.
 */
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