import usersController from '../db/controllers/users';

export function createUser(req, res, next) {
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
  return usersController.newUser(params)
  .then((user) => {
    if (user) {
      res.json(user);
    } else {
      next();
    }
  }).catch((err) => {
    console.log('could not add user ', err);
  });
}

export function getUserByUsername(req, res, next) {
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
  // GET USER BY USERNAME
  return usersController.getUserByUsername(params)
  .then((user) => {
    if (user) {
      res.json(user);
    }
    next();
  }).catch((err) => {
    console.log('could not add user ', err);
  });
}
