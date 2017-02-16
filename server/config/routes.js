import path from 'path';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.use(bodyParser.json());

  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });

  import addressController from '../db/controllers/addresses';
  import alertsController from '../db/controllers/alerts';
  import blocksController from '../db/controllers/blocks';
  import messagesController from '../db/controllers/messages';
  import notesController from '../db/controllers/notes';
  import organizationsController from '../db/controllers/organizations';
  import usersController from '../db/controllers/users';
  import vineyardsController from '../db/controllers/vineyards';

  app.get('/notes')

}
