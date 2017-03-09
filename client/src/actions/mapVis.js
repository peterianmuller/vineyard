//React requirements
import { browserHistory } from 'react-router';
import { dispatch } from 'react-redux';

import axios from 'axios';

export function addMapDataPoint(value) {
  return {
    type: 'ADD_MAP_POINT',
    value: value
  }  
}

export function clearDataPoints(value) {
  return {
    type: 'CLEAR_MAP_POINTS'
  }  
}

export function postMapData(data) {
  // add to data array on client-side 
  //below is the axios post request that can be used when the route is ready to go!
  axios.post('/api/polygons', data, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
  .then((response) => {
    clearDataPoints();
  }) 
  .catch((err) => {
    console.log(err);
  })
  clearDataPoints();
};

function addPolys(value) {
  return {
    type: 'APPEND_POLYGONS',
    value: value
  }
}

export function getShapeData() {
  return dispatch => axios.get('api/polygons', { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }})
  .then((res) => {
    dispatch(addPolys(res.data));
  })
  .catch((err) => {
    console.log('error getting shape data: ', err);
  })
}
