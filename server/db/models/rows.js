import Sequelize from 'sequelize';
import sequelize from '../config';
import Blocks from './blocks';

const Rows = sequelize.define('row', {
  number: {
    type: Sequelize.INTEGER,
    allowNull: false
  },
  point1: {
    type: Sequelize.STRING,
    allowNull: false
  },
  point2: {
    type: Sequelize.STRING,
    allowNull: false
  },
  clone: Sequelize.STRING,
  varietal: {
    type: Sequelize.ENUM,
    values: [
      'Pinot Noir',
      'Cabernet Sauvignon',
      'Viogner',
      'Acolon',
      'Albarossa',
      'Riesling'
    ]
  },
  rootStock: Sequelize.STRING,
  status: {
    type: Sequelize.ENUM,
    values: [
      'Pruned',
      'Bud-break',
      'Flowering',
      'Veraison',
      'Pre-harvest',
      'Post-harvest',
    ]
  }
});

Blocks.hasOne(Rows, {
  foreignKey: 'blockId'
})

export default Rows;
