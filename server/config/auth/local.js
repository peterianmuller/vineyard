import passport from 'passport';
import passportLocal from 'passport-local';

import User from '../../db/models/users';

const LocalStrategy = passportLocal.Strategy;

function serializeLogin (passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    User.findOne({
      where: {id: id}
    })
    .then(user => done(user))
    .catch(err => done(err))
  });
}

passport.use('local', new LocalStrategy({
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback : true 
},
  function(req, username, password, done) {
    console.log('inside local strategy', req.body)
    User.find({
      where: {
        userName: username
      }
    })
    .then((user) => {
      console.log(req.body, "is req available?")
      console.log('user found: ', user);
      if (!user) {
        return done(null, false);
      }
      if (!user.validPassword(password)) {
          alert('invalid password');
          return done(null, false);
      }
      console.log('user matched, done being calleds')
      return done(null, user);
    })
    .catch((err) => {
      console.log('error loging in user ', err);
    });
  }
));

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
