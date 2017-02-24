import passport from 'passport';
import bcrypt from 'bcrypt';
import passportLocal from 'passport-local';

import Users from '../../db/models/users';

const LocalStrategy = passportLocal.Strategy;

function serializeLogin (passport) {
  passport.serializeUser(function(user, done) {
    done(null, user.id);
  });

  passport.deserializeUser(function(id, done) {
    new Users({id: id}).fetch()
    // User.findOne({
    //   where: {id: id}
    // })
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
    console.log('this is the user to find: ', username)
    new Users({ username: username }).fetch()
    .then((user) => {
      console.log('user that was created: ', user);
      if (!user) {
        return done(null, false);
      }
      if(!bcrypt.compare(password, user.password)) {
          alert('invalid password');
          return done(null, false);
      }
      console.log('user matched, done being called')
      return done(null, user);
    })
    .catch((err) => {
      console.log('error loging in user: ', err);
    });
  }
));

 export { passport, serializeLogin };
