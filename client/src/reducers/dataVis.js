const defaultDataParams = {
	method: '',
	vineyard: '',
	block: '',
	row: '',
    results: []
};


export function dataVisReducer(state = defaultDataParams, action) {
  switch(action.type) {
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
    case "SET_ANALYSIS":
        return {
            ...state,
            results: state.results.concat(action.value)
        }
    case "CLEAR_FIELDS":
    	return {
    		...defaultDataParams
    	}
    default:
      return state;
  }
};  

