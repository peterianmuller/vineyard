export function logoutUser(userCredentials) {
  return dispatch => axios.get('/auth/logout')
  .then(() => { 
  	dispatch(clearAuthStatus());
  	browserHistory.push('/login');
  })
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
};


function clearAuthStatus() {
  return {
    type: "CLEAR_AUTHSTATUS"
  }
}
