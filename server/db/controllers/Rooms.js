import Rooms from '../models/rooms';
import db from '../config';

function createRoom(inputRoom) {
  return new Rooms({ 
    room_name: inputRoom.room_name 
  }).save().then(room => {
    return new Rooms({id: room.id})
      .users().attach(inputRoom.users)
  });
}

function getMostRecent() {
  return new Rooms().query(q => {
    q.select('messages.room_id', 'rooms.room_name', db.knex.raw('MAX(messages.created_at) as newest'))
      .innerJoin('messages', function() {
        this.on('rooms.id', '=', 'messages.room_id');
      })
      .groupBy('messages.room_id', 'rooms.room_name')
      .orderBy('newest', 'desc');
  }).fetchAll({})
}

function getRoomById(id) {
  return new Rooms({ id: id }).fetch();
}

export default { createRoom, getMostRecent, getRoomById };
