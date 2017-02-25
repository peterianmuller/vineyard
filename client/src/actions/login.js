//React requirements
import { push } from 'react-router-redux';
//import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';

export function setLoginItem(item, value) {
  var toReturn =  { value };
  toReturn.type = "SET_LOGIN_" + item.toUpperCase();

  return toReturn;
}

export function loginUser(userCredentials) {
  return dispatch => axios.post('/auth/login', {
    userName: userCredentials.username,
    password: userCredentials.password
  })
  .then((val) => {
    localStorage.setItem('token', val.data.token);

    dispatch(clearUserLogin());
    dispatch(push('/'));
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
}

export function clearUserLogin() {
  return {
    type: "CLEAR_LOGIN_FORM"
  }
}

function updateAuthStatus(id) {
  return {
    type: "SET_AUTHSTATUS_ID",
    value: id
  };
}

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  };
}
