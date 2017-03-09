import db from '../config';
import Varietals from './varietals';

const Clones = db.Model.extend({
	tableName: 'clones',
	hasTimestamps: false,
	varietals: function() {
		return this.belongsTo(Varietals)
	},
  rows: function() {
    return this.hasMany(Rows);
  }
});

export default Clones;

