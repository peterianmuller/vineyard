import axios from 'axios';

export function setLoginItem(item, value) {
  var toReturn =  {
    value
  };
  toReturn.type = "SET_LOGIN_" + item.toUpperCase();
  return toReturn;
};

export function loginUser(userCredentials) {
  return dispatch => axios.post('/api/login', {
    userName: userCredentials.userName,
    password: userCredentials.passowrd
  })
  // .then(() => dispatch(clearLogin))
  // .catch((err) => {
  //   console.log('error dispatching login credentials ', err);
  // });
};
