import path from 'path';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.use(bodyParser.json());

  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });

  import organizationsController from '../db/controllers/organizations';
  import addressController from '../db/controllers/addresses';
  import vineyardsController from '../db/controllers/vineyards';
  import blocksController from '../db/controllers/blocks';
  import rowsController from '../db/controllers/rows';
  import usersController from '../db/controllers/users';
  import notesController from '../db/controllers/notes';
  import alertsController from '../db/controllers/alerts';
  import messagesController from '../db/controllers/messages';

  app.get('/orgainzation', organizationsController.getOrganization);
  app.get('/address', addressController.getAddress);
  app.get('/vineyard', vineyardsController.getVineyard);
  app.get('/block', blockssController.getBlock);
  app.get('/row', rowsController.getRow);
  app.get('/user', usersController.getUser);
  app.get('/note', notesController.getNote);
  app.get('/alert', alertsController.getAlert);
  app.get('/message', messagesController.getMessage);

  app.post('/orgainzation', organizationsController.newOrganization);
  app.post('/address', addressController.newAddress);
  app.post('/vineyard', vineyardsController.newVineyard);
  app.post('/block', blockssController.newBlock);
  app.post('/row', rowsController.newRow);
  app.post('/user', usersController.newUser);
  app.post('/note', notesController.newNote);
  app.post('/alert', alertsController.newAlert);
  app.post('/message', messagesController.newMessage);

}
