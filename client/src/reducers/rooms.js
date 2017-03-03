const defaults = {
  currentRoom: 1,
  rooms: []
};

export default (state=defaults, action) => {
  switch(action.type) {
    case "SET_CURRENT_ROOM":
      return {
        ...state,
        currentRoom: action.value
      };
    case "UPDATE_ROOMS":
      return {
        ...state,
        rooms: action.value
      };
    default:
      return state;
  }
}
