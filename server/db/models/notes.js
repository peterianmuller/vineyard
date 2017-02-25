import db from '../config';
import Users from './users';
import Rows from './rows';
import Blocks from './blocks';
import Vineyards from './vineyards';

const Notes = db.Model.extend({
  tableName: 'notes',
  hasTimestamps: false,
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
