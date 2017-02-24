var signupState = {
  username: '',
  password: '',
  confirm_password: '',
  email: '',
  first_name: '',
  last_name: '',
  birthdate: '',
  phone_number: '',
  organization: '',
  account_restrictions: ''
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
      };
    case "SET_SIGNUP_CONFIRM_PASSWORD":
      return {
        ...state,
        'confirm_password': action.value
      };
    case "SET_SIGNUP_EMAIL":
      return {
        ...state,
        email: action.value
      };
    case "SET_SIGNUP_FIRST_NAME":
      return {
        ...state,
        'first_name': action.value
      };
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
    case "SET_SIGNUP_ORGANIZATION":
      return {
        ...state,
        organization: action.value
      };
    case 'SET_SIGNUP_ACCOUNT_RESTRICTIONS':
      return {
        ...state,
        account_restrictions: action.value
      };
    default:
      return state;
  }
}
