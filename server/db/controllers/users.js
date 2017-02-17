import Users from '../models/users';

const newUser = (req, res, next) => {
  return Users.create({
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
  })
  .then((user) => {
    if (user) {
      res.json(user);
    }
    next();
  }).catch((err) => {
    console.log('could not add user ', err);
  });
};

const getUser = (req, res, next) => {};
const getUsers = (req, res, next) => {};
const updateUser = (req, res, next) => {};
const deleteUser = (req, res, next) => {};

export default {
  newUser,
  getUser,
  getUsers,
  updateUser,
  deleteUser
}
