import sockets from 'socket.io';
import messageController from '../db/controllers/messages';

export default server => {
  var io = sockets.listen(server);

  io.on('connection', socket => {
    socket.emit('connected', 'hello world');
  
    socket.on('join user room', data => {
      socket.join('user ' + data.user_id);
    });

    socket.on('new message', data => {
      messageController.postMessage(data).then(message => {
        console.log('created msg');
        message.author_name = data.author_name;
        console.log(message);
        io.in(data.room_id).emit('message created', message);
      });
    });

    socket.on('enter rooms', data => {
      data.forEach(item => {
        socket.join(item.id);
      });
    });

    socket.on('create rooms', data => {
      console.log('added user to room i guess');
      io.in('user ' + data.user_id).emit('added to room');
    });

    // unsure if bottom two are needed
    socket.on('initial room join', data => {
      socket.join(data.room_id);
    });

    socket.on('room change', data => {
      socket.leave(data.old_room_id);
      socket.join(data.new_room_id);
    });
  });

}
