//React requirements
import { browserHistory } from 'react-router';
import { dispatch } from 'react-redux';


//update the state of the object at that key

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


export function testOrgs(name) {
  axios.get('/api/organization/information', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      name: name
    }
  })  
  .then((res) => {
    console.log('this is the result from the axios call: ', res);
  })
  .catch((err)=> {
    console.log(err);
  })
};

export function postMapData(data) {
  // add to data array on client-side 

  console.log('data looks like', data);

  //below is the axios post request that can be used when the route is ready to go!
  axios.post('/api/polygons', data, { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') } })
  .then((response) => {
    console.log('MEOOOOOOOWOWOWOWOWOWWOWOWOWOWOW', response);
    clearDataPoints();
  }) 
  .catch((err) => {
    console.log(err);
  })

  //clear state after posting

  clearDataPoints();


};

function addPolys(value) {
  return {
    type: 'APPEND_POLYGONS',
    value: value
  }
}

export function getShapeData() {
  console.log('meow, get shape data being ran');
  return dispatch => axios.get('api/polygons', { headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }})
  .then((res) => {
    console.log('these are allllll the shapppppeeees: ', res);
    dispatch(addPolys(res.data));
  })
  .catch((err) => {
    console.log('error getting shape data: ', err);
  })
}

