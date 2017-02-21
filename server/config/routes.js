import path from 'path';
import express from 'express';


// SERVER CONTROLLER DEPENDENCIES
import organizationsRouter from './routes/organizations';
import addressesRouter from './routes/addresses';
import vineyardsRouter from './routes/vineyards';
import blocksRouter from './routes/blocks';
import rowsRouter from './routes/rows';
import usersRouter from './routes/users';
import notesRouter from './routes/notes';
import alertsRouter from './routes/alerts';
// import messagesController from './routes/messages';

import { passport } from './auth/local';
import weatherRoutes from './weather/routes';

// CONTROLLER DEPENDENCIES
import organizationsController from '../db/controllers/organizations';
import addressesController from '../db/controllers/addresses';
import vineyardsController from '../db/controllers/vineyards';
import blocksController from '../db/controllers/blocks';
import rowsController from '../db/controllers/rows';
import usersController from '../db/controllers/users';
import notesController from '../db/controllers/notes';
import alertsController from '../db/controllers/alerts';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.use('/api/organization', organizationsRouter);
  app.use('/api/organization/vineyard', vineyardsRouter);
  app.use('/api/organization/vineyard/block', blocksRouter);
  app.use('/api/organization/vineyard/block/row', rowsRouter);
  app.use('/api/address', addressesRouter);
  app.use('/api/signup', usersRouter);
  app.use('/api/user', usersRouter);
  app.use('/api/note', notesRouter);
  app.use('/api/alert', alertsRouter);

  app.use('/api/weather', weatherRoutes);

  // === LOGIN ROUTING ===
  app.post('/api/login',
  passport.authenticate('local'), function(req, res){ 
    res.status(201).json(req.user);
  });
  
  // === LOGOUT ROUTING ===
  app.get('/api/logout', function(req, res){
    req.logout();
    res.status(201).json(req.user);
  });
  
  // === WILDCARD ROUTING ===
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
};
