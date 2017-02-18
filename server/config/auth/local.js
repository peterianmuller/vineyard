import passport from 'passport';
import LocalStrategy from 'passport-local';

const LocalStrategy = LocalStrategy.Strategy;

const validateLogin = passport.use(new LocalStrategy({

}));

export default validateLogin;
