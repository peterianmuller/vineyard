import axios from 'axios';
import { browserHistory } from 'react-router';


export function setLoginItem(item, value) {
  var toReturn =  { value };
  toReturn.type = "SET_LOGIN_" + item.toUpperCase();

  return toReturn;
}

export function loginUser(userCredentials) {
  return dispatch => axios.post('/api/login', {
    userName: userCredentials.username,
    password: userCredentials.password
  })
  .then((val) => { 
    dispatch(updateAuthStatus(val.data.userName));
  })
  .then(() =>  {
    browserHistory.push('/home');
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
}

function updateAuthStatus(currentUser) {
  return {
    type: "SET_AUTHSTATUS_USERNAME",
    value: currentUser
  };
}
