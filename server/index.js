import express from 'express';
import http from 'http';
import middleware from './config/middleware';
import routes from './config/routes';
import sockets from './config/sockets';

var app = express();
var server = http.createServer(app);

middleware(app, express);
routes(app, express);
sockets(server);

server.listen(3000, () => {
  console.log('Server listening on port 3000');
});

export default app;
