import Sequelize from 'sequelize';
import sequelize from '../config';

const Addresses = sequelize.define('address', {
  street: {
    type: Sequelize.STRING,
    allowNull: false
  },
  street2: Sequelize.STRING,
  city: {
    type: Sequelize.STRING,
    allowNull: false
  },
  state: {
    type: Sequelize.STRING,
    allowNull: false
  },
  zip: {
    type: Sequelize.STRING,
    allowNull: false
  },
  country: {
    type: Sequelize.STRING,
    allowNull: false
  }
}, {
  timestamps: false
});

export default Addresses;
