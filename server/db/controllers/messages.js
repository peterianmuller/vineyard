import Messages from '../models/messages';
import Rooms from '../models/rooms';
import db from '../config';

function postMessage(message) {
  return new Messages({
    text: message.text,
    room_id: message.room_id,
    message_author_id: message.message_author_id,
    author_name: message.author_name
  }).save();
}

function getMessagesByRoom(roomId) {
  return new Messages({ room_id: roomId })
    .orderBy('created_at')
    .fetchAll();
  
}

export default { postMessage, getMessagesByRoom };
