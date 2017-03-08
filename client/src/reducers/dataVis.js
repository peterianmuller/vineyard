export function dataVisReducer(state = [], action) {
  switch(action.type) {
    case "SET_ANALYSIS":
      console.log(action.value);
      return state.concat(action.value);
    case "GET_ANALYSIS":
      return action.value;
    default:
      return state;
  }
};  

