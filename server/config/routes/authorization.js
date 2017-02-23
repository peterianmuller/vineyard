import express from 'express';
import passport from 'passport';
import { login, logout, sendUserIdFromJwt, register } from '../../controllers/authorization';

const router = express.Router();

router.route('/login').post(passport.authenticate('local'), login);
router.route('/logout').get(logout);
router.route('/register').post(register, passport.authenticate('local'), login);
router.route('/session')
  .get(passport.authenticate('jwt', { session: false }), sendUserIdFromJwt);

export default router;
