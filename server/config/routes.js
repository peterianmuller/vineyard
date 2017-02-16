import path from 'path';
import bodyParser from 'body-parser';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  // ================================
  // DATA ENDPOINT ROUTING
  // ================================

  // CONTROLLER DEPENDENCIES
  import organizationsController from '../db/controllers/organizations';
  import addressesController from '../db/controllers/addresses';
  import vineyardsController from '../db/controllers/vineyards';
  import blocksController from '../db/controllers/blocks';
  import rowsController from '../db/controllers/rows';
  import usersController from '../db/controllers/users';
  import notesController from '../db/controllers/notes';
  import alertsController from '../db/controllers/alerts';
  import messagesController from '../db/controllers/messages';


  // QUESTION: HOW DO RESTFUL API NAMING CONVENTIONS MAP TO RELATIONAL DATA MODELS, SPECFICALLY MANY TO MANY?
  // EXAMPLE: DO NOTES BELONG TO USERS, ROWS, BLOCKS, VINEYARDS, ORGANIZATIONS, ETC.? ALSO FOR ADDRESSES, AND USERS.

  // === OGRANIZATION ROUTING ===

  // CREATE NEW ORGANIZATION
  app.post('/api/organization', organizationsController.newOrganization);
  // GET ONE ORGANIZATION
  app.get('/api/organization', organizationsController.getOrganization);
  // GET ALL ORGANIZATIONS
  app.get('/api/organizations', organizationsController.getOrganizations);
  // UPDATE AN ORGANIZATION
  app.patch('/api/organization', organizationsController.updateOrganization);
  // DELETE AN ORGANIZATION
  app.delete('/api/organization', organizationsController.deleteOrganizations);

  // === VINEYARD ROUTING ===

  // CREATE NEW VINEYARD
  app.post('/api/organization/vineyard', vineyardsController.newVineyard);
  // GET ONE VINEYARD
  app.get('/api/organization/vineyard', vineyardsController.getVineyard);
  // GET ALL VINEYARDS
  app.get('/api/organization/vineyards', vineyardsController.getVineyards);
  // UPDATE AN VINEYARD
  app.patch('/api/organization/vineyard', vineyardsController.updateVineyard);
  // DELETE AN VINEYARD
  app.delete('/api/organization/vineyard', vineyardsController.deleteVineyard);

  // === BLOCK ROUTING ===

  // CREATE NEW BLOCK
  app.post('/api/organization/vineyard/block', blocksController.newBlock);
  // GET ONE BLOCK
  app.get('/api/organization/vineyard/block', blocksController.getBlock);
  // GET ALL BLOCKS
  app.get('/api/organization/vineyard/blocks', blocksController.getBlocks);
  // UPDATE AN BLOCK
  app.patch('/api/organization/vineyard/block', blocksController.updateBlock);
  // DELETE AN BLOCK
  app.delete('/api/organization/vineyard/block', blocksController.deleteBlock);

  // === ROW ROUTING ===

  // CREATE NEW ROW
  app.post('/api/organization/vineyard/block/row', rowsController.newRow);
  // GET ONE ROW
  app.get('/api/organization/vineyard/block/row', rowsController.getRow);
  // GET ALL ROWS
  app.get('/api/organization/vineyard/block/rows', rowsController.getRows);
  // UPDATE AN ROW
  app.patch('/api/organization/vineyard/block/row', rowsController.updateRow);
  // DELETE AN ROW
  app.delete('/api/organization/vineyard/block/row', rowsController.deleteRow);

  // === ADDRESS ROUTING ===

  // CREATE NEW ADDRESS
  app.post('/api/address', addressesController.newAddress);
  // GET ONE ADDRESS
  app.get('/api/address', addressesController.getAddress);
  // GET ALL ADDRESSES
  app.get('/api/addresses', addressesController.getAddresses);
  // UPDATE AN ADDRESS
  app.patch('/api/address', addressesController.updateAddress);
  // DELETE AN ADDRESS
  app.delete('/api/address', addressesController.deleteAddress);

  // === USER ROUTING ===

  // CREATE NEW USER
  app.post('/api/user', usersController.newUser);
  // GET ONE USER
  app.get('/api/user', usersController.getUser);
  // GET ALL USERS
  app.get('/api/users', usersController.getUsers);
  // UPDATE AN USER
  app.patch('/api/user', usersController.updateUser);
  // DELETE AN USER
  app.delete('/api/user', usersController.deleteUser);

  // === NOTE ROUTING ===

  // CREATE NEW NOTE
  app.post('/api/note', notesController.newNote);
  // GET ONE NOTE
  app.get('/api/note', notesController.getNote);
  // GET ALL NOTES
  app.get('/api/notes', notesController.getNotes);
  // UPDATE AN NOTE
  app.patch('/api/note', notesController.updateNote);
  // DELETE AN NOTE
  app.delete('/api/note', notesController.deleteNote);

  // === ALERT ROUTING ===

  // CREATE NEW ALERT
  app.post('/api/alert', alertsController.newAlert);
  // GET ONE ALERT
  app.get('/api/alert', alertsController.getAlert);
  // GET ALL ALERTS
  app.get('/api/alerts', alertsController.getAlert);
  // UPDATE AN ALERT
  app.patch('/api/alert', alertsController.updateAlert);
  // DELETE AN ALERT
  app.delete('/api/alert', alertsController.deleteAlert);

  // === MESSAGE ROUTING ===

  // CREATE NEW MESSAGE
  app.post('/api/message', messagesController.newMessage);
  // GET ONE MESSAGE
  app.get('/api/message', messagesController.getMessage);
  // GET ALL MESSAGES
  app.get('/api/messages', messagesController.getMessage);
  // UPDATE AN MESSAGE
  app.patch('/api/message', messagesController.updateMessage);
  // DELETE AN MESSAGE
  app.delete('/api/message', messagesController.deleteMessage);


  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
}
