var authStatus = {
	username: null,
};

export function authStatusReducer(state = authStatus, action) {
	switch(action.type) {
		case "CLEAR_AUTHSTATUS":
		  return {
		  	...authStatus
		  };
    case "SET_AUTHSTATUS_JWT_PENDING": 
      return {
        ...state
      };
    case "SET_AUTHSTATUS_JWT_FULFILLED":
      return {
        ...state,
        username: action.payload
      };
    case "SET_AUTHSTATUS_JWT_REJECTED":
      return {
        ...state,
        username: null
      }
		case "SET_AUTHSTATUS_TOKEN":
			return {
				...state,
				token: action.value
			};
		default:
			return state;
	}
}
