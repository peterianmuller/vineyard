import path from 'path';
import bodyParser from 'body-parser';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  // ================================
  // DATA ENDPOINT ROUTING
  // ================================

  // CONTROLLER DEPENDENCIES
  import organizationsController from '../db/controllers/organizations';
  import addressController from '../db/controllers/addresses';
  import vineyardsController from '../db/controllers/vineyards';
  import blocksController from '../db/controllers/blocks';
  import rowsController from '../db/controllers/rows';
  import usersController from '../db/controllers/users';
  import notesController from '../db/controllers/notes';
  import alertsController from '../db/controllers/alerts';
  import messagesController from '../db/controllers/messages';


  // QUESTION: IS '/api/organization' BETTER SYNTAX OR CONVENTION?
  // QUESTION: IS IT BETTER TO ORGANIZE ROUTES BY GET/POST, OR BY ENDPOINT (ORG, ADDRESS, VINEYARD, ETC.)?

  // === OGRANIZATION ROUTING ===

  // CREATE NEW ORGANIZATION
  app.post('/api/organization', organizationsController.newOrganization);
  // GET ONE ORGANIZATION
  app.get('/api/organization', organizationsController.getOrganization);
  // GET ALL ORGANIZATIONS
  app.get('/api/organizations', organizationsController.getOrganizations);
  // UPDATE AN ORGANIZATION
  app.patch('/api/organization', organizationsController.updateOrganizations);
  // DELETE AN ORGANIZATION
  app.delete('/api/organization', organizationsController.deleteOrganizations);

  // === VINEYARD ROUTING ===

  // CREATE NEW VINEYARD
  app.post('/api/vineyard', vineyardsController.newVineyard);
  // GET ONE VINEYARD
  app.get('/api/vineyard', vineyardsController.getVineyard);
  // GET ALL VINEYARDS
  app.get('/api/vineyards', vineyardsController.getVineyard);
  // UPDATE AN VINEYARD
  app.patch('/api/vineyard', vineyardsController.updateVineyard);
  // DELETE AN VINEYARD
  app.delete('/api/vineyard', vineyardsController.deleteVineyard);

  // === BLOCK ROUTING ===

  // CREATE NEW BLOCK
  app.post('/api/block', blocksController.newBlock);
  // GET ONE BLOCK
  app.get('/api/block', blocksController.getBlock);
  // GET ALL BLOCKS
  app.get('/api/blocks', blocksController.getBlock);
  // UPDATE AN BLOCK
  app.patch('/api/block', blocksController.updateBlock);
  // DELETE AN BLOCK
  app.delete('/api/block', blocksController.deleteBlock);

  // === ROW ROUTING ===

  // CREATE NEW ROW
  app.post('/api/row', rowsController.newRow);
  // GET ONE ROW
  app.get('/api/row', rowsController.getRow);
  // GET ALL ROWS
  app.get('/api/rows', rowsController.getRow);
  // UPDATE AN ROW
  app.patch('/api/row', rowsController.updateRow);
  // DELETE AN ROW
  app.delete('/api/row', rowsController.deleteRow);


  app.get('/api/address', addressController.getAddress);
  app.get('/api/vineyard', vineyardsController.getVineyard);
  app.get('/api/block', blocksController.getBlock);
  app.get('/api/row', rowsController.getRow);
  app.get('/api/user', usersController.getUser);
  app.get('/api/note', notesController.getNote);
  app.get('/api/alert', alertsController.getAlert);
  app.get('/api/message', messagesController.getMessage);

  app.post('/api/address', addressController.newAddress);
  app.post('/api/vineyard', vineyardsController.newVineyard);
  app.post('/api/block', blocksController.newBlock);
  app.post('/api/row', rowsController.newRow);
  app.post('/api/user', usersController.newUser);
  app.post('/api/note', notesController.newNote);
  app.post('/api/alert', alertsController.newAlert);
  app.post('/api/message', messagesController.newMessage);


  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
}
