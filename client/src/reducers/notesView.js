export function notesViewReducer(state = [], action) {
  switch(action.type) {
    case "GET_NOTES":
    return action.value;
    default:
      return state;
  }
};  
