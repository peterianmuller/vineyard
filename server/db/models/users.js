import Sequelize from 'sequelize';
import bcrypt from 'bcrypt';
import sequelize from '../config';
import Organizations from './organizations';

const Users = sequelize.define('user', {
  firstName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  lastName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  userName: {
    type: Sequelize.STRING,
    allowNull: false
  },
  password: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: Sequelize.STRING,
  email: Sequelize.STRING,
  securityQuestion: Sequelize.STRING,
  securityAnswer: Sequelize.STRING,
  birthdate: Sequelize.STRING,
  accountRestrictions: {
    type: Sequelize.ENUM,
    values: [
      'Owner',
      'Manager',
      'Employee'
    ]
  }
}, {
  instanceMethods: {
    // generateHash: function(password) {
    //   return bcrypt.hash(password, 10, null);
    // },
    validPassword: function(password) {
      return bcrypt.compare(password, this.password);
    }
  }
  // ,
  // hooks: {
  //   generateHash: function(password) {
  //     return bcrypt.hash(password, 10, null);
  //   }
  // }
});

Users.beforeCreate(function(user, options) {
  const context = this;
  console.log('inside beforecreate hook');
    return bcrypt.hash(user.password, 10, function(err, hashedPassword) {
    console.log('inside bcrypt hash', 'user', user, 'option', options, hashedPassword, err);
    user.password = hashedPassword;
    user.save();
    console.log('password', user.password);
  });
});

Organizations.hasOne(Users, {
  foreignKey: 'organizationId'
});

export default Users;
