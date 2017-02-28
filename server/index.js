import express from 'express';
import sockets from 'socket.io';
import routes from './config/routes';
import http from 'http';
import middleware from './config/middleware';

var app = express();
var server = http.createServer(app);
var io = sockets.listen(server);

middleware(app, express);
routes(app, express);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

io.on('connection', socket => {
  socket.emit('hello', 'hello world');

  socket.on('this test', socket => {
    console.log('~~~~~~~~~~~~~I dont know what this is doing~~~~~~~~~~~~~~~~~~');
  });
});


export default app;
