var signupState = {
  username: '',
  password: '',
  'confirm_password': '',
  email: '',
  'first_name': '',
  'last_name': '',
  'birth_day': '',
  'birth_month': '',
  'birth_year': ''
};

export function userSignupReducer(state = signupState, action) {
  switch(action.type) {
/*    case "CLEAR_SIGNUP_FIELDS":
      return {
        ...defaultForm
      };*/
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
    case "SET_SIGNUP_BIRTH_DAY":
      return {
        ...state,
        'birth_day': action.value
      }
    case "SET_SIGNUP_BIRTH_MONTH":
      return {
        ...state,
        'birth_month': action.value
      }
    case "SET_SIGNUP_BIRTH_YEAR":
      return {
        ...state,
        'birth_year': action.value
      }
    default:
      return state;
  }
}
