import Sequelize from 'sequelize';
import sequelize from '../config';
import Addresses from './addresses';
import Organizations from './organizations';

const Vineyards = sequelize.define('vineyard', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  },
  phoneNumber: Sequelize.STRING,
  appellation: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Organizations.hasOne(Vineyards, {
  foreignKey: 'organizationId'
});
Addresses.hasOne(Vineyards, {
  foreignKey: 'addressId'
});

export default Vineyards;
