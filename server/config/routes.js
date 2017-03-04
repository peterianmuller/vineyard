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
import authRouter from './routes/authorization';
import weatherRoutes from './routes/weather';
import roomRouter from './routes/rooms';
import messageRouter from './routes/messages';
import dataRoutes from './routes/data';

import coordRoutes from './routes/coordinates';
import polyRoutes from './routes/polygons';

import { passport } from './auth/local';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));

  app.use('/api', passport.authenticate('jwt', { session: false }));
  app.use('/api/address', addressesRouter);
  app.use('/api/signup', usersRouter);
  app.use('/api/user', usersRouter);
  app.use('/api/note', notesRouter);
  app.use('/api/alert', alertsRouter);
  app.use('/api/weather', weatherRoutes);
  app.use('/api/rooms', roomRouter);
  app.use('/api/messages', messageRouter);
  app.use('/api/organization', organizationsRouter)
  app.use('/api/coordinates', coordRoutes);
  app.use('/api/polygons', polyRoutes);
  app.use('/api/data', dataRoutes);

  app.use('/auth', authRouter);
  app.use('/orgAuth/organization', organizationsRouter);

  // === WILDCARD ROUTING ===
  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
};
