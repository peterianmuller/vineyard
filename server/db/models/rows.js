import db from '../config';
import Blocks from './blocks';

const Rows = db.Model.extend({
  tableName: 'rows',
  hasTimestamps: true,
  blocks: () => {
    return this.belongsTo(Blocks);
  }
});

export default Rows;
