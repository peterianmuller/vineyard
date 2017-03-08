import jwt from 'jsonwebtoken';
import jwtOptions from '../config/auth/jwt';
import { newUser, getUserByUsername } from '../db/controllers/users';
import Users from '../db/models/users';
import { getOrganization, findOrCreateNewOrg } from '../db/controllers/organizations';

function formatPhoneNumber (phoneNumber) {
  return phoneNumber.replace(/\s+|-|\)|\(/g, '');
}

export function login(req, res) {
  var payload = { id: req.user.id, org_id: req.user.org_id, username: req.user.username};
  var token = jwt.sign(payload, jwtOptions.secretOrKey);

  res.status(201).json({ message: "OK", token: token, id: req.user.id });
}

export function logout(req, res) {
  req.logout();
  res.status(201).json(req.user);
}

export function sendUserIdFromJwt(req, res, next) {
  res.status(200).json({ id: req.user.id, username: req.user.attributes.username, org_id: req.user.attributes.organization_id});
}

export function register(req, res, next) {
  const org = {
    name: req.body.organization.toLowerCase()
  };

  const phoneNumber = formatPhoneNumber(req.body.phoneNumber);
  getOrganization(org)
  .then((org) => {
    return org.id;
  })
  .then((orgId) => {
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
