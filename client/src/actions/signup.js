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


export function signup(userAccount) {
  var combinedBirthdate = userAccount.birth_year + '-' + userAccount.birth_month  + '-' + userAccount.birth_day;
  return dispatch => axios.post('/auth/register', {
    firstName: userAccount.first_name,
    lastName: userAccount.last_name,
    userName: userAccount.username,
    password: userAccount.password,
    phoneNumber: userAccount.phone_number,
    email: userAccount.email,
    birthdate: combinedBirthdate,
    accountRestrictions: userAccount.account_restrictions,
    orgnaization: userAccount.organization
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

function clearSignup() {
  return {
    type: "CLEAR_SIGNUP_FIELDS"
  };
}
