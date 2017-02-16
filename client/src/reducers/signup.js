var signupState = {
  username: '',
  password: ''
};

export function userSignupReducer(state = signupState, action) {
  switch(action.type) {
    case "SET_SIGNUP_USERNAME": 
      return {
        ...state,
        username: action.value
      };
    case "SET_SIGNUP_PASSWORD":
      return {
        ...state,
        password: action.value
      }
    default:
      return state;
  }
}
