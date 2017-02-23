import axios from 'axios';
import { browserHistory } from 'react-router';
import { validateUser } from './navigation';


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
    console.log('hi im here', val);
    localStorage.setItem('token', val.data.token);
    
    //dispatch(updateAuthStatus(val.data.token));
    dispatch(validateUser());
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

function updateAuthStatus(token) {
  return {
    type: "SET_AUTHSTATUS_TOKEN",
    value: token
  };
}

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  };
}
