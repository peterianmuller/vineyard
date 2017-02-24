import jwt from 'jsonwebtoken';
import jwtOptions from '../config/auth/jwt';
import { newUser, getUserByUsername } from '../db/controllers/users';
import Users from '../db/models/users';

export function login(req, res) {
  var payload = { id: req.user.id };
  var token = jwt.sign(payload, jwtOptions.secretOrKey);
  // console.log('I am even in here: ', token);

  res.status(201).json({ message: "OK", token: token });
}

export function logout(req, res) {
  req.logout();
  res.status(201).json(req.user);
}

export function sendUserIdFromJwt(req, res, next) {
  res.status(200).json({ id: req.user.id });
}

export function register(req, res, next) {
  const params = req.body;
  newUser(params)
  .then(() => {
    getUserByUsername(params)
      .then((user) => {
        // console.log('user returned: ', user);
        next();
      })
      .catch((err) => {
        console.log('could not add user: ', err);
      });

  })
  .catch((err) => {
    console.log('error with insert: ', err)
  })
}
