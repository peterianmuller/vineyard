import axios from 'axios';

export function incrementTime() {
  return {
    type: "INCREMENT_TIME", 
  };
}
export function setHomeLocation(data){
  return {
    type: "UPDATE_LOCATION",
    value: data
  };
}

export function setFOrC() {
  return {
    type: "SET_F_OR_C",
  };
}

/**
 * Saves Org's vineyad info to localStorage.
 * @function testOrgs
 * @param {}
 * @description This sends a get request to retrieve a JSON tree of all relations nested under an Organization. Then this is saved to Local Storage for population of pulldown menus and address matching.
 * @memberOf homeView Actions
 */

export function setLatLon(lat, lon) {
  return {
    type: "SET_HOME_LAT_LON",
    lat,
    lon
  };
}

export const testOrgs = (username) => {
  axios.get('/api/organization/information', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    },
    params: {
      name: username
    }
  })  
  .then((res) => {
    var vineyards = {
      vineyards: res.data.vineyards
    }
    var org_info = {
      orgs: res.data
    }
    window.localStorage.setItem('vineyards', JSON.stringify(vineyards));
    window.localStorage.setItem('orgs', JSON.stringify(org_info));
  })
  .catch((err)=> {
    console.log('error getting org vineyard information: ', err);
  })
}

export const retrieveAllData = () => {
  console.log('meowwwwwwwwwwwwwwwwwwww')
  axios.get('/api/data/all', {
    headers: {
      'Authorization': 'JWT ' + localStorage.getItem('token')  
    }
  })
  .then((res) => {
    console.log('this is hopefully the response from the server will all the data!: ', res);
  }).catch((err) => {
    console.log(err);
  })
}