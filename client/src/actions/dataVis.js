import axios from 'axios';


export function setAnalysisItem (item, value) {
  var toReturn = { value };
  toReturn.type = "SET_" + item.toUpperCase();
  return toReturn;
}

export function getAnalysis(vineyardInfo) {
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
  	console.log('res from the get Analysis route on the client: ', res);
  })
  .catch((err) => {
  	if(err) {
  		console.log('error getting data, catch block in data vis actions: ', err);
  	}
  })
}

// export function setAnaylsis(data) {
//   return {
//     type: "GET_ANALYSIS",
//     value: data
//   };
// }