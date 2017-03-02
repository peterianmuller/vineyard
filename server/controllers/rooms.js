import roomsController from '../db/controllers/Rooms';

export function newRoom(req, res, next) {
  const params = {
    users: req.body.users,
    room_name: req.body.room_name
  };

  return roomsController.createRoom(params)
    .then(room => {
      console.log(room);
      res.end();
    });
}

export function freshestRoom(req, res, next) {
  return roomsController.getMostRecent()
    .then(rooms => {
      res.status(200).json(rooms); 
    });
}

export function getRoomById(req, res, next) {
  console.log(req.params.id, 'afjklsjhkhs');
  return roomsController.getRoomById(req.params.id)
    .then(room => {
      res.status(200).json(room); 
    });
}
