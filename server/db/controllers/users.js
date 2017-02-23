import Users from '../models/users';

export const newUser = (params) => {
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

export const getUserByUsername = (params) => {
  return Users.find({
    where: {
      username: params.username
    }
  });
};

export const getUserById = params => {
  return Users.find({
    where: {
      id: params.id
    }
  });
};

export const getUsers = (req, res, next) => {};
export const updateUser = (req, res, next) => {};
export const deleteUser = (req, res, next) => {};
