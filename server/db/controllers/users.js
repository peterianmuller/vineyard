import Users from '../models/users';


export const newUser = (params) => {
  new Users({
    firstname: params.firstname,
    lastname: params.lastname,
    username: params.username,
    password: params.password,
    phone_number: params.phone_number,
    email: params.email,
    birthdate: params.birthdate,
    account_restrictions: params.account_restrictions,
    organization_id: params.organization
  })
  .save();
  return params.username;
};

export const getUserByUsername = (params) => {
  return new Users({
    username: params.userName
  })
  .fetch()
  .then((user) => {
    return user;
  })
};

export const getUserById = (params) => {
  return new Users({ id: params.id }).fetch();
}
