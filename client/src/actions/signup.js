//React requirements
import { push } from 'react-router-redux';

//AJAX
import axios from 'axios';
//Actions
import { validateUser } from './navigation';

export function setSignupItem(item, value) {
  var toReturn = {
    value
  };
  toReturn.type = "SET_SIGNUP_" + item.toUpperCase();

  return toReturn;
}


/**
 * Post new user.
 * @function signup
 * @param {object} userAccount
 * @description Sends post request to PostgreSQL database to insert new user.
 * @memberOf SignUp Actions
 */
export function signup(userAccount) {
  return dispatch => axios.post('/auth/register', {
    firstName: userAccount.first_name,
    lastName: userAccount.last_name,
    userName: userAccount.username,
    password: userAccount.password,
    phoneNumber: userAccount.phone_number,
    email: userAccount.email,
    birthdate: userAccount.birthdate,
    accountRestrictions: userAccount.account_restrictions,
    organization: userAccount.organization
  })
  .then(resp => {
    localStorage.setItem('token', resp.data.token);

    dispatch(clearSignup());
    dispatch(push('/'));
  })
  .catch((err) => {
    console.log(err);
  })
}

export function getOrgs() {
  return {
   type: "SET_SIGNUP_ORG_LIST", 
    payload: {
      promise: axios.get('/orgAuth/organization').then(res => res.data)
    }
  }
}

function clearSignup() {
  return {
    type: "CLEAR_SIGNUP_FIELDS"
  };
}
