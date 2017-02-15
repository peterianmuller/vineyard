import Sequelize from 'sequelize';
import sequelize from '../config';

export default sequelize.define('address', {
  street: Sequelize.STRING,
  street2: Sequelize.STRING,
  city: Sequelize.STRING,
  state: Sequelize.STRING,
  zip: Sequelize.STRING,
  country: Sequelize.STRING
});
