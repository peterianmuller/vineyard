import axios from 'axios'; 

import { push } from 'react-router-redux';

export function setOrgSignupItem(item, value) {
  return { 
    type: "SET_ORG_SIGNUP_" + item.toUpperCase(),
    value
  };
}

export function clearOrgSignup() {
  return {
    type: "CLEAR_ORG_SIGNUP",
  };
}




/**
 * Send post request to add new organization.
 * @function createOrg
 * @param {object} org
 * @description Sends post request to PostgreSQL database to insert a new organization.
 * @memberOf OrgSignup Action
 */
export function createOrg(org) {
  return dispatch => (
    axios.post('/orgAuth/organization', 
      org, {
        headers: {
          'Authorization': 'JWT ' + localStorage.getItem('token') 
        }
      }).then(() => { 
        dispatch(clearOrgSignup());
        dispatch(push('/'));
      })
  );

}
