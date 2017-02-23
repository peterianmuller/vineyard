import axios from 'axios';

export function setSignupItem(item, value) {
  var toReturn = {
    value
  };

  toReturn.type = "SET_SIGNUP_" + item.toUpperCase();

  return toReturn;
}


export function signup(userAccount) {
	console.log(userAccount, 'user obj to post in signup actions')
  return dispatch => axios.post('/auth/signup', {
    firstName: userAccount.first_name,
    lastName: userAccount.last_name,
    userName: userAccount.username,
    password: userAccount.password,
    phoneNumber: '',
    email: userAccount.email,
    securityQuestion: '',
    securityAnswer: '',
    birthdate: userAccount.birthDay,
    accountRestrictions: 'Owner'
  })
  .then(() => dispatch(clearSignup()))
  .catch((err) => {
    console.log(err);
  })
}

function clearSignup() {
  return {
    type: "CLEAR_SIGNUP_FIELDS"
  };
}
