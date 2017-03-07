import db from '../config';
import Blocks from './blocks';
import Clones from './clones';

const Rows = db.Model.extend({
  tableName: 'rows',
  hasTimestamps: false,
  blocks: function() {
    return this.belongsTo(Blocks);
  }, 
  clones: function() {
  	return this.belongsTo(Clones);
  }
});

export default Rows;
