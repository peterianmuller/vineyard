import Users from '../models/users';

export const newUser = (params) => {
  return new Users({
    firstname: params.firstName,
    lastname: params.lastName,
    username: params.userName,
    password: params.password,
    phone_number: params.phoneNumber,
    email: params.email,
    birthdate: params.birthdate,
    account_restrictions: params.accountRestrictions,
    organization: params.organization
  });
};

export const getUserByUsername = (params) => {
  return new Users({ username: params.username }).fetch();
};
