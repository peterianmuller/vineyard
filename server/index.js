import express from 'express';
import routes from './config/routes';
import middleware from './config/middleware';
import Addresses from './db/models/addresses';
import Organizations from './db/models/organizations';
import Vineyards from './db/models/vineyards';
import Blocks from './db/models/blocks';
import Rows from './db/models/rows';
import Users from './db/models/users';
import Notes from './db/models/notes';
import Alerts from './db/models/alerts';
import Messages from './db/models/messages';

Addresses.sync({force: true}).then(() => {
  console.log('addresses synced');
  Organizations.sync({force: true}).then(() => {
    console.log('organizations synced');
    Vineyards.sync({force: true}).then(() => {
      console.log('vineyard synced');
      Blocks.sync({force: true}).then(() => {
        console.log('blocks synced');
        Rows.sync({force: true}).then(() => {
          console.log('rows synced');
          Users.sync({force: true}).then(() => {
            console.log('users synced');
            Notes.sync({force: true}).then(() => {
              console.log('notes synced');
              Alerts.sync({force: true}).then(() => {
                console.log('alerts synced');
              });
            });
            Messages.sync({force: true}).then(() => {
              console.log('messages synced');
            });
          });
        });
      });
    });
  });
});

var app = express();
middleware(app, express);
routes(app, express);

app.listen(3000, () => {
  console.log('Server listening on port 3000');
});
