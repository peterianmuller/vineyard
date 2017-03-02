import messageController from '../db/controllers/messages';

export function postMessage(req, res, next) {
  const params = {
    text: req.body.text,
    room_id: req.body.room_id,
    message_author_id: req.body.message_author_id,
    author_name: req.body.author_name
  };

  return messageController.postMessage(params).then(message => {
    res.end();
  });
}

export function getAllMessagesByRoom(req, res, next) {
  return messageController.getMessagesByRoom(req.params.id)
    .then(messages => {
      console.log(messages);
      res.json(messages);
    });
}
