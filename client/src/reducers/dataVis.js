const defaultDataParams = {
	method: '',
	vineyard: '',
	block: '',
	row: ''
};


export function dataVisReducer(state = [], action) {
  switch(action.type) {
    case "SET_ANALYSIS":
      console.log(action.value);
      return state.concat(action.value);
    case "GET_ANALYSIS":
      return action.value;
    case "SET_METHOD":
    	return {
    		...state,
    		method: action.value
    	}
    case "SET_VINEYARD":
    	return {
    		...state,
    		vineyard: action.value
    	}
    case "SET_BLOCK":
    	return {
    		...state,
    		block: action.value
    	}
    case "SET_ROW":
    	return {
    		...state,
    		row: action.value
    	}
    case "CLEAR_FIELDS":
    	return {
    		...defaultDataParams
    	}
    default:
      return state;
  }
};  

