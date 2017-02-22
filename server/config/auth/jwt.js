import passport from 'passport';
import getUserById from '../../db/controllers/users';
import { ExtractJwt, JwtStrategy } from 'passport-jwt';

var jwtOptions = {
  jwtFromRequest: ExtractJwt.fromAuthHeader(),
  secretOrKey: 'doof warrior'
};

passport.use(jwtOptions, (jwt_payload, next) => {
  return getUserById({ id: jwt_payload.id })
    .then(user => {
      if (user) next(null, user); 
    }).catch(err => {
      next(null, false); 
    });
});
  
export default jwtOptions;
