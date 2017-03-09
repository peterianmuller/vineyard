var authStatus = {
	id: null,
  username: null
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
      // console.log('payload', action.payload)
      return {
        ...state,
        username: action.payload.username,
        id: action.payload.id,
        org_id: action.payload.org_id
      };
    case "SET_AUTHSTATUS_JWT_REJECTED":
      return {
        ...state,
        username: null
      }
		case "SET_AUTHSTATUS_ID":
			return {
				...state,
        username: action.value.username,
        id: action.value.id,
        org_id: action.value.org_id
			};
		default:
			return state;
	}
}
