var defaultVal = {
  doneRetrieving: false,
  notes: [],
};

export function notesViewReducer(state=defaultVal, action) {
  switch(action.type) {
    case "ADD_NOTES":
      return {
        ...state,
        notes: state.notes.concat(action.value)
      };
    case "SET_NOTES":
      return {
        ...state,
        doneRetrieving: true,
        notes: action.value,
      };
    case "GET_NOTES":
      return {
        ...state,
        doneRetrieving: false,
      };
    default:
      return state;
  }
};  

