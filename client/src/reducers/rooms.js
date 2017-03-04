const defaults = {
  currentRoom: 1,
  modalOpen: false,
  peopleToAdd: {},
  userList: [],
  rooms: []
};

export default (state=defaults, action) => {
  switch(action.type) {
    case "ROOM_MODAL_TOGGLE":
      return {
        ...state,
        modalOpen: !state.modalOpen
      };
    case "USER_ADD_ROOM_FINISH":
      return {
        ...state,
        modalOpen: false,
        peopleToAdd: {},
        userList: []
      };
    case "SET_CURRENT_ROOM":
      return {
        ...state,
        currentRoom: action.value
      };
    case "UPDATE_PEOPLE_TO_ADD":
      var newPeople = {...state.peopleToAdd};
      newPeople[action.value.id] = action.value;

      return {
        ...state,
        peopleToAdd: newPeople
      };
    case "DELETE_PERSON_TO_ADD":
      var newPeople = {...state.peopleToAdd};
      delete newPeople[action.value.id];
      
      return {
        ...state,
        peopleToAdd: newPeople
      };
    case "UPDATE_ROOMS":
      return {
        ...state,
        rooms: action.value
      };
    case "UPDATE_USER_LIST":
      return {
        ...state,
        userList: action.value
      };
    default:
      return state;
  }
}
