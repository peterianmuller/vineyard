import messageController from '../db/controllers/messages';

export function postMessage(req, res, next) {
  const params = {
    text: req.body.text,
    room_id: req.body.room_id,
    message_author_id: req.body.message_author_id
  };

  messageController.postMessage(params).then(message => {
    //sockets here
    res.end();
  });
}
