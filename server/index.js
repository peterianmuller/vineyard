import express from 'express';
import routes from './config/routes';
import middleware from './config/middleware';
import Addresses from './db/models/addresses';
import Organizations from './db/models/organizations';

Addresses.sync({force: true}).then(() => {
  console.log('addresses synced');
  Organizations.sync({force: true}).then(() => {
    console.log('organizations synced');
  });
});

var app = express();
middleware(app, express);
routes(app, express);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
