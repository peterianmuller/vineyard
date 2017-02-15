import Sequelize from 'sequelize';
import sequelize from '../config';
import Vineyard from './vineyards';

const Blocks = sequelize.define('block', {
  number: {
    type: Sequelize.STRING,
    allowNull: false
  }
});

Vineyard.hasOne(Blocks, {
  foreignKey: 'vineyardId'
});

export default Blocks;
