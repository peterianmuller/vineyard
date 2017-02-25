//React requirements
import { browserHistory } from 'react-router';

//AJAX
import axios from 'axios';

export function toggleLeftSidebar() {
  return {
    type: "TOGGLE_LEFT_SIDEBAR"
  };
}

export function logoutUser(userCredentials) {
  return dispatch => axios.get('/auth/logout')
  .then(() => { 
  	dispatch(clearAuthStatus());

    window.localStorage.removeItem('token');
  	browserHistory.push('/login');
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
}

export function validateUser(callback) {
  var test = 'huh';
  return dispatch => axios.get('/auth/session', 
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    })
    .then(res => {
      console.log('this is test', test, 'shdjfkshdkfdsh')
      return dispatch(setUserCredentials(res.data.id));
    })
    .then(() => {
      callback();
    }).catch(err => {
      console.log(err);
      callback(); 
    });
}

function setUserCredentials(id) {
  return {
    type: "SET_AUTHSTATUS_JWT_FULFILLED",
    payload: id
  };
}

export function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  }
}
