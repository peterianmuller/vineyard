import sequelize from '../config';
import Sequelize from 'sequelize';
import Addresses from './addresses';

const Organizations = sequelize.define('organization', {
  name: {
    type: Sequelize.STRING,
    allowNull: false
  }
});


export default Organizations;
//this is my edit
