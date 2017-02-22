import axios from 'axios';
import { browserHistory } from 'react-router';


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
    localStorage.setItem('token', val.token);

    dispatch(updateAuthStatus(val.data.userName));
    dispatch(clearUserLogin());
  })
  .then(() =>  {
    browserHistory.push('/home');
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

function updateAuthStatus(currentUser) {
  return {
    type: "SET_AUTHSTATUS_USERNAME",
    value: currentUser
  };
}

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  };
}
