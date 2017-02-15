import Sequelize from 'sequelize';
import sequelize from '../config';
import Addresses from './addresses';

const Organizations = sequelize.define('organization', {
  name: Sequelize.STRING,
  phone_number: Sequelize.STRING,
});

// Addresses.belongsTo(Organizations);
// Organizations.hasOne(Addresses, {
//   foreignKey: 'addressId'
// });
Addresses.hasOne(Organizations, {
  foreignKey: 'addressId'
})

export default Organizations;
