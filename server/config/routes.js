import path from 'path';
import passport from 'passport';

// CONTROLLER DEPENDENCIES
import organizationsController from '../db/controllers/organizations';
import addressesController from '../db/controllers/addresses';
import vineyardsController from '../db/controllers/vineyards';
import blocksController from '../db/controllers/blocks';
import rowsController from '../db/controllers/rows';
import usersController from '../db/controllers/users';
import notesController from '../db/controllers/notes';
import alertsController from '../db/controllers/alerts';
// import messagesController from '../db/controllers/messages';
import login from './auth/local';

export default function routes(app, express) {
  app.use(express.static(path.join(__dirname, '../../client/dist')));



  // QUESTION: HOW DO RESTFUL API NAMING CONVENTIONS MAP TO RELATIONAL DATA MODELS, SPECFICALLY MANY TO MANY?
  // EXAMPLE: DO NOTES BELONG TO USERS, ROWS, BLOCKS, VINEYARDS, ORGANIZATIONS, ETC.? ALSO FOR ADDRESSES, AND USERS.

  // ================================
  // DATA ENDPOINT ROUTING
  // ================================

  // === LOGIN ROUTING ===
  app.post('/signup', passport.authenticate('local', {
    successRedirect: '/login',
    failureRedirect: '/signup'
  }));

  app.post('/login', passport.authenticate('local', {
    successRedirect: '/home',
    failureRedirect: '/login'
  }));

  // === OGRANIZATION ROUTING ===

  // CREATE NEW ORGANIZATION
  app.post('/api/organization', (req, res, next) => {
    const params = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      tier: req.body.tier
    };
    return organizationsController.newOrganization(params)
    .then((organization) => {
      if (organization) {
        // QUESTION: BETTER TO USE RES.SEND?
        res.json(organization);
      }
      next();
    }).catch((err) => {
      console.log('could not add organization ', err);
    });

  });

  // === VINEYARD ROUTING ===

  // CREATE NEW VINEYARD
  app.post('/api/organization/vineyard', (req, res, next) => {
    const params = {
      name: req.body.name,
      phoneNumber: req.body.phoneNumber,
      appellation: req.body.appellation
    };
    return vineyardsController.newVineyard(params)
    .then((vineyard) => {
      if (vineyard) {
        // QUESTION: BETTER TO USE RES.SEND?
        res.json(vineyard);
      }
      next();
    }).catch((err) => {
      console.log('could not add vineyard ', err);
    });
  });

  // === BLOCK ROUTING ===

  // CREATE NEW BLOCK
  app.post('/api/organization/vineyard/block', (req, res, next) => {
    const params = {
      number: req.body.number
    };
    return blocksController.newBlock(params)
    .then((block) => {
      if (block) {
        res.json(block);
      }
      next();
    }).catch((err) => {
      console.log('could not add block ', err);
    });
  });

  // === ROW ROUTING ===

  // CREATE NEW ROW
  app.post('/api/organization/vineyard/block/row', (req, res, next) => {
    const params = {
      number: req.body.number,
      point1: req.body.point1,
      point2: req.body.point2,
      clone: req.body.clone,
      varietal: req.body.varietal,
      rootStock: req.body.rootStock,
      status: req.body.status
    };
    return rowsController.newRow(params)
    .then((row) => {
      if (row) {
        res.json(row);
      }
      next();
    }).catch((err) => {
      console.log('could not add row ', err);
    });
  });

  // === ADDRESS ROUTING ===

  // CREATE NEW ADDRESS
  app.post('/api/address', (req, res, next) => {
    const params = {
      street: req.body.street,
      street2: req.body.street2,
      city: req.body.city,
      state: req.body.state,
      zip: req.body.zip,
      country: req.body.country
    };
    return addressesController.newAddress(params)
    .then((address) => {
      if (address) {
        res.json(address);
      }
      next();
    }).catch((err) => {
      console.log('error adding address ', err);
    });
  });

  // === USER ROUTING ===

  // CREATE NEW USER
  app.post('/api/user', (req, res, user) => {
    const params = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: req.body.securityAnswer,
      birthdate: req.body.birthdate,
      accountRestrictions: req.body.accountRestrictions
    };
    return usersController.newUser(params)
    .then((user) => {
      if (user) {
        res.json(user);
      }
      next();
    }).catch((err) => {
      console.log('could not add user ', err);
    });
  });
  // GET ONE USER
  app.get('/api/user', (req, res, next) => {
    const params = {
      firstName: req.body.firstName,
      lastName: req.body.lastName,
      userName: req.body.userName,
      password: req.body.password,
      phoneNumber: req.body.phoneNumber,
      email: req.body.email,
      securityQuestion: req.body.securityQuestion,
      securityAnswer: req.body.securityAnswer,
      birthdate: req.body.birthdate,
      accountRestrictions: req.body.accountRestrictions
    };
    // GET USER BY USERNAME
    return usersController.getUserByUsername(params)
    .then((user) => {
      if (user) {
        res.json(user);
      }
      next();
    }).catch((err) => {
      console.log('could not add user ', err);
    });
  })

  // === NOTE ROUTING ===

  // CREATE NEW NOTE
  app.post('/api/note', (req, res, next) => {
    const params = {
      title: req.body.title,
      text: req.body.text,
      location: req.body.location,
      image: req.body.image
    };
    return notesController.newNote(params)
    .then((note) => {
      if (note) {
        res.json(note);
      }
      next();
    }).catch((err) => {
      console.log('could not add note ', err);
    });
  });

  // === ALERT ROUTING ===

  // CREATE NEW ALERT
  app.post('/api/alert', (req, res, next) => {
    const params = {
      text: req.body.text,
      location: req.body.location,
      alertTime: req.body.alertTime
    };
    return alertsController.newAlert(params)
    .then((alert) => {
      if (alert) {
        res.json(alert);
      }
      next();
    }).catch((err) => {
      console.log('could not add alert ', err);
    });
  });

  app.use('*', (req, res, next) => {
    res.sendFile(path.resolve(__dirname, '../../client/dist/index.html'));
  });
};
