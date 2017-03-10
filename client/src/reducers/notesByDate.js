export function notesByDateReducer(state = [], action) {
  switch(action.type) {
    case "ADD_NOTES":
      return state.concat(action.value);
    case "GET_NOTES":
      return action.value;
    default:
      return state;
  }
};  
