import sequelize from '../config';
import Sequelize from 'sequelize';
import Addresses from './addresses';

const Organizations = sequelize.define('organization', {
 name: Sequelize.STRING,
 phoneNumber: Sequelize.STRING,
 tier: {
   type: Sequelize.ENUM,
   values: [
     'Hobbyist',
     'Small',
     'Large'
   ]
 }
});

// Addresses.belongsTo(Organizations);
// Organizations.hasOne(Addresses, {
//   foreignKey: 'addressId'
// });
Addresses.hasOne(Organizations, {
 foreignKey: 'addressId'
})

export default Organizations;


