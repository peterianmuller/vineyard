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

/**
 * Sends Post request for Polygon creation.
 * @function
 * @param {array} data - Array of newly created polygon coordinate arrays (e.g. [[ [latlng], [latlng] ], [ [latlng], [latlng] ]...] ). Post request to PostgreSQL on creation of new user polygons. Polygons are tied to an organization id, so user's within the same org can view all org polygons.
 */

export function postMapData(data) {
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

/**
 * Request polygon data form database.
 * @function
 * @param {integer} og_id - User's organization primary key. For lookup of all user's organization's polygons.
 */
export function getShapeData(org_id) {
  return dispatch => axios.get('api/polygons',{
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token') 
    },
    params: {
      data: org_id
    }
  })
  .then((res) => {
    dispatch(addPolys(res.data));
  })
  .catch((err) => {
    console.log('error getting shape data: ', err);
  })
}
