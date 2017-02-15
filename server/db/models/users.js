import Sequelize from 'sequelize';
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
});

Organizations.hasOne(Users, {
  foreignKey: 'organizationId'
});

export default Users;
