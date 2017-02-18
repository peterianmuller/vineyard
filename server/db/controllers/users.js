import Users from '../models/users';

const newUser = (params) => {
  console.log('params inside newUSer, user controller: ', params);
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

const getUserByUsername = (params) => {
  return Users.find({
    where: {
      username: params.username
    }
  });
};
const getUsers = (req, res, next) => {};
const updateUser = (req, res, next) => {};
const deleteUser = (req, res, next) => {};

export default {
  newUser,
  getUserByUsername,
  getUsers,
  updateUser,
  deleteUser
}
