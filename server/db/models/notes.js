import Sequelize from 'sequelize';
import sequelize from '../config';
import Users from './users';
import Rows from './rows';
import Blocks from './blocks';
import Vineyards from './vineyards';

const Notes = sequelize.define('note', {
  title: Sequelize.STRING,
  text: {
    type: Sequelize.STRING,
    allowNull: false
  },
  location: {
    // type: Sequelize.GEOGRAPHY(POINT),
    type: Sequelize.STRING,
    allowNull: false
  },
  image: Sequelize.STRING
});

Users.hasOne(Notes, {
  foreignKey: 'authorId'
});
Rows.hasOne(Notes, {
  foreignKey: 'rowId'
});
Blocks.hasOne(Notes, {
  foreignKey: 'blockId'
});
Vineyards.hasOne(Notes, {
  foreignKey: 'vineyardId'
});

export default Notes;
