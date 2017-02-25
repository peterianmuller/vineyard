import express from 'express';
import routes from './config/routes';
import middleware from './config/middleware';

var app = express();
middleware(app, express);
routes(app, express);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});

export default app;