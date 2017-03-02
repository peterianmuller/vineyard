import axios from 'axios';

export function getRoomsRecentActivity() {
  return dispatch => axios.get('/api/rooms/mostRecent', 
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(rooms => {
      dispatch(updateRooms(rooms.data));
    });
}

function updateRooms(rooms) {
  return {
    type: "UPDATE_ROOMS",
    value: rooms
  };
}

export function setCurrentRoom(room_id) {
  return {
    type: "SET_CURRENT_ROOM",
    value: room_id
  };
}
