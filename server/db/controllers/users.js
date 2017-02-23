import Users from '../models/users';


const newUser = (params) => {
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

const getUserByUsername = (params) => {
  return new Users({ username: params.username }).fetch();
};


/*==================need to refactor to BS/KNX=======================*/
// const getUserById = params => {
//   return Users.find({
//     where: {
//       id: params.id
//     }
//   });
// };

// const getUsers = (req, res, next) => {};
// const updateUser = (req, res, next) => {};
// const deleteUser = (req, res, next) => {};

/*==================need to refactor to BS/KNX=======================*/
export default {
  newUser,
  getUserByUsername
  // getUsers,
  // updateUser,
  // deleteUser
}
