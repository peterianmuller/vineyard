export function logoutUser(userCredentials) {
  return dispatch => axios.get('/api/logout')
  .then(() => { browserHistory.push('/login')})
  .catch((err) => {
    console.log('error dispatching login credentials ', err);
  });
};
