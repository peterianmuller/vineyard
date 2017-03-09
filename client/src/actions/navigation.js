//React requirements
import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';

//sockets
import socket from '../sockets';

export function toggleLeftSidebar() {
  return {
    type: "TOGGLE_LEFT_SIDEBAR"
  };
}

/**
 * User logout.
 * @function logoutUser
 * @param {object} userCredentials
 * @description Handles user logout; dispatches action to logout user.
 * @memberOf Navigation Actions
 */
export function logoutUser(userCredentials) {
  return dispatch => axios.get('/auth/logout')
  .then(() => { 
    socket.disconnect(true);
    //socket.emit('sign out');
  	dispatch(finishLogoutUser());

    window.localStorage.removeItem('token');
  	browserHistory.push('/login');
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
}

/**
 * User validation.
 * @function validateUser
 * @param {function} callback
 * @description Handles user validation via JWT token auth and Passport.js Local Strategy.
 * @memberOf Navigation Actions
 */
export function validateUser(callback) {
  return dispatch => axios.get('/auth/session', 
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    })
    .then(res => {
      return dispatch(setUserCredentials({ id: res.data.id, username: res.data.username, org_id: res.data.org_id }));
    })
    .then(() => {
      callback();
    }).catch(err => {
      console.log(err);
      callback(); 
    });
}

function setUserCredentials(user) {
  return {
    type: "SET_AUTHSTATUS_JWT_FULFILLED",
    payload: user
  };
}

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  }
}

export function finishLogoutUser() {
  return {
    type: "LOGOUT_USER"
  }
}
