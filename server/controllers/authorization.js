import jwt from 'jsonwebtoken';
import jwtOptions from '../config/auth/jwt';
import { newUser, getUserByUsername } from '../db/controllers/users';
import Users from '../db/models/users';
import { getOrganization, findOrCreateNewOrg } from '../db/controllers/organizations';

function formatPhoneNumber (phoneNumber) {
  return phoneNumber.replace(/\s+|-|\)|\(/g, '');
}

export function login(req, res) {
  var payload = { id: req.user.id, username: req.user.username };
  var token = jwt.sign(payload, jwtOptions.secretOrKey);

  res.status(201).json({ message: "OK", token: token, id: req.user.id });
}

export function logout(req, res) {
  req.logout();
  res.status(201).json(req.user);
}

export function sendUserIdFromJwt(req, res, next) {
  console.log('hwhhsheh', req.user.attributes.username);
  res.status(200).json({ id: req.user.id, username: req.user.attributes.username });
}

export function register(req, res, next) {
<<<<<<< HEAD
  const org = {
    name: req.body.organization.toLowerCase()
  };
  const phoneNumber = formatPhoneNumber(req.body.phoneNumber);
  console.log('targetorg: ', org);
  getOrganization(org)
  .then((org) => {
    return org.id;
=======
  const params = req.body;
  newUser(params)
  .then(() => {
    getUserByUsername(params)
      .then((user) => {
        next();
      })
      .catch((err) => {
        console.log('could not add user: ', err);
      });

>>>>>>> Notes model and db controller tests working.
  })
  .then((orgId) => {
    console.log('this is the organization id: ', orgId);
    const params = {
    firstname: req.body.firstName.toLowerCase(),
    lastname: req.body.lastName.toLowerCase(),
    username: req.body.userName.toLowerCase(),
    password: req.body.password,
    phone_number: phoneNumber,
    email: req.body.email.toLowerCase(),
    birthdate: req.body.birthdate,
    account_restrictions: req.body.accountRestrictions,
    organization_id: orgId
    };
    return newUser(params)
    .then((user) => {
      console.log('new user', user)
      getUserByUsername(params.username)
        .then((user) => {
          console.log('user returned: ', user);
          next();
        })
        .catch((err) => {
          console.log('could not add user: ', err);
        });

    })
    .catch((err) => {
      console.log('error with insert: ', err)
    })
  })
}
