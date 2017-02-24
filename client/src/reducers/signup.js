var signupState = {
  username: '',
  password: '',
  'confirm_password': '',
  email: '',
  'first_name': '',
  'last_name': '',
  'birthdate': '',
};

export function userSignupReducer(state = signupState, action) {
  switch(action.type) {
    case "CLEAR_SIGNUP_FIELDS":
      return {
        ...signupState
      };
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
    case "SET_SIGNUP_CONFIRM_PASSWORD":
      return {
        ...state,
        'confirm_password': action.value
      }
    case "SET_SIGNUP_EMAIL":
      return {
        ...state,
        email: action.value
      }
    case "SET_SIGNUP_FIRST_NAME":
      return {
        ...state,
        'first_name': action.value
      }
    case "SET_SIGNUP_LAST_NAME":
      return {
        ...state,
        'last_name': action.value
      }
    case "SET_SIGNUP_BIRTHDATE":
      return {
        ...state,
        'birthdate': action.value
      }
    default:
      return state;
  }
}
