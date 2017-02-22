var authStatus = {
	username: null
};

export function authStatusReducer(state = authStatus, action) {
	switch(action.type) {
		case "CLEAR_AUTHSTATUS":
		return {
			...authStatus
		};
		case "SET_AUTHSTATUS_USERNAME":
			return {
				...state,
				username: action.value
			};
		default:
			return state;
	}
}