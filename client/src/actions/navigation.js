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
      console.log('idk man', res.data);
      return dispatch(setUserCredentials({ id: res.data.id, username: res.data.username }));
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
