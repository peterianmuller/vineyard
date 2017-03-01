import Messages from '../models/messages';
import Rooms from '../models/rooms';

export const postMessage = message => (
  new Messages({
    text: message.text,
    room_id: message.room_id,
    message_author_id: message.author_id
  }).save()
);
