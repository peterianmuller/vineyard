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
    .then(user => done(null, user))
    .catch(err => done(err))
  });
}

passport.use('local', new LocalStrategy({
  usernameField: 'userName',
  passwordField: 'password',
  passReqToCallback : true
},
  function(req, username, password, done) {
    User.find({
      where: {
        userName: username
      }
    })
    .then((user) => {
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

 export { passport, serializeLogin };
