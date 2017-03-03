import axios from 'axios';
import socket from '../sockets';
import { grabMessagesInRoom } from './messages';

export function getRoomsRecentActivity(userId) {
  return dispatch => axios.post('/api/rooms/mostRecent', 
    {
      userId
    },
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(rooms => {
      socket.emit('enter rooms', rooms.data);

      dispatch(setRoom(rooms.data[0].id));
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

export function addUserToRoom(userId, roomId) {
  return dispatch => axios.post('/api/rooms/addUserToRoom', 
    {
      userId, roomId
    },
    {
      headers: {'Authorization': 'JWT ' + localStorage.getItem('token') }
    }).then(resp => {
      console.log('not sure what to expect', resp);
    });
}
