import axios from 'axios';
import socket from '../sockets';
import { grabMessagesInRoom } from './messages';

export function getRoomsRecentActivity() {
  return dispatch => axios.get('/api/rooms/mostRecent', 
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(rooms => {
      console.log('this is room data', rooms.data);
      socket.emit('initial room join', { room_id: rooms.data[0].room_id });

      dispatch(updateRooms(rooms.data));
      dispatch(grabMessagesInRoom(rooms.data[0].id));
    });
}

function updateRooms(rooms) {
  return {
    type: "UPDATE_ROOMS",
    value: rooms
  };
}

export function setCurrentRoom(old_room_id, new_room_id) {
  socket.emit('room change', { old_room_id, new_room_id }); 

  return dispatch => dispatch(grabMessagesInRoom(new_room_id))
    .then(() => {
      dispatch(setRoom(new_room_id));
      dispatch(grabMessagesInRoom(new_room_id)); 
    });
}

export function setRoom(room_id) {
  return {
    type: "SET_CURRENT_ROOM",
    value: room_id
  };
}
