const defaults = {
  currentRoom: 1,
  addUserModalOpen: false,
  addRoomModalOpen: false,
  peopleToAdd: {},
  peopleInRoom: [{ username: 'This room is empty' }],
  userList: [],
  rooms: []
};

export default (state=defaults, action) => {
  switch(action.type) {
    case "MODAL_TOGGLE_USER":
      return {
        ...state,
        addUserModalOpen: !state.addUserModalOpen
      };
    case "MODAL_TOGGLE_ROOM":
      return {
        ...state,
        addRoomModalOpen: !state.addRoomModalOpen
      };
    case "MODAL_CLOSE_ROOM":
      return {
        ...state,
        addRoomModalOpen: false,
        peopleToAdd: {},
        userList: []
      };
    case "MODAL_CLOSE_USER":
      return {
        ...state,
        addUserModalOpen: false,
        peopleToAdd: {},
        userList: []
      };
    case "SET_CURRENT_ROOM":
      return {
        ...state,
        currentRoom: action.value
      };
    case "SET_USERS_IN_ROOM":
      return {
        ...state,
        peopleInRoom: action.value 
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
