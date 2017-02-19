import passport from 'passport';
import passportLocal from 'passport-local';

import User from '../../db/models/users';

const LocalStrategy = passportLocal.Strategy;

function serializeLogin () {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    const params = {
      id: id
    };
    User.getUserById(params)
    .then(user => done(user))
    .catch(err => done(err))
  });
}

passport.use('local', new LocalStrategy({},
  function(req, username, password, done) {
    console.log('inside passport local login');
    console.log('req', req);
    User.find({
      where: {
        username: username
      }
    })
    .then((user) => {
      if (!user) {
        return done();
      }
      if (user) {
        if (!user.validPassword(password)) {
          alert('invalid password');
          return done();
        }
      }
      return done(null, user);
    })
    .catch((err) => {
      console.log('error loging in user ', err);
    });
  }
));

// passport.use('local-signup', new LocalStrategy(
//   function(username, password, done) {
//     // asynchronous
//     // User.findOne wont fire unless data is sent back
//     process.nextTick(function() {
//     // find a user whose email is the same as the forms email
//     // we are checking to see if the user trying to login already exists
//     User.find({
//       where: {
//         username: username
//       }
//     })
//     .then((user) => {
//       // check to see if theres already a user with that email
//       if (user) {
//         return alert('That username is already taken.');
//       } else {
//         // if there is no user with that email
//         // create the user
//         var newUser = User.create({
//           username: req.body.username,
//           firstName: req.body.firstName,
//           lastName: req.body.lastName,
//           userName: req.body.userName,
//           password: req.body.password,
//           phoneNumber: req.body.phoneNumber,
//           email: req.body.email,
//           securityQuestion: req.body.securityQuestion,
//           securityAnswer: req.body.securityAnswer,
//           birthdate: req.body.birthdate,
//           accountRestrictions: req.body.accountRestrictions
//         })
//         // set the user's local credentials
//         // newUser.password = newUser.generateHash(params.password);
//         // save the user
//         // newUser.save()
//         .then((user) => {
//           console.log('user created, ', user)
//         })
//         .catch((err) => {
//           console.log('user could not be created ', err);
//         })
//       }
//     }).catch((err) => {
//       console.log('could not find user ', err);
//     });
//   });
// }));

// passport.use('login', new LocalStrategy(
//   function(username, password, done) {
//     var params = {
//       username: username
//     };
//     User.getUserByUsername(params)
//     .then((user) => {
//       console.log('login user ', user);
//     	if (!user) {
//     		return done(null, false, { message: 'Incorrect username.' });
//     	}
//     	if (!user.validPassword(password)) {
//         return done(null, false, { message: 'Incorrect password.' });
//       }
//       return done(null, user);
//     })
//     .catch(err => done(err))
//   }
// ));

// passport.serializeUser(function(user, done) {
//   done(null, user.id);
// });
//
// passport.deserializeUser(function(id, done) {
//   User.getUserById(id, function(err, user) {
//     done(err, user);
//   });
// });
 export { passport, serializeLogin };
