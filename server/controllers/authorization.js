import jwt from 'jsonwebtoken';
import jwtOptions from '../config/auth/jwt';
import { newUser } from '../db/controllers/users';

export function login(req, res) {
  var payload = { id: req.user.id };
  var token = jwt.sign(payload, jwtOptions.secretOrKey);
  console.log('am i even in here', token);

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
  const params = {
    firstName: req.body.firstName,
    lastName: req.body.lastName,
    userName: req.body.userName,
    password: req.body.password,
    phoneNumber: req.body.phoneNumber,
    email: req.body.email,
    securityQuestion: req.body.securityQuestion,
    securityAnswer: req.body.securityAnswer,
    birthdate: req.body.birthdate,
    accountRestrictions: req.body.accountRestrictions
  };
  //
  return newUser(params)
    .then((user) => {
      console.log('huh', user);
      next();
    }).catch((err) => {
      console.log('could not add user ', err);
    });
}
