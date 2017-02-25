import passport from 'passport';
import { getUserById } from '../../db/controllers/users';
import { ExtractJwt, Strategy as JwtStrategy } from 'passport-jwt';

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'doof warrior'
};

passport.use(new JwtStrategy(jwtOptions, (jwt_payload, next) => {
  return getUserById({ id: jwt_payload.id })
    .then(user => {
      console.log('user', user);
      if (user) next(null, user);
      else throw new Error;
    }).catch(err => {
      console.log('failed', err);
      next(null, false);
    });
}));

export default jwtOptions;
