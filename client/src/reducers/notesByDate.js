export function notesByDateReducer(state = [], action) {
  switch(action.type) {
    case "ADD_NOTES":
      console.log(action.value);
      return state.concat(action.value);
    case "GET_NOTES":
      return action.value;
    default:
      return state;
  }
};  