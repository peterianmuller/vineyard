//React requirements
import { push } from 'react-router-redux';

//Axios and sockets
import axios from 'axios';
import socket from '../sockets';

export function setLoginItem(item, value) {
  var toReturn =  { value };
  toReturn.type = "SET_LOGIN_" + item.toUpperCase();

  return toReturn;
}

  /**
 * Login process via Passport.
 * @function
 * @param {object} userCredentials - Passport login, local protocol. Sets tokens on the local storage and connects sockets (for chat). Then redirects user to homepage.
 */
export function loginUser(userCredentials) {
  return dispatch => axios.post('/auth/login', {
    userName: userCredentials.username,
    password: userCredentials.password
  })
  .then((val) => {
    localStorage.setItem('token', val.data.token);
    if (socket.disconnected) 
      socket.connect();
    //socket.emit('sign in');

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

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  };
}
