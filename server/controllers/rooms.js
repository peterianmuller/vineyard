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
      res.end();
    });
}


export function getUsersInRoom(req, res, next) {
  console.log("This is inserted param", req.params.id);
  return roomsController.getUsersInRoom(req.params.id)
    .then(rooms => {
      res.json(rooms); 
    });
}
