import db from '../config';
import Blocks from './blocks';
import Clones from './clones';

const Rows = db.Model.extend({
  tableName: 'rows',
  hasTimestamps: false,
  blocks: () => {
    return this.belongsTo(Blocks);
  }, 
  clones: () => {
  	return this.hasOne(Clones);
  }
});

export default Rows;
