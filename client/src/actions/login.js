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
    userName: userCredentials.username,
    password: userCredentials.password
  })
  .then((val) => {console.log('returned inside loginUser', val)})
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
};
