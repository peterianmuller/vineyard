//React requirements
import { push } from 'react-router-redux';

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
    return val;
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

// function updateAuthStatus(user) {
//   return {
//     type: "SET_AUTHSTATUS_ID",
//     value: user
//   };
// }

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  };
}
