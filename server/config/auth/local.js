import passport from 'passport';
import passportLocal from 'passport-local';

import User from '../../db/models/users';

const LocalStrategy = passportLocal.Strategy;

passport.use(new LocalStrategy(
  function(username, password, done) {
    User.findOne({ username: username })
    .then(user => {
    	if (!user) {
    		return done(null, false, { message: 'Incorrect username.' });
    	}
    	if (!user.validPassword(password)) {
        return done(null, false, { message: 'Incorrect password.' });
      }
      return done(null, user);
    })
    .catch(err => done(err))
  }
));

passport.serializeUser(function(user, done) {
  done(null, user.id);
});

passport.deserializeUser(function(id, done) {
  User.findById(id)
  .then(user => done(user))
  .catch(err => done(err))
});

export default passport;



