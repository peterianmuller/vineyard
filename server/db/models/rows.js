import db from '../config';
import Blocks from './blocks';
import Clones from './clones';

const Rows = db.Model.extend({
  tableName: 'rows',
  hasTimestamps: false,
  block: () => {
    return this.belongsTo(Blocks);
  }, 
  clone: () => {
  	return this.hasOne(Clones)
  }
});

export default Rows;
