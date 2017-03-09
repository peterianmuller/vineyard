import axios from 'axios'; 

export function setOrgSignupItem(item, value) {
  return { 
    type: "SET_ORG_SIGNUP_" + item.toUpperCase(),
    value
  };
}


/**
 * Send post request to add new organization.
 * @function
 * @param {object} org - Sends post request to PostgreSQL database to insert a new organization.
 */
export function createOrg(org) {
	console.log('org to create: ', org)
  return dispatch => axios.post('/orgAuth/organization', org, {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(() => { console.log('hi') });
}
