import Rooms from '../models/rooms';

function createRoom(inputRoom) {
  return new Rooms({ 
    room_name: inputRoom.room_name 
  }).save().then(room => {
    return new Rooms({id: room.id})
      .users().attach(inputRoom.users)
  });
}

export default { createRoom };
