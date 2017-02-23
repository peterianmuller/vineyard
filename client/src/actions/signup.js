import axios from 'axios';
import { validateUser } from './navigation';

export function setSignupItem(item, value) {
  var toReturn = {
    value
  };

  toReturn.type = "SET_SIGNUP_" + item.toUpperCase();

  return toReturn;
}


export function signup(userAccount) {
  return dispatch => axios.post('/auth/register', {
    firstName: userAccount.first_name,
    lastName: userAccount.last_name,
    userName: userAccount.username,
    password: userAccount.password,
    phoneNumber: '',
    email: userAccount.email,
    birthdate: userAccount.birthDay,
    accountRestrictions: 'Owner'
  })
  .then(resp => {
    localStorage.setItem('token', resp.data.token);

    dispatch(validateUser());
    dispatch(clearSignup());
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
