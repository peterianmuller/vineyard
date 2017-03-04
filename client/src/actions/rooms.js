import axios from 'axios';
import client from '../elasticSearch';
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

export function searchUsersForAddRoom(text) {
  return dispatch => client.search({
		index: "users",
		type: "user", 
		body: {
	    "query": { 
	      "multi_match": { 
	        "fields": ["username", "firstname"], 
	        "query": text, 
	        "type": "phrase_prefix" 
	      } 
	    }
	  }
	}).then(results => {
    console.log('this is what you searched for', results);
    dispatch(updateUserList(results.hits.hits));
  }).catch(err => {
    console.log('this is the error', err); 
  });
}

export function updateUserList(list) {
	return {
		type: "UPDATE_USER_LIST",	
    value: list
	};
}

export function addPeopleToAdd(user) {
  return {
    type: "UPDATE_PEOPLE_TO_ADD",
    value: user
  };
} 

export function deletePeopleToAdd(user) {
  return {
    type: "DELETE_PERSON_TO_ADD",
    value: user
  }
}

export function toggleModal(isUser) {
  return {
    type: "MODAL_TOGGLE_" + (isUser ? "USER" : "ROOM")
  }
}

export function closeModal(isUser) {
  return {
    type: "MODAL_CLOSE_" + (isUser ? "USER" : "ROOM")
  }
}

export function userAddRoomFinish() {
  return {
    type: "USER_ADD_ROOM_FINISH"
  }
}
