var loginState = {
  username: '',
  password: ''
};

export function userLoginReducer(state = loginState, action) {
  switch(action.type) {
    case "SET_LOGIN_USERNAME": 
      return {
        ...state,
        username: action.value
      };
    case "SET_LOGIN_PASSWORD":
      return {
        ...state,
        password: action.value
      }
    case "CLEAR_LOGIN_FORM":
      return {
        ...loginState
      };
    default:
      return state;
  }
}
