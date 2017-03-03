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
    q.select('rooms.id', 'rooms.room_name', db.knex.raw('MAX(messages.created_at) as newest'))
      .leftOuterJoin('messages', function() {
        this.on('rooms.id', '=', 'messages.room_id');
      })
      .groupBy('rooms.id', 'rooms.room_name')
      .orderByRaw('newest desc nulls last');
  }).fetchAll({}).then(results => {

    console.log('here they are man!!!!!!!!!!!!!!!!!!!!', results.models);
    return results;
  })
}

function getRoomById(id) {
  return new Rooms({ id: id }).fetch();
}

export default { createRoom, getMostRecent, getRoomById };
