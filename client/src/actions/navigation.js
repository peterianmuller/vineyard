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
  	browserHistory.push('/login');
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
}

export function validateUser() {
  return {
    type: "SET_AUTHSTATUS_JWT",
    payload: {
      promise: axios.get('/auth/session', {
        headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
      })
      .then(res => {
        console.log(res); 
        return res.data.id
      })
    }
  };
}

function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  }
}
