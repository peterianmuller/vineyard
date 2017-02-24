import jwt from 'jsonwebtoken';
import jwtOptions from '../config/auth/jwt';
import { newUser, getUserByUsername } from '../db/controllers/users';
import Users from '../db/models/users';
import { getOrganization, findOrCreateNewOrg } from '../db/controllers/organizations';

export function login(req, res) {
  var payload = { id: req.user.id };
  var token = jwt.sign(payload, jwtOptions.secretOrKey);
   console.log('I am even in here: ', token);

  res.status(201).json({ message: "OK", token: token, id: req.user.id });
}

export function logout(req, res) {
  req.logout();
  res.status(201).json(req.user);
}

export function sendUserIdFromJwt(req, res, next) {
  console.log('hwhhsheh', req.user.id);
  res.status(200).json({ id: req.user.id });
}

export function register(req, res, next) {
  // const params = req.body;
  const org = {
    name: req.body.organization
  };
  console.log('targetorg: ', org);
  getOrganization(org)
  .then((org) => {
    return org.id;
  })
// <<<<<<< HEAD

// //need to edit to account for the found id
//   newUser(params)
//   .then(() => {
//     getUserByUsername(params)
//       .then((user) => {
//         // console.log('user returned: ', user);
//         next();
//       })
//       .catch((err) => {
//         console.log('could not add user: ', err);
//       });

//   })
//   .catch((err) => {
//     console.log('error with insert: ', err)
// =======
  .then((orgId) => {
    console.log('this is the organization id: ', orgId);
    console.log('request body: ', req.body)
    const params = {
    firstname: req.body.firstName,
    lastname: req.body.lastName,
    username: req.body.userName,
    password: req.body.password,
    phone_number: req.body.phoneNumber,
    email: req.body.email,
    birthdate: req.body.birthdate,
    account_restrictions: req.body.accountRestrictions,
    organization: orgId
    }
    newUser(params)
    .then((username) => {
      getUserByUsername(username)
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
