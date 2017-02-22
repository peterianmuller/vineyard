import Sequelize from 'sequelize';
import sequelize from '../config';
import Users from './users';
import Rows from './rows';
import Blocks from './blocks';
import Vineyards from './vineyards';

const Notes = db.Model.extend({
  tableName: 'notes',
  hasTimestamps: true,
  user: () => {
    return this.belongsTo(Users);
  },
  rows: () => {
    return this.belongsTo(Rows);
  },
  blocks: () => {
    return this.belongsTo(Blocks);
  },
  vineyards: () => {
    return this.belongsTo(Vineyards);
  }
});

export default Notes;
