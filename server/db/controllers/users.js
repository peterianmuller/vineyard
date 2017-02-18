import Users from '../models/users';

const newUser = (params) => {
  return Users.create({
    firstName: params.firstName,
    lastName: params.lastName,
    userName: params.userName,
    password: params.password,
    phoneNumber: params.phoneNumber,
    email: params.email,
    securityQuestion: params.securityQuestion,
    securityAnswer: params.securityAnswer,
    birthdate: params.birthdate,
    accountRestrictions: params.accountRestrictions
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