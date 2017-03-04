import roomsController from '../db/controllers/Rooms';

export function newRoom(req, res, next) {
  const params = {
    users: req.body.users,
    room_name: req.body.room_name
  };

  return roomsController.createRoom(params)
    .then(room => {
      res.json(room);
    });
}

export function freshestRoom(req, res, next) {
  return roomsController.getMostRecent(req.body.userId)
    .then(rooms => {
      res.status(200).json(rooms); 
    });
}

export function getRoomById(req, res, next) {
  return roomsController.getRoomById(req.params.id)
    .then(room => {
      res.status(200).json(room); 
    });
}

export function addUserToRoom(req, res, next) {
  return roomsController
    .addUserToRoom(req.body.userId, req.body.roomId)
    .then(room => {
      console.log('Hey the room was added', room);
      res.end();
    });
}
