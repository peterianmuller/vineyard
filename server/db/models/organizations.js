import { db, knex } from '../config';
import Addresses from './addresses';

const Organization = bookshelf.Model.extend({
  tableName: 'organizations',
});

db.knex.schema.hasTable('organizations').then((exists) => {
  if (!exists) {
    db.knex.schema.createTable('organizations', (org) => {
      org.increments('id').primary();
      org.string('name', 255);
      org.string('phoneNumber', 20);
      org.string('tier', 255)
    });
  }
})

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
