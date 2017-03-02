import Messages from '../models/messages';
import Rooms from '../models/rooms';
import db from '../config';

const postMessage = message => {
  return new Messages({
    text: message.text,
    room_id: message.room_id,
    message_author_id: message.message_author_id
  }).save();
};

const getMostRecent = () => {
}

export default { postMessage };
